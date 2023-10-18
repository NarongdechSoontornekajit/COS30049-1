import React, { useState, useEffect} from 'react';
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

  useEffect(() => {
    // Check if the user is authenticated (has a valid token)
    const accessToken = localStorage.getItem('userId');
    if (!accessToken) {
      // Redirect to the login page if the user is not authenticated
      navigate('/login');
    }
  }, [navigate]);

const handleProceed = async () => {
  try {
    // Get the user ID from local storage (assuming it's stored in the token)
    const userId = localStorage.getItem('userId');

    if (!userId) {
      console.error('User ID not found in local storage');
      navigate('/login');
      return;
    }

    // Create data object for the POST request
    const data = {
      product_id: productId,
      product_name: productName,
      product_description: productDesc,
      price,
      transaction_hash: transactionHash,
      user_id: userId,
      timestamp,
    };
    console.log(data);
    // Send a POST request to insert the transaction into history
    setIsLoading(true);
    const response = await axios.post('http://127.0.0.1:8000/insert_history', data);

    console.log('Transaction data retrieved successfully:', response.data);
    setIsLoading(false);

    // Navigate to the '/history' page
    navigate('/history');
  } catch (error) {
    console.error('Error retrieving transaction data:', error);
    setIsLoading(false);
  }
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
