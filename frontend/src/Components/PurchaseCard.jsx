import React from 'react';
import '../CompStyles/PurchaseCard.css'

const Purchases = ({ orderID, userID, imageID, timestamp }) => {
  return (
    <div className="purchases-card">
      <p>Order ID: {orderID}</p>
      <p>User ID: {userID}</p>
      <p>Image ID (Purchased image): {imageID}</p>
      <p>Timestamp: {timestamp}</p>
    </div>
  );
};

export default Purchases;