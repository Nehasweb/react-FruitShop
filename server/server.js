// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Fruit = require('./models/Fruit');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/FruitVegetablesShop', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

// Routes
app.get('/api/fruits', async (req, res) => {
  try {
    const fruits = await Fruit.find();
    res.json(fruits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/cart', async (req, res) => {
  const { fruitId } = req.body;
  // Logic to add fruit to cart goes here
});

app.post('/api/order', async (req, res) => {
  const { cart } = req.body;
  // Logic to place order goes here
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
