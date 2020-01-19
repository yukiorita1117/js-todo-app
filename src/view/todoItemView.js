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
    const todoItemElement = todoItem.completed
      ? element`<li><input type="checkbox" class="checkbox" checked>
          <s>${todoItem.title}</s>
          <button class="favorite">★</button>
          <button class="delete">x</button></input></li>`
      : element`<li><input type="checkbox" class="checkbox">
          ${todoItem.title}
          <button class="favorite">★</button>
          <button class="delete">x</button></input></li>`;

    // クラス名checkboxを持つ要素を取得
    const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
    // `<input type="checkbox">`のチェックが変更されたときに呼ばれるイベントリスナーを登録
    inputCheckboxElement.addEventListener("change", () => {
      // チェックボックスの表示が変わったタイミングで呼び出される処理
      // ここでモデルを更新する処理を呼ぶ
      // 指定したTodoアイテムの完了状態を反転させる → completedの切り替え
      onUpdateTodo({
        id: todoItem.id,
        completed: !todoItem.completed
      });
    });
    // 削除ボタン(x)をクリック時にTodoListModelからアイテムを削除する
    const deleteButtonElement = todoItemElement.querySelector(".delete");
    deleteButtonElement.addEventListener("click", () => {
      onDeleteTodo({
        id: todoItem.id
      });
    });
    // 作成したTodoアイテムのHTML要素を返す
    return todoItemElement;
  }
}
