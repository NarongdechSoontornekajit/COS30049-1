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

