const app = require("./app");
const connectDatabase = require("./db/Database");
const cartRoutes = require("./routes/cart");
const productModel = require("./model/product");
const userRoutes = require("./routes/user");
const addressRoutes = require("./routes/address.js"); 

app.use("/api", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/address", addressRoutes); 

process.on("uncaughtException", (err) => {
  console.error(`Error: ${err.message}`);
  console.log("Shutting down the server due to an uncaught exception.");
  process.exit(1);
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

connectDatabase();


const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 5000}`);
});


process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  console.log("Shutting down the server due to an unhandled promise rejection.");
  server.close(() => {
    process.exit(1);
  });
});


app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedProduct = await productModel.findByIdAndUpdate(id, updatedData, {
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
