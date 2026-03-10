import React from 'react';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'Aura Classic Tee', price: 29.99, image: 'https://via.placeholder.com/250x250?text=Aura+Tee' },
  { id: 2, name: 'Misty Hoodie', price: 59.99, image: 'https://via.placeholder.com/250x250?text=Misty+Hoodie' },
  { id: 3, name: 'Urban Explorer Jacket', price: 129.99, image: 'https://via.placeholder.com/250x250?text=Urban+Jacket' },
  { id: 4, name: 'Zenith Crewneck', price: 49.99, image: 'https://via.placeholder.com/250x250?text=Zenith+Crewneck' },
  { id: 5, name: 'Nova Joggers', price: 64.99, image: 'https://via.placeholder.com/250x250?text=Nova+Joggers' },
  { id: 6, name: 'Eclipse Denim', price: 89.99, image: 'https://via.placeholder.com/250x250?text=Eclipse+Denim' },
  { id: 7, name: 'Solstice Beanie', price: 24.99, image: 'https://via.placeholder.com/250x250?text=Solstice+Beanie' },
  { id: 8, name: 'Celestial Scarf', price: 34.99, image: 'https://via.placeholder.com/250x250?text=Celestial+Scarf' },
];

const HomePage = () => {
  const { addToCart } = useCart();

  return (
    <div className="page-container">
      <h2>Our Collection</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;