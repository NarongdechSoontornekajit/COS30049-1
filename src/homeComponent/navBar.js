import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton'; 
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/CurrencyExchange';

import { styled } from '@mui/system';

import Login from '../login.js'
import Blog from '../blog.js'
import BasicGrid from '../grid.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const pages = [
    { label: 'Home', path: '/Home' },
    { label: 'Product', path: '/Product' },
    { label: 'Login', path: '/Login' },
    { label: 'History', path: '/BasicGrid' },
  ];

const settings = [
    { label: 'Sign In', path: '/Login' },
    { label: 'Sign Out', path: '/Home' },
];

const WhiteAvatar = styled(Avatar)`
  color: white; 
  background-color: transparent
`;

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" id='nav'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Serif',
              fontWeight: 800,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            EtherTrade
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                    {/*<Typography textAlign="center">{page}</Typography>*/}
                    <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Typography textAlign="center">{page.label}</Typography>
                    </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            EtherTrade
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                    {/*<Typography textAlign="center">{page}</Typography>*/}
                    <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Typography textAlign="center">{page.label}</Typography>
                    </Link>
                </MenuItem>
              ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Sign In/ Sign Up">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                
                <WhiteAvatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"  />
               
              </IconButton>
            </Tooltip>
            
     
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.label} onClick={handleCloseNavMenu}>
                <Link to={setting.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography textAlign="center">{setting.label}</Typography>
                </Link></MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
