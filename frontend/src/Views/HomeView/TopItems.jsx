import React from 'react';
import '../../StylesKit/VerticalList.css'; 

const TopItems = () => {
  const items = Array.from({ length: 6 }); 

  return (
    <div className="vertical-list">
      {items.map((item, index) => (
        <div key={index} className="item-card">
          <h3>Top Items Card {index + 1}</h3>
          <p>Item details...</p>
        </div>
      ))}
    </div>
  );
};

export default TopItems;