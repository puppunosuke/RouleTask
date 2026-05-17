<p align="center">
  <img src="icons/icon128.png" alt="RouleTask" width="96">
</p>

<h1 align="center">RouleTask</h1>

<p align="center">
  <b>🎰 スロットマシン風タスクリマインダー</b><br>
  毎日のタスクをランダムに決定するブラウザ拡張機能
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Manifest-V3-blue?style=flat-square" alt="Manifest V3">
  <img src="https://img.shields.io/badge/Side_Panel-API-green?style=flat-square" alt="Side Panel">
  <img src="https://img.shields.io/badge/Version-1.0.0-orange?style=flat-square" alt="Version 1.0.0">
</p>

---

## 🎲 RouleTask とは？

**RouleTask**（タスクルクル）は、「今日何やろう？」を楽しく決められる **スロットマシン風タスクリマインダー** です。

勉強・運動・趣味など、自分だけの **ジャンル（リール）** を作成し、その中に具体的なタスクを登録。毎日1回 **ROLL!** ボタンを押すと、各ジャンルからランダムに1つずつタスクが選出されます。ローグライクスロットゲーム（CloverPit / Balatro）にインスパイアされた **ダーク＆ネオン** のビジュアルで、毎日のルーティンにワクワク感をプラスします。

ブラウザの **サイドパネル** 上で動作するため、作業の邪魔をしません。

---

## ✨ 主な機能

### 🎰 スロットマシン
- ジャンルごとに1つのリールを配置、全リールが同時にスピン
- リールは時差停止し、スクリーンシェイク＋バウンスエフェクトで演出
- 全リール停止後に **紙吹雪アニメーション** 🎉
- **1日1回** のロール制限で特別感をキープ

### 📂 ジャンル × タスク管理
- **ジャンル（リール）** を自由に作成（例: 数学、英語、筋トレ…）
- 各ジャンル内に **具体的なタスク** を複数登録
- ジャンルごとに **カラーテーマを自動割り当て**（10色）
- 絵文字アイコンをワンクリックで変更
- アコーディオン式のUI で折りたたみ管理

```
リール①「数学 📐」           リール②「英語 📚」         リール③「筋トレ 💪」
├─ 参考書 p.50-60           ├─ 単語帳 Unit 5           ├─ 腕立て30回
├─ 問題集 第3章             ├─ リスニング30分           ├─ スクワット50回
└─ 公式暗記カード            └─ 英作文5題              └─ プランク3分

                    ↓ 🎰 ROLL! ↓

  [📐 参考書 p.50-60]  [📚 リスニング30分]  [💪 スクワット50回]
```

### 📅 カレンダー & 完了管理
- **月別カレンダー** でロール履歴を一覧表示
- ロール済みの日は **金色ドット ●** 、完了済みの日は **緑チェック ✓**
- 日付クリックでその日のロール結果をモーダル表示
- 過去の日付でも **完了マーク** を付けられる

### 🔥 ストリーク
- 連続で MISSION COMPLETE を達成した日数をヘッダーに表示
- `🔥 5 DAY STREAK!` — モチベーションの維持に

---

## 🎨 デザイン

CloverPit / Balatro など、近年のローグライクスロットゲームからインスパイアを受けた **ダーク＆ネオン** の美学。

| 要素 | 詳細 |
|------|------|
| テーマ | ダークモード（`#06060c` ベース） |
| カラー | ネオングリーン / ゴールド / パープル / シアン / ピンク |
| フォント | [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)（見出し）+ [Inter](https://fonts.google.com/specimen/Inter)（本文） |
| エフェクト | CRTスキャンライン、ネオングロー、スクリーンシェイク |
| アニメーション | スロット回転、紙吹雪、電球フリッカー、カード登場 |

---

## 📖 使い方

### Step 1: ジャンルを作る
下部の **REELS** セクションで、ジャンル名（例: `数学`）を入力して `+ REEL` をクリック。

### Step 2: タスクを追加する
ジャンルカードを展開し、具体的なタスク（例: `参考書 p.50-60`）を追加。

### Step 3: ROLL!
全ジャンルにタスクが登録されたら、**🎰 ROLL!** ボタンが有効に。  
押すとスロットが回転し、各ジャンルから1つずつタスクが選出されます。

### Step 4: MISSION COMPLETE!
今日のタスクを全てこなしたら、**✅ MISSION COMPLETE!** ボタンを押してDONEに。  
カレンダーに ✓ マークが付き、ストリークがカウントされます。

---

## 🗂 ファイル構成

```
RouleTask/
├── manifest.json       # Chrome拡張 Manifest V3 設定
├── background.js       # Service Worker（サイドパネル登録）
├── sidepanel.html      # サイドパネル メインHTML
├── sidepanel.css       # ローグライクスロット風スタイル
├── sidepanel.js        # 全機能のメインロジック
├── icons/
│   ├── icon16.png      # ツールバー用アイコン
│   ├── icon48.png      # 拡張機能一覧用アイコン
│   └── icon128.png     # ストア用アイコン
└── README.md           # このファイル
```

---

## 🛠 技術スタック

| 技術 | 用途 |
|------|------|
| **Manifest V3** | Chrome拡張の最新規格 |
| **Side Panel API** | ブラウザサイドパネル上でUI表示 |
| **chrome.storage.local** | タスク・履歴データの永続化 |
| **Vanilla JS / CSS** | フレームワーク不使用、軽量動作 |
| **CSS Animations** | スロット回転・エフェクト演出 |
| **Canvas API** | 紙吹雪パーティクルエフェクト |
| **Google Fonts** | Press Start 2P / Inter |

---

## 📄 ライセンス

MIT License

---

<p align="center">
  <b>毎日のタスクを、くるくる楽しく。</b><br>
  <sub>RouleTask — Daily Task Slot 🎰</sub>
</p>
