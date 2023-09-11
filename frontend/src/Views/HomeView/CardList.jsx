import React, { useState, useEffect } from "react";
import Card from "../../Components/DALLECard";
import "../../StylesKit/CardList.css";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { imagesApi } from "helpers/Api/imagesApi";
import { usersApi } from "helpers/Api";
import LoadingSpinner from "Components/LoadingSpinner";
import { usePopupMessage } from '../../Context/PopupMessageContext';


const CardList = ({
  searchParams,
  setSearchParams,
  isLoading,
  setIsLoading,
}) => {
  const [images, setImages] = useState([]);
  const controls = useAnimation();
  const { showPopupMessage } = usePopupMessage();

  const getAllImages = () => {
    setIsLoading(true);
    imagesApi
      .getAllImages(searchParams)
      .then((res) => {
        setImages(res);

        setIsLoading(false);
      })
      .catch((err) => {
        

        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllImages();
  }, [searchParams]);

  const handleAddToCart = (image) => {
    const payload = { id: image._id };
    usersApi
      .updateUserCart(payload)
      .then((res) => {
        getAllImages();
        showPopupMessage(`Image Successfully added to cart!`);

      })
      .catch((err) => {
        showPopupMessage(`Error adding image to cart!`);
      });
  };

  return (
    <div className="card-list">
      <AnimatePresence>
        {isLoading ? <LoadingSpinner></LoadingSpinner> : null}
        {images.map((image) => (
          <motion.div
            key={image._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            layout
          >
            <Card
              image={image}
              handleAddToCart={() => handleAddToCart(image)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CardList;
