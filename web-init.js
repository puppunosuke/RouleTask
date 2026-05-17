// ============================================================
//  RouleTask - ウェブ版用のログインUI配線
//
//  ヘッダーの accountBtn をクリック → Googleログイン or ログアウト。
//  ログイン状態変化時はページをリロードして UI を再構築する
//  （sidepanel.js の init() を再実行するため）。
// ============================================================
function setup() {
  const btn = document.getElementById('accountBtn');
  const status = document.getElementById('accountStatus');
  const fb = window.RouleTask.firebase;

  let currentUser = null;

  function updateUI(user) {
    currentUser = user;
    if (user) {
      status.textContent = '👤';
      btn.title = `ログイン中: ${user.email}\n（クリックでログアウト）`;
    } else {
      status.textContent = '🔑';
      btn.title = 'Googleログインでクラウド同期';
    }
  }

  btn.addEventListener('click', async () => {
    if (currentUser) {
      if (confirm('ログアウトしますか？\nログアウト後はローカル（このデバイス）のデータに戻ります。')) {
        await fb.signOutUser();
        location.reload();
      }
    } else {
      try {
        await fb.signInWithGoogle();
        location.reload();
      } catch (err) {
        // ユーザーがポップアップを閉じた場合などは正常系として扱う
        if (err.code === 'auth/popup-closed-by-user') return;
        if (err.code === 'auth/cancelled-popup-request') return;
        console.error('ログインに失敗:', err);
        alert('ログイン失敗: ' + err.message);
      }
    }
  });

  fb.watchAuthState(updateUI);
}

// firebase-init.js は ESM（defer 相当）なので、このファイルが走るタイミング次第で
// 既に用意できている／まだ準備中、の両方ありうる。
if (window.RouleTask && window.RouleTask.firebase) {
  setup();
} else {
  window.addEventListener('RouleTask:firebase-ready', setup, { once: true });
}
