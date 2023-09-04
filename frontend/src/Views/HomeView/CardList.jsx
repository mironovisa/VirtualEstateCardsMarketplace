import React, { useState, useEffect } from 'react';
import Card from '../../Components/DALLECard';
import '../../StylesKit/CardList.css'
import { motion, AnimatePresence } from 'framer-motion';
import { imagesApi } from 'helpers/Api/imagesApi';


const CardList = ({ searchParams, setSearchParams }) => {

  const [images, setImages] = useState([])

  const getAllImages = () => {
    console.log(searchParams);
    imagesApi.getAllImages(searchParams)
      .then((res) => {
        setImages(res)
      })
      .catch((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    getAllImages()
  }, [searchParams])
  

  return (
    <div className="card-list">
      {images.map((image) => (
        <motion.div
          key={image._id}
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