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

import axios from 'axios';

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

  const handleBuyClick = (productId, productName, productDesc, price) => {
    // Prepare the individual fields as an object
    const productInfo = {
      productId,
      productName,
      productDesc,
      price
    };
    // Send a GET request with the individual fields as query parameters
    axios.get('http://127.0.0.1:8000/purchase', {
      params: {
        productId: productInfo.productId,
        productName: productInfo.productName,
        productDesc: productInfo.productDesc,
        price: productInfo.price
      }
    })
    .then((response) => {
        console.log(response.data);

        console.log("Transaction Data: ", response.data.transactionData);
        console.log("Transaction Hash: ", response.data.transactionHash);

        const transactionHash = response.data.transactionHash;
        const timestamp = response.data.timestamp;
        // Handle the response if needed
        navigate(`/buy?productId=${productId}&productName=${productName}&productDesc=${productDesc}&price=${price}&transactionHash=${transactionHash}&timestamp=${timestamp}`);
    })
    .catch((error) => {
        console.error('Error: ', error);
    });
  }

  useEffect(() => {
    // Fetch products when the component mounts
    fetch('http://localhost:4000/products')
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
          <button
            className="buy-button"
            onClick={() =>
              handleBuyClick(product.id, product.name, product.description, product.price)
              //handleBuyClick(1, "product.name", "product.description", 2)
            }
          >
            Buy
          </button>
        </Paper>
      ))}
    </div>
  );
}
