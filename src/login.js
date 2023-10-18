import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, Typography, TextField, Button } from '@mui/material';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showAddUserForm, setShowAddUserForm] = useState(false);


  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username && password) {
      try {
        const response = await fetch('http://localhost:8000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          const user = await response.json();
          console.log('User:', user); // Log the user object
          localStorage.setItem('userId', user.userId);  // Store user ID
          // Redirect to the history page
          navigate('/history');
        } 
          else {
          const errorMessage = await response.text();
          console.error('Login failed:', errorMessage);
          setErrorMessage('Incorrect login details');
        }
      } catch (error) {
        console.error('Error during login:', error);
        setErrorMessage('An error occurred during login');
      }
    } else {
      setErrorMessage('Username and password are required');
    }
            };
  const handleAddUser = async (e) => {
    e.preventDefault();

    if (newUsername && newPassword) {
      try {
        const response = await fetch('http://localhost:8000/addUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newUsername, newPassword }),
        });

        if (response.ok) {
          // Optionally, show a success message or reset the form
          console.log('User added successfully');
          setNewUsername('');
          setNewPassword('');
        } else {
          const errorMessage = await response.text();
          console.error('Add user failed:', errorMessage);
          setErrorMessage('Failed to add user');
        }
      } catch (error) {
        console.error('Error adding user:', error);
        setErrorMessage('An error occurred while adding the user');
      }
    } else {
      setErrorMessage('New username and password are required');
    }
  };

  const toggleAddUserForm = () => {
    setShowAddUserForm(!showAddUserForm);
  };

  return (
    <Grid container sx={{ t: 3 }} justifyContent="center" style={{ height: '100vh' }}>
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
          <Typography variant="h4" align="center" gutterBottom sx={{ color: 'white' }}>
            Sign In
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Username"
              variant="standard"
              fullWidth
              margin="normal"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              variant="standard"
              fullWidth
              margin="normal"
              type="password"
              required
              sx={{
                paddingBottom: 10,
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              type="submit"
              sx={{
                borderRadius: 5,
                backgroundColor: 'lightgreen',
                style: 'bold',
              }}
            >
              Login
            </Button>
            {errorMessage && (
              <Typography variant="body2" color="error">
                {errorMessage}
              </Typography>
            )}
          </form>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={toggleAddUserForm}
            sx={{
              marginTop: 2,
              borderRadius: 5,
              backgroundColor: 'lightskyblue',
            }}
          >
            Add User
          </Button>
          {showAddUserForm && (
            <div>
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                Add User
              </Typography>
              <TextField
                label="New Username"
                variant="standard"
                fullWidth
                margin="normal"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                required
              />
              <TextField
                label="New Password"
                variant="standard"
                fullWidth
                margin="normal"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                sx={{
                  paddingBottom: 2,
                }}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleAddUser}
                sx={{
                  borderRadius: 5,
                  backgroundColor: 'lightgreen',
                }}
              >
                Add User
              </Button>
            </div>
          )}
        </Paper>
      </Grid>
      <Grid item xs={0} sm={3} md={4}></Grid>
    </Grid>
  );
};

export default Login;

