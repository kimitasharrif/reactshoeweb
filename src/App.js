import './App.css';
import MainContent from './components/maincontent/MainContent';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Profile from './components/profile/Profile';
import NotFound from './components/notfound/NotFound';
import Categories from './components/category/Categories';
import Shoes from './components/Shoes/Shoes';
import Orders from './components/orders/Orders';
import Footer from './components/footer/Footer';
import Cart from './components/cart/cart';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    // Check if the shoe is already in the cart
    if (cart.some(item => item.shoe_id === shoe.shoe_id)) {
      alert("Shoe already in cart"); // Show alert if shoe is already in the cart
    } else {
      setCart([...cart, shoe]); // Add the selected shoe to the cart
      alert(`${shoe.name} added to cart!`); // Show alert for successful addition
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<MainContent addToCart={addToCart} />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
          <Route path="footer" element={<Footer />} />
          <Route path="categories" element={<Categories />} />
          <Route path="cart" element={<Cart cartItems={cart} setCart={setCart} />} /> {/* Pass cart items and setCart */}
          <Route path="shoes" element={<Shoes />} />
          <Route path="orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
