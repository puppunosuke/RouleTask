// RouleTask - Background Service Worker
// サイドパネル + 毎朝の自動ロール

chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error('Side panel error:', error));

// ── Constants ──
const SK_REELS = 'reels';
const SK_HISTORY = 'history';
const SK_AUTOROLL = 'autoRoll'; // { enabled: bool, hour: 0-23, minute: 0-59 }
const ALARM_NAME = 'dailyAutoRoll';

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

// ── Auto-roll logic ──
async function performAutoRoll() {
  const data = await chrome.storage.local.get([SK_REELS, SK_HISTORY, SK_AUTOROLL]);
  const reels = data[SK_REELS] || [];
  const history = data[SK_HISTORY] || {};
  const settings = data[SK_AUTOROLL] || { enabled: false };

  if (!settings.enabled) return;

  const tk = todayKey();
  if (history[tk]) return; // Already rolled today

  const validReels = reels.filter(r => r.tasks && r.tasks.length > 0);
  if (validReels.length === 0) return;

  // Pick random tasks (same logic as sidepanel.js performRoll)
  const results = {};
  validReels.forEach(reel => {
    const count = Math.min(reel.rollCount || 1, reel.tasks.length);
    const shuffled = [...reel.tasks].sort(() => Math.random() - 0.5);
    results[reel.id] = shuffled.slice(0, count).map(t => t.id);
  });

  history[tk] = { results, status: 'rolled', completed: {} };
  await chrome.storage.local.set({ [SK_HISTORY]: history });
  console.log(`[RouleTask] Auto-rolled for ${tk}`);
}

// ── Alarm scheduling ──
// Schedule the next alarm to fire at the configured hour:minute.
// Chrome alarms minimum granularity is 1 minute, so we schedule a repeating
// alarm every 30 minutes and check conditions each time. This is resilient
// to the service worker waking up late or the laptop being asleep at the
// exact target time — it will catch up within 30 min of waking.
async function ensureAlarm() {
  const alarm = await chrome.alarms.get(ALARM_NAME);
  if (!alarm) {
    // Fire once soon (1 min), then every 30 min
    chrome.alarms.create(ALARM_NAME, {
      delayInMinutes: 1,
      periodInMinutes: 30
    });
  }
}

// ── Alarm handler ──
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name !== ALARM_NAME) return;

  const data = await chrome.storage.local.get([SK_AUTOROLL]);
  const settings = data[SK_AUTOROLL] || { enabled: false, hour: 6, minute: 0 };
  if (!settings.enabled) return;

  const now = new Date();
  const targetMinutes = settings.hour * 60 + settings.minute;
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  // Roll if we're past the target time (within the same day)
  if (nowMinutes >= targetMinutes) {
    await performAutoRoll();
  }
});

// ── On install / startup ──
chrome.runtime.onInstalled.addListener(() => {
  ensureAlarm();
  // Set default auto-roll settings if not present
  chrome.storage.local.get([SK_AUTOROLL], (data) => {
    if (!data[SK_AUTOROLL]) {
      chrome.storage.local.set({ [SK_AUTOROLL]: { enabled: false, hour: 6, minute: 0 } });
    }
  });
});

chrome.runtime.onStartup.addListener(() => {
  ensureAlarm();
  // Also try rolling immediately on browser startup (catches overnight)
  performAutoRoll();
});

// Ensure alarm exists when service worker wakes
ensureAlarm();
