# RouleTask

スロットマシン風タスクリマインダー。Chrome拡張 Manifest V3、サイドパネル中心。
ジャンル（リール）に複数タスクを登録 → ROLL! で各リールから1つずつランダム選出。

## ファイル構成

- `manifest.json` / `background.js` — 拡張の枠
- `sidepanel.html` / `sidepanel.css` / `sidepanel.js` — UI とロジック
- `themes.js` — カラーテーマ
- `wordbook/` — 単語帳リール用 CSV
- `icons/` — 拡張アイコン

## 単語帳（シス単）

リール用CSVは `wordbook/stage{1..5}.csv`。`importCSV`（`sidepanel.js:1581`）の仕様に合わせて **ヘッダーなし・2列 `genre,task` 形式**。1ページ1タスクで `Stage N,P〇〇`。1列目がリール名、2列目がそのリール内のタスクとして取り込まれる。

### システム英単語（5訂版）の構成

| Stage | ページ範囲 | ページ数 |
|------|-----------|---------|
| Stage 1 | P2〜108 | 107 |
| Stage 2 | P110〜204 | 95 |
| Stage 3 | P206〜280 | 75 |
| Stage 4 | P282〜322 | 41 |
| Stage 5 | P324〜357 | 34 |

- 単語帳部分の総ページ数：**352P**
- 索引記載の総単語数：**3961語**
- Stage間にあるページ（P109, P205, P281, P323）は章扉等のためタスクから除外

## TODO

- 各ページに対応する画像の追加（先送り中）
