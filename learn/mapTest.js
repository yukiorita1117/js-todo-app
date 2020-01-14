// const map = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"]
// ]);
// // 2つのエントリーで初期化されている
// console.log(map.size); // => 2

//初期値にエントリーを入れる
// const map = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"]
// ]);
// const keys = [];
// console.log("keysメソッド", map.keys()); //keysメソッド [Map Iterator] { 'key1', 'key2' }
// // keysメソッドの戻り値(Iterator)を反復する
// for (const key of map.keys()) {
//   keys.push(key);
// }
// console.log(keys); // => ["key1","key2"]

// // keysメソッドの戻り値(Iterator)から配列を作成する
// const keysArray = Array.from(map.keys());
// console.log(keysArray); // => ["key1","key2"]

// //entriesメソッド
// const map = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"]
// ]);

// const entries = [];

// console.log(map); //  Map { 'key1' => 'value1', 'key2' => 'value2' }
// console.log(map.entries()); //  [Map Entries] { [ 'key1', 'value1' ], [ 'key2', 'value2' ] }

// for (const [key, value] of map.entries()) {
//   entries.push(`${key}:${value}`);
// }

// console.log(entries); //[ 'key1:value1', 'key2:value2' ]

//Map自身をfor~of文で回してもentiesメソッドと同じ結果が得られる
//entriesメソッド
// const map = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"]
// ]);

// const result = [];
// for (const [key, value] of map) {
//   result.push(`${key}:${value}`);
// }

// console.log(result); //[ 'key1:value1', 'key2:value2' ]

// //Objectではなぜダメなのか？なぜMapを使うべきなのか？
// const map = {};
// // マップがキーをもつことを確認する
// function has(key) {
//   return typeof map[key] !== "undefined";
// }
// console.log(has("foo")); // => false
// // Objectのプロパティが存在する
// console.log(has("constructor")); // => true
