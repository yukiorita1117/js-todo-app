import { TodoItemModel } from "../model/TodoItemModel.js";
import { TodoItemView } from "./TodoItemView.js";

// TodoItemViewをインスタンス化
const todoItemView = new TodoItemView();
// 対応するTodoItemModelを作成する
const todoItemModel = new TodoItemModel({
  title: "新しいtodo",
  completed: false
});

// TodoItemModelからHTML要素を作成する
const todoItemElement = todoItemView.createElement(todoItemModel, {
  onUpdateTodo: () => {
    // チェックボックスが更新されたときに呼ばれるリスナー関数
  },
  onDeleteTodo: () => {
    // 削除ボタンがクリックされたときによばれるリスナー関数
  }
});

// <li>要素が入る
console.log(todoItemElement);
