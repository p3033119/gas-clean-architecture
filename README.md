# はじめに

記事で公開したレポジトリです

# デプロイ方法

.clasp.json.template を同じくルートディレクトリにコピーして、.clasp.json ファイルを作ります。

```json
"scriptId": "<deploy対象のスクリプトID>"'
```

この部分を自分のデプロイしたスクリプト ID にいれます。

その後以下のコマンドを打てば連携できます。

```
npm run deploy
```
