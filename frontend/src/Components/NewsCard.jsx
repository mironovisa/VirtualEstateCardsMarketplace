import React from 'react';
import '../CompStyles/NewsCard.css'

const NewsCard = ({ title, content }) => {
  return (
    <div className="news-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default NewsCard;