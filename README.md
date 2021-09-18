# Grow plants web app(植物を育てよう)

## データの流れ
1. フロントエンドで音声認識を行い発話内容を文字に起こす
2. 発話文をバックエンドに送信
3. バックエンドからWebAPIにテキストを送信する
4. WebAPIで感情認識を行いバックエンドに返す
5. バックエンドからフロントエンドに感情分析結果を返す
6. 感情分析の結果に応じて画面を変更する


## 使用技術
* Go : バックエンド, サーバー
* HTML, CSS : フロントエンド
* Javascript : フロントエンド, 音声認識
* Flask : 言葉のネガポジ判定
* Firebase : アプリ内の画像, BGM, ユーザ情報の保存
* heroku : デプロイ

## Venv
- pip install Flask
- pip install textblob
- pip install googletrans==4.0.0-rc1
- pip install vaderSentiment
