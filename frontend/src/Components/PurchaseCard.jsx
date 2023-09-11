import React from 'react';
import '../CompStyles/PurchaseCard.css'
import '../CompStyles/DALLECard.css';

const Purchases = ({ orderID, userID, imageID, timestamp, otherDetails }) => {
  return (
    <div className="card-container">
      <div className="card"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={otherDetails.uri} alt={otherDetails.title} />
        <h2>Order ID: {orderID}</h2>
        <p>User Id: {userID}</p>
        {timestamp ? <p className="sold">Transaction Date: {timestamp}</p>:null}
      </div>
    </div>
  );
};

export default Purchases;