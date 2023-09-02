import React from 'react';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing(0),
  textAlign: 'center',
  color: 'transparent',
  }));

  const TransparentGridItem = styled(Grid)(({ theme }) => ({
    backgroundColor: 'transparent',
    padding: theme.spacing(0),

    color: 'white',
    boxShadow: 'none', // Remove box shadow
  }));

const Body = () => (
    <Grid container spacing={2}
    
    direction="row"
  justifyContent="center"
  alignItems="left"
  >
    <Grid item xs={5} sm={12} md={2.5}>
      <TransparentGridItem><br/><br/><CurrencyBitcoinIcon alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ fontSize: 150 }}/></TransparentGridItem>
    </Grid>
    <Grid item xs={7} sm={12} md={3.5} textAlign="left">
      <TransparentGridItem>
        <p style={{ fontSize: 30 }}>Building Trust In Blockchains<br/></p>
        <p style={{ fontSize: 13 }}>Is blockchain safe to use? Blockchains manage a large-scale record of transactions and additional data wrapped in several layers of data security. As a result, these systems are generally regarded as safe and secure.</p>
      </TransparentGridItem>
    </Grid>
    
  </Grid>
    
);
 
export default Body;