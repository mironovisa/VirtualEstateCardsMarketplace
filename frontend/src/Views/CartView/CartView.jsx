import React, { useState, useEffect } from 'react';
import './CartView.css';
import ParticleBackground from '../../Backgrounds/ParticleBackground';
import { imagesApi } from 'helpers/Api/imagesApi';
import { usersApi } from 'helpers/Api';
import { motion, useAnimation } from 'framer-motion';
import PaymentModal from '../../Components/PaymentModal';

export const CartView = ({ state, onChange }) => {
  const [images, setImages] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(state);
  const [showModal, setShowModal] = useState(false); 
  const controls = useAnimation(); 

  const getAllImages = () => {
    imagesApi
      .getAllImages()
      .then((res) => {
        const filteredItems = res.filter((item) => item.inCart === true);
        setCartItems(filteredItems);
      })
      .catch((err) => {
        
      });
  };

  useEffect(() => {
    getAllImages();
  }, []);

  const toggleCart = () => {
    setIsOpen(!isOpen);
    onChange(!isOpen);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleRemoveItem = (itemId) => {
    const payload = {
      id: itemId,
    };

    usersApi
      .removeUserCart(payload)
      .then((res) => {
        getAllImages();
      })
      .catch((err) => {
        
      });

    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter((item) => item.id !== itemId);
      return updatedCartItems;
    });
  };

  const handleCheckout = () => {
    
    const total = calculateTotal().toFixed(2);
    setShowModal(true);
    getAllImages()
  };

  useEffect(() => {
    controls.start({ x: isOpen ? 0 : '100%' }); 
  }, [isOpen, controls]);

  return (
    <>
      <motion.div
        className={`cart ${isOpen ? 'open' : ''}`}
        animate={controls}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <motion.div className="bg-container" animate={controls} transition={{ duration: 0.4, ease: 'easeOut' }}>
          <ParticleBackground />
        </motion.div>
        <div className="cart-header-cont">
          <button className="close-button-cart" onClick={toggleCart}>
            &times;
          </button>
          <div className='cart-header'>
            <span>Bring Art</span> 
            <span> To </span>
            <span>Infinity</span>
          </div>
        </div>
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item._id}>
              <div className="cart-item">
                <h2 className='cart-item-title'>{item.title}</h2>
                <span className='cart-item-price'>${item.price.toFixed(2)}</span>
                <button className='remove-btn'  onClick={() => handleRemoveItem(item._id)}>X</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-total">
          <strong>Total:</strong> ${calculateTotal().toFixed(2)}
          <div>
            <button className='checkout-btn' onClick={handleCheckout}>Proceed To Checkout</button>
          </div>
        </div>
      </motion.div>
      {showModal && (
  <PaymentModal isOpen={showModal} cartItems={cartItems} onClose={() => setShowModal(false)} />
)}
    </>
  );
};