import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9090/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to Our Store</h1>
      <div className="product-grid">
        {/* Map over the fetched products array to create a card for each product */}
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Home;