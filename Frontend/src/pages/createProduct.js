const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const Product = require("../models/Product");

// Set up multer for image uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // Save images in 'uploads' folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

const upload = multer({ storage: storage });

// POST route to create a new product with multiple images
router.post("/", upload.array("images", 5), async (req, res) => {
    try {
        const { name, price, description, category, stock } = req.body;

        // Validate input
        if (!name || !price || !description || !category || stock === undefined) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Get image URLs
        const imageUrls = req.files.map(file => `/uploads/${file.filename}`);

        // Create a new product
        const newProduct = new Product({
            name,
            price,
            description,
            category,
            stock,
            images: imageUrls,
        });

        // Save product to database
        const savedProduct = await newProduct.save();

        res.status(201).json({
            message: "Product created successfully",
            product: savedProduct,
        });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: "Failed to create product" });
    }
});

module.exports = router;
