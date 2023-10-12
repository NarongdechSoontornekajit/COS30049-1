// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'test',
  password: '1150',
  database: 'etherTradeDB',
});

app.get('/', (req, res) => {
  res.send('Hello, World!'); // Replace with your desired response
});

// Endpoint to get all products
app.get('/products', (req, res) => {
  const sql = 'SELECT * FROM products';

  db.query(sql, (err, result) => {
    if (err) {
      console.log("query is not working");
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      //console.log('All products:', result); // Print the result to the console
      console.log("query is working");
      res.json(result);
    }
  });
});

db.connect((err) => { //check connection(for debugging)
  if (err) {
    console.error('Database connection failed: ' + err.stack);
  } else {
    console.log('Connected to the database');

    // After the connection is established, you can retrieve and print all products
    const sql = 'SELECT * FROM products';

    db.query(sql, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        // Print the products to the console
        console.log('All products:', result);
      }
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

