CREATE DATABASE IF NOT EXISTS etherTradeDB;
USE etherTradeDB;

-- Create the 'products' table
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2),
  imageUrl VARCHAR(255)
);

-- Insert Product 1
INSERT INTO products (name, description, price, imageUrl) VALUES
  ('Product 1', 'Description for Product 1', 19.00, 'crypto.png');

-- Insert Product 2
INSERT INTO products (name, description, price, imageUrl) VALUES
  ('Product 2', 'Description for Product 2', 15.00, 'crypto.png');

-- Insert Product 3
INSERT INTO products (name, description, price, imageUrl) VALUES
  ('Product 3', 'Description for Product 3', 25.00, 'crypto.png');

-- Insert Product 4
INSERT INTO products (name, description, price, imageUrl) VALUES
  ('Product 4', 'Description for Product 4', 10.00, 'crypto.png');

-- Insert Product 5
INSERT INTO products (name, description, price, imageUrl) VALUES
  ('Product 5', 'Description for Product 5', 12.50, 'crypto.png');

-- Insert Product 6
INSERT INTO products (name, description, price, imageUrl) VALUES
  ('Product 6', 'Description for Product 6', 12.50, 'crypto.png');

-- Insert Product 7
INSERT INTO products (name, description, price, imageUrl) VALUES
  ('Product 7', 'Description for Product 7', 12.50, 'crypto.png');

-- Insert Product 8
INSERT INTO products (name, description, price, imageUrl) VALUES
  ('Product 8', 'Description for Product 8', 12.50, 'crypto.png');

-- Create the 'history' table
CREATE TABLE IF NOT EXISTS history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    product_description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    user_id INT NOT NULL,
    transaction_hash VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP NOT NULL
);

-- Insert sample data with a random transaction hash and timestamp
INSERT INTO history (product_id, product_name, product_description, price, user_id, transaction_hash, timestamp) VALUES
  (6, 'Product 6', 'Description for Product 6', 12.50, 1, '0xd52d9098f2f9af0942402f6f6caffa8a41d84da5bcaf53e5c1e1e2cdcf1f7938', '2023-10-16 14:30:00');

-- Insert sample data with a random transaction hash and timestamp
INSERT INTO history (product_id, product_name, product_description, price, user_id, transaction_hash, timestamp) VALUES
  (7, 'Product 7', 'Description for Product 7', 12.50, 2, '0xc9551a98b322230583656604b6a3ab26b69cb4eee67325a0c4436276c96cee89', '2023-10-16 15:45:00');

-- Create the 'user' table
CREATE TABLE IF NOT EXISTS users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
);

INSERT INTO users (user_name, user_password) VALUES ('user1', 'pass1');

INSERT INTO users (user_name, user_password) VALUES ('user2', 'pass2');

