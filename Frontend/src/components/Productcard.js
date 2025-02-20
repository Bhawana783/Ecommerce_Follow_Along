// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
