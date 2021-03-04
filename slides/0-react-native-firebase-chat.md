<!-- classes: title -->

<h1>
<span>React Native×Firebaseで</span>
<span>オンライン指導用の</span>
<span>チャットアプリを開発している話</span>
</h1>

<!-- block-start: grid -->
<!-- account: twitter, meijin_garden -->
<!-- block-end -->

---

<!-- section-title: 目次 -->

# 目次

- 自己紹介
- 開発しているサービス
- アプリで開発している機能
- 開発体制
- React Nativeの利用ライブラリ
- React Nativeの品質管理
- React Nativeの落とし穴
- Firebaseの利用ライブラリ
- Firebaseの設計
- Firebaseの落とし穴
- この技術選定で良かったと思うこと
- まとめ

---

# 自己紹介

<!-- block-start: grid -->
<!-- block-start: column -->

<figure>
<img src="./selfintroduce.png" alt="自己紹介" class="self-introduce" width="200" height="320"/>
</figure>

<!-- block-end -->
<!-- block-start: column, left, flex-start -->

- ハンドルネーム”名人”
- 株式会社NoSchool CTO
- オンライン家庭教師を広める教育サービスを開発しています(https://manalink.jp)
- 好きな言語はTypeScript
- 趣味
  - 将棋(指すのも観戦するのも好き)
  - ゲーム(最近はゼルダ無双)

<!-- block-end -->
<!-- block-end -->

---

# 開発しているサービス

<!-- block-start: grid -->
<!-- block-start: column -->

<img src="./manalink.png" alt="Image from Gyazo" style={{ width: 350 }} />

<!-- block-end -->
<!-- block-start: column, left, flex-start -->

- マナリンク
- 中高生向けのオンライン家庭教師サービス
- 「優秀な先生が世界中どこに居ても教育の仕事ができるようにする」が目標
- 先生を一人ひとり審査していて、カナダ在住の先生とか、中高生に株を教える個性的な先生など在籍している
- Web上で先生を探して指導依頼ができる
- 指導開始後はアプリを使ってご家庭↔先生でやり取りができる

<!-- block-end -->
<!-- block-end -->

---

# 図にするとこんな感じ

<img src="./manalink_it.png" alt="Image from Gyazo" style={{ width: '100%' }} />

---

<!-- classes: left -->

# アプリで開発している機能

## いま
- 先生、生徒、保護者が利用できる
- チャット(文章、各種ファイル)で連絡できる
  - iOS / Android対応
  - Web↔アプリ間でもチャットができる

## これから
- 先生が勉強計画を立て、日々生徒が報告する機能
- 試験日や指導日を共有できる管理機能

**→先生個人が(塾などに属さなくても)デジタル化した指導を実践できるようにしていく**

---

# アプリの開発体制と利用技術

<!-- block-start: grid -->
<!-- block-start: flex -->

<img src="./app_screenshot.png" alt="Image from Gyazo" style={{ height: 500, width: 220 }} />
<img src="./app_screenshot2.png" alt="Image from Gyazo" style={{ height: 500, width: 220, marginLeft: 20 }} />

<!-- block-end -->
<!-- block-start: column, left, flex-start -->

- 開発体制
  - 業務委託エンジニア1名(+ときどきCTO)
  - めっちゃベンチャーです
- 利用技術
  - React Native
  - Expo(Managed Workflow)
  - Firebase
  - TypeScript

<!-- block-end -->
<!-- block-end -->

---

# React Nativeの利用ライブラリ

---

<!-- classes: left -->

# react-native-gifted-chat

<!-- block-start: grid -->

<!-- block-start: column -->

```jsx
<GiftedChat
  messages={chatMessages}
  onSend={onSend}
  placeholder="メッセージを入力"
  renderBubble={renderBubble}
  renderInputToolbar={renderInputToolbar}
  renderActions={renderActions}
  renderComposer={renderComposer}
  renderSend={renderSend}
  renderMessageImage={renderMessageImage}
  infiniteScroll
  // 以下略
/>
```

<!-- block-end -->
<!-- block-start: column, left -->

- チャット画面を丸っと囲うGiftedChatコンポーネントを置くだけ
- 各メッセージや送信ボタンなどは外からFunctionalなComponentを渡すことでカスタマイズできる
- カスタマイズしすぎるとライブラリの範囲を逸脱してくるので、いつかはリプレイスする

<!-- block-end -->
<!-- block-end -->

---

# チャットをゼロから作るのは割と大変

<!-- block-start: grid -->
<!-- block-start: flex -->

<img src="./app_chat_screenshot.png" alt="Image from Gyazo" style={{ width: 330 }} />

<!-- block-end -->
<!-- block-start: column, left, flex-start -->

#### 以下の内容はreact-native-gifted-chatがやっている

- チャットの吹き出しの形
  - よく見ると、連投したときの角丸の形が微妙に違う
  - 連投すると最後の投稿だけユーザーアイコンがつく
- 日時表示
  - 日付が変わるたびに日付表示をインサートしている
- 表示位置
  - 新着メッセージが来るたびに自動でスクロール

WebではVueで全部自作したけど結構大変だった(勉強にはなった)

これを機にLINEのUIをじっくり眺めるととても感心した思い出

<!-- block-end -->
<!-- block-end -->

---

# Firebase×React Hooks関連のライブラリ

## react-firebase-hooks

- https://github.com/CSFrequency/react-firebase-hooks
- FirestoreのCollectionデータ、読み込み中フラグ、エラー内容をセットで返すHook

```typescript
const [values, loading, error] = useCollectionData<T>(query, options);
```

<br />

## react-firebase-pagination-hooks

- チャットのメッセージをページングして、無限スクロールを実装
- loadMoreメソッドを実行すれば次のデータが読み込める

```typescript
const [messages, { loaded, loadingMore, loadMore }, error] = usePaginationData<T>(query, options);
```

---

# React Nativeの品質管理

- React Nativeに関してはテストコードは皆無(汗)
  - 機能が少なく、ライブラリ依存が大きいため
  - 毎回ウォークスルーテストを手動でしている
  - 複雑なフックが増えてきたので書きたい気持ちはある
- エラー検知はSentry
  - 画面遷移やメッセージ送信時などでイベントを発火して記録
  - エラーログが出ると、イベントを辿ることでユーザーの動きを擬似再現できる
  - ユーザーIDも紐付けができる
  - ソースマップをSentryにデプロイすることで、エラーが起きたソースコードの該当箇所を特定しやすい

```typescript
Sentry.addBreadcrumb({
  category: 'ACTION',
  message: 'SEND_CHAT_MESSAGE',
  data: {
    roomId: room.id,
    userId: user.id,
  },
});
```

---

# React Nativeの落とし穴

## ハマると解決が厳しい

- 某ライブラリと某ライブラリを併用し、かつ特定の動作をユーザーが行うとアプリがクラッシュする事案があった
  - 画面が突然ブラックアウトして強制的に再起動になる
  - 発動条件がニッチだが、本番環境で再現するユーザーがいて修正必須となった
  - 直接的な原因が全く不明
  - クラッシュが突然ブラックアウトするためエラーログが取れない
  - ライブラリのソースを追っても、ある程度追うとネイティブのコードになり謎が深まる

結局何が原因か分からないままに、当該ライブラリの組み合わせを変えることで解消...

---

## いつでもiOS/Androidで同じと思うなよ現象

- チャットで画像を送信するとき、画素数を落とさずにファイルサイズを小さくするために圧縮した
  - 画素数を落とすと文字の多い参考書の写真のやり取りで生徒さんが困ったりする
  - expo-image-manipulatorを使った
  - ImageManipulator.manipulateAsyncで圧縮しようとすると、同じ圧縮率を指定してもAndroidから実行すると**画像が圧縮されすぎてしまった**
  - OSごとに分岐して圧縮率を調整することで解消
  - ソースレビューの段階では何ら問題なく見えるので恐ろしい
- 他にも通知周りなど、細かいところで結局OSごとに分岐する箇所があるので、両OSでの実機確認は必須

---

# Firebaseの利用ライブラリ

---

## firestore-simple

- Firestoreに対する形安全なDAOが手に入れられるライブラリ

```typescript
const roomDao = firestoreSimple.collection<Room>({ path: 'rooms' })
const allRooms = await roomDao.fetchAll() // allRooms: Room[]
```

---

# Firebaseの設計

## Firestoreは書き込み処理に重点を置く

- SQLと違って読み取りクエリが貧弱
- 非正規化を許容して、読み取りの仕様に合わせて最適化したコレクションを作る
- 例：チャット部屋一覧で最新のメッセージを見せるために、messagesコレクションのonCreateでroomsコレクションに最新のメッセージを遅れて同期させる
- 例：全ての未読数の合計を出すために、messagesへのonWriteハンドラでユーザーごとに未読数を集計して別途保存する

---

# Firebaseの品質管理

## FunctionsでのエラーログをSlack通知

- https://zenn.dev/meijin/scraps/94d4a70eb77507
- Functionsでキャッチされなかった例外も含めSlack等でキャッチアップしたかった
- Cloud Functionsログ→GCP→ログルーター→PubSubトピック→Cloud Function→Slack通知

---

# Firebaseの落とし穴

- FirebaseというかExpoの落とし穴だが、ExpoへのPush通知は割と高頻度(週に数回)で502エラーになる
  - 400系なら分かるが、502ならどうしようもない
  - Expoに問い合わせたが、リトライ処理を実装してくれ、とのこと
- メッセージのonCreateハンドラ→Notificationコレクションに書き込み→NotificationコレクションのonCreateハンドラでPush通知を飛ばし、失敗時は再度同じコレクションに書き込み、的な設計でリトライを実装した

---

# React Nativeで良かったと思うこと

---

## 1. 簡単な修正ならWebエンジニア(僕)でも理解・実装できる

- そもそもReactが個人的に好き(突然の主観)
  - 最近練習を兼ねてRNで個人開発しているが、TSXを書くのが楽しいしスタイルもCSS感覚なので敷居が本当に低い
- 特にExpoのManaged Workflowの場合は環境構築時に各OSの存在をほとんど意識しなくて良いので楽
- 実例として、FrontのFirebaseは全く同じライブラリをVueでも使っているので、Webのコードをほぼそのままコピペで持ってこれる
  - 先日FirebaseのStorageにファイルを上げる時に、content-dispositionヘッダを指定することでダウンロード時にファイル名を維持する施策を実装したが、ほぼ同じコードでWeb/アプリを実装できたので便利さを実感した

---

## 2. 受験シーズンに間に合うように開発でき、機能検証ができた

- 昨年6月から開発スタートし、紆余曲折あったが10月にはリリースできた
- オンライン指導用のアプリなので、クロスプラットフォームで平等に使ってもらう必要があった
- React Nativeで開発することで受験シーズンに間に合い、積極的に使ってもらうことができた
- **チャットで親・先生・生徒がやり取りでき、ファイルや画像も送れるのはIT界隈の人間からすると当然だが、案外事業者側でそこまで内製する企業が少ないらしく、特に先生から好評をいただくことができた**
  - 実際、チャット機能は作り込みだすとそれなりに大変ですが(小声)
- 総じて、**教育事業が最も盛り上がる受験シーズンまでに、最低限どんな機能があればニーズが満たせるか理解できた**ので、React Nativeをやってよかった
  - スタートアップの検証サイクル的にはとても有り難い技術
  - (初期リリースの内容を予定から絞って、チャットをまずは作り込む判断も良かった)

---

# まとめ

- React Nativeのチャット機能開発
  - UIはreact-native-gifted-chatが便利
  - データ読み込みはHooks関連のライブラリが便利
  - エラー検知はSentryが便利
- Firebaseのチャット機能開発
  - 読み取りの都合に合わせて非正規化や冗長性を許容する
  - Cloud FunctionsのonWrite等を使って同期

---

# 告知

<img src="./announce_recruit.png" alt="Image from Gyazo" style={{ width: '100%' }} />
