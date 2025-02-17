const express = require("express");
const router = express.Router();
const Product = require("./models/Product");

// POST: Create a new product
router.post("/products", async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;

    if (!name || !description || !price || !imageUrl) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = new Product({ name, description, price, imageUrl });

    await newProduct.save();
    res.status(201).json({ message: "Product created successfully", newProduct });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;
