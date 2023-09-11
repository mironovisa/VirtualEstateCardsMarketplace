import React, { useState, useEffect } from 'react';
import Purchases from '../../Components/PurchaseCard'; 
import { usersApi } from 'helpers/Api';
import '../../CompStyles/DALLECard.css';
import LoadingSpinner from 'Components/LoadingSpinner';

const PurchasesHistory = () => {
  
  const [isLoading, setIsLoading] = useState(false)
  const [transactions, setTransactions] = useState([])

  const getTransactions = () => {
    setIsLoading(true)
      usersApi.getAllTransactions()
  .then((res)=>{
    setTransactions(res)
    setIsLoading(false)
  })
  .catch((err)=>{
    
    setIsLoading(false)
  })
  }


  useEffect(() => {
    // Use useEffect to make the API request when the component mounts
    getTransactions()
  }, []); 

  return (
    <div className="purchases-history">
      {isLoading ? <LoadingSpinner></LoadingSpinner> : null}
      {transactions.map((tran, index) => (
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