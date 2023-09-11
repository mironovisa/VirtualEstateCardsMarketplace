import React, { useState } from 'react';
import '../CompStyles/DALLECard.css';
import { motion, AnimatePresence } from 'framer-motion';

const Card = ({ image, isOwnedByUser, isAdminView, handleAddToCart }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const closeModal = () => {
    setIsClicked(false);
  };


  return (
    <div className="card-container">
      <motion.div
        className={`card ${isClicked ? 'modal-open' : ''}`}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
      >
        <img src={image.uri} alt={image.title} />
        <h2>{image.title}</h2>
        <p>Price: ${image.price}</p>
        {image.isSold ? <p className="sold">Sold</p> : <p>Available</p>}
      </motion.div>

      <AnimatePresence>
        {isClicked && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="modal-content">
              <span className="close-modal" onClick={closeModal}>
                &times;
              </span>
              <img className='modal-image' src={image.uri} alt={image.title} />
              <h2>{image.title}</h2>
              <p>{image.description}</p>
              <p>Category: {image.category}</p>
              <p>Price: ${image.price}</p>

              {isAdminView && (
                <button className="delete-button">Delete</button>
              )}

              {isOwnedByUser && (
                <button className="download-button">Download</button>
              )}

              {!isAdminView && !isOwnedByUser && !image.isSold && !image.inCart && (
                <button onClick={handleAddToCart} className="buy-button">Add to Cart</button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Card;