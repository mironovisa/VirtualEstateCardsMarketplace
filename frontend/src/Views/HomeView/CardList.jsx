import React from 'react';
import Card from '../../Components/DALLECard';
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
  
];

const CardList = () => {
  return (
    <div className="card-list">
      {sampleImages.map((image) => (
        <Card key={image.ID} image={image} />
      ))}
    </div>
  );
};

export default CardList;