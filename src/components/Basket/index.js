import React from 'react';

const Basket = ({ items, totalPrice, removeFromBasket }) => (
  <div>
    <aside className="basket">
      <h1>Basket</h1>

      <table className="products">
        <thead>
          <tr>
            <th>Product name</th>
            <th>qty</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            return (
              <tr key={item.id}>
                <th className="title">{item.title}</th>
                <th className="quantity">{item.quantity}</th>
                <th>
                  <a className="remove" onClick={removeFromBasket}>
                    X
                  </a>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="total">
        <span className="label">Total: </span>
        <span className="amount">£{totalPrice}</span>
      </div>
    </aside>
  </div>
);

export default Basket;
