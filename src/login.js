import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { Grid, Paper, Typography, TextField, Button, Box } from '@mui/material';
import { style } from 'd3';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      setLoggedIn(true);
      navigate('/grid');
    }
  };

  return (
     <Grid container sx={{t:3}} justifyContent="center" style={{ height: '100vh' }}>
      <Grid item xs={0} sm={3} md={4}></Grid>
      <Grid item xs={10} sm={6} md={4}>
        <Paper 
          sx={{
            p: 2,
            marginTop: 5,
            paddingBottom: 10,
            bgcolor: '#ffffff76',
            borderRadius: 5,
          }}
        >
          <Typography 
            variant="h4" 
            align="center"
            gutterBottom
            sx={{
              color: 'white'
            }}
          >
            Sign In
          </Typography>
          <form>
            <TextField
              label="Username"
              variant="standard"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              variant="standard"
              fullWidth
              margin="normal"
              type="password"
              required
              sx={{
                paddingBottom: 10
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              type="submit"
              sx={{
                borderRadius: 5,
                backgroundColor:'lightgreen',
                style:'bold'
                
              }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={0} sm={3} md={4}></Grid>
    </Grid>
  );
};

export default Login;

