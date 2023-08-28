import React from 'react';
import Purchases from '../../Components/PurchaseCard'; 
const PurchasesHistory = () => {
  const purchasesData = [
    {
      //used as example only
      orderID: '12345',
      userID: 'user123',
      imageID: 'image001',
      timestamp: '2023-08-30 10:00 AM',
    },
  ];

  return (
    <div className="purchases-history">
      {purchasesData.map((purchase, index) => (
        <Purchases
          key={index}
          orderID={purchase.orderID}
          userID={purchase.userID}
          imageID={purchase.imageID}
          timestamp={purchase.timestamp}
        />
      ))}
    </div>
  );
};

export default PurchasesHistory;