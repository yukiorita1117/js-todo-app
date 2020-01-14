// URLとObjectのマップを受け取ってPOSTリクエストを送る関数
function sendPOSTRequest(url, data) {
  // XMLHttpRequestを使ってPOSTリクエストを送る
  const httpRequest = new XMLHttpRequest();
  //requestのheaderセットする時にContent-Typeつけるやつ会長がやってたやつやん
  // サーバに対して解析方法を指定するやつ
  httpRequest.getResponseHeader("Content-Type", "application/json");
  //dataをJSON形式に変換して送る
  //データをリクエスト ボディに含めて送る
  httpRequest.send(JSON.stringify(data));
  //新しく作成されたリクエストを初期化
  httpRequest.open("POST", url);
}

// formのsubmitイベントを受け取る関数
function onLoginFormSubmit(event) {
  const data = {
    userName: event.target.elements.userName,
    password: event.target.elements.password
  };
  sendPOSTRequest("/api/login", data);
}
