// import { EventEmitter } from "./src/EventEmitter";
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
    console.log("listenerSetのなかみ", listenerSet); //Set { [Function] }
    listenerSet.add(listener);
  }

  /**
   * 指定したイベントをディスパッチするメソッド
   * @param {string} type イベント名
   */
  emit(type) {
    // 指定したイベントに対応するSetを取り出し、すべてのリスナー関数を呼び出す
    console.log(this._listeners); //Map { 'test-event' => Set { [Function], [Function] } }
    const listenerSet = this._listeners.get(type);
    if (!listenerSet) {
      return;
    }
    //Mapの中身を取り出す
    listenerSet.forEach(listener => {
      console.log("listenerの中身", listener);
      listener.call(this); //thisはEventEmitter自身
    });
  }
}

const event = new EventEmitter();
// イベントリスナー（コールバック関数）を登録
event.addEventListener("test-event", () => console.log("One!"));
event.addEventListener("test-event", () => console.log("Two!"));
// イベントをディスパッチする
event.emit("test-event");
// コールバック関数がそれぞれ呼びだされ、コンソールには次のように出力される
// "One!"
// "Two!"
