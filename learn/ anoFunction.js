// *
// * 以下に従ってプログラムを作成してください。
// * ①数値型の配列a、配列bを作成してください。
// * ②配列a,bの要素数と全要素はキーボードから読み込んでください。
// * ③配列aと配列b全要素の値を交換する関数changeArrayを作成してください。(無名関数で作成)
// * ④関数changeArrayは数値型の配列を二つ、引数として受け取ります。(戻り値は無し）
// * ⑤二つの配列の要素数が等しくない場合は、小さいほうの要素数分の要素を交換してください。
// * 例：配列a {1,2,3,4 }        配列b { 4,3,2 }
// *      値を交換→  配列a  { 4,3,2,4 }    配列b   { 1,2,3 }
// * ⑥交換前と交換後の各配列の全要素をアラートで表示させてください。
// */

arrayA = [];
arrayB = [];

const inputA = prompt(`配列Aに入れる数字を入力してください`);
const inputB = prompt(`配列Bに入れる数字を入力してください`);

for (let i = 0; i < inputA.length; i++) {
  arrayA.push(inputA[i]);
}
for (let i = 0; i < inputB.length; i++) {
  arrayB.push(inputB[i]);
}

alert(`配列Aは{${arrayA}}、配列Bは{${arrayB}}`);

const changeArray = (arrayA, arrayB) => {
  if (arrayA.length !== arrayB.length) {
    if (arrayA.length > arrayB.length) {
      const B_Max = Math.max.apply(null, arrayB);
      const A_Min = Math.min.apply(null, arrayA);

      const newArrayA = arrayA.filter(n => n !== A_Min.toString());
      newArrayA.push(B_Max);
      const newArrayB = arrayB.filter(n => n !== B_Max.toString());
      newArrayB.push(A_Min);

      alert(`交換後の配列Aは{${newArrayA}},配列Bは{${newArrayB}}`);
    } else if (arrayB.length > arrayA.length) {
      const A_Max = Math.max.apply(null, arrayA);
      const B_Min = Math.min.apply(null, arrayB);

      const newArrayA = array.filter(n => n !== A_Max.toString());
      newArrayA.push(B_Min);
      const newArrayB = array.filter(n => n !== B_Min.toString());
      newArrayB.push(A_Max);

      alert(`交換後の配列Aは${newArrayA},配列Bは${newArrayB}`);
    }
  }
};

changeArray(arrayA, arrayB);
