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
      // // 追加するTodoアイテムの要素(li要素)を作成する (elementはview)
      // const todoListElement = element`<ul />`;
      // const todoItems = this.todoListModel.getTodoItems();
      todoItems.forEach(item => {
        //   const todoItemElement = item.completed
        //     ? element`<li><input type="checkbox" class="checkbox" checked>
        //     <s>${item.title}</s>
        //     <button class="delete">x</button></input></li>`
        //     : element`<li><input type="checkbox" class="checkbox">
        //     ${item.title}
        //     <button class="delete">x</button></input></li>`;

        // クラス名checkboxを持つ要素を取得
        const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
        // console.log("todoItemElementの中身", todoItemElement);
        // console.log("inputCheckboxElementの中身", inputCheckboxElement);

        // // `<input type="checkbox">`のチェックが変更されたときに呼ばれるイベントリスナーを登録
        // inputCheckboxElement.addEventListener("change", () => {
        //   // チェックボックスの表示が変わったタイミングで呼び出される処理
        //   // ここでモデルを更新する処理を呼ぶ
        //   // 指定したTodoアイテムの完了状態を反転させる → completedの切り替え
        //   this.todoListModel.updateTodo({
        //     id: item.id,
        //     completed: !item.completed
        //   });
        // });

        // // 削除ボタン(x)をクリック時にTodoListModelからアイテムを削除する
        // const deleteButtonElement = todoItemElement.querySelector(".delete");
        // deleteButtonElement.addEventListener("click", () => {
        //   this.todoListModel.deleteTodo({
        //     id: item.id
        //   });
        // });

        todoListElement.appendChild(todoItemElement);
      });
      // containerElementの中身をtodoListElementで上書きする(view)
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
