import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./products.css";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%"
});

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: "$19.00",
    imageUrl: "URL_TO_IMAGE_1"
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for Product 2",
    price: "$15.00",
    imageUrl: "URL_TO_IMAGE_2"
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description for Product 3",
    price: "$25.00",
    imageUrl: "URL_TO_IMAGE_3"
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description for Product 4",
    price: "$10.00",
    imageUrl: "URL_TO_IMAGE_4"
  },
  {
    id: 5,
    name: "Product 5",
    description: "Description for Product 5",
    price: "$12.50",
    imageUrl: "URL_TO_IMAGE_5"
  }
];

export default function ComplexGrid() {
  const [filterCriteria, setFilterCriteria] = React.useState("all"); // State for filter criteria

  // Function to handle filter criteria change
  const handleFilterChange = (event) => {
    setFilterCriteria(event.target.value);
  };

  return (
    <div>
      {/* Search and Filter Section */}
      <div className="search-filter-container">
        <TextField
          className="search-input"
          label="Search Products"
          variant="outlined"
          // Add necessary search functionality here
        />
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
      {/* Display Products */}
      {products.map((product) => (
        <Paper
          key={product.id}
          className="product-tile"
        >
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
          </div>
          <Typography className="product-price" variant="subtitle1">
            {product.price}
          </Typography>
        </Paper>
      ))}
    </div>
  );
}

