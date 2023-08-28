import React from 'react';
import CardList from './CardList';
import SearchNavBar from './SearchNavBar';
import '../../Styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="search-nav-bar-container">
        <SearchNavBar />
      </div>
      <div className="card-list-container">
        <h2>List</h2>
        <CardList />
      </div>
    </div>
  );
};

export default HomePage;