import React from 'react';
import Login from './login.js'
import Blog from './blog.js'
import BasicGrid from './grid.js';
import Body from './homeComponent/homeBody.js';
import ResponsiveAppBar from './homeComponent/navBar.js';
import Footer from './homeComponent/footer.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

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
  textAlign: 'center',
  color: 'transparent',
  boxShadow: 'none', // Remove box shadow
}));

class App extends React.Component {
  render() {
    return (
      <body>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={"1"}
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
            style={{ height: '100vh' }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <TransparentGridItem><ResponsiveAppBar/></TransparentGridItem>
            </Grid>
            <Grid item xs={12} sm={12} md={12}
              alignItems="stretch">
              <TransparentGridItem>
                <Routes>
                <Route path="/Home" element={<Body />} />
                  <Route path="/Product" element={<Blog />} />
                  <Route path="/Login" element={<Login/>} />
                  <Route path="/BasicGrid" element={<BasicGrid />} /> 
                </Routes>
              </TransparentGridItem>
            </Grid>
            {/* item end */}
            <Grid item xs={12} sm={12} md={12}>
              <TransparentGridItem><Footer/></TransparentGridItem>
            </Grid>
          </Grid>
        </Box>
      </body>
    );
  }
}

export default App;
