const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  //description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0, required: true },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
