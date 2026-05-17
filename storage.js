// ============================================================
//  RouleTask - Storage Layer
//  chrome.storage.local の呼び出しを1箇所に集める。
//  Phase 2 でウェブ版を作るとき、ここの内部実装を localStorage や
//  Firestore に差し替えやすくするための分離。
//
//  グローバル window.RouleTask.storage に公開（ESM ではない）。
// ============================================================
window.RouleTask = window.RouleTask || {};

window.RouleTask.storage = (function () {
  'use strict';

  // ストレージキー定数。sidepanel.js の SK と内容を一致させる。
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

  // メイン8キーを一括読み込み
  function loadMain() {
    return new Promise((resolve) => {
      chrome.storage.local.get(
        [SK.REELS, SK.HISTORY, SK.TOKENS, SK.SKINS, SK.MILESTONES, SK.HARD_MODE, SK.DAILY_BONUS_DATE, SK.WEEKLY],
        (d) => resolve(d)
      );
    });
  }

  // メイン8キーを一括保存
  function saveMain(data) {
    return new Promise((resolve) => {
      chrome.storage.local.set(data, resolve);
    });
  }

  // autoRoll 設定の読み書き
  function getAutoRoll() {
    return new Promise((resolve) => {
      chrome.storage.local.get([SK.AUTO_ROLL], (d) => resolve(d[SK.AUTO_ROLL]));
    });
  }

  function setAutoRoll(settings) {
    return new Promise((resolve) => {
      chrome.storage.local.set({ [SK.AUTO_ROLL]: settings }, resolve);
    });
  }

  return { SK, loadMain, saveMain, getAutoRoll, setAutoRoll };
})();
