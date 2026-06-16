-- =========================
-- DATABASE
-- =========================
CREATE DATABASE IF NOT EXISTS dbgram;
USE dbgram;

-- =========================
-- USERS TABLE
-- =========================
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- =========================
-- CATEGORIES TABLE
-- =========================
CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- =========================
-- PRODUCTS TABLE
-- =========================
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INT DEFAULT 0,
  category_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  FOREIGN KEY (category_id) REFERENCES categories(id)
  ON DELETE SET NULL
  ON UPDATE CASCADE
);

-- =========================
-- SEED DATA (USERS)
-- =========================
INSERT INTO users (username, password) VALUES
('admin', '123456'),
('user1', 'password1');

-- =========================
-- SEED DATA (CATEGORIES)
-- =========================
INSERT INTO categories (name, description) VALUES
('Electronics', 'Barang elektronik seperti HP, laptop, dll'),
('Fashion', 'Pakaian dan aksesoris'),
('Food', 'Makanan dan minuman'),
('Books', 'Buku dan edukasi');

-- =========================
-- SEED DATA (PRODUCTS)
-- =========================
INSERT INTO products (name, price, stock, category_id) VALUES
('iPhone 15', 15000000, 10, 1),
('Samsung S23', 12000000, 8, 1),

('Hoodie Black', 250000, 50, 2),
('T-Shirt White', 100000, 100, 2),

('Burger', 35000, 30, 3),
('Pizza', 75000, 20, 3),

('Clean Code Book', 200000, 15, 4);