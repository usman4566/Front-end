import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carosuel.css'; // Import custom CSS for Carousel

const ImageCarousel = ({ images, isOpen, onRequestClose }) => {
  const [autoplay, setAutoplay] = useState(true);

  const handleCarouselClick = () => {
    setAutoplay(!autoplay);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={false}
      style={{
        overlay: {
          background: 'rgba(0, 0, 0, 0.7)',
          zIndex: 4,
        },
        content: {
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'none',
          border: 'none',
        },
      }}
    >
      <div
        className="carousel-container"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onRequestClose();
          }
        }}
      >
        <div className="carousel-close-button">
          <i className="fas fa-times" onClick={onRequestClose}></i>
        </div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={autoplay}
          interval={3000}
          onClickItem={handleCarouselClick}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Carousel>
        <div
          className="carousel-arrow outside left"
          onClick={(e) => {
            e.stopPropagation();
            onRequestClose();
          }}
        >
          <i className="fas fa-arrow-left"></i>
        </div>
        <div
          className="carousel-arrow outside right"
          onClick={(e) => {
            e.stopPropagation();
            onRequestClose();
          }}
        >
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    </Modal>
  );
};

export default ImageCarousel;
