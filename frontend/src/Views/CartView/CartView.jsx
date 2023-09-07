import React, { useState, useEffect } from 'react';
import './CartView.css';
import { imagesApi } from 'helpers/Api/imagesApi';
import { usersApi } from 'helpers/Api';

export const CartView = ({state, onChange}) => {
    //Dummy data, to be replaced with data from backend
    const [images, setImages] = useState([])
    const [cartItems, setCartItems] = useState([]);
    const [isOpen, setIsOpen] = useState(state);
  

  const getAllImages = () => {

    imagesApi.getAllImages()
      .then((res) => {
        const filteredItems = res.filter((item) => item.inCart === true);
        setCartItems(filteredItems)
      })
      .catch((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    getAllImages()
  }, [])

  const toggleCart = () => {
    setIsOpen(!isOpen);
    onChange(!isOpen);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };


  const handleRemoveItem = (itemId) => {

    const payload = {
      id: itemId
    }

    usersApi.removeUserCart(payload)
    .then((res) => {
      getAllImages()
    })
    .catch((err) => {
      console.log(err);
    })
    console.log(itemId);
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter((item) => item.id !== itemId);
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
          <li key={item._id}>
            <div className="cart-item">
              <h2>{item.title}</h2>
              <span>${(item.price).toFixed(2)}</span>
              <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
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


