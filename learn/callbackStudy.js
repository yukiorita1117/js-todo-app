//引数としてコールバック関数を受け取る関数。
//コールバック関数を呼び出した際の戻り値をアラートに出力させる。
function main(callback, num) {
  alert(callback(num));
}

//偶数の値を引数として受け取り、『(引数の値)は偶数です。』と文字列を返す関数。
const evenNum = num => {
  return `${num}は偶数です。`;
};

//奇数の値を引数として受け取り、『(引数の値)は奇数です。』と文字列を返す関数。
const oddNum = num => {
  return `${num}は奇数です。`;
};

//整数の入力を受け付け、入力された数が偶数であれば関数evenNumを、奇数であれば関数oddNumをそれぞれコールバック関数として
//関数mainに渡す。
function chekNum() {
  const inputer = prompt(`数値を入力してください`);
  inputer % 2 === 0 ? main(evenNum, inputer) : main(oddNum, inputer);
}

chekNum();
