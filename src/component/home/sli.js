import React from 'react';
import './sli.css';

const images = [
  'Screenshot (22).png',
  'Screenshot (23).png',
  'Screenshot (24).png',
  'Screenshot (25).png',
  'Screenshot (28).png',
  'Screenshot (26).png',
  'Screenshot (22).png',
  'Screenshot (23).png',
  'Screenshot (24).png',
  'Screenshot (25).png',
  'Screenshot (28).png',
  'Screenshot (26).png',
];

const RotatingGallery = () => {
  return (
    <div className='sli'>
        <div className="container gallery-container">
      <div className="gallery">
        {images.map((src, index) => (
          <div className="gallery-item" key={index} style={{ '--i': index }}>
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default RotatingGallery;
