import React from 'react';
import '../CompStyles/WalletCard.css'

const WalletCard = () => {
  return (
    <div className="wallet-card">
      <h3>Currency Flow</h3>
      <p>$1000</p>

      <h3>Income</h3>
      <p>$500</p>

      <h3>Expenses</h3>
      <p>$300</p>

      <h3>Investments</h3>
      <p>$200</p>

      <h3>Transaction History</h3>
      {/* Display transaction history here */}

      <h3>Income Tracking</h3>
      {/* Display income tracking information here */}

      <button>Add Funds</button>
    </div>
  );
};

export default WalletCard;