export class App {
  constructor() {
    console.log("Appを初期化したぞい");
  }
  //マウントしてくれるメソッドを定義
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    formElement.addEventListener("submit", event => {
      // submitイベントの本来の動作を止めるpreventDefaultメソッド
      event.preventDefault();
      console.log(`入力欄の値: ${inputElement.value}`);
    });
  }
}
