import React, { useState } from 'react';
import '../CompStyles/PaymentModal.css';
import { usersApi } from 'helpers/Api';
import LoadingSpinner from './LoadingSpinner';

const PaymentModal = ({ isOpen, onClose, cartItems }) => {

  const [isLoading, setIsLoading] = useState(false)
  const handlePayment = () => {

    setIsLoading(true)

    const arrayOfIds = cartItems.map((object) => object._id);

    

    usersApi.boughtImage(arrayOfIds)
    .then((res)=>{
      setIsLoading(false)
    })
    .catch((err)=>{
      setIsLoading(false)
      
    })

    
    onClose();
  };

  return (
    <div className={`payment-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content-pay">
        <button className="close-button-pay" onClick={onClose}>
          &times; {/* This is the close button (X) */}
        </button>
        <h2>Payment Information</h2>
        <form>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="form-group">
            <label htmlFor="expirationDate">Expiration Date</label>
            <input type="text" id="expirationDate" placeholder="MM/YY" />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="123" />
          </div>
          {isLoading && <LoadingSpinner></LoadingSpinner>}
          <button className="pay-button" onClick={handlePayment}>
            Pay with PayPal
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;