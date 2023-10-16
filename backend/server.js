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

app.get('/products', (req, res) => {
  const { searchText, sort } = req.query;

  let sortSql = '';
  switch (sort) {
    case 'name':
      sortSql = 'ORDER BY name ASC';
      break;
    case 'price-asc':
      sortSql = 'ORDER BY price ASC';
      break;
    case 'price-desc':
      sortSql = 'ORDER BY price DESC';
      break;
    default:
      sortSql = ''; // No sorting
  }
  const sql = `SELECT * FROM products WHERE name LIKE ? ${sortSql}`;
  const searchPattern = `%${searchText}%`;

  db.query(sql, [searchPattern], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result);
    }
  });
});

app.get('/history', (req, res) => {
  const userId = req.query.user_id; // Get the user_id from the query parameters

  // Check if userId is missing or not a number
  if (!userId || isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  const sql = 'SELECT * FROM history WHERE user_id = ?';

  db.query(sql, [userId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result);
    }
  });
});

app.get('/insert_history', (req, res) => {
  const { product_id, product_name, product_description, price, user_id, transaction_hash, timestamp } = req.query;

  if (!product_id || !product_name || !price || !user_id || !transaction_hash) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const sql = `INSERT INTO history (product_id, product_name, product_description, price, user_id, transaction_hash, timestamp) VALUES (${product_id}, '${product_name}', '${product_description}', ${price}, ${user_id}, '${transaction_hash}', '${timestamp}')`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json({ message: 'Row inserted successfully', result });
    }
  });
});


db.connect((err) => { //check connection(for debugging)
  if (err) {
    console.error('Database connection failed: ' + err.stack);
  } else {
    console.log('Connected to the database');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

