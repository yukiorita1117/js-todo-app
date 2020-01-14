// const map = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"]
// ]);
// // 2つのエントリーで初期化されている
// console.log(map.size); // => 2

const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"]
]);
const keys = [];
// keysメソッドの戻り値(Iterator)を反復する
for (const key of map.keys()) {
  keys.push(key);
}
console.log(keys); // => ["key1","key2"]
// keysメソッドの戻り値(Iterator)から配列を作成する
const keysArray = Array.from(map.keys());
console.log(keysArray); // => ["key1","key2"]
