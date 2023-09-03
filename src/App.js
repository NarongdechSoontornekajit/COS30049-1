import React from 'react';
import Login from './login.js';
import Blog from './product.js';
import History from './history.js';
import Buy from './buy.js'; 
import Body from './homeComponent/homeBody.js';
import ResponsiveAppBar from './homeComponent/navBar.js';
import Footer from './homeComponent/footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Route
import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Home } from '@mui/icons-material';

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
            <Grid
              container
              spacing={"1"}
              direction="row"
              justifyContent="space-between"
              alignItems="stretch"
              style={{ height: '100vh' }}
            >
              <Grid item xs={12} sm={12} md={12}>
                <TransparentGridItem><ResponsiveAppBar/></TransparentGridItem> {/* Header Section */}
              </Grid>
              <Grid item xs={12} sm={12} md={12} alignItems="stretch">
                <TransparentGridItem>
                  <Routes>
                    <Route path="/" element={<Body />} /> {/* Home */}
                    <Route path="/Home" element={<Body />} /> {/* Home */}
                    <Route path="/Product" element={<Blog />} /> {/* Product */}
                    <Route path="/Login" element={<Login />} /> {/* SignIN/Out */}
                    <Route path="/History" element={<History />} /> {/* History */}
                    <Route path="/buy" element={<Buy />} /> {/* Add Route for Buy component */}
                  </Routes>
                </TransparentGridItem>
              </Grid>
              {/* item end */}
              <Grid item xs={12} sm={12} md={12}>
                <TransparentGridItem><Footer/></TransparentGridItem> {/* Footer section */}
              </Grid>
            </Grid>
          </Box>
      </body>
    );
  }
}

export default App;

