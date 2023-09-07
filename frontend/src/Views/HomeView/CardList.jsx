import React, { useState, useEffect } from 'react';
import Card from '../../Components/DALLECard';
import '../../StylesKit/CardList.css'
import { motion, AnimatePresence } from 'framer-motion';
import { imagesApi } from 'helpers/Api/imagesApi';
import { usersApi } from 'helpers/Api';


const CardList = ({ searchParams, setSearchParams }) => {

  const [images, setImages] = useState([])

  const getAllImages = () => {
    console.log(searchParams);
    imagesApi.getAllImages(searchParams)
      .then((res) => {
        setImages(res)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    getAllImages()
  }, [searchParams])

  const handleAddToCart = (image) => {
    
    const payload = {id: image._id}
    usersApi.updateUserCart(payload)
    .then((res) => {
      getAllImages()
    })
    .catch((err) => {
      console.log(err);
    })
  }
  

  return (
    <div className="card-list">
      {images.map((image) => (
        <motion.div
          key={image._id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -50 }} 
        >
          <Card image={image} handleAddToCart={() => handleAddToCart(image)}  />
        </motion.div>
      ))}
    </div>
  );
};

export default CardList;