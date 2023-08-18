import React from 'react';
import '../../StylesKit/VerticalList.css'; 

const News = () => {
    const property = Array.from({ length: 6 }); 
  
    return (
      <div className="vertical-list">
        {property.map((property, index) => (
          <div key={index} className="property-card">
            <h3>property Card {index + 1}</h3>
            <p>property details...</p>
          </div>
        ))}
      </div>
    );
  };

export default News;