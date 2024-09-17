import React, { useState } from 'react';
import Layout from '../layout/Layout';
import Categories from '../category/Categories'; // Import the Categories component
import ShoeList from '../shoelist/ShoeList';
import './maincontent.css';
import Footer from '../footer/Footer';

const MainContent = ({ addToCart }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <div className="main-content-container">
      <div className="layout">
        <Layout />
      </div>
      <div className="content-area">
        <div className="categories-section">
          <Categories 
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
        <div className="shoelist-section">
          <ShoeList 
            selectedCategories={selectedCategories} 
            addToCart={addToCart} 
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainContent;
