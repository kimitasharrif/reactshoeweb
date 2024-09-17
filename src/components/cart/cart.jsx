import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';
import './cart.css';
import { FaArrowRightLong } from "react-icons/fa6";

const Cart = ({ cartItems, setCart }) => {
  const [items, setItems] = useState(cartItems);

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter(item => item.shoe_id !== id);
    setItems(updatedItems);
    if (typeof setCart === 'function') {
      setCart(updatedItems); // Update the cart in the parent component
    } else {
      console.error('setCart is not a function');
    }
  };

  return (
    <div className="main-content-container">
      <div className="layout">
        <Layout />
      </div>
      <div className="content-area">
        <div className="cart">
          <h2>Shopping Cart</h2>
          {items.length === 0 ? (
            <div>
              <p>Your cart is empty</p>
              <Link to="/" className="go-home-link">Go to Home</Link>
            </div>
          ) : (
            <>
              <ul className="cart-list">
                {items.map((item) => (
                  <li key={item.shoe_id} className="cart-item">
                    <img src={item.photo} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p>KES {item.price}</p>
                    </div>
                    <button
                      className="remove-item-button"
                      onClick={() => removeItem(item.shoe_id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className='checkout'>
              <div className="cart-total">
                <h3>Total: KES {calculateTotalPrice()}</h3>
              </div>
              <FaArrowRightLong />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
