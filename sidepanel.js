// ============================================================
//  RouleTask v4 - Luxe Casino × Indie Game
//  SVG icon system · Reel = Genre / Category
// ============================================================

(() => {
  'use strict';

  // --- SVG Icon System ---
  // Each icon is a 24x24 viewBox SVG path.
  // stroke-based, monoline, 2px stroke.
  const ICONS = {
    ruler:      '<path d="M3 5h18v14H3zM7 5v14M11 5v7M15 5v14M19 9h-4"/>',
    book:       '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/>',
    run:        '<circle cx="14" cy="4" r="2"/><path d="M6 20l3-7 3 2 4-5 2 6"/><path d="M9 13l-3-2"/>',
    dumbbell:   '<path d="M6.5 6.5h11M5 9V4M19 9V4M3 8v2h4V8zM17 8v2h4V8zM6.5 17.5h11M5 20v-5M19 20v-5M3 16v2h4v-2zM17 16v2h4v-2z"/>',
    meditate:   '<circle cx="12" cy="5" r="2"/><path d="M4 20c0-4 3-7 8-7s8 3 8 7"/><path d="M8 14l-3 3M16 14l3 3"/>',
    pencil:     '<path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
    palette:    '<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4c3 0 5.6-2.5 5.6-5.6C22 5.8 17.5 2 12 2z"/><circle cx="7.5" cy="11.5" r="1.5"/><circle cx="10" cy="7.5" r="1.5"/><circle cx="15" cy="7.5" r="1.5"/><circle cx="17.5" cy="11.5" r="1.5"/>',
    music:      '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    broom:      '<path d="M12 2v10M5 22l7-10 7 10"/><path d="M5 22h14"/>',
    code:       '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    scroll:     '<path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12"/><path d="M4 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"/>',
    leaf:       '<path d="M11 20A7 7 0 0 0 9.8 6.9C15.5 4.9 20 2 20 2s-1.2 5.4-4 9.2c-1 1.3-2 2.5-3 3.2"/><path d="M4 20l7-7"/>',
    flame:      '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2.3-.5-3.5A6 6 0 0 1 17 2c.5 1.5 1 3.2 1 5 0 5-3.5 7.5-3.5 10a3.5 3.5 0 1 1-6 0"/>',
    diamond:    '<path d="M2.7 10.3a2.4 2.4 0 0 1 0-3.4l7.2-7.2a2.4 2.4 0 0 1 3.4 0l7.2 7.2a2.4 2.4 0 0 1 0 3.4l-7.2 7.2a2.4 2.4 0 0 1-3.4 0z"/>',
    moon:       '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    sun:        '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
    clover:     '<path d="M12 12c-2-2.67-6-6-6-8a4 4 0 0 1 6-1 4 4 0 0 1 6 1c0 2-4 5.33-6 8z"/><path d="M12 12c2.67-2 6-6 8-6a4 4 0 0 1 1 6 4 4 0 0 1-1 6c-2 0-5.33-4-8-6z"/><path d="M12 12c2 2.67 6 6 6 8a4 4 0 0 1-6 1 4 4 0 0 1-6-1c0-2 4-5.33 6-8z"/><path d="M12 12c-2.67 2-6 6-8 6a4 4 0 0 1-1-6 4 4 0 0 1 1-6c2 0 5.33 4 8 6z"/>',
    star:       '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/>',
    rocket:     '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
    crown:      '<path d="M2 20h20L19 8l-5 5-2-7-2 7-5-5z"/><path d="M2 20h20v2H2z"/>',
    sword:      '<path d="M14.5 17.5L3 6V3h3l11.5 11.5"/><path d="M13 19l6-6"/><path d="M16 16l4 4"/><path d="M19 21l2-2"/>',
    shield:     '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    potion:     '<path d="M10 2v6.29a8 8 0 1 0 4 0V2"/><path d="M8.5 2h7"/><path d="M7 16.5c2-.5 5-2.5 10 0"/>',
    heart:      '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    bolt:       '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10"/>',
    brain:      '<path d="M9.5 2A3.5 3.5 0 0 0 6 5.5c0 .58.14 1.13.4 1.61A3.5 3.5 0 0 0 4 10.5c0 1.03.44 1.96 1.15 2.6A3.5 3.5 0 0 0 4 15.5C4 17.43 5.57 19 7.5 19l1 .04V22h3V2z"/><path d="M14.5 2A3.5 3.5 0 0 1 18 5.5c0 .58-.14 1.13-.4 1.61A3.5 3.5 0 0 1 20 10.5c0 1.03-.44 1.96-1.15 2.6A3.5 3.5 0 0 1 20 15.5c0 1.93-1.57 3.5-3.5 3.5l-1 .04V22h-3V2z"/>',
    gamepad:    '<path d="M6 11h4M8 9v4"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.98 3.6L2 18a3 3 0 0 0 6 0l.8-6.4a1 1 0 0 1 1-.6h4.4a1 1 0 0 1 1 .6L16 18a3 3 0 0 0 6 0l-.7-9.4A4 4 0 0 0 17.32 5z"/>',
    wrench:     '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    food:       '<path d="M18 8h1a4 4 0 0 0 0-8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>',
    pill:       '<path d="m10.5 1.5 8.5 8.5a4.95 4.95 0 1 1-7 7l-8.5-8.5a4.95 4.95 0 1 1 7-7z"/><line x1="9" y1="15" x2="15" y2="9"/>',
    target:     '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  };

  const ICON_KEYS = Object.keys(ICONS);

  // Build an SVG string from an icon key
  function iconSVG(key, size = 18, cls = '') {
    const paths = ICONS[key] || ICONS.star;
    return `<svg class="ico ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
  }

  // Legacy support: if a reel's "emoji" is an actual emoji string (from old data), render it as text.
  // If it's an icon key, render SVG.
  function renderIcon(emojiOrKey, size = 18, cls = '') {
    if (ICONS[emojiOrKey]) return iconSVG(emojiOrKey, size, cls);
    // Fallback: it's an old emoji string — render as text
    return `<span class="ico-emoji ${cls}" style="font-size:${size}px;line-height:1">${emojiOrKey}</span>`;
  }

  // Default icon set used for new genres (cycles through)
  const DEFAULT_ICONS = [
    'ruler','book','run','dumbbell','pencil','palette','music','code',
    'flame','star','rocket','crown','sword','shield','potion','bolt',
    'brain','gamepad','wrench','target','heart','diamond','leaf','moon',
    'sun','clover','scroll','meditate','food','pill'
  ];

  const REEL_COLORS = [
    '#ff6b6b','#4ecdc4','#45b7d1','#f9ca24','#a29bfe',
    '#fd79a8','#00cec9','#e17055','#74b9ff','#55efc4'
  ];

  const SK = {
    REELS: 'reels',
    HISTORY: 'history',
    TOKENS: 'tokens',
    SKINS: 'skins',
    MILESTONES: 'milestones',
    HARD_MODE: 'hardMode',
    DAILY_BONUS_DATE: 'dailyBonusDate',
    WEEKLY: 'weekly'
  };

  // --- Dealer Comments ---
  const DEALER_COMMENTS = {
    roll: [
      'いい手だ。','今日の配牌は上々だな。','ディーラーも驚いてるぜ。',
      'フォーチュンが微笑んでる。','運命のダイスが転がった。','今日はツイてるな。',
      'さぁ、ゲーム開始だ。','カードは配られた。','悪くない手だ…行けるぞ。',
    ],
    complete: [
      'お見事。','完璧なプレイだ。','ハウスも脱帽さ。',
      'チップを積み上げろ。','今日はお前の勝ちだ。','ディーラーは負けを認めるよ。',
      'フルハウスだな。','All in, All clear.','また明日も来いよ。',
    ],
    doubleDown: [
      'なかなか度胸があるな。','ハイローラーの登場だ。','賭けに出たか…いい判断だ。',
    ],
    combo: [
      '怒涛のコンボだ！','手が止まらないな！','フロー状態ってやつか。','連打！連打！連打！',
    ],
  };

  function randomComment(type) {
    const pool = DEALER_COMMENTS[type] || DEALER_COMMENTS.roll;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // --- Weekly Challenge Definitions ---
  function getWeeklyChallenges(weekSeed) {
    const all = [
      { id: 'complete5', desc: '今週5日COMPLETEする', check: (h) => weeklyDoneCount(h) >= 5, reward: 5 },
      { id: 'complete7', desc: '今週毎日COMPLETEする', check: (h) => weeklyDoneCount(h) >= 7, reward: 10 },
      { id: 'noReroll3', desc: 'リロール0回で3日連続COMPLETE', check: (h, s) => weeklyNoRerollStreak(h, s) >= 3, reward: 5 },
      { id: 'streak5', desc: '5日以上のストリークを維持', check: (h, s, calcFn) => calcFn() >= 5, reward: 3 },
      { id: 'hardMode2', desc: 'HARD MODEで2日COMPLETE', check: (h) => weeklyHardModeDone(h) >= 2, reward: 8 },
    ];
    // Pick 2 challenges based on week seed
    const pick1 = weekSeed % all.length;
    const pick2 = (weekSeed * 7 + 3) % all.length;
    const indices = [pick1, pick2 === pick1 ? (pick2 + 1) % all.length : pick2];
    return indices.map(i => all[i]);
  }

  function getWeekKey() {
    const now = new Date();
    const jan1 = new Date(now.getFullYear(), 0, 1);
    const weekNum = Math.ceil(((now - jan1) / 86400000 + jan1.getDay() + 1) / 7);
    return `${now.getFullYear()}-W${weekNum}`;
  }

  function getWeekDates() {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0=Sun
    const monday = new Date(now);
    monday.setDate(now.getDate() - ((dayOfWeek + 6) % 7));
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      dates.push(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`);
    }
    return dates;
  }

  function weeklyDoneCount(history) {
    return getWeekDates().filter(d => history[d] && history[d].status === 'done').length;
  }

  function weeklyHardModeDone(history) {
    return getWeekDates().filter(d => history[d] && history[d].status === 'done' && history[d].hardMode).length;
  }

  function weeklyNoRerollStreak(history, state) {
    let streak = 0, maxStreak = 0;
    getWeekDates().forEach(d => {
      const e = history[d];
      if (e && e.status === 'done' && !e.usedReroll) {
        streak++;
        maxStreak = Math.max(maxStreak, streak);
      } else if (e && e.status === 'done') {
        streak = 0; // used reroll
      } else {
        streak = 0;
      }
    });
    return maxStreak;
  }

  // --- State ---
  let state = {
    reels: [],
    history: {},
    tokens: 0,
    skins: { unlocked: ['default'], active: 'default' },
    milestones: [],
    hardMode: false,
    dailyBonusDate: null,
    weekly: { weekKey: '', claimed: [] },
    calendarYear: new Date().getFullYear(),
    calendarMonth: new Date().getMonth(),
    isRolling: false,
    comboTimestamps: [],
  };

  // Pending image map for CSV+image batch import
  let pendingImageMap = null; // { taskId -> imageFileName }
  let _pendingImageTaskId = null; // for single task image upload

  // --- DOM ---
  const $ = (s) => document.querySelector(s);
  const dom = {};

  function cacheDom() {
    dom.reelsContainer = $('#reelsContainer');
    dom.reelsPlaceholder = $('#reelsPlaceholder');
    dom.btnRoll = $('#btnRoll');
    dom.rollStatus = $('#rollStatus');
    dom.todayResult = $('#todayResult');
    dom.resultCards = $('#resultCards');
    dom.todayStatusBadge = $('#todayStatusBadge');
    dom.btnComplete = $('#btnComplete');
    dom.calendarTitle = $('#calendarTitle');
    dom.calendarDays = $('#calendarDays');
    dom.btnPrevMonth = $('#btnPrevMonth');
    dom.btnNextMonth = $('#btnNextMonth');
    dom.genreNameInput = $('#genreNameInput');
    dom.btnAddGenre = $('#btnAddGenre');
    dom.genreList = $('#genreList');
    dom.emptyGenreMsg = $('#emptyGenreMsg');
    dom.btnToggleGenres = $('#btnToggleGenres');
    dom.genrePanel = $('#genrePanel');
    dom.genreSectionHeader = $('#genreSectionHeader');
    dom.confettiCanvas = $('#confettiCanvas');
    dom.dayDetailModal = $('#dayDetailModal');
    dom.dayDetailTitle = $('#dayDetailTitle');
    dom.dayDetailBody = $('#dayDetailBody');
    dom.btnCloseDayDetail = $('#btnCloseDayDetail');
    dom.btnDayComplete = $('#btnDayComplete');
    dom.headerStreak = $('#headerStreak');
    dom.btnImportCSV = $('#btnImportCSV');
    dom.csvFileInput = $('#csvFileInput');
    dom.autoRollEnabled = $('#autoRollEnabled');
    dom.autoRollHour = $('#autoRollHour');
    dom.autoRollMinute = $('#autoRollMinute');
    dom.tokenCount = $('#tokenCount');
    dom.progressBarContainer = $('#progressBarContainer');
    dom.progressBarFill = $('#progressBarFill');
    dom.progressBarText = $('#progressBarText');
    dom.jackpotOverlay = $('#jackpotOverlay');
    dom.statsPanel = $('#statsPanel');
    dom.statsContent = $('#statsContent');
    dom.statsSectionHeader = $('#statsSectionHeader');
    dom.btnToggleStats = $('#btnToggleStats');
    dom.skinsPanel = $('#skinsPanel');
    dom.skinsList = $('#skinsList');
    dom.skinsSectionHeader = $('#skinsSectionHeader');
    dom.btnToggleSkins = $('#btnToggleSkins');
    dom.leverArm = $('#leverArm');
    dom.leverContainer = $('#leverContainer');
    dom.imageViewer = $('#imageViewer');
    dom.imageViewerBody = $('#imageViewerBody');
    dom.btnCloseImage = $('#btnCloseImage');
    dom.imageFileInput = $('#imageFileInput');
    dom.slotSection = $('#slotSection');
    dom.slotCabinet = $('#slotCabinet');
    dom.slotCollapseBar = $('#slotCollapseBar');
    dom.slotCollapseIcon = $('#slotCollapseIcon');
    dom.dealerComment = $('#dealerComment');
    dom.doubleDownModal = $('#doubleDownModal');
    dom.btnDoubleDownAccept = $('#btnDoubleDownAccept');
    dom.btnDoubleDownSkip = $('#btnDoubleDownSkip');
    dom.dailyBonusOverlay = $('#dailyBonusOverlay');
    dom.dailyBonusResult = $('#dailyBonusResult');
    dom.btnDailyBonusClaim = $('#btnDailyBonusClaim');
    dom.hardModeEnabled = $('#hardModeEnabled');
    dom.weeklyPanel = $('#weeklyPanel');
    dom.weeklyContent = $('#weeklyContent');
    dom.weeklySectionHeader = $('#weeklySectionHeader');
    dom.btnToggleWeekly = $('#btnToggleWeekly');
  }

  // --- Utilities ---
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 6);
  }
  function todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }
  function esc(s) {
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }
  function getReelColor(idx) {
    return REEL_COLORS[idx % REEL_COLORS.length];
  }

  // --- IndexedDB for images ---
  const IDB_NAME = 'RouleTask_Images';
  const IDB_STORE = 'images';
  let _idb = null;

  function openIDB() {
    if (_idb) return Promise.resolve(_idb);
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(IDB_NAME, 1);
      req.onupgradeneeded = () => {
        req.result.createObjectStore(IDB_STORE);
      };
      req.onsuccess = () => { _idb = req.result; resolve(_idb); };
      req.onerror = () => reject(req.error);
    });
  }

  async function saveImage(taskId, dataUrl) {
    // task の imageFile を確保（未設定なら taskId.<拡張子> で生成して reels に書き戻す）
    // ファイル名は両環境で必要（ウェブ版は Storage のパス、拡張機能でも Phase 3 同期で
    // Firestore に乗ったときに ウェブ版から imageFile 経由で引けるようにするため）
    const task = findTaskById(taskId);
    let imageFileChanged = false;
    if (task && !task.imageFile) {
      const m = dataUrl.match(/^data:image\/(\w+);/);
      const ext = m ? (m[1] === 'jpeg' ? 'jpg' : m[1]) : 'jpg';
      task.imageFile = `${taskId}.${ext}`;
      imageFileChanged = true;
    }
    const filename = task ? task.imageFile : null;

    const isExtension = typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local;
    if (isExtension) {
      // 既存の IndexedDB 保存
      const db = await openIDB();
      await new Promise((resolve, reject) => {
        const tx = db.transaction(IDB_STORE, 'readwrite');
        tx.objectStore(IDB_STORE).put(dataUrl, taskId);
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error);
      });
    } else {
      // ウェブ版: dataUrl → Blob → Firebase Storage にアップロード
      const fb = window.RouleTask && window.RouleTask.firebase;
      if (!fb) return;
      const user = fb.getCurrentUser();
      if (!user) {
        alert('画像をクラウドに保存するにはログインしてね');
        return;
      }
      if (!filename) return;
      const blob = await (await fetch(dataUrl)).blob();
      await fb.uploadImage(user.uid, filename, blob);
    }

    // imageFile を新規生成した場合は state を永続化
    if (imageFileChanged) {
      await save();
    }
  }

  async function getImage(taskId) {
    // 拡張機能環境: 既存の IndexedDB から取得
    const isExtension = typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local;
    if (isExtension) {
      const db = await openIDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(IDB_STORE, 'readonly');
        const req = tx.objectStore(IDB_STORE).get(taskId);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => reject(req.error);
      });
    }
    // ウェブ版 + ログイン中: Firebase Storage から URL を取得
    const fb = window.RouleTask && window.RouleTask.firebase;
    if (!fb) return null;
    const user = fb.getCurrentUser();
    if (!user) return null;
    // task の imageFile を reels から引いて Storage のパスにする
    const task = findTaskById(taskId);
    if (!task || !task.imageFile) return null;
    try {
      return await fb.getImageURL(user.uid, task.imageFile);
    } catch (err) {
      console.error('画像取得エラー:', task.imageFile, err);
      return null;
    }
  }

  // reels 全体から taskId に一致するタスクを返す（ウェブ版で imageFile を引くため）
  function findTaskById(taskId) {
    for (const reel of state.reels) {
      if (!reel.tasks) continue;
      for (const t of reel.tasks) {
        if (t.id === taskId) return t;
      }
    }
    return null;
  }

  async function deleteImage(taskId) {
    const db = await openIDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).delete(taskId);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  }

  // Read a File as base64 data URL
  function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // --- Storage ---
  // ストレージアクセスは storage.js（window.RouleTask.storage）に集約。
  // 内部実装の差し替え（Firestore 連携など）はあちら側で行う。
  async function load() {
    const d = await window.RouleTask.storage.loadMain();
    state.reels = d[SK.REELS] || [];
    state.history = d[SK.HISTORY] || {};
    state.tokens = d[SK.TOKENS] || 0;
    state.skins = d[SK.SKINS] || { unlocked: ['default'], active: 'default' };
    state.milestones = d[SK.MILESTONES] || [];
    state.hardMode = d[SK.HARD_MODE] || false;
    state.dailyBonusDate = d[SK.DAILY_BONUS_DATE] || null;
    state.weekly = d[SK.WEEKLY] || { weekKey: '', claimed: [] };
    // Migration: ensure rollCount exists on all reels
    state.reels.forEach(reel => {
      if (!reel.rollCount) reel.rollCount = 1;
    });
    // Migration: convert old single-taskId results to arrays
    // Migration: ensure completed field exists on history entries
    Object.entries(state.history).forEach(([key, entry]) => {
      if (!entry.results) return;
      Object.keys(entry.results).forEach(reelId => {
        const val = entry.results[reelId];
        if (!Array.isArray(val)) {
          entry.results[reelId] = [val];
        }
      });
      if (!entry.completed) {
        // If status is 'done', synthesize completed from results (all tasks marked done)
        if (entry.status === 'done') {
          entry.completed = {};
          Object.keys(entry.results).forEach(reelId => {
            entry.completed[reelId] = [...entry.results[reelId]];
          });
        } else {
          entry.completed = {};
        }
      }
    });
  }
  async function save() {
    await window.RouleTask.storage.saveMain({
      [SK.REELS]: state.reels,
      [SK.HISTORY]: state.history,
      [SK.TOKENS]: state.tokens,
      [SK.SKINS]: state.skins,
      [SK.MILESTONES]: state.milestones,
      [SK.HARD_MODE]: state.hardMode,
      [SK.DAILY_BONUS_DATE]: state.dailyBonusDate,
      [SK.WEEKLY]: state.weekly
    });
  }

  // --- Streak Calculation ---
  function calcStreak() {
    let streak = 0;
    const d = new Date();
    // If today is done, count today
    const tk = todayKey();
    if (state.history[tk] && state.history[tk].status === 'done') {
      streak++;
      d.setDate(d.getDate() - 1);
    } else {
      // Check if yesterday started the streak
      d.setDate(d.getDate() - 1);
    }
    // Count backwards
    for (let i = 0; i < 365; i++) {
      const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
      if (state.history[key] && state.history[key].status === 'done') {
        streak++;
        d.setDate(d.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  }

  function renderStreak() {
    const s = calcStreak();
    if (s > 0) {
      dom.headerStreak.textContent = `🔥 ${s} DAY STREAK!`;
    } else {
      dom.headerStreak.textContent = '';
    }
  }

  // ============================
  //  GENRE / REEL MANAGEMENT
  // ============================
  function addGenre(name) {
    if (!name.trim()) return;
    const reel = {
      id: uid(),
      name: name.trim(),
      emoji: DEFAULT_ICONS[state.reels.length % DEFAULT_ICONS.length],
      colorIndex: state.reels.length,
      rollCount: 1,
      tasks: []
    };
    state.reels.push(reel);
    save();
    renderGenres();
    renderSlotReels();
    updateRollBtn();
  }

  function deleteGenre(id) {
    state.reels = state.reels.filter(r => r.id !== id);
    save();
    renderGenres();
    renderSlotReels();
    updateRollBtn();
  }

  function editGenreName(id, newName) {
    const reel = state.reels.find(r => r.id === id);
    if (reel && newName.trim()) {
      reel.name = newName.trim();
      save();
      renderGenres();
      renderSlotReels();
    }
  }

  function moveReel(idx, direction) {
    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= state.reels.length) return;
    const temp = state.reels[idx];
    state.reels[idx] = state.reels[newIdx];
    state.reels[newIdx] = temp;
    save();
    renderGenres();
    renderSlotReels();
  }

  function setGenreEmoji(id, emoji) {
    const reel = state.reels.find(r => r.id === id);
    if (reel) {
      reel.emoji = emoji;
      save();
      renderGenres();
      renderSlotReels();
    }
  }

  function addTaskToGenre(reelId, taskName) {
    const reel = state.reels.find(r => r.id === reelId);
    if (!reel || !taskName.trim()) return;
    reel.tasks.push({ id: uid(), name: taskName.trim() });
    save();
    renderGenres();
    renderSlotReels();
    updateRollBtn();
  }

  function deleteTaskFromGenre(reelId, taskId) {
    const reel = state.reels.find(r => r.id === reelId);
    if (!reel) return;
    reel.tasks = reel.tasks.filter(t => t.id !== taskId);
    save();
    renderGenres();
    renderSlotReels();
    updateRollBtn();
  }

  function editTaskInGenre(reelId, taskId, newName) {
    const reel = state.reels.find(r => r.id === reelId);
    if (!reel) return;
    const task = reel.tasks.find(t => t.id === taskId);
    if (task && newName.trim()) {
      task.name = newName.trim();
      save();
      renderGenres();
    }
  }

  function setReelRollCount(reelId, count) {
    const reel = state.reels.find(r => r.id === reelId);
    if (!reel) return;
    reel.rollCount = Math.max(1, Math.min(count, reel.tasks.length || 1));
    save();
    renderGenres();
    renderSlotReels();
  }

  // Track which genre cards are expanded
  const expandedGenres = new Set();

  function renderGenres() {
    dom.genreList.innerHTML = '';

    if (state.reels.length === 0) {
      dom.emptyGenreMsg.classList.remove('hidden');
      return;
    }
    dom.emptyGenreMsg.classList.add('hidden');

    state.reels.forEach((reel, idx) => {
      const color = getReelColor(reel.colorIndex);
      const isOpen = expandedGenres.has(reel.id);

      const card = document.createElement('div');
      card.className = 'genre-card';
      card.dataset.id = reel.id;

      // Header
      const header = document.createElement('div');
      header.className = 'genre-card-header';
      header.innerHTML = `
        <div class="genre-color-bar" style="background:${color};box-shadow:0 0 6px ${color}44"></div>
        <span class="genre-emoji" data-id="${reel.id}" style="color:${color}">${renderIcon(reel.emoji, 20)}</span>
        <span class="genre-name">${esc(reel.name)}</span>
        <span class="genre-task-count">${reel.tasks.length} TASKS</span>
        <div class="genre-roll-count" title="1回のROLLで選ばれる数">
          <button class="rc-btn rc-minus" data-id="${reel.id}">−</button>
          <span class="rc-value">×${reel.rollCount || 1}</span>
          <button class="rc-btn rc-plus" data-id="${reel.id}">+</button>
        </div>
        <div class="genre-actions">
          <button class="genre-action-btn move-up" data-id="${reel.id}" data-idx="${idx}" title="上へ" ${idx === 0 ? 'disabled' : ''}>▲</button>
          <button class="genre-action-btn move-down" data-id="${reel.id}" data-idx="${idx}" title="下へ" ${idx === state.reels.length - 1 ? 'disabled' : ''}>▼</button>
          <button class="genre-action-btn edit" data-id="${reel.id}" title="名前編集">${iconSVG('pencil', 13)}</button>
          <button class="genre-action-btn delete" data-id="${reel.id}" title="削除">${iconSVG('flame', 13)}</button>
        </div>
        <button class="genre-expand-btn ${isOpen?'open':''}" data-id="${reel.id}">▼</button>
      `;

      // Body
      const body = document.createElement('div');
      body.className = `genre-body ${isOpen?'open':''}`;

      // Task input
      const inputRow = document.createElement('div');
      inputRow.className = 'genre-task-input-row';
      inputRow.innerHTML = `
        <input type="text" class="genre-task-input" placeholder="タスクを追加..." maxlength="40" data-reel="${reel.id}">
        <button class="genre-task-add-btn" data-reel="${reel.id}">+ ADD</button>
      `;
      body.appendChild(inputRow);

      // Task list
      if (reel.tasks.length > 0) {
        const ul = document.createElement('ul');
        ul.className = 'genre-task-list';
        reel.tasks.forEach(task => {
          const li = document.createElement('li');
          li.className = 'genre-task-item';
          li.innerHTML = `
            <span class="genre-task-item-bullet" style="color:${color}">◆</span>
            <span class="genre-task-item-name">${esc(task.name)}</span>
            <button class="genre-task-item-btn task-img-btn" data-task="${task.id}" title="画像追加">📷</button>
            <button class="genre-task-item-btn task-link-btn" data-reel="${reel.id}" data-task="${task.id}" title="リンク設定">${iconSVG('bolt', 12)}</button>
            <button class="genre-task-item-btn task-edit-btn" data-reel="${reel.id}" data-task="${task.id}" title="編集">${iconSVG('pencil', 12)}</button>
            <button class="genre-task-item-btn task-del-btn" data-reel="${reel.id}" data-task="${task.id}" title="削除">${iconSVG('flame', 12)}</button>
          `;
          ul.appendChild(li);
        });
        body.appendChild(ul);
      } else {
        const emptyMsg = document.createElement('div');
        emptyMsg.className = 'genre-empty-msg';
        emptyMsg.textContent = 'タスクを追加しよう';
        body.appendChild(emptyMsg);
      }

      card.appendChild(header);
      card.appendChild(body);
      dom.genreList.appendChild(card);
    });

    // Attach events
    attachGenreEvents();
  }

  function attachGenreEvents() {
    // Expand/collapse
    dom.genreList.querySelectorAll('.genre-expand-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        if (expandedGenres.has(id)) expandedGenres.delete(id);
        else expandedGenres.add(id);
        renderGenres();
      });
    });

    // Click header to toggle too
    dom.genreList.querySelectorAll('.genre-card-header').forEach(header => {
      header.addEventListener('click', (e) => {
        if (e.target.closest('.genre-actions') || e.target.closest('.genre-emoji')) return;
        const id = header.closest('.genre-card').dataset.id;
        if (expandedGenres.has(id)) expandedGenres.delete(id);
        else expandedGenres.add(id);
        renderGenres();
      });
    });

    // Move reel up/down
    dom.genreList.querySelectorAll('.move-up').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        moveReel(parseInt(btn.dataset.idx), -1);
      });
    });
    dom.genreList.querySelectorAll('.move-down').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        moveReel(parseInt(btn.dataset.idx), 1);
      });
    });

    // Roll count controls
    dom.genreList.querySelectorAll('.rc-minus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const reel = state.reels.find(r => r.id === btn.dataset.id);
        if (reel) setReelRollCount(reel.id, (reel.rollCount || 1) - 1);
      });
    });
    dom.genreList.querySelectorAll('.rc-plus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const reel = state.reels.find(r => r.id === btn.dataset.id);
        if (reel) setReelRollCount(reel.id, (reel.rollCount || 1) + 1);
      });
    });

    // Delete genre
    dom.genreList.querySelectorAll('.genre-action-btn.delete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteGenre(btn.dataset.id);
      });
    });

    // Edit genre name
    dom.genreList.querySelectorAll('.genre-action-btn.edit').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const reel = state.reels.find(r => r.id === id);
        if (!reel) return;
        const nameSpan = btn.closest('.genre-card-header').querySelector('.genre-name');
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'genre-input';
        input.value = reel.name;
        input.style.flex = '1';
        input.style.fontSize = '0.85rem';
        nameSpan.replaceWith(input);
        input.focus();
        input.select();
        const commit = () => editGenreName(id, input.value);
        input.addEventListener('blur', commit);
        input.addEventListener('keydown', ev => {
          if (ev.key === 'Enter') commit();
          if (ev.key === 'Escape') renderGenres();
        });
      });
    });

    // Emoji picker for genre
    dom.genreList.querySelectorAll('.genre-emoji').forEach(emoji => {
      emoji.addEventListener('click', (e) => {
        e.stopPropagation();
        showEmojiPicker(emoji, emoji.dataset.id);
      });
    });

    // Add task to genre
    dom.genreList.querySelectorAll('.genre-task-add-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const reelId = btn.dataset.reel;
        const input = dom.genreList.querySelector(`.genre-task-input[data-reel="${reelId}"]`);
        if (input) {
          addTaskToGenre(reelId, input.value);
          input.value = '';
          input.focus();
        }
      });
    });
    dom.genreList.querySelectorAll('.genre-task-input').forEach(input => {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          addTaskToGenre(input.dataset.reel, input.value);
          input.value = '';
        }
      });
    });

    // Delete task
    dom.genreList.querySelectorAll('.task-del-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        deleteTaskFromGenre(btn.dataset.reel, btn.dataset.task);
      });
    });

    // Image upload per task
    dom.genreList.querySelectorAll('.task-img-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        _pendingImageTaskId = btn.dataset.task;
        dom.imageFileInput.click();
      });
    });

    // Link task (Phase 6)
    dom.genreList.querySelectorAll('.task-link-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const reelId = btn.dataset.reel;
        const taskId = btn.dataset.task;
        const reel = state.reels.find(r => r.id === reelId);
        if (!reel) return;
        const task = reel.tasks.find(t => t.id === taskId);
        if (!task) return;
        const li = btn.closest('.genre-task-item');
        const existing = li.querySelector('.task-link-input-row');
        if (existing) { existing.remove(); return; }
        const row = document.createElement('div');
        row.className = 'task-link-input-row';
        row.innerHTML = `<input type="url" class="genre-task-input task-link-input" placeholder="https://..." value="${task.link || ''}">`;
        li.appendChild(row);
        const input = row.querySelector('input');
        input.focus();
        const commitLink = () => {
          task.link = input.value.trim() || undefined;
          save();
          row.remove();
        };
        input.addEventListener('blur', commitLink);
        input.addEventListener('keydown', ev => {
          if (ev.key === 'Enter') commitLink();
          if (ev.key === 'Escape') row.remove();
        });
      });
    });

    // Edit task
    dom.genreList.querySelectorAll('.task-edit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const reelId = btn.dataset.reel;
        const taskId = btn.dataset.task;
        const reel = state.reels.find(r => r.id === reelId);
        if (!reel) return;
        const task = reel.tasks.find(t => t.id === taskId);
        if (!task) return;
        const nameSpan = btn.closest('.genre-task-item').querySelector('.genre-task-item-name');
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'genre-task-input';
        input.value = task.name;
        input.style.flex = '1';
        nameSpan.replaceWith(input);
        input.focus();
        input.select();
        const commit = () => editTaskInGenre(reelId, taskId, input.value);
        input.addEventListener('blur', commit);
        input.addEventListener('keydown', ev => {
          if (ev.key === 'Enter') commit();
          if (ev.key === 'Escape') renderGenres();
        });
      });
    });
  }

  // --- Icon Picker ---
  function showEmojiPicker(anchor, reelId) {
    const existing = document.querySelector('.emoji-picker');
    if (existing) existing.remove();

    const reel = state.reels.find(r => r.id === reelId);
    const reelColor = reel ? getReelColor(reel.colorIndex) : '#fff';

    const picker = document.createElement('div');
    picker.className = 'emoji-picker';
    ICON_KEYS.forEach(key => {
      const btn = document.createElement('button');
      btn.innerHTML = iconSVG(key, 18);
      btn.style.color = reelColor;
      btn.addEventListener('click', () => {
        setGenreEmoji(reelId, key);
        picker.remove();
      });
      picker.appendChild(btn);
    });

    const rect = anchor.getBoundingClientRect();
    picker.style.left = `${rect.left}px`;
    picker.style.top = `${rect.bottom + 4}px`;
    document.body.appendChild(picker);

    setTimeout(() => {
      const handler = (e) => {
        if (!picker.contains(e.target)) {
          picker.remove();
          document.removeEventListener('click', handler);
        }
      };
      document.addEventListener('click', handler);
    }, 10);
  }

  // ============================
  //  SLOT REELS (display)
  // ============================
  function renderSlotReels() {
    // Clear all children except placeholder
    const container = dom.reelsContainer;
    container.innerHTML = '';

    const validReels = state.reels.filter(r => r.tasks.length > 0);

    if (validReels.length === 0) {
      const ph = document.createElement('div');
      ph.className = 'reels-placeholder';
      ph.innerHTML = state.reels.length === 0
        ? '<p class="placeholder-main">ジャンルを登録して</p><p class="placeholder-sub">リールを追加しよう</p>'
        : '<p class="placeholder-main">各ジャンルにタスクを</p><p class="placeholder-sub">追加してからROLL!</p>';
      container.appendChild(ph);
      return;
    }

    const tk = todayKey();
    const todayHist = state.history[tk];

    validReels.forEach(reel => {
      const color = getReelColor(reel.colorIndex);
      const wrapper = document.createElement('div');
      wrapper.className = 'reel-wrapper';

      // Label
      const label = document.createElement('div');
      label.className = 'reel-label';
      label.style.color = color;
      label.innerHTML = `
        <span class="reel-label-dot" style="background:${color};box-shadow:0 0 4px ${color}"></span>
        ${esc(reel.name)}
      `;
      wrapper.appendChild(label);

      // Reel
      const reelEl = document.createElement('div');
      reelEl.className = 'reel';
      reelEl.id = `reel-${reel.id}`;
      reelEl.style.borderColor = `${color}33`;

      const strip = document.createElement('div');
      strip.className = 'reel-strip';

      if (todayHist && todayHist.results[reel.id]) {
        // Show today's result
        const taskIds = todayHist.results[reel.id];
        const firstTask = reel.tasks.find(t => t.id === taskIds[0]);
        const displayName = taskIds.length > 1
          ? `${firstTask ? firstTask.name : '(削除済み)'}  +${taskIds.length - 1}`
          : (firstTask ? firstTask.name : '(削除済み)');
        const item = makeReelItem(reel.emoji, displayName, color);
        strip.appendChild(item);
        reelEl.classList.add('stopped');
        reelEl.style.borderColor = `${color}88`;
        reelEl.style.boxShadow = `inset 0 0 20px rgba(0,0,0,0.4), 0 0 10px ${color}33`;
      } else {
        // Placeholder
        const item = makeReelItem('target', '? ? ? ?', '#555');
        strip.appendChild(item);
      }

      reelEl.appendChild(strip);
      wrapper.appendChild(reelEl);
      container.appendChild(wrapper);
    });
  }

  function makeReelItem(emoji, name, color) {
    const item = document.createElement('div');
    item.className = 'reel-item';
    const iconColor = color ? `color:${color}` : '';
    item.innerHTML = `
      <span class="reel-item-emoji" style="${iconColor}">${renderIcon(emoji, 20)}</span>
      <span class="reel-item-name">${esc(name)}</span>
    `;
    return item;
  }

  // ============================
  //  ROLL
  // ============================
  function updateRollBtn() {
    const tk = todayKey();
    const alreadyRolled = !!state.history[tk];
    const validReels = state.reels.filter(r => r.tasks.length > 0);
    const hasReels = validReels.length > 0;

    dom.btnRoll.disabled = alreadyRolled || !hasReels || state.isRolling;

    if (alreadyRolled) {
      dom.rollStatus.textContent = '✨ 今日はロール済み';
      // Show collapse bar and auto-minimize on page load
      if (dom.slotCollapseBar) {
        dom.slotCollapseBar.classList.remove('hidden');
        if (!state.isRolling && !dom.slotSection.classList.contains('slot-manually-toggled')) {
          collapseSlot(true);
        }
      }
    } else if (!hasReels) {
      dom.rollStatus.textContent = state.reels.length === 0
        ? 'ジャンルを登録してください'
        : '各ジャンルにタスクを追加してください';
      if (dom.slotCollapseBar) dom.slotCollapseBar.classList.add('hidden');
      collapseSlot(false);
    } else {
      dom.rollStatus.textContent = '';
      if (dom.slotCollapseBar) dom.slotCollapseBar.classList.add('hidden');
      collapseSlot(false);
    }
  }

  function collapseSlot(collapsed) {
    if (!dom.slotCabinet) return;
    if (collapsed) {
      dom.slotCabinet.classList.add('slot-collapsed');
      dom.slotCollapseIcon.textContent = '▼';
      // Also hide roll button row and status when collapsed
      const leverRow = dom.slotSection.querySelector('.roll-lever-row');
      const rollStatus = dom.rollStatus;
      if (leverRow) leverRow.classList.add('hidden');
      if (rollStatus) rollStatus.classList.add('hidden');
    } else {
      dom.slotCabinet.classList.remove('slot-collapsed');
      if (dom.slotCollapseIcon) dom.slotCollapseIcon.textContent = '▲';
      const leverRow = dom.slotSection.querySelector('.roll-lever-row');
      const rollStatus = dom.rollStatus;
      if (leverRow) leverRow.classList.remove('hidden');
      if (rollStatus) rollStatus.classList.remove('hidden');
    }
  }

  async function performRoll() {
    if (state.isRolling) return;
    const tk = todayKey();
    if (state.history[tk]) return;

    const validReels = state.reels.filter(r => r.tasks.length > 0);
    if (validReels.length === 0) return;

    state.isRolling = true;
    dom.btnRoll.disabled = true;
    dom.rollStatus.textContent = '🎰 SPINNING...';

    // Hard mode: each reel gets +1 task
    const results = {};
    validReels.forEach(reel => {
      const baseCount = reel.rollCount || 1;
      const count = Math.min(state.hardMode ? baseCount + 1 : baseCount, reel.tasks.length);
      const shuffled = [...reel.tasks].sort(() => Math.random() - 0.5);
      results[reel.id] = shuffled.slice(0, count).map(t => t.id);
    });

    // 対象リールを集める
    const reelElements = [];
    validReels.forEach(reel => {
      const el = document.getElementById(`reel-${reel.id}`);
      if (!el) return;
      reelElements.push({ el, reel });
    });

    // 全リール同時スタート → 1本ずつ停止。リール数によらず合計約6秒で終わるよう調整
    const n = reelElements.length;
    const TOTAL_DURATION = 6.0; // 最後のリールが止まるまでの秒数
    const MIN_DURATION = 2.0;   // 最初のリールが止まるまでの秒数
    const stagger = n > 1 ? (TOTAL_DURATION - MIN_DURATION) / (n - 1) : 0;
    const SPIN_SPEED = 8;       // 表示上の回転速度（items/秒）— durationによらず一定に保つ

    const reelHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--reel-h'));

    const stopPromises = reelElements.map(({ el, reel }, i) => {
      const duration = n === 1 ? TOTAL_DURATION : MIN_DURATION + i * stagger;
      const spinCount = Math.max(12, Math.round(duration * SPIN_SPEED));
      const reelColor = getReelColor(reel.colorIndex);

      // ストリップ構築（ランダム要素 + 末尾に当選タスク）
      const strip = el.querySelector('.reel-strip');
      strip.innerHTML = '';
      for (let j = 0; j < spinCount; j++) {
        const randomTask = reel.tasks[Math.floor(Math.random() * reel.tasks.length)];
        strip.appendChild(makeReelItem(reel.emoji, randomTask.name, reelColor));
      }
      const resultIds = results[reel.id];
      const firstResultTask = reel.tasks.find(t => t.id === resultIds[0]) || reel.tasks[0];
      const displayName = resultIds.length > 1
        ? `${firstResultTask.name}  +${resultIds.length - 1}`
        : firstResultTask.name;
      strip.appendChild(makeReelItem(reel.emoji, displayName, reelColor));

      el.classList.add('spinning');
      el.classList.remove('stopped');

      const totalItems = spinCount + 1;
      const targetOffset = -(totalItems - 1) * reelHeight;

      strip.style.transition = 'none';
      strip.style.transform = 'translateY(0)';
      strip.offsetHeight; // force reflow

      strip.style.transition = `transform ${duration}s cubic-bezier(0.15, 0.85, 0.25, 1.02)`;
      strip.style.transform = `translateY(${targetOffset}px)`;

      return new Promise(resolve => {
        setTimeout(() => {
          el.classList.remove('spinning');
          el.classList.add('stopped');
          el.style.borderColor = `${reelColor}88`;
          el.style.boxShadow = `inset 0 0 20px rgba(0,0,0,0.4), 0 0 10px ${reelColor}33`;

          el.classList.add('reel-stamp');
          setTimeout(() => el.classList.remove('reel-stamp'), 400);

          document.body.classList.add('screen-shake');
          setTimeout(() => document.body.classList.remove('screen-shake'), 400);
          resolve();
        }, duration * 1000);
      });
    });

    await Promise.all(stopPromises);

    // Save
    state.history[tk] = { results, status: 'rolled', completed: {}, hardMode: state.hardMode };
    await save();

    // Effects
    document.body.classList.add('big-win-flash');
    setTimeout(() => document.body.classList.remove('big-win-flash'), 1000);
    fireConfetti();

    state.isRolling = false;
    dom.rollStatus.textContent = '✨ 今日はロール済み';
    dom.btnRoll.disabled = true;

    showTodayResult();
    renderCalendar();
    renderSlotReels();
    renderStreak();

    // Dealer comment
    showDealerComment(randomComment('roll'));
  }

  // ============================
  //  TODAY'S RESULT
  // ============================
  function showTodayResult() {
    const tk = todayKey();
    const hist = state.history[tk];

    if (!hist) {
      dom.todayResult.classList.add('hidden');
      dom.progressBarContainer.classList.add('hidden');
      return;
    }

    dom.todayResult.classList.remove('hidden');
    const isDone = hist.status === 'done';
    dom.todayResult.classList.toggle('done', isDone);
    const questFrame = dom.todayResult.querySelector('.quest-frame');
    if (questFrame) questFrame.classList.toggle('done-state', isDone);

    // Badge
    dom.todayStatusBadge.className = `status-badge ${isDone ? 'done' : 'rolled'}`;
    dom.todayStatusBadge.textContent = isDone ? 'DONE' : 'ROLLED';

    // Cards with individual check buttons
    dom.resultCards.innerHTML = '';
    const validReels = state.reels.filter(r => r.tasks.length > 0);
    const completed = hist.completed || {};
    let totalTasks = 0;
    let completedTasks = 0;

    validReels.forEach(reel => {
      const taskIds = hist.results[reel.id];
      if (!taskIds || taskIds.length === 0) return;
      const color = getReelColor(reel.colorIndex);
      const reelCompleted = completed[reel.id] || [];

      taskIds.forEach((taskId, i) => {
        totalTasks++;
        const task = reel.tasks.find(t => t.id === taskId);
        const isChecked = reelCompleted.includes(taskId);
        if (isChecked) completedTasks++;
        const taskName = task ? esc(task.name) : '(削除済み)';
        const taskLink = task && task.link ? task.link : null;

        const card = document.createElement('div');
        card.className = `result-card ${isChecked ? 'task-checked' : ''}`;
        card.innerHTML = `
          <div class="result-card-accent" style="background:${color};box-shadow:0 0 6px ${color}55"></div>
          <span class="result-card-emoji" style="color:${color}">${renderIcon(reel.emoji, 22)}</span>
          <div class="result-card-body">
            <div class="result-card-genre" style="color:${color}">${esc(reel.name)}${taskIds.length > 1 ? ` [${i+1}/${taskIds.length}]` : ''}</div>
            <div class="result-card-task">${taskLink ? `<a href="${esc(taskLink)}" target="_blank" class="task-link">${taskName}</a>` : taskName}</div>
          </div>
          <button class="task-image-btn" data-task="${taskId}" title="問題を見る">📷</button>
          ${!isDone ? `<button class="task-check-btn ${isChecked ? 'checked' : ''}" data-reel="${reel.id}" data-task="${taskId}" title="完了チェック">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </button>` : `<span class="task-done-mark">✓</span>`}
        `;

        // Reroll button (if not done and not checked, and has tokens)
        if (!isDone && !isChecked) {
          const rerollBtn = document.createElement('button');
          rerollBtn.className = 'task-reroll-btn';
          rerollBtn.dataset.reel = reel.id;
          rerollBtn.dataset.task = taskId;
          rerollBtn.dataset.index = i.toString();
          rerollBtn.title = 'リロール (1トークン)';
          rerollBtn.innerHTML = '🎲';
          card.appendChild(rerollBtn);
        }

        dom.resultCards.appendChild(card);
      });
    });

    // Progress bar
    if (totalTasks > 0 && !isDone) {
      dom.progressBarContainer.classList.remove('hidden');
      const pct = Math.round((completedTasks / totalTasks) * 100);
      dom.progressBarFill.style.width = `${pct}%`;
      dom.progressBarText.textContent = `${completedTasks} / ${totalTasks}`;
    } else {
      dom.progressBarContainer.classList.add('hidden');
    }

    // Complete button — if done or all tasks checked
    if (isDone) {
      dom.btnComplete.classList.add('completed');
      dom.btnComplete.disabled = true;
      dom.btnComplete.innerHTML = `<span class="complete-text">${iconSVG('shield', 14, 'ico-inline')} MISSION COMPLETE!</span>`;
    } else {
      dom.btnComplete.classList.remove('completed');
      dom.btnComplete.disabled = false;
      // If all checked, change text to indicate auto-completable
      const allChecked = totalTasks > 0 && completedTasks === totalTasks;
      dom.btnComplete.innerHTML = `<span class="complete-text">${iconSVG('shield', 14, 'ico-inline')} ${allChecked ? 'ALL CLEAR! COMPLETE!' : 'MISSION COMPLETE!'}</span>`;
      if (allChecked) dom.btnComplete.classList.add('all-clear');
      else dom.btnComplete.classList.remove('all-clear');
    }

    // Attach check button events
    dom.resultCards.querySelectorAll('.task-check-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        toggleTaskCompletion(btn.dataset.reel, btn.dataset.task);
      });
    });

    // Attach reroll button events
    dom.resultCards.querySelectorAll('.task-reroll-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        rerollTask(btn.dataset.reel, btn.dataset.task, parseInt(btn.dataset.index));
      });
    });

    // Attach image view buttons
    dom.resultCards.querySelectorAll('.task-image-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        showTaskImage(btn.dataset.task);
      });
    });
  }

  // Image viewer
  async function showTaskImage(taskId) {
    const dataUrl = await getImage(taskId);
    if (!dataUrl) {
      // No image — offer to upload
      _pendingImageTaskId = taskId;
      dom.imageFileInput.click();
      return;
    }
    dom.imageViewerBody.innerHTML = `<img src="${dataUrl}" class="image-viewer-img" alt="Task image">`;
    dom.imageViewer.classList.remove('hidden');
  }

  // Phase 2: Toggle individual task completion with combo tracking
  async function toggleTaskCompletion(reelId, taskId) {
    const tk = todayKey();
    const hist = state.history[tk];
    if (!hist || hist.status === 'done') return;

    if (!hist.completed) hist.completed = {};
    if (!hist.completed[reelId]) hist.completed[reelId] = [];

    const arr = hist.completed[reelId];
    const idx = arr.indexOf(taskId);
    if (idx >= 0) {
      arr.splice(idx, 1);
    } else {
      arr.push(taskId);

      // Combo tracking: check time since last completion
      const now = Date.now();
      state.comboTimestamps.push(now);
      // Only keep timestamps within last 60 seconds
      state.comboTimestamps = state.comboTimestamps.filter(t => now - t < 60000);
      const combo = state.comboTimestamps.length;
      if (combo >= 2) {
        showComboPopup(combo);
        // Bonus tokens for combos
        if (combo >= 3) {
          state.tokens += combo - 2; // +1 for 3x, +2 for 4x, etc.
          renderTokenCount();
        }
      }
    }

    await save();
    showTodayResult();

    // Check if all tasks are now completed -> auto completeDay
    const validReels = state.reels.filter(r => r.tasks.length > 0);
    let total = 0, done = 0;
    validReels.forEach(reel => {
      const taskIds = hist.results[reel.id];
      if (!taskIds) return;
      total += taskIds.length;
      done += (hist.completed[reel.id] || []).length;
    });
    if (total > 0 && done === total) {
      await completeDay(tk);
    }
  }

  // Combo popup
  function showComboPopup(count) {
    const popup = document.createElement('div');
    popup.className = 'combo-popup';
    popup.textContent = `×${count} COMBO!`;
    if (count >= 3) popup.classList.add('combo-hot');
    document.body.appendChild(popup);
    showDealerComment(randomComment('combo'));
    setTimeout(() => popup.remove(), 1500);
  }

  // Phase 3: Reroll a single task (costs 1 token)
  async function rerollTask(reelId, taskId, taskIndex) {
    // Hard mode: no rerolls
    if (state.hardMode) {
      dom.rollStatus.textContent = '⚠️ HARD MODE: リロール不可';
      setTimeout(() => updateRollBtn(), 2000);
      return;
    }

    if (state.tokens < 1) {
      dom.rollStatus.textContent = '⚠️ トークンが足りません';
      setTimeout(() => updateRollBtn(), 2000);
      return;
    }

    const tk = todayKey();
    const hist = state.history[tk];
    if (!hist || hist.status === 'done') return;

    const reel = state.reels.find(r => r.id === reelId);
    if (!reel) return;

    const currentResults = hist.results[reelId];
    const available = reel.tasks.filter(t => !currentResults.includes(t.id));
    if (available.length === 0) {
      dom.rollStatus.textContent = '⚠️ 他のタスクがありません';
      setTimeout(() => updateRollBtn(), 2000);
      return;
    }

    const newTask = available[Math.floor(Math.random() * available.length)];
    currentResults[taskIndex] = newTask.id;

    state.tokens--;
    hist.usedReroll = true; // Track for weekly challenges
    await save();
    renderTokenCount();
    showTodayResult();
    renderSlotReels();
  }

  // Phase 3: Token display
  function renderTokenCount() {
    if (dom.tokenCount) {
      dom.tokenCount.textContent = `🪙 ${state.tokens}`;
    }
  }

  async function completeDay(dateKey) {
    if (!state.history[dateKey]) return;
    if (state.history[dateKey].status === 'done') return;
    state.history[dateKey].status = 'done';

    const hist = state.history[dateKey];
    if (!hist.completed) hist.completed = {};
    const validReels = state.reels.filter(r => r.tasks.length > 0);
    validReels.forEach(reel => {
      const taskIds = hist.results[reel.id];
      if (taskIds) hist.completed[reel.id] = [...taskIds];
    });

    // Token reward: 1 base, ×2 in hard mode
    const baseReward = hist.hardMode ? 2 : 1;
    // Double down multiplier (set by double down acceptance)
    const ddMultiplier = hist.doubleDownActive ? 3 : 1;
    state.tokens += baseReward * ddMultiplier;

    // Milestone bonuses
    const currentStreak = calcStreak();
    const MILESTONES = window.STREAK_MILESTONES || [];
    const BONUS = window.MILESTONE_BONUS || {};
    let jackpotTriggered = false;

    MILESTONES.forEach(ms => {
      if (currentStreak >= ms && !state.milestones.includes(ms)) {
        state.milestones.push(ms);
        const bonus = BONUS[ms] || 0;
        state.tokens += bonus;

        const skinDefs = window.SKIN_DEFS || {};
        Object.entries(skinDefs).forEach(([skinId, def]) => {
          if (def.unlock.type === 'streak' && def.unlock.value === ms) {
            if (!state.skins.unlocked.includes(skinId)) {
              state.skins.unlocked.push(skinId);
              jackpotTriggered = true;
            }
          }
        });
      }
    });

    await save();
    renderTokenCount();
    showTodayResult();
    renderCalendar();
    renderStreak();
    renderSkins();
    renderWeekly();
    fireConfetti();
    document.body.classList.add('big-win-flash');
    setTimeout(() => document.body.classList.remove('big-win-flash'), 1000);

    // Dealer comment
    showDealerComment(randomComment('complete'));

    // Jackpot
    if (jackpotTriggered) {
      setTimeout(() => showJackpot(), 1200);
    }

    // Double Down offer (only for today, not retroactive)
    if (dateKey === todayKey() && !hist.doubleDownOffered) {
      hist.doubleDownOffered = true;
      await save();
      setTimeout(() => showDoubleDown(dateKey), 2000);
    }
  }

  // ============================
  //  CALENDAR
  // ============================
  function renderCalendar() {
    const y = state.calendarYear;
    const m = state.calendarMonth;
    const names = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
    dom.calendarTitle.textContent = `${y}年 ${names[m]}`;

    const firstDay = new Date(y, m, 1).getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const today = new Date();

    dom.calendarDays.innerHTML = '';

    for (let i = 0; i < firstDay; i++) {
      const cell = document.createElement('div');
      cell.className = 'calendar-day empty';
      dom.calendarDays.appendChild(cell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${y}-${String(m+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
      const cell = document.createElement('div');
      cell.className = 'calendar-day';

      const dayNum = document.createElement('span');
      dayNum.textContent = day;
      cell.appendChild(dayNum);

      const isToday = (y === today.getFullYear() && m === today.getMonth() && day === today.getDate());
      if (isToday) cell.classList.add('today');

      const entry = state.history[dateKey];
      if (entry) {
        const indicator = document.createElement('span');
        indicator.className = 'calendar-day-indicator';

        if (entry.status === 'done') {
          cell.classList.add('done');
          indicator.textContent = '✓';
          // Heatmap: intensity based on completed task count
          const taskCount = Object.values(entry.results || {}).reduce((sum, arr) => sum + arr.length, 0);
          const intensity = Math.min(taskCount / 8, 1); // max intensity at 8 tasks
          const heatLevel = Math.ceil(intensity * 4); // 1-4 levels
          cell.classList.add(`heat-${heatLevel}`);
        } else {
          cell.classList.add('rolled');
          indicator.textContent = '●';
        }
        cell.appendChild(indicator);
        cell.addEventListener('click', () => showDayDetail(dateKey));
      }

      dom.calendarDays.appendChild(cell);
    }
  }

  function showDayDetail(dateKey) {
    const entry = state.history[dateKey];
    if (!entry) return;

    const parts = dateKey.split('-');
    dom.dayDetailTitle.textContent = `${parts[0]}/${parseInt(parts[1])}/${parseInt(parts[2])}`;

    dom.dayDetailBody.innerHTML = '';

    state.reels.forEach(reel => {
      const taskIds = entry.results[reel.id];
      if (!taskIds || taskIds.length === 0) return;
      const color = getReelColor(reel.colorIndex);

      taskIds.forEach((taskId, i) => {
        const task = reel.tasks.find(t => t.id === taskId);
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
          <div class="result-card-accent" style="background:${color};box-shadow:0 0 6px ${color}55"></div>
          <span class="result-card-emoji" style="color:${color}">${renderIcon(reel.emoji, 22)}</span>
          <div class="result-card-body">
            <div class="result-card-genre" style="color:${color}">${esc(reel.name)}${taskIds.length > 1 ? ` [${i+1}/${taskIds.length}]` : ''}</div>
            <div class="result-card-task">${task ? esc(task.name) : '(削除済み)'}</div>
          </div>
        `;
        dom.dayDetailBody.appendChild(card);
      });
    });

    if (entry.status === 'done') {
      dom.btnDayComplete.classList.add('hidden');
    } else {
      dom.btnDayComplete.classList.remove('hidden');
      dom.btnDayComplete.onclick = async () => {
        await completeDay(dateKey);
        showDayDetail(dateKey);
      };
    }

    dom.dayDetailModal.classList.remove('hidden');
  }

  // ============================
  //  CONFETTI
  // ============================
  function fireConfetti() {
    const canvas = dom.confettiCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = [...REEL_COLORS, '#ffd700', '#ffffff'];
    const count = 85;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * 100,
        vx: (Math.random() - 0.5) * 6,
        vy: Math.random() * 4 + 2,
        size: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        opacity: 1
      });
    }

    let frame = 0;
    const maxFrames = 120;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.vy += 0.1;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        p.opacity = Math.max(0, 1 - frame / maxFrames);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 4;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });
      frame++;
      if (frame < maxFrames) requestAnimationFrame(animate);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    animate();
  }

  // ============================
  //  AUTO-ROLL SETTINGS
  // ============================
  function loadAutoRollSettings() {
    window.RouleTask.storage.getAutoRoll().then((data) => {
      const s = data || { enabled: false, hour: 6, minute: 0 };
      dom.autoRollEnabled.checked = s.enabled;
      dom.autoRollHour.value = s.hour;
      dom.autoRollMinute.value = s.minute;
    });
  }

  // ============================
  //  CSV IMPORT
  // ============================
  // Format: genre,task (one per line)
  // Lines with only one column create a new genre with no tasks.
  // Example:
  //   数学A,A-009
  //   数学A,A-015
  //   数学II,II-012
  // Returns { added, hasImages, imageMap }
  // imageMap: { taskId -> imageFileName }
  function importCSV(text) {
    const lines = text.split(/\r?\n/).filter(l => l.trim());
    if (lines.length === 0) return { added: 0, hasImages: false, imageMap: {} };

    // Detect separator: tab, comma, or semicolon
    const sep = lines[0].includes('\t') ? '\t' : lines[0].includes(';') ? ';' : ',';

    let added = 0;
    let hasImages = false;
    const imageMap = {}; // taskId -> imageFileName

    lines.forEach(line => {
      const parts = line.split(sep).map(s => s.trim());
      if (parts.length === 0 || !parts[0]) return;

      const genreName = parts[0];
      const taskName = parts.length > 1 ? parts[1] : null;
      const imageFile = parts.length > 2 ? parts[2] : null;

      // Find or create genre
      let reel = state.reels.find(r => r.name === genreName);
      if (!reel) {
        reel = {
          id: uid(),
          name: genreName,
          emoji: DEFAULT_ICONS[state.reels.length % DEFAULT_ICONS.length],
          colorIndex: state.reels.length,
          rollCount: 1,
          tasks: []
        };
        state.reels.push(reel);
      }

      // Add task if provided and not duplicate
      if (taskName) {
        let task = reel.tasks.find(t => t.name === taskName);
        if (!task) {
          task = { id: uid(), name: taskName };
          reel.tasks.push(task);
          added++;
        }
        if (imageFile) {
          task.imageFile = imageFile;
          imageMap[task.id] = imageFile;
          hasImages = true;
        }
      }
    });

    save();
    renderGenres();
    renderSlotReels();
    updateRollBtn();
    return { added, hasImages, imageMap };
  }

  // ============================
  //  DEALER COMMENT (Feature 8)
  // ============================
  function showDealerComment(text) {
    if (!dom.dealerComment) return;
    dom.dealerComment.textContent = `"${text}"`;
    dom.dealerComment.classList.remove('hidden');
    dom.dealerComment.classList.add('dealer-show');
    setTimeout(() => {
      dom.dealerComment.classList.remove('dealer-show');
      setTimeout(() => dom.dealerComment.classList.add('hidden'), 500);
    }, 3000);
  }

  // ============================
  //  DOUBLE DOWN (Feature 1)
  // ============================
  function showDoubleDown(dateKey) {
    if (!dom.doubleDownModal) return;
    dom.doubleDownModal.classList.remove('hidden');

    const onAccept = async () => {
      dom.doubleDownModal.classList.add('hidden');
      cleanup();
      showDealerComment(randomComment('doubleDown'));
      // Generate a new set of tasks (extra round)
      const hist = state.history[dateKey];
      hist.doubleDownActive = true;
      hist.status = 'rolled'; // Reset to rolled for the extra round
      // Generate new extra tasks
      const validReels = state.reels.filter(r => r.tasks.length > 0);
      const extraResults = {};
      validReels.forEach(reel => {
        const count = Math.min(reel.rollCount || 1, reel.tasks.length);
        const currentTasks = hist.results[reel.id] || [];
        const available = reel.tasks.filter(t => !currentTasks.includes(t.id));
        const shuffled = [...available].sort(() => Math.random() - 0.5);
        const picked = shuffled.slice(0, Math.min(count, available.length)).map(t => t.id);
        if (picked.length > 0) {
          extraResults[reel.id] = picked;
          hist.results[reel.id] = [...currentTasks, ...picked];
        }
      });
      hist.completed = {}; // Reset completions for the extended quest
      await save();
      showTodayResult();
      renderSlotReels();
    };

    const onSkip = () => {
      dom.doubleDownModal.classList.add('hidden');
      cleanup();
    };

    const cleanup = () => {
      dom.btnDoubleDownAccept.removeEventListener('click', onAccept);
      dom.btnDoubleDownSkip.removeEventListener('click', onSkip);
    };

    dom.btnDoubleDownAccept.addEventListener('click', onAccept);
    dom.btnDoubleDownSkip.addEventListener('click', onSkip);
  }

  // ============================
  //  DAILY BONUS (Feature 3)
  // ============================
  const DAILY_BONUS_POOL = [
    { type: 'tokens', value: 1, label: '🪙 +1 TOKEN' },
    { type: 'tokens', value: 2, label: '🪙 +2 TOKENS' },
    { type: 'tokens', value: 3, label: '🪙 +3 TOKENS' },
    { type: 'lucky', label: '🎨 LUCKY COLOR' },
    { type: 'skip', label: '🎫 TASK SKIP TICKET' },
  ];

  function checkDailyBonus() {
    const tk = todayKey();
    if (state.dailyBonusDate === tk) return; // Already claimed today
    if (!dom.dailyBonusOverlay) return;

    // Pick a random bonus
    const bonus = DAILY_BONUS_POOL[Math.floor(Math.random() * DAILY_BONUS_POOL.length)];
    dom.dailyBonusResult.innerHTML = `<div class="db-prize">${bonus.label}</div>`;

    dom.dailyBonusOverlay.classList.remove('hidden');

    const onClaim = async () => {
      dom.dailyBonusOverlay.classList.add('hidden');
      dom.btnDailyBonusClaim.removeEventListener('click', onClaim);

      state.dailyBonusDate = tk;

      if (bonus.type === 'tokens') {
        state.tokens += bonus.value;
        renderTokenCount();
      } else if (bonus.type === 'lucky') {
        // Apply a random unlocked skin temporarily (reverts on reload)
        const unlocked = state.skins.unlocked.filter(s => s !== state.skins.active);
        if (unlocked.length > 0) {
          const luckySkin = unlocked[Math.floor(Math.random() * unlocked.length)];
          applySkin(luckySkin);
          showDealerComment('今日のラッキーカラーだ。');
        } else {
          state.tokens += 1; // Fallback: give a token
          renderTokenCount();
        }
      } else if (bonus.type === 'skip') {
        // Mark one random task as auto-completed if today has results
        const tk2 = todayKey();
        const hist = state.history[tk2];
        if (hist && hist.status !== 'done') {
          // Skip ticket saved for use — just give tokens as proxy
          state.tokens += 2;
          renderTokenCount();
        } else {
          state.tokens += 1;
          renderTokenCount();
        }
      }

      await save();
    };

    dom.btnDailyBonusClaim.addEventListener('click', onClaim);
  }

  // ============================
  //  WEEKLY CHALLENGES (Feature 5)
  // ============================
  function renderWeekly() {
    if (!dom.weeklyContent) return;
    const wk = getWeekKey();
    const seed = parseInt(wk.replace(/\D/g, ''));
    const challenges = getWeeklyChallenges(seed);

    // Reset weekly state if new week
    if (state.weekly.weekKey !== wk) {
      state.weekly = { weekKey: wk, claimed: [] };
      save();
    }

    let html = '';
    challenges.forEach((ch, idx) => {
      const done = ch.check(state.history, state, calcStreak);
      const claimed = state.weekly.claimed.includes(ch.id);
      html += `
        <div class="weekly-challenge ${done ? 'challenge-done' : ''} ${claimed ? 'challenge-claimed' : ''}">
          <div class="weekly-desc">${esc(ch.desc)}</div>
          <div class="weekly-reward">🪙 ${ch.reward}</div>
          ${done && !claimed ? `<button class="weekly-claim-btn" data-idx="${idx}" data-id="${ch.id}" data-reward="${ch.reward}">CLAIM</button>` : ''}
          ${claimed ? '<span class="weekly-claimed-badge">CLAIMED</span>' : ''}
          ${!done && !claimed ? '<span class="weekly-progress-badge">IN PROGRESS</span>' : ''}
        </div>
      `;
    });

    dom.weeklyContent.innerHTML = html;

    // Attach claim events
    dom.weeklyContent.querySelectorAll('.weekly-claim-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const reward = parseInt(btn.dataset.reward);
        const id = btn.dataset.id;
        state.tokens += reward;
        state.weekly.claimed.push(id);
        await save();
        renderTokenCount();
        renderWeekly();
        fireConfetti();
      });
    });
  }

  // ============================
  //  JACKPOT (Phase 4)
  // ============================
  function showJackpot() {
    if (!dom.jackpotOverlay) return;
    dom.jackpotOverlay.classList.remove('hidden');
    // Mega confetti
    fireMegaConfetti();
    // Gold flash
    document.body.classList.add('jackpot-flash');
    setTimeout(() => {
      document.body.classList.remove('jackpot-flash');
      dom.jackpotOverlay.classList.add('hidden');
    }, 3500);
  }

  function fireMegaConfetti() {
    const canvas = dom.confettiCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#ffd700', '#ffec5e', '#fff', '#ff6b6b', '#4ecdc4', '#a29bfe', '#fd79a8', '#ff9f43'];
    const count = 200;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 100,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.5) * 16 - 4,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 15,
        opacity: 1
      });
    }

    let frame = 0;
    const maxFrames = 180;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.vy += 0.15;
        p.y += p.vy;
        p.vx *= 0.98;
        p.rotation += p.rotSpeed;
        p.opacity = Math.max(0, 1 - frame / maxFrames);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });
      frame++;
      if (frame < maxFrames) requestAnimationFrame(animate);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    animate();
  }

  // ============================
  //  SKINS (Phase 5)
  // ============================
  function applySkin(skinId) {
    const defs = window.SKIN_DEFS || {};
    const varNames = window.THEME_VAR_NAMES || [];
    const root = document.documentElement;

    // Reset all vars to defaults
    varNames.forEach(v => root.style.removeProperty(v));

    const def = defs[skinId];
    if (def && def.vars) {
      Object.entries(def.vars).forEach(([k, v]) => {
        root.style.setProperty(k, v);
      });
    }
  }

  function previewSkin(skinId) {
    applySkin(skinId);
  }

  function revertSkin() {
    applySkin(state.skins.active);
  }

  async function purchaseSkin(skinId) {
    const defs = window.SKIN_DEFS || {};
    const def = defs[skinId];
    if (!def || def.unlock.type !== 'tokens') return;
    if (state.tokens < def.unlock.value) return;
    if (state.skins.unlocked.includes(skinId)) return;

    state.tokens -= def.unlock.value;
    state.skins.unlocked.push(skinId);
    await save();
    renderTokenCount();
    renderSkins();
  }

  async function activateSkin(skinId) {
    state.skins.active = skinId;
    applySkin(skinId);
    await save();
    renderSkins();
  }

  function renderSkins() {
    if (!dom.skinsList) return;
    dom.skinsList.innerHTML = '';
    const defs = window.SKIN_DEFS || {};
    const streak = calcStreak();

    Object.entries(defs).forEach(([skinId, def]) => {
      const isUnlocked = state.skins.unlocked.includes(skinId);
      const isActive = state.skins.active === skinId;

      // Determine unlock status text
      let unlockText = '';
      let canBuy = false;
      if (def.unlock.type === 'default') {
        unlockText = 'FREE';
      } else if (def.unlock.type === 'streak') {
        unlockText = isUnlocked ? 'UNLOCKED' : `🔥 ${def.unlock.value} DAY STREAK`;
      } else if (def.unlock.type === 'tokens') {
        if (isUnlocked) {
          unlockText = 'OWNED';
        } else {
          unlockText = `🪙 ${def.unlock.value} TOKENS`;
          canBuy = state.tokens >= def.unlock.value;
        }
      }

      // Color preview band
      const previewColors = [
        def.vars['--gold'] || 'var(--gold)',
        def.vars['--neon-green'] || 'var(--neon-green)',
        def.vars['--bg-card'] || 'var(--bg-card)'
      ];

      const card = document.createElement('div');
      card.className = `skin-card ${isActive ? 'active' : ''} ${!isUnlocked ? 'locked' : ''}`;
      card.innerHTML = `
        <div class="skin-preview" style="background:linear-gradient(90deg, ${previewColors[0]}, ${previewColors[1]}, ${previewColors[2]})"></div>
        <div class="skin-info">
          <div class="skin-name">${def.name}</div>
          <div class="skin-unlock-text">${unlockText}</div>
        </div>
        <div class="skin-actions">
          ${isActive ? '<span class="skin-active-badge">ACTIVE</span>' : ''}
          ${isUnlocked && !isActive ? `<button class="skin-btn skin-apply-btn" data-skin="${skinId}">APPLY</button>` : ''}
          ${!isUnlocked && canBuy ? `<button class="skin-btn skin-buy-btn" data-skin="${skinId}">BUY</button>` : ''}
        </div>
      `;

      // Preview on hover
      if (isUnlocked) {
        card.addEventListener('mouseenter', () => previewSkin(skinId));
        card.addEventListener('mouseleave', () => revertSkin());
      }

      dom.skinsList.appendChild(card);
    });

    // Attach button events
    dom.skinsList.querySelectorAll('.skin-apply-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        activateSkin(btn.dataset.skin);
      });
    });
    dom.skinsList.querySelectorAll('.skin-buy-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        purchaseSkin(btn.dataset.skin);
      });
    });
  }

  // ============================
  //  STATS (Phase 7)
  // ============================
  function renderStats() {
    if (!dom.statsContent) return;

    const entries = Object.entries(state.history);
    const totalRolls = entries.length;
    const totalDone = entries.filter(([, e]) => e.status === 'done').length;
    const completionRate = totalRolls > 0 ? Math.round((totalDone / totalRolls) * 100) : 0;
    const streak = calcStreak();
    const longestStreak = calcLongestStreak();

    // Task frequency count
    const taskFreq = {};
    entries.forEach(([, entry]) => {
      if (!entry.results) return;
      Object.entries(entry.results).forEach(([reelId, taskIds]) => {
        const reel = state.reels.find(r => r.id === reelId);
        if (!reel) return;
        taskIds.forEach(taskId => {
          const task = reel.tasks.find(t => t.id === taskId);
          const label = task ? `${reel.name}: ${task.name}` : `${reel.name}: (削除済み)`;
          taskFreq[label] = (taskFreq[label] || 0) + 1;
        });
      });
    });

    const sortedTasks = Object.entries(taskFreq).sort((a, b) => b[1] - a[1]).slice(0, 10);
    const maxFreq = sortedTasks.length > 0 ? sortedTasks[0][1] : 1;

    let html = `
      <div class="stats-grid">
        <div class="stat-item"><div class="stat-value">${totalRolls}</div><div class="stat-label">TOTAL ROLLS</div></div>
        <div class="stat-item"><div class="stat-value">${completionRate}%</div><div class="stat-label">COMPLETION</div></div>
        <div class="stat-item"><div class="stat-value">${streak}</div><div class="stat-label">CURRENT STREAK</div></div>
        <div class="stat-item"><div class="stat-value">${longestStreak}</div><div class="stat-label">BEST STREAK</div></div>
      </div>
    `;

    if (sortedTasks.length > 0) {
      html += '<div class="stats-chart-title">TOP TASKS</div><div class="stats-chart">';
      sortedTasks.forEach(([label, count]) => {
        const pct = Math.round((count / maxFreq) * 100);
        html += `
          <div class="stats-bar-row">
            <span class="stats-bar-label">${esc(label)}</span>
            <div class="stats-bar-track"><div class="stats-bar-fill" style="width:${pct}%"></div></div>
            <span class="stats-bar-count">${count}</span>
          </div>
        `;
      });
      html += '</div>';
    }

    dom.statsContent.innerHTML = html;
  }

  function calcLongestStreak() {
    const keys = Object.keys(state.history)
      .filter(k => state.history[k].status === 'done')
      .sort();
    if (keys.length === 0) return 0;

    let longest = 1, current = 1;
    for (let i = 1; i < keys.length; i++) {
      const prev = new Date(keys[i - 1]);
      const curr = new Date(keys[i]);
      const diff = (curr - prev) / (1000 * 60 * 60 * 24);
      if (diff === 1) {
        current++;
        longest = Math.max(longest, current);
      } else {
        current = 1;
      }
    }
    return Math.max(longest, current);
  }

  // ============================
  //  LEVER (Phase 8)
  // ============================
  function initLever() {
    if (!dom.leverArm || !dom.leverContainer) return;

    let isDragging = false;
    let startY = 0;
    let currentPull = 0;
    const THRESHOLD = 60; // px to trigger roll

    function onStart(e) {
      if (dom.btnRoll.disabled) return;
      isDragging = true;
      startY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
      dom.leverArm.classList.add('grabbing');
      e.preventDefault();
    }

    function onMove(e) {
      if (!isDragging) return;
      const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
      currentPull = Math.max(0, Math.min(clientY - startY, 80));
      dom.leverArm.style.transform = `translateY(${currentPull}px)`;
    }

    function onEnd() {
      if (!isDragging) return;
      isDragging = false;
      dom.leverArm.classList.remove('grabbing');

      if (currentPull >= THRESHOLD && !dom.btnRoll.disabled) {
        // Spring back animation
        dom.leverArm.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        dom.leverArm.style.transform = 'translateY(0)';
        setTimeout(() => { dom.leverArm.style.transition = ''; }, 300);
        performRoll();
      } else {
        dom.leverArm.style.transition = 'transform 0.3s ease-out';
        dom.leverArm.style.transform = 'translateY(0)';
        setTimeout(() => { dom.leverArm.style.transition = ''; }, 300);
      }
      currentPull = 0;
    }

    // Click lever to roll
    dom.leverArm.addEventListener('click', () => {
      if (dom.btnRoll.disabled) return;
      dom.leverArm.style.transition = 'transform 0.15s ease-in';
      dom.leverArm.style.transform = 'translateY(60px)';
      setTimeout(() => {
        dom.leverArm.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        dom.leverArm.style.transform = 'translateY(0)';
        setTimeout(() => { dom.leverArm.style.transition = ''; }, 300);
      }, 150);
      performRoll();
    });

    dom.leverArm.addEventListener('mousedown', onStart);
    dom.leverArm.addEventListener('touchstart', onStart, { passive: false });
    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchend', onEnd);
  }

  // ============================
  //  EVENT LISTENERS
  // ============================
  function initEvents() {
    // Roll
    dom.btnRoll.addEventListener('click', performRoll);

    // Complete today
    dom.btnComplete.addEventListener('click', () => completeDay(todayKey()));

    // Add genre
    dom.btnAddGenre.addEventListener('click', () => {
      addGenre(dom.genreNameInput.value);
      dom.genreNameInput.value = '';
      dom.genreNameInput.focus();
    });
    dom.genreNameInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        addGenre(dom.genreNameInput.value);
        dom.genreNameInput.value = '';
      }
    });

    // CSV Import
    dom.btnImportCSV.addEventListener('click', () => dom.csvFileInput.click());
    dom.csvFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const result = importCSV(ev.target.result);
        dom.csvFileInput.value = '';
        if (result.hasImages) {
          // Prompt user to select image files
          dom.rollStatus.textContent = `📥 ${result.added} タスク追加。画像ファイルを選択してください...`;
          pendingImageMap = result.imageMap;
          dom.imageFileInput.click();
        } else {
          dom.rollStatus.textContent = `📥 ${result.added} タスクをインポートしました`;
          setTimeout(() => updateRollBtn(), 2000);
        }
      };
      reader.readAsText(file);
    });

    // Toggle genre panel
    dom.genreSectionHeader.addEventListener('click', () => {
      dom.genrePanel.classList.toggle('collapsed');
      dom.btnToggleGenres.classList.toggle('collapsed');
    });

    // Auto-roll settings
    loadAutoRollSettings();
    const saveAutoRoll = () => {
      const settings = {
        enabled: dom.autoRollEnabled.checked,
        hour: parseInt(dom.autoRollHour.value) || 6,
        minute: parseInt(dom.autoRollMinute.value) || 0
      };
      window.RouleTask.storage.setAutoRoll(settings);
    };
    dom.autoRollEnabled.addEventListener('change', saveAutoRoll);
    dom.autoRollHour.addEventListener('change', saveAutoRoll);
    dom.autoRollMinute.addEventListener('change', saveAutoRoll);

    // Calendar nav
    dom.btnPrevMonth.addEventListener('click', () => {
      state.calendarMonth--;
      if (state.calendarMonth < 0) { state.calendarMonth = 11; state.calendarYear--; }
      renderCalendar();
    });
    dom.btnNextMonth.addEventListener('click', () => {
      state.calendarMonth++;
      if (state.calendarMonth > 11) { state.calendarMonth = 0; state.calendarYear++; }
      renderCalendar();
    });

    // Day detail modal
    dom.btnCloseDayDetail.addEventListener('click', () => dom.dayDetailModal.classList.add('hidden'));
    dom.dayDetailModal.addEventListener('click', e => {
      if (e.target === dom.dayDetailModal) dom.dayDetailModal.classList.add('hidden');
    });

    // Stats toggle
    if (dom.statsSectionHeader) {
      dom.statsSectionHeader.addEventListener('click', () => {
        dom.statsPanel.classList.toggle('collapsed');
        dom.btnToggleStats.classList.toggle('collapsed');
        if (!dom.statsPanel.classList.contains('collapsed')) renderStats();
      });
    }

    // Skins toggle
    if (dom.skinsSectionHeader) {
      dom.skinsSectionHeader.addEventListener('click', () => {
        dom.skinsPanel.classList.toggle('collapsed');
        dom.btnToggleSkins.classList.toggle('collapsed');
        if (!dom.skinsPanel.classList.contains('collapsed')) renderSkins();
      });
    }

    // Jackpot overlay click to dismiss
    if (dom.jackpotOverlay) {
      dom.jackpotOverlay.addEventListener('click', () => {
        dom.jackpotOverlay.classList.add('hidden');
        document.body.classList.remove('jackpot-flash');
      });
    }

    // Image file input handler (for batch import after CSV)
    dom.imageFileInput.addEventListener('change', async (e) => {
      const files = Array.from(e.target.files);
      if (files.length === 0) return;
      dom.imageFileInput.value = '';

      if (pendingImageMap) {
        // Match files to tasks by filename
        let matched = 0;
        for (const [taskId, imageFileName] of Object.entries(pendingImageMap)) {
          // Match by exact filename or filename without extension
          const file = files.find(f => {
            const fName = f.name;
            const fBase = fName.replace(/\.[^.]+$/, '');
            return fName === imageFileName || fBase === imageFileName || fBase === imageFileName.replace(/\.[^.]+$/, '');
          });
          if (file) {
            const dataUrl = await readFileAsDataURL(file);
            await saveImage(taskId, dataUrl);
            matched++;
          }
        }
        pendingImageMap = null;
        dom.rollStatus.textContent = `🖼️ ${matched} 画像を紐付けました`;
        setTimeout(() => updateRollBtn(), 2000);
        showTodayResult();
        renderGenres();
      } else if (_pendingImageTaskId) {
        // Single image upload for a specific task
        const file = files[0];
        if (file) {
          const dataUrl = await readFileAsDataURL(file);
          await saveImage(_pendingImageTaskId, dataUrl);
          _pendingImageTaskId = null;
          renderGenres();
          showTodayResult();
        }
      }
    });

    // Image viewer
    if (dom.btnCloseImage) {
      dom.btnCloseImage.addEventListener('click', () => dom.imageViewer.classList.add('hidden'));
    }
    if (dom.imageViewer) {
      dom.imageViewer.addEventListener('click', (e) => {
        if (e.target === dom.imageViewer) dom.imageViewer.classList.add('hidden');
      });
    }

    // Slot collapse toggle
    if (dom.slotCollapseBar) {
      dom.slotCollapseBar.addEventListener('click', () => {
        dom.slotSection.classList.add('slot-manually-toggled');
        const isCollapsed = dom.slotCabinet.classList.contains('slot-collapsed');
        collapseSlot(!isCollapsed);
      });
    }

    // Hard mode toggle
    if (dom.hardModeEnabled) {
      dom.hardModeEnabled.checked = state.hardMode;
      dom.hardModeEnabled.addEventListener('change', async () => {
        state.hardMode = dom.hardModeEnabled.checked;
        await save();
      });
    }

    // Weekly toggle
    if (dom.weeklySectionHeader) {
      dom.weeklySectionHeader.addEventListener('click', () => {
        dom.weeklyPanel.classList.toggle('collapsed');
        dom.btnToggleWeekly.classList.toggle('collapsed');
        if (!dom.weeklyPanel.classList.contains('collapsed')) renderWeekly();
      });
    }

    // Lever
    initLever();
  }

  // ============================
  //  INIT
  // ============================
  async function init() {
    cacheDom();
    await load();
    initEvents();
    renderGenres();
    renderSlotReels();
    updateRollBtn();
    showTodayResult();
    renderCalendar();
    renderStreak();
    renderTokenCount();
    applySkin(state.skins.active);
    // Daily bonus on first open
    setTimeout(() => checkDailyBonus(), 500);
  }

  init();
})();
