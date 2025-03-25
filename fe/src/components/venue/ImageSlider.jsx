

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components
const SliderContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
  // box-shadow: 5px 7px 8px 5px #ff4081;
  margin-bottom: 20px ;
  
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: ${(props) => props.offset}%;
  transition: all 0.5s ease-in-out;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => (props.active ? '#fff' : '#bbb')};
  border-radius: 50%;
  cursor: pointer;
`;

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images]);

  return (
    <SliderContainer>
      {images.map((image, index) => (
        <Slide
          key={index}
          image={image}
          offset={(index - currentIndex) * 100}
        />
      ))}
      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

export default ImageSlider;
