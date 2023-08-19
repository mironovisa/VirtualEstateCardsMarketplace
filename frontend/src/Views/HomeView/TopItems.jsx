import React from 'react';
import '../../StylesKit/VerticalList.css';
import {NFTCard} from '../../Components/NFTCard';

const TopItems = () => {
  const items = Array.from({ length: 6 });

  return (
    <div className="vertical-list">
      {items.map((item, index) => (
        <div key={index} className="item-card">
          {/* Pass appropriate data as props to the NFTCard component */}
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