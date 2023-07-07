import React, { useContext } from "react";
import { MenuContext } from "../MenuContext";
import "./cart.css";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
const Cart = () => {
    const receiptRef = useRef();

  const { cartItems, clearCart } = useContext(MenuContext);

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += parseInt(item.price) * item.quantity;
    }
    return total;
  };

  const handlePrintReceipt = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write("<html><head><title>The Cafe Grillzzz</title></head><body>");
    printWindow.document.write("<h2>The Cafe Grillzzz</h2>");
    printWindow.document.write("<ul>");
    for (const item of cartItems) {
      printWindow.document.write("<li>");
      printWindow.document.write(`${item.name} - ${item.price} - Quantity: ${item.quantity}`);
      printWindow.document.write("</li>");
    }
    printWindow.document.write("</ul>");
    printWindow.document.write("<p>");
    printWindow.document.write(`Total: ${calculateTotal()}`);
    printWindow.document.write("</p>");
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={`${item.id}-${index}`} className="cartLi">
                <span>{item.name}</span>
                <span>Price {item.price}</span>
                <span>Quantity: {item.quantity}</span>
              </li>
            ))}
          </ul>
          <p>Total: {calculateTotal()}</p>
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={handlePrintReceipt}>Print Receipt</button>
        </>
      )}
    </div>
  );
};

export default Cart;
