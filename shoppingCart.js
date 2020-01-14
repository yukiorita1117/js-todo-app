// ショッピングカートクラス
class ShoppingCart {
  constructor() {
    // 商品とその数をもつマップ
    this.items = new Map();
  }
  // カートに商品を追加する
  addItem(item) {
    const count = this.items.get(item) || 0;
    this.items.set(item, count + 1);
  }
  // カート内の合計金額を返す
  getTotalPrice() {
    return Array.from(this.items).reduce((total, [item, count]) => {
      return total + item.price * count;
    }, 0);
  }
  // カートの中身を文字列にして返す
  toString() {
    return Array.from(this.items)
      .map(([item, count]) => {
        return `${item.name}:${count}`;
      })
      .join(",");
  }
}
const shoppingCart = new ShoppingCart();
// 商品一覧
const shopItems = [
  { name: "みかん", price: 100 },
  { name: "りんご", price: 200 }
];

// カートに商品を追加する
shoppingCart.addItem(shopItems[0]);
shoppingCart.addItem(shopItems[0]);
shoppingCart.addItem(shopItems[1]);

// 合計金額を表示する
console.log(shoppingCart.getTotalPrice()); // => 400
// カートの中身を表示する
console.log(shoppingCart.toString()); // => "みかん:2,りんご:1"
