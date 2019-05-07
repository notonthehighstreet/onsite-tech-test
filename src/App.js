import React, { Component } from 'react';
import Product from './components/Product';
import Basket from './components/Basket';
import BasketModel from './model/basketModel';
import getProducts from './utils/getProducts';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.basket = BasketModel;

    this.state = {
      loading: false,
      productItems: [],
      items: this.basket.items,
      totalPrice: this.basket.totalPrice,
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  addToBasket = id => {
    const item = this.state.productItems.find(item => item.id === id);

    if (item) {
      this.basket.addToBasket(item);
      this.setState({
        items: this.basket.items,
        totalPrice: this.basket.totalPrice,
      });
    }
  };

  removeFromBasket = () => {};

  fetchProducts = () => {
    // mock, will just create some
    this.setState({ loading: true });

    getProducts().then(products => {
      this.setState({ loading: false, productItems: products });
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <section className="main">
            <section className="product_summary_collection">
              {!this.state.loading ? (
                this.state.productItems.map(product => {
                  return <Product productData={product} add={this.addToBasket} key={product.id} />;
                })
              ) : (
                <div className="spinner" />
              )}
            </section>

            <Basket
              items={this.state.items}
              totalPrice={this.state.totalPrice}
              removeFromBasket={this.removeFromBasket}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
