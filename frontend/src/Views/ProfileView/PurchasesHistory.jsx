import Purchases from '../../Components/PurchaseCard'; 
import React, { useState, useEffect } from 'react';
import { usersApi } from 'helpers/Api';
import '../../CompStyles/DALLECard.css';
import LoadingSpinner from 'Components/LoadingSpinner';

const PurchasesHistory = () => {

  const [isLoading, setIsLoading]= useState(false)
  
  const [myTransactions, setMyTransactions] = useState([])

  const getTransactions = () => {
    setIsLoading(true)
      usersApi.getMyTransactions()
  .then((res)=>{
    setMyTransactions(res)
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