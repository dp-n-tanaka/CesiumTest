# CesiumTest

## 概要
CesiumJSを用いて、プラトー3Dモデル(江東区)・水管橋位置を描画したもの。
<br>
GitHubを用いたhtmlの共有テスト。

## 公開リンク
https://dp-n-tanaka.github.io/CesiumTest/

## メモ
ローカルで動作する状態でアップロードしても、<br>
node_modules内のファイルを読み込むことができない。(jekyllのせい)
<br>
<br>
GitHub PagesはJekyllという静的サイトジェネレーターによってページが生成されるようになっており、デフォルトではnode_modules内のファイルを読み込んでくれない。
<br>
<br>
.nojekyllという空ファイルをルートとnode_modules内に置くことで解決した。

