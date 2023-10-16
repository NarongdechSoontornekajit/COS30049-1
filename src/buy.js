import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import "./buy.css";

function Buy() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get('productId');
  const productName = searchParams.get('productName');
  const productDesc = searchParams.get('productDesc');
  const price = searchParams.get('price');
  const transactionHash = searchParams.get('transactionHash');
  const timestamp = searchParams.get('timestamp');

  const [isLoading, setIsLoading] = useState(false);

  const handleProceed = () => {
    // Create query parameters for the GET request
    const queryParams = `?product_id=${productId}&product_name=${productName}&product_description=${productDesc}&price=${price}&user_id=1&transaction_hash=${transactionHash}&timestamp=${timestamp}`;

    // Send a GET request with the query parameters
    setIsLoading(true); // You can set loading state here
    axios.get(`http://127.0.0.1:4000/insert_history${queryParams}`)
      .then(response => {
        console.log('Transaction data retrieved successfully:', response.data);
        setIsLoading(false); // Set loading state back to false
        // You can handle the response here, but it won't navigate to a new URL
      })
      .catch(error => {
        console.error('Error retrieving transaction data:', error);
        setIsLoading(false); // Set loading state back to false
      });

    // Navigate to the '/history' page
    navigate('/history');
  };

  return (
    <div className="transaction-tile">
      {/* Display product details */}
      <h2>Transaction</h2>
      <p>Transaction Hash: {transactionHash}</p>
      <p>Timestamp: {timestamp}</p>
      <p>Product ID: {productId}</p>
      <p>Price Name: {productName}</p>
      <p>Product Disc: {productDesc}</p>
      <p>Price: ${price}</p>
      <p>Status: Success</p>
      <p>Type: Buy</p>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button className="proceed-button" onClick={handleProceed}>Proceed</button>
      )}
    </div>
  );
}

export default Buy;
