// frontend/src/components/CartItem.jsx
import React from "react";

const CartItem = ({ product, onIncrease, onDecrease }) => {
  return (
    <div className="border p-4 shadow-md flex justify-between items-center">
      <div>
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
      </div>
      <div className="flex items-center">
        <button onClick={() => onDecrease(product._id)} className="px-2 bg-red-500 text-white rounded">-</button>
        <span className="mx-2">{product.quantity}</span>
        <button onClick={() => onIncrease(product._id)} className="px-2 bg-green-500 text-white rounded">+</button>
      </div>
    </div>
  );
};

export default CartItem;
