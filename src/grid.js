import * as React from 'react';
import Box from '@mui/material/Box';
import './grid.css'; // Import the grid.css file


const transactions = [
  {
    itemName: 'Product A',
    itemDescription: 'Description of Product A',
    time: '10:30 AM',
    price: '$100',
  },
  {
    itemName: 'Product B',
    itemDescription: 'Description of Product B',
    time: '11:45 AM',
    price: '$50',
  },
  {
    itemName: 'Product C',
    itemDescription: 'Description of Product C',
    time: '1:15 PM',
    price: '$75',
  },
  // Add more transactions as needed
];

export default function BasicGrid() {
  return (
    <Box className="history-container">
      <h2 className="history-heading">History</h2>
      {transactions.map((transaction, index) => (
        <div className="transaction-row" key={index}>
          <div className="transaction-details">
            <div className="item-name">{transaction.itemName}</div>
            <div className="item-description">{transaction.itemDescription}</div>
            <div className="time-price">
              Time: {transaction.time} | Price: {transaction.price}
            </div>
          </div>
        </div>
      ))}
    </Box>
  );
}

