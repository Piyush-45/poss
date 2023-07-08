import React from "react";
import './cart.css'
const Receipt = ({ cartItems, total }) => {
  return (
    <div className="receipt">
      <h2>The Cafe Grillzzz</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={`${item.id}-${index}`}>
            <span>{item.name}</span>
            <span>Price: {item.price}</span>
            <span>Quantity: {item.quantity}</span>
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
    </div>
  );
};

export default Receipt;
