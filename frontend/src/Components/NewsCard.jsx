import React from 'react';

const NewsCard = ({ title, content }) => {
  return (
    <div className="news-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default NewsCard;