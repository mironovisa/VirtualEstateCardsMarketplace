import React from 'react';
import '../CompStyles/PurchaseCard.css'

const Purchases = ({ orderID, userID, imageID, timestamp }) => {
  return (
    <div className="purchases-card">
      <div className='p-img'>Image ID (Purchased image): {imageID}</div>
      <div className='p-right'>
        <div className='p-top-right'>
          <p className='p-order'>Order ID: {orderID}</p>
          <p className='p-user'>User ID: {userID}</p>
        </div>
        <div className='p-bottom-right'>
          <p className='p-time'>timestamp: {timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default Purchases;