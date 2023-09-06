import React, { useState, useEffect } from 'react';
import Card from '../../Components/DALLECard';
import '../../StylesKit/CardList.css'
import { motion, AnimatePresence } from 'framer-motion';
import { imagesApi } from 'helpers/Api/imagesApi';


const AllCards = ({ searchParams, setSearchParams }) => {

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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -50 }} 
        >
          <Card image={image} />
        </motion.div>
      ))}
    </div>
  );
};

export default AllCards;
