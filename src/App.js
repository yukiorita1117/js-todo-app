import { element, render } from "./view/html-util.js";
import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";

export class App {
  constructor() {
    //TodoListの初期化を行う
    this.todoListModel = new TodoListModel();
  }
  //マウントしてくれるメソッドを定義
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");

    //状態が更新されたら呼ばれる
    this.todoListModel.onChange(() => {
      // 追加するTodoアイテムの要素(li要素)を作成する
      const todoListElement = element`<ul />`;
      const todoItems = this.todoListModel.getTodoItems();
      todoItems.forEach(item => {
        const todoItemElement = element`<li>${item.title}</li>`;
        todoListElement.appendChild(todoItemElement);
      });
      // containerElementの中身をtodoListElementで上書きする
      render(todoListElement, containerElement);
      todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
    });

    // フォームを送信したら、新しいTodoItemModelを追加する
    //submitされた時の動作
    formElement.addEventListener("submit", event => {
      // submitイベントの本来の動作を止めるpreventDefaultメソッド
      event.preventDefault();

      // 新しいTodoItemをTodoListへ追加する
      this.todoListModel.addTodo(
        new TodoItemModel({
          title: inputElement.value,
          completed: false
        })
      );

      // 入力欄を空文字列にしてリセットする
      inputElement.value = "";
    });
  }
}
