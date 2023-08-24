import React from 'react';
import '../../StylesKit/HorizontalList.css'; 

const MyCardsView = () => {
  const items = Array.from({ length: 6 }); 

  return (
    <div className="horizontal-list">
      {items.map((user, index) => (
        <div key={index} className="items-card">
          <h3>Card {index + 1}</h3>
          <p>card details...</p>
        </div>
      ))}
    </div>
  );
};

export default MyCardsView;