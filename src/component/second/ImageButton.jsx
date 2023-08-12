import React from 'react';

const ImageButton = ({ image, onImageClick }) => {
  return (
    <button
      onClick={() => onImageClick(image)}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
      }}
    >
      <img src={image} alt="Image" style={{ width: '100%', height: '100%' }} />
    </button>
  );
};

export default ImageButton;
