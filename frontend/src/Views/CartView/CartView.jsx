import React, { useState } from 'react';
import './CartView.css';

export const CartView = ({state, onChange}) => {
    //Dummy data, to be replaced with data from backend
    console.log(state);
    const items = [
        {
            id: 1,
            name: 'Product A',
            quantity: 2,
            price: 10.99,
          },
          {
            id: 2,
            name: 'Product B',
            quantity: 1,
            price: 19.99,
          },
          {
            id: 3,
            name: 'Product C',
            quantity: 3,
            price: 7.49,
          },
    ];

  const [cartItems, setCartItems] = useState(items);
  const [isOpen, setIsOpen] = useState(state);

  const toggleCart = () => {
    setIsOpen(!isOpen);
    onChange(!isOpen);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };


  const handleRemoveItem = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter((item) => item.id !== itemId);
      return updatedCartItems;
    });
  };
  

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((item) => {
        if (item.id === itemId) {
          // Ensure the new quantity is not less than 0
          const updatedQuantity = Math.max(newQuantity, 1);
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });
  
      return updatedCartItems;
    });
  };
  
  const handleCheckout = () => {
    console.log('Checking out');
    const total = calculateTotal().toFixed(2);
    console.log('items', cartItems);
    console.log('total', total);
    };
  
  return (
    <>
    <div className={`cart ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Your Shopping Cart</h2>
        <button className="close-button" onClick={toggleCart}>
          &times;
        </button>
      </div>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id}>
            <div className="cart-item">
              <h2>{item.name}</h2>
              <div className="cart-item-controls">
                <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <div>
        <button onClick={handleCheckout}>Proceed To Checkout</button>
        </div>
        <strong>Total:</strong> ${calculateTotal().toFixed(2)}
      </div>
    </div>
    </>
  );
};


