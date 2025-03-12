const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      name: String,
      price: Number,
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 },
      image: String,
      addedAt: { 
        type: Date, 
        default: Date.now 
      }
    },
    
      
      
  ],
});


module.exports = mongoose.model("Cart", CartSchema);
