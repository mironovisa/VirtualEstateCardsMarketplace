import Purchases from '../../Components/PurchaseCard'; 
import React, { useState, useEffect } from 'react';
import { usersApi } from 'helpers/Api';
import '../../CompStyles/DALLECard.css';

const PurchasesHistory = () => {
  
  const [myTransactions, setMyTransactions] = useState([])

  const getTransactions = () => {
      usersApi.getMyTransactions()
  .then((res)=>{
    setMyTransactions(res)
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
  {myTransactions.length === 0
    ? "You don't own any Transactions"
    : myTransactions.map((tran, index) => (
        <Purchases
          key={tran._id}
          orderID={tran._id}
          userID={tran.userId}
          imageID={tran.imageId}
          timestamp={tran.createdAt}
          uri={tran.imageDetails.uri}
          title={tran.imageDetails.title}
        />
      ))}
</div>

  );
};

export default PurchasesHistory;