import React from 'react';

export const NFTCard = ({ img, price, cryptoIcon, status }) => {
    return (
        <div className="nft-card">
            <img src={img} alt="NFT" className="nft-image" />
            <p className="nft-price">Price: {price}</p>
            <img src={cryptoIcon} alt="Crypto Icon" className="crypto-icon" />
            <p className="nft-status">Status: {status}</p>
        </div>
    );
}

