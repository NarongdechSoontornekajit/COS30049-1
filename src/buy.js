import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

  return (
    <div className="transaction-tile">
      {/* Display product details */}
      <h2>Transaction</h2>
      <p>Transaction Hash: {transactionHash}</p>
      <p>Timestamp: {timestamp}</p> {/* Display the timestamp */}
      <p>Product ID: {productId}</p>
      <p>Price Name: {productName}</p>
      <p>Product Disc: {productDesc}</p>
      <p>Price: ${price}</p>
      <p>Status: Success</p>
      <p>Type: Buy</p>

      <button className="proceed-button" onClick={() => navigate('/history')}>Proceed</button>
    </div>
  );
}

export default Buy;
