class BasketItem {
  constructor(opts) {
    this.product = opts.product;
    this.quantity = 1;
  }

  getCost() {
    return this.product.price * this.quantity;
  }
}

class BasketModel {
  constructor(opts = {}) {
    this.items = opts.items || [];
    this.totalPrice = this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = 0;

    this.items.forEach(item => {
      this.totalPrice += item.getCost();
    });

    this.totalPrice = +this.totalPrice.toFixed(2);
    return this.totalPrice;
  }

  addToBasket(item) {
    const matchingItem = this.items.find(
      basketItem => basketItem.product.id === item.id
    );

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.items.push(new BasketItem({ product: item }));
    }

    this.calculateTotalPrice();
  }

  removeFromBasket() {}
}

export default new BasketModel();
