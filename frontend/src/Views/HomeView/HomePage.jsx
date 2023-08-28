import React from 'react';
import '../../Styles/HomePage.css';
import TopUsers from './TopUsers';
import TopItems from './TopItems';
import Trends from './Trends';

const HomePage = () => {
    return (
      <div className="home-page">
        <div className='page fs'>
          <h2 className='page-title-1'>Top Users</h2>
          <TopUsers />
        </div>
        
        <div className='page sc'>
          <h2 className='page-title'>Top Items</h2>
          <TopItems />
        </div>
  
        <div className='page th'>
          <h2 className='page-title'>Trends</h2>
          <Trends />
        </div>
      </div>
  );
};

export default HomePage;