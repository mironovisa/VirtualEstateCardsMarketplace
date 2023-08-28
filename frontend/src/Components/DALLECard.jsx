import React from 'react';
import '../CompStyles/DALLECard.css'

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image.URL} alt={image.Title} />
      <h2>{image.Title}</h2>
      <p>{image.Description}</p>
      <p>Category: {image.Category}</p>
      <p>Price: ${image.Price}</p>
      {image.Sold ? <p>Sold</p> : <p>Available</p>}
    </div>
  );
};

export default Card;