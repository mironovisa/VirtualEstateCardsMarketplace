import React, { useState, useEffect } from 'react';
import Purchases from '../../Components/PurchaseCard'; 
import { usersApi } from 'helpers/Api';

const PurchasesHistory = () => {
  
  const [transactions, setTransactions] = useState([])

  const getTransactions = () => {
      usersApi.getAllTransactions()
  .then((res)=>{
    setTransactions(res)
  })
  .catch((err)=>{
    console.log(err);
  })
  }


  useEffect(() => {
    // Use useEffect to make the API request when the component mounts
    getTransactions()
  }, []); 

  return (
    <div className="purchases-history">
      {transactions.map((tran, index) => (
        <Purchases
          key={tran._id}
          orderID={tran._id}
          userID={tran.userId}
          imageID={tran.imageId}
          timestamp={tran.createdAt}
        />
      ))}
    </div>
  );
};

export default PurchasesHistory;