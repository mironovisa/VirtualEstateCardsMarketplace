import React from 'react';

const TopImages = () => {
    const imageSrc1 = require('../../Assets/MockImages/colorful.png');
    const imageSrc2 = require('../../Assets/MockImages/blue-green-light.png');
    const imageSrc3 = require('../../Assets/MockImages/blue-brown-medium.png');

    return (
        <div className="top-images-page">
            <h3 className='intro-title'>Our most popular art!</h3>
            <img src={imageSrc1} alt="Description of your image" />
            <img src={imageSrc2 } alt="Description of your image" />
            <img src={imageSrc3} alt="Description of your image" />
        </div>
    );
}

export default TopImages;