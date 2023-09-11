import React, { useState, useEffect } from 'react';
import Card from '../../Components/DALLECard';
import '../../StylesKit/CardList.css'
import { motion, AnimatePresence } from 'framer-motion';
import { imagesApi } from 'helpers/Api/imagesApi';
import LoadingSpinner from 'Components/LoadingSpinner';


const AllCards = ({ searchParams, setSearchParams }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [images, setImages] = useState([])

  const getAllImages = () => {
    setIsLoading(true)
    imagesApi.getAllImages(searchParams)
      .then((res) => {
        setImages(res)
        setIsLoading(false)
      })
      .catch((err) => {
        
        setIsLoading(false)
      })
  };

  useEffect(() => {
    getAllImages()
  }, [searchParams])
  

  return (
    <div className="card-list">
      {isLoading ? <LoadingSpinner></LoadingSpinner> : null}
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
