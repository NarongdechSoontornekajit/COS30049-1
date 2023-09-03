import * as React from 'react';
import Box from '@mui/material/Box';
import './history.css'; // Import the grid.css file
import { Grid } from '@mui/material';


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
    <Box  
      className="history-container"
      sx={{
        p: 2,
        marginTop: 5,
        paddingBottom: 10,
        bgcolor: '#ffffff76',
        borderRadius: 5,
      }}
    >
      <Grid container>
        <Grid xs={12} paddingBottom={6}><h2 className="history-heading">History</h2></Grid>
        
        {transactions.map((transaction, index) => (
          <Grid 
            item xs={12} sm={12} md={6}
            className="transaction-row" 
            key={index}
            sx={{
              p:2
            }}
          >
            <div className="transaction-details">
              <div className="item-name">{transaction.itemName}</div>
              <div className="item-description">{transaction.itemDescription}</div>
              <div className="time-price">
                Time: {transaction.time} | Price: {transaction.price}
              </div>
              <div><hr className='line-break'></hr></div>
            </div>
            
          </Grid>
          
        ))}
        
      </Grid>
    </Box>
  );
}
