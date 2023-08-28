/*import React from 'react';
import NewsCard from '../../Components/NewsCard'; // Adjust the import path based on your project structure
import '../../StylesKit/HorizontalList.css';

const News = () => {
  const newsData = [
    { title: 'News Title 1', content: 'News content 1' },
    { title: 'News Title 2', content: 'News content 2' },
    { title: 'News Title 2', content: 'News content 2' },
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
*/







import React from 'react';
import NewsCard from '../../Components/NewsCard';
import HorizontalListScroll from '../../StylesJS/HorizontalScroll';
/*import '../../StylesKit/VerticalList.css';*/
import '../../StylesKit/HorizontalScroll.css';

const News = () => {
  const newsData = [
    { title: 'News Title 1', content: 'News content 1' },
    { title: 'News Title 2', content: 'News content 2' },
    { title: 'News Title 3', content: 'News content 3' },
    { title: 'News Title 4', content: 'News content 4' },
  ];

  return (
    <div className="center-container">
      <HorizontalListScroll newsData={newsData} NewsCardComponent={NewsCard} />
    </div>
  );
};

export default News;
