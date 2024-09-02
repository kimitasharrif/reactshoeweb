import React, { useState, useEffect } from 'react';
import ShoeCard from '../shoecard/ShoeCard'; // Import the ShoeCard component
import './shoelist.css'; // Import CSS for the list styling
import axiosInstance from '../../helpers/axiosInstance';

const ShoeList = ({ selectedCategories }) => {
  const [shoes, setShoes] = useState([]);
  const [failure, setFailure] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/shoes")
      .then((response) => {
        setShoes(response.data || []); // Ensure that shoes is always an array
      })
      .catch((error) => {
        setFailure(error.message);
      });
  }, []);

  const filteredShoes = selectedCategories && selectedCategories.length > 0
    ? shoes.filter(shoe => selectedCategories.includes(shoe.category_id))
    : shoes;

  if (failure) {
    return <p>Error: {failure}</p>;
  }

  return (
    <div className="shoe-list">
      <div className="shoe-list-grid">
        {filteredShoes.map((shoe) => (
          <ShoeCard key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default ShoeList;
