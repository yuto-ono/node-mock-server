# Node Mock Server

HTTPリクエストをログ出力するシンプルなモックサーバー

## 使用方法

サーバー起動：
```bash
node mock-server.js
```

テスト：
```bash
curl http://localhost:3000
curl -X POST -d "データ" http://localhost:3000/api/test
```

## 機能

- 全HTTPメソッドに対応
- リクエスト詳細（IP、メソッド、URL、ヘッダー、ボディ）をコンソール出力
- 全リクエストに「OK」レスポンス
- ポート3000で起動

## ngrokとの連携

外部からアクセス可能にする場合：

1. サーバー起動：
```bash
node mock-server.js
```

2. 別ターミナルでngrok起動：
```bash
ngrok http 3000
```

3. ngrokが提供するURLで外部からアクセス可能

## 用途

- API開発・テスト
- Webhookテスト（ngrok併用で外部サービスからのテストも可能）
- リクエストデバッグ
