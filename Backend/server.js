const app = require("./app");
const connectDatabase = require("./db/Database");

process.on("uncaughtException", (err) => {
    console.error(`Error: ${err.message}`);
    console.log("Shutting down the server due to an uncaught exception.");
    process.exit(1);
});

// Load environment variables in development mode
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "config/.env",
    });
}

connectDatabase();

// Start the server
const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 5000}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    console.log("Shutting down the server due to an unhandled promise rejection.");
    server.close(() => {
        process.exit(1);
    });
});

// Import Product model
const Product = require("./models/productModel");

// Update Product Endpoint for Milestone 13
app.put("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
            new: true,
        });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error });
    }
});
