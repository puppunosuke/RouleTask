// ============================================================
//  RouleTask - Storage Layer
//
//  経路:
//    拡張機能環境（chrome.storage あり）         → chrome.storage.local
//    ウェブ環境 + 未ログイン                      → localStorage
//    ウェブ環境 + Googleログイン中                → Firestore（firebase-init.js 経由）
//
//  呼び出し側（sidepanel.js）からは経路を意識せず使える。
//  ウェブ版でログイン状態が切り替わったらメモリキャッシュをクリアして取り直す。
// ============================================================
window.RouleTask = window.RouleTask || {};

window.RouleTask.storage = (function () {
  'use strict';

  const SK = {
    REELS: 'reels',
    HISTORY: 'history',
    TOKENS: 'tokens',
    SKINS: 'skins',
    MILESTONES: 'milestones',
    HARD_MODE: 'hardMode',
    DAILY_BONUS_DATE: 'dailyBonusDate',
    WEEKLY: 'weekly',
    AUTO_ROLL: 'autoRoll',
  };

  const MAIN_KEYS = [
    SK.REELS, SK.HISTORY, SK.TOKENS, SK.SKINS, SK.MILESTONES,
    SK.HARD_MODE, SK.DAILY_BONUS_DATE, SK.WEEKLY,
  ];
  const ALL_KEYS = [...MAIN_KEYS, SK.AUTO_ROLL];

  // --- 環境判定 ---
  const isExtension = typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local;

  // --- ウェブ版用の状態 ---
  let currentUser = null;
  let cache = null; // 全データのメモリキャッシュ。null なら未ロード
  let resolveAuthReady;
  const authReady = new Promise((r) => { resolveAuthReady = r; });

  // firebase-init.js が用意できたら認証監視を開始
  function setupWebFirebase() {
    window.RouleTask.firebase.watchAuthState((user) => {
      const userChanged = (currentUser?.uid ?? null) !== (user?.uid ?? null);
      currentUser = user;
      if (userChanged) cache = null;
      resolveAuthReady(); // 2回目以降は no-op
    });
  }

  if (!isExtension) {
    if (window.RouleTask.firebase) {
      setupWebFirebase();
    } else {
      window.addEventListener('RouleTask:firebase-ready', setupWebFirebase, { once: true });
    }
  }

  // ========== 拡張機能パス（chrome.storage.local）==========
  function extLoadMain() {
    return new Promise((r) => chrome.storage.local.get(MAIN_KEYS, r));
  }
  function extSaveMain(data) {
    return new Promise((r) => chrome.storage.local.set(data, r));
  }
  function extGetAutoRoll() {
    return new Promise((r) => chrome.storage.local.get([SK.AUTO_ROLL], (d) => r(d[SK.AUTO_ROLL])));
  }
  function extSetAutoRoll(settings) {
    return new Promise((r) => chrome.storage.local.set({ [SK.AUTO_ROLL]: settings }, r));
  }

  // ========== ウェブ版: localStorage パス ==========
  const LS_PREFIX = 'rouletask:';

  function lsLoadAll() {
    const out = {};
    for (const k of ALL_KEYS) {
      const raw = localStorage.getItem(LS_PREFIX + k);
      if (raw === null) continue;
      try { out[k] = JSON.parse(raw); } catch { /* 壊れた値は無視 */ }
    }
    return out;
  }
  function lsSaveAll(data) {
    for (const k of Object.keys(data)) {
      localStorage.setItem(LS_PREFIX + k, JSON.stringify(data[k]));
    }
  }

  // ========== ウェブ版: メモリキャッシュ + 経路切替 ==========
  async function loadCache() {
    if (cache !== null) return cache;
    await authReady;
    if (currentUser) {
      const cloud = await window.RouleTask.firebase.loadCloud(currentUser.uid);
      if (cloud) {
        cache = cloud;
      } else {
        // 初回ログイン: そのデバイスの localStorage をクラウドへ吸い上げる
        cache = lsLoadAll();
        await window.RouleTask.firebase.saveCloud(currentUser.uid, cache);
      }
    } else {
      cache = lsLoadAll();
    }
    return cache;
  }

  async function saveCache() {
    if (currentUser) {
      await window.RouleTask.firebase.saveCloud(currentUser.uid, cache);
    } else {
      lsSaveAll(cache);
    }
  }

  // ========== 公開 API（拡張機能 / ウェブ版で内部経路を切替）==========
  async function loadMain() {
    if (isExtension) return extLoadMain();
    const c = await loadCache();
    const out = {};
    for (const k of MAIN_KEYS) out[k] = c[k];
    return out;
  }

  async function saveMain(data) {
    if (isExtension) return extSaveMain(data);
    const c = await loadCache();
    Object.assign(c, data);
    await saveCache();
  }

  async function getAutoRoll() {
    if (isExtension) return extGetAutoRoll();
    const c = await loadCache();
    return c[SK.AUTO_ROLL];
  }

  async function setAutoRoll(settings) {
    if (isExtension) return extSetAutoRoll(settings);
    const c = await loadCache();
    c[SK.AUTO_ROLL] = settings;
    await saveCache();
  }

  return { SK, loadMain, saveMain, getAutoRoll, setAutoRoll };
})();
