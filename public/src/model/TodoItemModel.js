// ユニークなIDを管理する変数
let todoIdx = 0;

export class TodoItemModel {
  /**
   * @param {string} title Todoアイテムのタイトル
   * @param {boolean} completed Todoアイテムが完了済みならばtrue、そうでない場合はfalse
   */
  constructor({ title, completed, isFavorite }) {
    // idは自動的に連番となりそれぞれのインスタンス毎に異なるものにしないとあかんよね
    // つまり呼ばれるItem全て異なるidにしないといけない,なのでインクリメントしているし、letでtodoIdxは定義する
    this.id = todoIdx++;
    this.title = title;
    this.completed = completed;
    this.isFavorite = isFavorite;
  }
}
