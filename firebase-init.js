// ============================================================
//  RouleTask - Firebase 初期化（ウェブ版専用）
//
//  Firebase JS SDK を CDN から ESM 形式で読み込む。
//  初期化後、認証・Firestore 操作のヘルパーを
//  window.RouleTask.firebase に公開する。
//
//  storage.js（IIFE 形式）から Firebase SDK を直接触らずに済むよう、
//  ここで全部ラップしてグローバル経由で渡す設計。
//  → 拡張機能版（sidepanel.html）はこのファイルを読み込まないので、
//     SDK の import エラーが起きない。
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAHW2fQmOK0-Hl56SQa7EeDXPL6-9oKTJw",
  authDomain: "punoji-rouletask.firebaseapp.com",
  projectId: "punoji-rouletask",
  storageBucket: "punoji-rouletask.firebasestorage.app",
  messagingSenderId: "789824174967",
  appId: "1:789824174967:web:0268aea01ce096480eff72",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

window.RouleTask = window.RouleTask || {};

window.RouleTask.firebase = {
  // --- 認証 ---
  signInWithGoogle: () => signInWithPopup(auth, provider),
  signOutUser: () => signOut(auth),
  watchAuthState: (callback) => onAuthStateChanged(auth, callback),

  // --- Firestore: 全データを1ドキュメントに保存／取得 ---
  // パス: /users/{uid}/data/main
  loadCloud: async (uid) => {
    const ref = doc(db, "users", uid, "data", "main");
    const snap = await getDoc(ref);
    return snap.exists() ? snap.data() : null;
  },
  saveCloud: async (uid, data) => {
    const ref = doc(db, "users", uid, "data", "main");
    await setDoc(ref, data);
  },
};

// firebase-init.js は ESM（defer 相当）なので、IIFE 形式の storage.js より
// 後に実行される。storage.js 側に「Firebase が用意できた」イベントを通知する。
window.dispatchEvent(new Event("RouleTask:firebase-ready"));
