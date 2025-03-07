const express = require("express");
const Cart = require("../model/cart");
const User = require("../model/user");

const router = express.Router();

// Add product to cart
router.post("/add-to-cart", async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, products: [{ productId, quantity }] });
    } else {
      const productIndex = cart.products.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({ productId, quantity });
      }
    }

    await cart.save();
    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    res.status(500).json({ message: "Error adding product to cart", error });
  }
});
router.get("/user/:email", async (req, res) => {
    const { email } = req.params;
  
    try {
      // Find user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Fetch the user's cart and populate product details
      const cart = await Cart.findOne({ userId: user._id }).populate("products.productId");
  
      if (!cart) {
        return res.status(404).json({ message: "Cart is empty" });
      }
  
      res.status(200).json(cart.products);
    } catch (error) {
      res.status(500).json({ message: "Error fetching cart items", error });
    }
  });

module.exports = router;
