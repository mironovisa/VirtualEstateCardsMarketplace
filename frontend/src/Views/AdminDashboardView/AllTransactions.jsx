import React, { useState, useEffect } from 'react';
import Purchases from '../../Components/PurchaseCard'; 
import { usersApi } from 'helpers/Api';
import '../../CompStyles/DALLECard.css';

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
    <div className="cardRow">
      {transactions.map((tran, index) => (
        <Purchases
          key={tran._id}
          orderID={tran._id}
          userID={tran.userId}
          imageID={tran.imageId}
          timestamp={tran.createdAt}
          otherDetails={tran.imageDetails}

        />
      ))}
    </div>
  );
};

export default PurchasesHistory;