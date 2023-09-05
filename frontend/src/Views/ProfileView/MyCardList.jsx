import React, { useState, useEffect } from "react";
import Card from "../../Components/DALLECard";
import "../../StylesKit/CardList.css";
import { usersApi } from "helpers/Api";

const MyCardList = () => {
  const [userImages, setUserImages] = useState([]);

  const getUserImages = () => {
    usersApi.getCardByUserId("64f4556a595a542ed038888f")
      .then((res) => {
        setUserImages (res)
       
      })
      .catch((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    getUserImages()
  }, [])

  return (
    <div className="card-list">
      {userImages.map((image) => (
        <Card key={image._id} image={image} />
      ))}
    </div>
  );
};

export default MyCardList;
