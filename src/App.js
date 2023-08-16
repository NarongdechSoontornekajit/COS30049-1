import React from 'react';
import Login from './login.js'
import Blog from './blog.js'
import BasicGrid from './grid.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';



class App extends React.Component {
  render() {
    return (


      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Product">Product</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Product" element={<Blog />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/grid" element={<BasicGrid />} /> 
        </Routes>
      </div>


    );
  }
}

export default App;
