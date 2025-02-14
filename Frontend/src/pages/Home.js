// src/pages/Home.js
import React from 'react';
import ProductCard from './components/ProductCard';

const Home = () => {
  // Sample product data
  const products = [
    {
      name: 'Product 1',
      image: 'https://via.placeholder.com/150',
      price: 29.99,
    },
    {
      name: 'Product 2',
      image: 'https://via.placeholder.com/150',
      price: 49.99,
    },
    {
      name: 'Product 3',
      image: 'https://via.placeholder.com/150',
      price: 19.99,
    },
    // You can add more products as needed
  ];

  return (
    <div className="home-container">
      <h1>Welcome to Our Store</h1>
      <div className="product-grid">
        {/* Map over the products array to create a card for each product */}
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
