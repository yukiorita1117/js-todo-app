function Product(name, price) {
  this.name = name;
  this.price = price;
  console.log(this); //[object Object] これはProduct自身
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
  console.log(this); //ここのthisもProductのこと
}

console.log(new Food("cheese", 5).category);
console.log(new Food("cheese", 5).name);

// expected output:
// "food"
//"cheese"
