import React from 'react';
import '../../Styles/HomePage.css'; // Import your CSS file for styling
import TopUsers from './TopUsers';
import TopItems from './TopItems';
import Trends from './Trends';

const HomePage = () => {
    return (
      <div className="home-page">
        <h2>Top Users</h2>
        <TopUsers />
        
        <h2>Top Items</h2>
        <TopItems />
  
        <h2>Trends</h2>
        <Trends />
      </div>
    );
  };
  
  export default HomePage;