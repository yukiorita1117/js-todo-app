// const set = new Set();
// //初期化したセットは何も持たないって話
// console.log(set.size); // => 0

// //Setオブジェクトをnewする時に渡せるコンストラクタ引数はiterableオブジェクト
// // "value2"が重複するため、片方は無視される
// const set = new Set(["value1", "value2", "value2"]);
// // セットのサイズは2になる
// console.log(set.size); // => 2

// const set = new Set();
// // 値の追加
// set.add("a");
// console.log(set.size); // => 1
// // 重複する値は追加されない
// set.add("a");
// console.log(set.size); // => 1
// // 値の存在確認
// console.log(set.has("a")); // => true
// console.log(set.has("b")); // => false

// const set = new Set();
// set.add("a");
// set.add("b");
// console.log(set.size); // => 2
// set.delete("a");
// console.log(set.size); // => 1
// set.clear();
// console.log(set.size); // => 0

//Setの反復処理
const set = new Set(["json", "hard", "coder"]);
const results = [];
set.forEach(value => {
  results.push(value);
});
console.log(results); // => [ 'json', 'hard', 'coder' ]

//あまり有用なケースではないがfor~of文も使って配列に入れれる
const set = new Set(["json", "hard", "coder"]);
const results = [];
for (const value of set) {
  results.push(value);
}
console.log(results); // =>["json", "hard", "coder"]
