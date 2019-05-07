import React from 'react';

const addToBasketText = 'Add to Basket';

const Product = ({ productData, add }) => (
  <div>
    <article className="product_summary">
      <img className="product_image" src={productData.image} alt={productData.altText} />

      <h1 className="product_title">{productData.title}</h1>
      <span className="product_price">{`£${productData.price}`}</span>

      <a className="add_to_basket" onClick={() => add(productData.id)}>
        {addToBasketText}
      </a>
    </article>
  </div>
);

export default Product;
