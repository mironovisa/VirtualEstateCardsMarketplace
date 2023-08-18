import React from 'react';
//import NewsCard from '../../Components/NewsCard';
import '../../StylesKit/VerticalList.css'; 

const News = () => {
    const news = Array.from({ length: 6 }); 
  
    return (
      <div className="vertical-list">
        {news.map((news, index) => (
          <div key={index} className="news-card">
            <h3>Top news Card {index + 1}</h3>
            <p>news details...</p>
          </div>
        ))}
      </div>
    );
  };

export default News;