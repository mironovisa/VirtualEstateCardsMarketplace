import React from 'react';
import '../../Styles/LandingPage.css'; 
import'../../StylesKit/VerticalList.css';

import Intro from './Intro'; 
import News from './News'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="full-page-component intro-component">
        <Intro />
      </div>
      <div className="vertical-list">
        <News />
      </div>
    </div>
  );
}

export default LandingPage;





