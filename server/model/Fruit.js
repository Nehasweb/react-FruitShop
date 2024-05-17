// models/Fruit.js

const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number
});

module.exports = mongoose.model('Fruit', fruitSchema);
