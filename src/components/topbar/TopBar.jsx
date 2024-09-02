import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';
import '../../index.css';
import { GiShoppingCart } from "react-icons/gi";
import { AiFillCalendar, AiOutlineAppstore } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import ReactLogout from '../../helpers/Logout'; // Ensure this is a function or a hook

const TopBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { logout } = ReactLogout(); // Ensure this is properly implemented

  useEffect(() => {
    // Check if the user is logged in
    const accessToken = localStorage.getItem('access_token');
    setIsLoggedIn(!!accessToken);
  }, []);

  // Get username from local storage
  const username = localStorage.getItem("surname");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Implement your search logic here
    console.log("Search Query: ", e.target.value);
  };

  return (
    <nav className='topbar'>
      {/* left side */}
      <div className="topbar-admin">SNEAKER HUB</div>

      {/* right side */}
      <div className="topbar-content">
        
        <div className="topbar-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
        {/* <div className="topbar-account">
          <span>User: {username}</span>
          
        </div> */}
        <div className="topbar-icon">
          <div className="topbar-image">
           <span>Account<CgProfile /></span>
          </div>
          

          {/* Conditionally render logout or signup button */}
          {isLoggedIn ? (
            <button className="btn btn-dark btn-sm" onClick={logout}>Log Out</button>
          ) : (
            <Link to="/signup" className="btn btn-primary btn-sm">Sign Up</Link>
          )}
          <div>
            <GiShoppingCart />
          </div> 
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
