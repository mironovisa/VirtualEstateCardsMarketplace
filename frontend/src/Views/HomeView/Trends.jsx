import React from 'react';
import '../../StylesKit/VerticalList.css'; 

const Trends = () => {
  const trends = Array.from({ length: 6 }); // Create an array of 6 trends

  return (
    <div className="vertical-list">
      {trends.map((trend, index) => (
        <div key={index} className="trend-card">
          <h3>Trends Card {index + 1}</h3>
          <p>Trend details...</p>
        </div>
      ))}
    </div>
  );
};

export default Trends;