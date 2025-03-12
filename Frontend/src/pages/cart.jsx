import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const userEmail = "testuser@example.com"; // Replace with dynamic user email

  // Fetch cart items from backend
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/cart/user/${userEmail}`);
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  // Increase quantity
  const increaseQuantity = async (productId) => {
    try {
      await axios.post(`http://localhost:5000/api/cart/increase/${userEmail}/${productId}`);
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.productId._id === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };

  // Decrease quantity
  const decreaseQuantity = async (productId) => {
    try {
      await axios.post(`http://localhost:5000/api/cart/decrease/${userEmail}/${productId}`);
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.productId._id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } catch (error) {
      console.error("Error decreasing quantity:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid gap-4">
            {cartItems.map((item) => (
              <div key={item.productId._id} className="border p-4 rounded-lg shadow-md flex justify-between items-center">
                <img src={item.productId.image} alt={item.productId.name} className="w-16 h-16 object-cover" />
                <div>
                  <h2 className="text-lg font-semibold">{item.productId.name}</h2>
                  <p>${item.productId.price}</p>
                </div>
                <div className="flex items-center">
                  <button
                    className="bg-gray-300 px-3 py-1 rounded"
                    onClick={() => decreaseQuantity(item.productId._id)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="bg-gray-300 px-3 py-1 rounded"
                    onClick={() => increaseQuantity(item.productId._id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
