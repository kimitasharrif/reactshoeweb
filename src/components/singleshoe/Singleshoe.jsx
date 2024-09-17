import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../helpers/axiosInstance';
import './singleshoe.css';

const SingleShoe = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [shoe, setShoe] = useState(null);
  const [failure, setFailure] = useState(null);

  useEffect(() => {
      console.log("Shoe ID:", id); // Check if the ID is correct
    axiosInstance

      .get(`/shoes/${id}`)
      .then((response) => {
        setShoe(response.data); // Fetch the shoe by its ID
      })
      .catch((error) => {
        setFailure(error.message);
      });
  }, [id]);

  if (failure) {
    return <p>Error: {failure}</p>;
  }

  if (!shoe) {
    return <p>Loading...</p>; // Display a loading message while fetching
  }

  return (
    <div className="single-shoe-container">
      <img src={shoe.photo} alt={shoe.name} className="single-shoe-image" />
      <div className="single-shoe-details">
        <h2>{shoe.name}</h2>
        <p>{shoe.description}</p>
        <p className="single-shoe-price">KES {shoe.price}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleShoe;
