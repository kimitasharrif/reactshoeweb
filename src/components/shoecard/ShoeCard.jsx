import React from 'react';
import './shoecard.css'; // Import CSS for the card styling

const ShoeCard = ({ shoe }) => {
  return (
    <div className="shoe-card">
      <img src={shoe.photo} alt={shoe.name} className="shoe-card-image" />
      <div className="shoe-card-content">
        <h3 className="shoe-card-title">{shoe.name}</h3>
        <p className="shoe-card-description">{shoe.description}</p>
        <p className="shoe-card-price">KES {shoe.price}</p>
      </div>
    </div>
  );
};

export default ShoeCard;
