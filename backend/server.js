// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'jn',
  password: 'new_password',
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

