import React from 'react';
import Layout from '../layout/Layout';
import Categories from '../category/Categories'; // Import the Categories component
import ShoeList from '../shoelist/ShoeList';
import './maincontent.css';
import Footer from '../footer/Footer';

const MainContent = ({ selectedCategories }) => {
  return (
    <div className="main-content-container">
      <div className="layout">
        <Layout /> {/* Your layout with the top bar and navbar */}
      </div>
      <div className="content-area">
        <div className="categories-section">
          <Categories /> {/* Categories filter section */}
        </div>
        <div className="shoelist-section">
          <ShoeList selectedCategories={selectedCategories} /> {/* Display the filtered shoes */}
        </div>
      </div>
      <Footer /> {/* Placing the footer outside the content area to ensure it appears at the bottom of the page */}
    </div>
  );
}

export default MainContent;
