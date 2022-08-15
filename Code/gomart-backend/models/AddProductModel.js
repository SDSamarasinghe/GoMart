const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  brand: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  smallDes: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("StoreProduct", ProductSchema);

module.exports = Product;
