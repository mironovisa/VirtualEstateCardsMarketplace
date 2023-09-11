/*import React from 'react';
import '../CompStyles/PurchaseCard.css'
import '../CompStyles/DALLECard.css';

const Purchases = ({ orderID, userID, imageID, timestamp, title, uri }) => {
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); 
  };

  return (
    <div className="card-container">
      <div className="card"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={uri} alt={title} />
        <h2>Order ID: {orderID}</h2>
        <p>User Id: {userID}</p>
        <p>Image Id: {imageID}</p>
        {timestamp ? <p className="sold">Transaction Date: {formatTimestamp(timestamp)}</p> : null}
      </div>
    </div>
  );
};

export default Purchases;*/

import React from 'react';
import '../CompStyles/PurchaseCard.css'
import '../CompStyles/DALLECard.css';

const Purchases = ({ orderID, userID, imageID, timestamp, title, uri }) => {
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); 
  };

  return (
    <div className="">
      <div className="purchases-card"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img className='p-img' src={uri} alt={title} />

      <div className='p-right'>
      <h2>Order ID: {orderID}</h2>
        <p>User Id: {userID}</p>
        <p>Image Id: {imageID}</p>
        {timestamp ? <p className="sold">Transaction Date: {formatTimestamp(timestamp)}</p> : null}
      </div>
      </div>
    </div>
  );
};

export default Purchases;