import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './history.css';
import axios from 'axios';

export default function HistoryPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Hard-code the user ID as 1
    const userId = 1;

    // Fetch transaction history data from the history table using the user ID
    axios.get(`http://127.0.0.1:4000/history?user_id=${userId}`)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>History</h1>
      {transactions.map((transaction) => (
        <Paper key={transaction.product_id} className="product-tile">
          <div className="product-info">
            <Typography variant="body2" color="text.secondary" style={{ color: 'black' }}>
              Product ID: {transaction.product_id}
            <Typography className="product-name" variant="subtitle1" style={{ color: 'black' }}>
              Product Name: {transaction.product_name}
            </Typography>
            <Typography className="product-description" variant="body2" style={{ color: 'black' }}>
              Product Description: {transaction.product_description}
            </Typography>
            </Typography>
            <Typography className="product-price" variant="subtitle1" style={{ color: 'black' }}>
              Price: ${transaction.price}
            </Typography>
          </div>
          <div className="transaction-details">
            <div className="time-price" style={{ color: 'black' }}>
              <span className="with-underline">Time:</span><br />{transaction.timestamp} <br /><span className="with-underline">Transaction Hash:</span> <span class="transaction-hash">{transaction.transaction_hash}</span>
            </div>
          </div>
        </Paper>
      ))}
    </div>
  );
  
}
