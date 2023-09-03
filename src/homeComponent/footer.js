

import * as React from 'react';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AdbIcon from '@mui/icons-material/CurrencyExchange';
import Typography from '@mui/material/Typography';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


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

const Footer = () => (
    <Grid container spacing={0}
    direction="row"
    justifyContent="center"
    >
        
        <Grid item xs={12} sm={12} md={6} textAlign="center">
            <TransparentGridItem> {/* Company logo and Social media section */}
                <p><br/><br/><br/><hr/></p>
                <p style={{fontFamily: 'monospace', fontSize: 18}}>EtherTrade</p>
                <div>
                    <InstagramIcon fontSize="medium" sx={{ color: "white" }} />
                    <FacebookIcon color="white" fontSize="medium" />
                    <TwitterIcon fontSize="medium" sx={{ color: "white" }} />
                    <LinkedInIcon fontSize="medium" color="white" />
                </div>
            </TransparentGridItem> 
        </Grid>
        <Grid item xs={12} sm={12} md={6} textAlign="center">
            <TransparentGridItem> {/* link to other page */}
                <p><br/><br/><br/><hr/></p>
                <p style={{ fontSize: 18, fontFamily: 'monospace'}}>Help&Support</p>
                <p><Link to="/Home" style={{ fontSize: 12, color: 'lightgrey'}}>Home</Link></p>
                <p><Link to="/Product" style={{ fontSize: 12, color: 'lightgrey'}}>Product</Link></p>
                <p><Link to="/History" style={{ fontSize: 12, color: 'lightgrey'}}>History</Link></p>
                
            </TransparentGridItem>
        </Grid>
        <Grid item xs={12} sm={12} md={12} textAlign="center">
        <TransparentGridItem>
                <p style={{ fontSize: 12, color: 'lightgrey'}}><br/>©2023 EtherTrade All rights reserved</p>
        </TransparentGridItem>
        </Grid>
  </Grid>
    
);
 
export default Footer;