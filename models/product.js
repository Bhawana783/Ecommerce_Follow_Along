const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "Price must be a positive number"],
  },
  imageUrl: {
    type: String,
    required: [true, "Image URL is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: { type: String, required: true },
    stock: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);
