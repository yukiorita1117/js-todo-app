let todoIdx = 0;

class TodoItemModel {
  /**
   * @param {string} title Todoアイテムのタイトル
   * @param {boolean} completed Todoアイテムが完了済みならばtrue、そうでない場合はfalse
   */
  constructor({ title, completed }) {
    this.id = todoIdx++;
    this.title = title;
    this.completed = completed;
  }
}

const item = new TodoItemModel({
  title: "未完了のTodoアイテム",
  completed: false
});
const completedItem = new TodoItemModel({
  title: "完了済みのTodoアイテム",
  completed: true
});
// それぞれの`id`は異なる
console.log(item.id !== completedItem.id); // => true
