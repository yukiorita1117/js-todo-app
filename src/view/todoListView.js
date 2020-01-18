import { element } from "./html-util.js";

export class TodoListView {
  /**
   * `todoItems`に対応するTodoリストのHTML要素を作成して返す
   * @param {TodoItemModel[]} todoItems TodoItemModelの配列
   * @param {function({id:string, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
   * @param {function({id:string})} onDeleteTodo 削除ボタンのクリックイベントリスナー
   * @returns {Element} TodoItemModelの配列に対応したリストのHTML要素
   */
  createElement(todoItems, { onUpdateTodo, onDeleteTodo }) {
    // 追加するTodoアイテムの要素(li要素)を作成する (elementはview)
    const todoListElement = element`<ul />`;
    const todoItems = this.todoListModel.getTodoItems();

    todoItems.forEach(todoItem => {
      const todoItemView = new TodoItemView();
      todoItemElement = todoItemView.createElement(todoItem, {
        onUpdateTodo,
        onDeleteTodo
      });
      todoListElement.appendChild(todoItemElement);
    });
    return todoListElement;
  }
}
