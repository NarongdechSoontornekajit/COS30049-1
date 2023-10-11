import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./products.css";
import crypto from './images/crypto.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%"
});

export default function ComplexGrid() {
  const [products, setProducts] = useState([]);
  const [filterCriteria, setFilterCriteria] = React.useState("all"); // State for filter criteria
  const [searchText, setSearchText] = React.useState(""); // State for search text

  // Function to handle filter criteria change
  const handleFilterChange = (event) => {
    setFilterCriteria(event.target.value);
  };

  // Function to handle search text change
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const navigate = useNavigate();

  // Function to handle "Buy" button click
  const handleBuyClick = (product) => {
    // Navigate to the Buy page and pass the product as a search parameter
    navigate(`/buy?productId=${product.id}`);
  };

  useEffect(() => {
    // Fetch products when the component mounts
    fetch('http://localhost:5000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs only once


  return (
    <div>
    <div className="search-filter-container">
        <div className="search-input-container">
          <TextField
            className="search-input"
            label="Search Products"
            variant="outlined"
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
        <div className="filter-dropdown-container">
          <TextField
            className="filter-dropdown"
            select
            label="Filter by"
            value={filterCriteria}
            onChange={handleFilterChange}
            variant="outlined"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="name">Name</MenuItem>
            {/* Add more filtering options here */}
          </TextField>
        </div>
      </div>
   {/* Display Products */}
    {products.map((product) => (
      <Paper key={product.id} className="product-tile">
      <div className="product-image">
      <ButtonBase sx={{ width: 128, height: 128 }}>
      <Img alt={product.name} src={product.imageUrl} />
      </ButtonBase>
      </div>
      <div className="product-info">
      <Typography className="product-name" variant="subtitle1">
      {product.name}
      </Typography>
      <Typography className="product-description" variant="body2">
      {product.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      ID: {product.id}
      </Typography>
      <Typography className="product-price" variant="subtitle1">
      ${product.price}
      </Typography>
      </div>
      <button className="buy-button" onClick={() => handleBuyClick(product)}>
            Buy
      </button>
      </Paper>
    ))}
    </div>
  );
}

