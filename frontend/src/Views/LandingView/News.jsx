import React from 'react';
import NewsCard from '../../Components/NewsCard'; // Adjust the import path based on your project structure
import '../../StylesKit/HorizontalList.css';

const News = () => {
  const newsData = [
    { title: 'News Title 1', content: 'News content 1' },
    { title: 'News Title 2', content: 'News content 2' },
  ];

  return (
    <div className="horizontal-list">
      {newsData.map((news, index) => (
        <NewsCard key={index} title={news.title} content={news.content} />
      ))}
    </div>
  );
};

export default News;