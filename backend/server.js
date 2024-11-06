const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path'); 

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Sample data
let products = [
  { id: 1, name: 'Dumbells', gender: 'MEN', category: 'weights', images: ['w1.jpg'], final_price: 100, reviews: 10, rating: 4 },
  { id: 2, name: 'Treadmill', gender: 'WOMEN', category: 'cardio', images: ['/c1.jpeg'], final_price: 150, reviews: 20, rating: 5 },
  {
    id: 3,
    name: 'Gloves',
    gender: 'MEN',
    category: 'accessories',
    images: ['a1.jpg'],
    final_price: 80,
    reviews: 15,
    rating: 4.5,
  },
  // Add more products as needed
];

// Routes for dataReducer
app.get('/allproducts', (req, res) => {
  const { gender, category } = req.query;

  console.log("la",category)
  let filteredProducts = products;

  if (gender) {
    filteredProducts = filteredProducts.filter(product => product.gender === gender);
  }

  if (category) {
    filteredProducts = filteredProducts.filter(product => product.category == category);
  }

  res.status(200).send(filteredProducts);
});

app.patch('/allproducts/:id', (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  products = products.map(product => product.id === parseInt(id) ? { ...product, ...updatedProduct } : product);
  res.status(200).send({ message: 'Product updated successfully' });
});

app.delete('/allproducts/:id', (req, res) => {
  const { id } = req.params;
  products = products.filter(product => product.id !== parseInt(id));
  res.status(200).send({ message: 'Product deleted successfully' });
});

// Routes for authReducer
app.post('/auth/signup', (req, res) => {
  // Handle user registration
  res.status(201).send({ message: 'User registered successfully' });
});

app.post('/auth/login', (req, res) => {
  // Handle user login
  res.status(200).send({ message: 'User logged in successfully', token: 'fake-jwt-token' });
});

app.get('/auth/:email', (req, res) => {
  // Handle fetching user profile
  res.status(200).send({ email: req.params.email, name: 'John Doe' });
});

// Routes for pagesReducer
app.get('/Homepage', (req, res) => {
  // Handle fetching homepage data
  res.status(200).send({ message: 'Homepage data' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});