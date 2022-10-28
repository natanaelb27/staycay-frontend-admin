import React, { useState } from 'react';
import {
  CarouselContainer,
  CarouselInner,
  CarouselLeft,
  CarouselCenter,
  CarouselRight,
  LeftArrow,
  RightArrow,
} from './style';

function Carousel({ housePhoto }) {
  const [current, setCurrent] = useState(0);
  const length = housePhoto?.length;
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <CarouselContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <CarouselInner key={housePhoto[current]?.photo_id} imgSrc={`url(${housePhoto[current]?.photo})`}>
        {housePhoto.length > 1 ? (
          <CarouselLeft onClick={prevSlide}>
            <LeftArrow ishover={isHovering.toString()} />
          </CarouselLeft>
        ) : null}
        <CarouselCenter />
        {housePhoto.length > 1 ? (
          <CarouselRight onClick={nextSlide}>
            <RightArrow ishover={isHovering.toString()} />
          </CarouselRight>
        ) : null }
      </CarouselInner>
    </CarouselContainer>
  );
}

export default Carousel;
