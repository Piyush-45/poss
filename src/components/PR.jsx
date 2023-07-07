import React from "react";

const PR = ({ receiptContent }) => {
  return (
    <div className="receipt-page">
      <h1>Receipt</h1>
      <pre>{receiptContent}</pre>
    </div>
  );
};

export default PR
