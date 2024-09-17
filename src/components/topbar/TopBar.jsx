import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import '../../index.css';
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineBank } from "react-icons/ai";
import { CgProfile } from 'react-icons/cg';
import ReactLogout from '../../helpers/Logout'; // Ensure this is a function or a hook

const TopBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className='topbar'>
      {/* left side */}
      <div className="topbar-brand">
       <AiOutlineBank />
                    <span>SNEAKER HUB</span>
                    </div>
         
      <Link to="/" className="topbar-home"><div className="home-icon">Home</div></Link>

      {/* <div className="topbar-content"> */}
        <div className="topbar-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
        <div className="topbar-icon">
          <div className="topbar-image" onClick={toggleDropdown}>
            <span>Account <CgProfile /><RiArrowDropDownLine /></span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-item">Hello, {username}</div>
                <Link to="/profile" className="dropdown-item">Profile</Link>
                {isLoggedIn ? (
                  <button className="dropdown-item" onClick={logout}>Log Out</button>
                ) : (
                  <>
                    <Link to="/signup" className="dropdown-item">Sign Up</Link>
                    <Link to="/signin" className="dropdown-item">Log In</Link>
                  </>
                )}
              </div>
            )}
          </div>
      
          <Link to="/cart">
            <div className="cart-icon">
              <GiShoppingCart size={24} />
            </div>
          </Link>
        </div>
      {/* </div> */}
    </nav>
  );
}

export default TopBar;
