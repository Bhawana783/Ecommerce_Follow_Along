// src/components/ProductCard.js
import React from 'react';

// Functional component that accepts product details as props
const ProductCard = ({ name, image, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price}</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
