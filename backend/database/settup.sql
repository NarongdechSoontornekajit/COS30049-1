CREATE DATABASE IF NOT EXISTS etherTradeDB;
USE etherTradeDB;

-- Create the 'products' table
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2)
);

INSERT INTO products (name, description, price) VALUES
  ('Ethereal Ether Coin', 'A mysterious digital coin forged in the fires of blockchain.', 19.00),
  ('Quantum NFT Painting', 'An algorithmically generated masterpiece, only visible to the blockchain elite.', 15.00),
  ('Decentralized DNA', 'Own a piece of the blockchains history with this DNA NFT.', 25.00),
  ('Crypto Genomic Sequence', 'Adopt a virtual friend and explore the genetics of the blockchain.', 10.00),
  ('EtherBot Companion AI', 'Your personal blockchain assistant, powered by the magic of ether.', 12.50),
  ('Interstellar Starship Deed', 'Unlock access to a blockchain-powered starship exploring distant galaxies.', 12.50),
  ('Pixel Pirate Treasure Map', 'Embark on a virtual treasure hunt for pixelated pirate booty!', 12.50),
  ('Blockchain Bonsai Tree', 'A digital bonsai that grows with the success of your blockchain investments.', 12.50);

-- Create the 'history' table
CREATE TABLE IF NOT EXISTS history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    product_description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    transaction_hash VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    time_stamp TIMESTAMP NOT NULL
);

-- Create the 'users' table
CREATE TABLE IF NOT EXISTS users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
);

INSERT INTO users (user_name, user_password) VALUES ('user1', 'pass1');
INSERT INTO users (user_name, user_password) VALUES ('user2', 'pass2');

