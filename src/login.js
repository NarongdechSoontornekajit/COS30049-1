import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

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
    <div className="login-container">
      {loggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
        </div>
      ) : (
        <div>
          <h2 className="login-title">Login</h2>
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
              )}
    </div>
  );
};

export default Login;

