// Shoes.js
import React from 'react';
import ShoeCard from '../shoecard/ShoeCard';

const Shoes = ({ addToCart }) => {
  const shoes = [
    // Sample list of shoes
  ];

  return (
    <div className="shoe-list">
      {shoes.map((shoe) => (
        <ShoeCard key={shoe.id} shoe={shoe} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Shoes;
