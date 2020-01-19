import { render } from "./view/html-util.js";
import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListView } from "./view/todoListView.js";

export class App {
  constructor() {
    //TodoListの初期化を行う
    this.todoListModel = new TodoListModel();
  }
  /**
   * Todoを追加時に呼ばれるリスナー関数
   * @param {string} title
   */
  handleAdd(title) {
    this.todoListModel.addTodo(
      new TodoItemModel({
        title,
        completed: false
      })
    );
  }
  /**
   * Todoの状態を更新時に呼ばれるリスナー関数
   * @param {{ id:number, completed: boolean }}
   */
  handleUpdate({ id, completed }) {
    this.todoListModel.updateTodo({ id, completed });
  }
  /**
   * Todoを削除時に呼ばれるリスナー関数
   * @param {{ id: number }}
   */
  handleDelete(id) {
    this.todoListModel.deleteTodo(id);
  }

  //マウントしてくれるメソッドを定義
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");

    //状態が更新されたら呼ばれる
    this.todoListModel.onChange(() => {
      const todoItems = this.todoListModel.getTodoItems();
      //todoListViewをnewする
      const todoListView = new TodoListView();

      //todoItemsに対応するTodoListViewを作成する
      //TodoListViewのcreateElementする
      const todoListElement = todoListView.createElement(todoItems, {
        // Todoアイテムが更新イベントが発生したときによばれるリスナー関数
        onUpdateTodo: ({ id, completed }) => {
          this.handleUpdate({ id, completed });
        },
        // Todoアイテムが削除イベントが発生したときによばれるリスナー関数
        onDeleteTodo: id => {
          this.handleDelete(id);
        }
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
      this.handleAdd(inputElement.value);

      // 入力欄を空文字列にしてリセットする
      inputElement.value = "";
    });
  }
}
