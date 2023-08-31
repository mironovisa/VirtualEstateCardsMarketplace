import React from 'react';
import Card from '../../Components/DALLECard';
import '../../StylesKit/CardList.css'
import { motion, AnimatePresence } from 'framer-motion';

const sampleImages = [
  {
    //used as example only
    ID: 1,
    Title: 'Beautiful Landscape',
    Description: 'A serene and beautiful landscape.',
    Category: 'Nature',
    Price: 150,
    Sold: false,
    URL: 'https://example.com/landscape.jpg',
  },
  {
    ID: 2,
    Title: 'Abstract Artwork',
    Description: 'A colorful and abstract artwork.',
    Category: 'Abstract',
    Price: 200,
    Sold: true,
    URL: 'https://example.com/abstract.jpg',
  },
  {
    ID: 3,
    Title: 'Abstract Artwork',
    Description: 'A colorful and abstract artwork.',
    Category: 'Abstract',
    Price: 200,
    Sold: true,
    URL: 'https://example.com/abstract.jpg',
  },
  {
    ID: 4,
    Title: 'Abstract Artwork',
    Description: 'A colorful and abstract artwork.',
    Category: 'Abstract',
    Price: 200,
    Sold: true,
    URL: 'https://example.com/abstract.jpg',
  },
  {
    ID: 5,
    Title: 'Abstract Artwork',
    Description: 'A colorful and abstract artwork.',
    Category: 'Abstract',
    Price: 200,
    Sold: true,
    URL: 'https://example.com/abstract.jpg',
  },
  {
    ID: 6,
    Title: 'Abstract Artwork',
    Description: 'A colorful and abstract artwork.',
    Category: 'Abstract',
    Price: 200,
    Sold: true,
    URL: 'https://example.com/abstract.jpg',
  },
  
];

const CardList = () => {
  return (
    <div className="card-list">
      {sampleImages.map((image) => (
        <motion.div
          key={image.ID}
          initial={{ opacity: 0, y: 50 }} // Initial opacity and y position
          animate={{ opacity: 1, y: 0 }} // Animation on entering the screen
          exit={{ opacity: 0, y: -50 }} // Animation on exiting the screen
        >
          <Card image={image} />
        </motion.div>
      ))}
    </div>
  );
};

export default CardList;