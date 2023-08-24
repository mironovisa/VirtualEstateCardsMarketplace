import React from 'react';
import '../../StylesKit/HorizontalList.css';
import {NFTCard} from '../../Components/NFTCard'; 

const TopItems = () => {
  const items = Array.from({ length: 6 });

  return (
    <div className="horizontal-list">
      {items.map((item, index) => (
        <div key={index} className="item-card">
          <NFTCard
            img="https://example.com/nft1.jpg"
            price="$100"
            cryptoIcon="https://example.com/ethereum-icon.png"
            status="Available"
          />
        </div>
      ))}
    </div>
  );
};

export default TopItems;