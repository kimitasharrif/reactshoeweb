// import React from 'react';
// import ShoeCard from '../shoecard/ShoeCard'; // Adjust path if needed
// import './shoes.css'; // Import CSS for the shoes list styling
// import axiosInstance from '../../helpers/axiosInstance';


// const Shoes = ({ addToCart }) => {
//   const [shoes, setShoes] = React.useState([]);

//   React.useEffect(() => {
//     // Fetch shoes data here
//     // For example, you might use axiosInstance to get data
//     axiosInstance.get('/shoes')
//       .then(response => setShoes(response.data))
//       .catch(error => console.error("Error fetching shoes:", error));
//   }, []);

//   return (
//     <div className="shoes-list">
//       {shoes.map(shoe => (
//         <ShoeCard key={shoe.id} shoe={shoe} addToCart={addToCart} />
//       ))}
//     </div>
//   );
// };

// export default Shoes;
