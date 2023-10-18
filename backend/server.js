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

app.route('/login').post((req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM users WHERE user_name = ? AND user_password = ?';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    if (result.length > 0) {
      // User found in the database
      const user = { userId: result[0].user_id, username: result[0].user_name };
      res.json(user);
    } else {
      // User not found, send an unauthorized response
      res.status(401).send('Unauthorized');
    }
  });
});
    
// Add user route
app.post('/addUser', (req, res) => {
  const { newUsername, newPassword } = req.body;

  const sql = 'INSERT INTO `users` (user_name, user_password) VALUES (?, ?)';

  db.query(sql, [newUsername, newPassword], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (result.affectedRows === 1) {
      return res.status(200).send('User added successfully');
    } else {
      return res.status(500).send('Failed to add user');
    }
  });
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

app.post('/insert_history', (req, res) => {
  const { product_id, product_name, product_description, price, transaction_hash, user_id, time_stamp } = req.body;

  if (!product_id || !product_name || !price || !user_id ) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const sql = `INSERT INTO history (product_id, product_name, product_description, price, transaction_hash, user_id, time_stamp) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [product_id, product_name, product_description, price, transaction_hash, user_id, time_stamp], (err, result) => {
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

