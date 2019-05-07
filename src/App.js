import React, { Component } from 'react';
import Product from './components/Product';
import Basket from './components/Basket';
import getProducts from './utils/getProducts';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      productItems: [],
      items: [],
      totalPrice: 0,
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    this.setState({ loading: true });

    getProducts().then(products => {
      this.setState({ loading: false, productItems: products });
    });
  };

  calculateTotalPrice(items) {
    let total = 0;

    items.forEach(item => {
      total += parseFloat(item.price, 10) * item.quantity;
    });

    return +total.toFixed(2);
  }

  addToBasket = id => {
    const item = this.state.productItems.find(item => item.id === id);
    const newItemsArray = this.state.items.slice();
    const matchingItem = newItemsArray.find(basketItem => basketItem.id === item.id);

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      item.quantity = 1;
      newItemsArray.push(item);
    }

    const newTotalPrice = this.calculateTotalPrice(newItemsArray);
    this.setState({
      items: newItemsArray,
      totalPrice: newTotalPrice,
    });
  };

  // TODO
  removeFromBasket = () => {
    console.log('TODO: Implement');
  };

  render() {
    const { loading, productItems, items, totalPrice } = this.state;
    return (
      <div className="App">
        <div>
          <section className="main">
            <section className="product_summary_collection">
              {!loading ? (
                productItems.map(product => {
                  return <Product productData={product} add={this.addToBasket} key={product.id} />;
                })
              ) : (
                <div className="spinner" />
              )}
            </section>

            <Basket
              items={items}
              totalPrice={totalPrice}
              removeFromBasket={this.removeFromBasket}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
