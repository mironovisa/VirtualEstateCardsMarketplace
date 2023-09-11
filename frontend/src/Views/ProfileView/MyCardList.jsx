import React, { useState, useEffect } from "react";
import Card from "../../Components/DALLECard";
import "../../StylesKit/CardList.css";
import { usersApi } from "helpers/Api";
import LoadingSpinner from "Components/LoadingSpinner";

const MyCardList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userImages, setUserImages] = useState([]);

  const getUserImages = () => {
    setIsLoading(true);
    usersApi
      .getCardByUserId("64f4556a595a542ed038888f")
      .then((res) => {
        setUserImages(res);
        setIsLoading(false);
      })
      .catch((err) => {
        
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getUserImages();
  }, []);

  return (
    <div className="card-list">
      {isLoading ? <LoadingSpinner></LoadingSpinner> : null}
      {userImages.length === 0
        ? "You don't own any cards"
        : userImages.map((image) => <Card key={image._id} image={image} />)}
    </div>
  );
};

export default MyCardList;
