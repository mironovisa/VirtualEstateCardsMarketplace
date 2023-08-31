import React from 'react';
import '../CompStyles/DALLECard.css'

import { motion } from 'framer-motion'; // Import motion from Framer Motion


const Card = ({ image }) => {
  return (
    <motion.div
      className="card"
      initial={{ scale: 1 }} // Initial scale
      whileHover={{ scale: 1.1 }} // Scale on hover
      whileTap={{ scale: 0.9 }} // Scale when tapped (optional)
    >
    
      <img src={image.URL} alt={image.Title} />
      <h2>{image.Title}</h2>
      <p>{image.Description}</p>
      <p>Category: {image.Category}</p>
      <p>Price: ${image.Price}</p>
      {image.Sold ? <p>Sold</p> : <p>Available</p>}
    
    </motion.div>
  );
};

export default Card;