import React, { useContext } from "react";
import { MenuContext } from "../MenuContext";
import "./cart.css";

const Cart = () => {
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
    printWindow.document.write(
      "<html><head><title>The Cafe Grillzzz - Receipt</title>"
    );
    printWindow.document.write("<style>");
    printWindow.document.write(`
      body {
        font-family: Arial, sans-serif;
        font-size: 8.5pt;
        margin: 0;
        padding: 0;
      }

      .receipt {
        width: 2in;
        margin: 0 auto;
        padding: 2px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #fff;
      }

      .receipt .header {
        text-align: center;
        margin-bottom: 10px;
      }

      .receipt ul {
        list-style-type: none;
        padding: 0;
      }

      .receipt li {
        margin-bottom: 5px;
      }

      .receipt .item {
        display: flex;
        justify-content: space-between;
      }

      .receipt .item .name {
        display: inline-block;
        width: 50%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .receipt .item span {
        display: inline-block;
        width: 25%;
      }

      .receipt .total {
        text-align: right;
        margin-top: 10px;
        font-weight: bold;
      }

      .receipt .divider {
        margin-top: 10px;
        border-top: 1px dashed #ccc;
      }

      .receipt .footer {
        margin-top: 10px;
        text-align: center;
      }

      .receipt .footer p {
        margin: 5px 0;
      }
    `);
    printWindow.document.write("</style></head><body>");
    printWindow.document.write('<div class="receipt">');
    printWindow.document.write(
      '<div class="header"><h1>SA-CO</h1> <h2>The Cafe Grillzzz</h2><p>Ph: +91 8923265090</p><p>Shri Ram Complex, Rajnagar Extension</p></div>'
    );
    printWindow.document.write(
      ''
    );
    printWindow.document.write("<ul>");
    for (const item of cartItems) {
      printWindow.document.write('<li class="item">');
      printWindow.document.write(`<span class="name">${item.name}</span>`);
      printWindow.document.write(`<span>Rs ${item.price}</span>`);
      printWindow.document.write(`<span>Nos ${item.quantity}</span>`);
      printWindow.document.write("</li>");
    }
    printWindow.document.write("</ul>");
    printWindow.document.write('<div class="total">');
    printWindow.document.write(`Total: ${calculateTotal()}`);
    printWindow.document.write("</div>");
    printWindow.document.write('<div class="divider"></div>');
    printWindow.document.write('<div class="footer">');
    printWindow.document.write("<p>Thank you for your order!</p>");
    printWindow.document.write("</div>");
    printWindow.document.write("</div>");
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
