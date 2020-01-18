import { element } from "./html-util.js";

export class TodoItemView {
  /**
   * `todoItem`に対応するTodoアイテムのHTML要素を作成して返す
   * @param {TodoItemModel} todoItem
   * @param {function({id:string, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
   * @param {function({id:string})} onDeleteTodo 削除ボタンのクリックイベントリスナー
   * @returns {Element}
   */
  createElement(todoItem, { onUpdateTodo, onDeleteTodo }) {
    // 追加するTodoアイテムの要素(li要素)を作成する (elementはview)
    const todoListElement = element`<ul />`;
    const todoItems = this.todoListModel.getTodoItems();

    todoItems.forEach(item => {
      const todoItemElement = item.completed
        ? element`<li><input type="checkbox" class="checkbox" checked>
          <s>${item.title}</s>
          <button class="delete">x</button></input></li>`
        : element`<li><input type="checkbox" class="checkbox">
          ${item.title}
          <button class="delete">x</button></input></li>`;

      // クラス名checkboxを持つ要素を取得
      const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
      // `<input type="checkbox">`のチェックが変更されたときに呼ばれるイベントリスナーを登録
      inputCheckboxElement.addEventListener("change", () => {
        // チェックボックスの表示が変わったタイミングで呼び出される処理
        // ここでモデルを更新する処理を呼ぶ
        // 指定したTodoアイテムの完了状態を反転させる → completedの切り替え
        onUpdateTodo({
          id: item.id,
          completed: !item.completed
        });
      });
      // 削除ボタン(x)をクリック時にTodoListModelからアイテムを削除する
      const deleteButtonElement = todoItemElement.querySelector(".delete");
      deleteButtonElement.addEventListener("click", () => {
        onDeleteTodo({
          id: item.id
        });
      });
    });
  }
}
