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
    
      <img src={image.uri} alt={image.title} />
      <h2>{image.title}</h2>
      <p>{image.description}</p>
      <p>Category: {image.category}</p>
      <p>Price: ${image.price}</p>
      {image.Sold ? <p>Sold</p> : <p>Available</p>}
    
    </motion.div>
  );
};

export default Card;