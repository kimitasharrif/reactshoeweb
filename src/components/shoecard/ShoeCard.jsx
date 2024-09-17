import React from 'react';
import './shoecard.css';

const ShoeCard = ({ shoe, addToCart }) => {
  return (
    <div className="shoe-card">
      <img src={shoe.photo} alt={shoe.name} className="shoe-card-image" />
      <div className="shoe-card-content">
        <h3 className="shoe-card-title">{shoe.name}</h3>
        <p className="shoe-card-description">{shoe.description}</p>
        <p className="shoe-card-price">KES {shoe.price}</p>
        <button className="add-to-cart-button" onClick={() => addToCart(shoe)}>Add to Cart </button>

      </div>
    </div>
  );
};

export default ShoeCard;
