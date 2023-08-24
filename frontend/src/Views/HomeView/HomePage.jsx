import React from 'react';
import '../../Styles/HomePage.css';
import TopUsers from './TopUsers';
import TopItems from './TopItems';
import Trends from './Trends';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="full-screen-view users-container">
        <h2>Top Users</h2>
        <TopUsers />
      </div>
      <div className="full-screen-view items-container">
        <h2>Top Items</h2>
        <TopItems />
      </div>
      <div className="full-screen-view trends-container">
        <h2>Trends</h2>
        <Trends />
      </div>
    </div>
  );
};

export default HomePage;