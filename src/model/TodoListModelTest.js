class EventEmitter {
  constructor() {
    // 登録する [イベント名, Set(リスナー関数)] を管理するMap作る
    this._listeners = new Map();
  }

  /**
   * 指定したイベントが実行されたときに呼び出されるリスナー関数を登録するメソッド
   * @param {string} type イベント名
   * @param {Function} listener イベントリスナー
   */
  addEventListener(type, listener) {
    // 指定したイベントに対応するSetを作成しリスナー関数を登録する
    if (!this._listeners.has(type)) {
      //もしtypeを持ってなかったらSetをnewしてtypeをセットする
      this._listeners.set(type, new Set());
    }
    const listenerSet = this._listeners.get(type);
    console.log("ここではlistenerはないはず", listenerSet);
    listenerSet.add(listener);
  }

  /**
   * 指定したイベントをディスパッチするメソッド
   * @param {string} type イベント名
   */
  emit(type) {
    // 指定したイベントに対応するSetを取り出し、すべてのリスナー関数を呼び出す
    const listenerSet = this._listeners.get(type);
    if (!listenerSet) {
      return;
    }
    listenerSet.forEach(listener => {
      listener.call(this);
    });
  }

  /**
   * 指定したイベントのイベントリスナーを解除する
   * @param {string} type イベント名
   * @param {Function} listener イベントリスナー
   */
  removeEventListener(type, listener) {
    // 指定したイベントに対応するSetを取り出し、該当するリスナー関数を削除する
    const listenerSet = this._listeners.get(type);
    if (!listenerSet) {
      return;
    }
    listenerSet.forEach(ownListener => {
      if (ownListener === listener) {
        listenerSet.delete(listener);
      }
    });
  }
}
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

class TodoListModel extends EventEmitter {
  constructor(items = []) {
    super();
    this.items = items;
  }

  getTotalCount() {
    return this.items.length;
  }

  getTodoItems() {
    return this.items;
  }

  onChange(listener) {
    this.addEventListener("change", listener);
  }

  emitChange() {
    this.emit("change");
  }

  addTodo(todoItem) {
    this.items.push(todoItem);
    this.emitChange();
  }
}

// 新しいTodoリストを作成する
const todoListModel = new TodoListModel();
// 現在のTodoアイテム数は0
console.log(todoListModel.getTotalCount()); // => 0
// Todoリストが変更されたら呼ばれるイベントリスナーを登録する
todoListModel.onChange(() => {
  console.log("TodoListの状態が変わりました");
});
// 新しいTodoアイテムを追加する
// => `onChange`で登録したイベントリスナーが呼び出される
todoListModel.addTodo(
  new TodoItemModel({
    title: "新しいTodoアイテム",
    completed: false
  })
);
// Todoリストにアイテムが増える
console.log(todoListModel.getTotalCount()); // => 1
