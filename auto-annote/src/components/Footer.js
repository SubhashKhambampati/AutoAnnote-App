import React from 'react';

const Footer = () => {
  const leftColumnStyle = {
    float: 'left',
    width: '30%',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const rightColumnStyle = {
    float: 'left',
    width: '30%',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
  };

  return (
    <div>
      <div style={leftColumnStyle}>
        {/* Images in the left column */}
        <img src="images/big-data.png" alt="Image 1"  />
        <img src="images/big-data.png" alt="Image 2"  />
        {/* Add more images as needed */}
      </div>

      <div style={rightColumnStyle}>
        {/* Text and images in the right column */}
        <h2>Right Column Title</h2>
        <p>Some text here...</p>
        <img src="images/big-data.png" alt="Image 3"  />
        <img src="images/big-data.png" alt="Image 4"  />
        {/* Add more text and images as needed */}
      </div>
    </div>
  );
};

export default Footer;
