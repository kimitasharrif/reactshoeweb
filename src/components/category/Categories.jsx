import React, { useEffect, useState } from "react";
import axiosInstance from "../../helpers/axiosInstance";
import './categories.css'

const Categories = ({ selectedCategories = [], setSelectedCategories }) => {
  const [categorys, setcategorys] = useState([]);

  useEffect(() => {
    axiosInstance.post("/categories")
      .then((response) => {
        setcategorys(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const handleCheckboxChange = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  return (
    <div className="categories-container">
      <h4>Filter by Category</h4>
      {categorys.map((category) => (
        <div key={category.category_id} className="category-item">
          <input
            type="checkbox"
            id={category.category_id}
            value={category.category_id}
            checked={selectedCategories.includes(category.category_id)} // Ensure checkbox reflects selection
            onChange={() => handleCheckboxChange(category.category_id)}
          />
          <label htmlFor={category.category_id}>{category.category_name}</label>
        </div>
      ))}
    </div>
  );
};

export default Categories;
