import React from 'react';

const WhyPage = () => {
    const imageSrc1 = require('../../Assets/MockImages/purple-light.png');

  return (
    <div className="we-are-page">
      <h2 className='intro-title'>WHY WE EXIST?</h2>
      <span className='intro-text'>
      We exist to bridge the realms of art and technology, unlocking the untapped potential of AI-driven creativity. Our mission is to inspire, engage, and elevate the world of digital artistry.
      </span>
      <img className='intro-img' src={imageSrc1} alt="Description of your image" />
    </div>
  );
}

export default WhyPage;
