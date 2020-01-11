import { element } from "./view/html-util.js";

export class App {
  constructor() {}
  //マウントしてくれるメソッドを定義
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");
    // Todoアイテム数
    let todoItemCount = 0;

    //submitされた時の動作
    formElement.addEventListener("submit", event => {
      // submitイベントの本来の動作を止めるpreventDefaultメソッド
      event.preventDefault();

      // 追加するTodoアイテムの要素(li要素)を作成する
      const todoElement = element`<li>${inputElement.value}</li>`;
      // Todoアイテムをcontainerに追加する
      containerElement.appendChild(todoElement);
      // Todoアイテム数を+1し、表示されてるテキストを更新する
      todoItemCount += 1;
      todoItemCountElement.textContent = `Todoアイテム数: ${todoItemCount}`;
      // 入力欄を空文字列にしてリセットする
      inputElement.value = "";
    });
  }
}
