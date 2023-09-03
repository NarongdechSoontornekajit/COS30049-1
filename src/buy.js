import React from 'react';
import { useLocation } from 'react-router-dom';
import "./buy.css";

function Buy() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get('productId');

  // Fetch product details using the productId and display them in your component

  return (
    <div className="transaction-tile">
      {/* Display product details */}
      <h2>Transaction</h2>
      <p>Smart Contract Information: 000000000000 000000000000</p>
      <p>Status: Success</p>
      <p>Timestamp: 26 Aug 2023 02:30:42 PM +UTC</p>
      <p>Value: $10</p>
      <p>Account: Random User</p>
      <p>Type: Buy</p>

      <button className="proceed-button">Proceed</button>
    </div>
  );
}

export default Buy;

