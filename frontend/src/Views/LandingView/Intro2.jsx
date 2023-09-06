import React from 'react';


const Intro2 = () => {

    const BWFace = require('../../Assets/MockImages/b-w-face.png');
  return (
    <div className="intro-container">
        <img className='intro-img' src={BWFace} alt="Description of your image" />
        <span className='intro-text'>
        Discover a captivating world of AI-generated images that transcend imagination. Our collection showcases stunning visuals, merging art and technology seamlessly for a truly unique visual experience.
        </span>
    </div>
  );
}

export default Intro2;