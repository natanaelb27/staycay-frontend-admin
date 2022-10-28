import React, { useState } from 'react';
import {
  HouseContainer,
  HouseInfo,
  HouseLink,
  Slider,
  Image,
  LeftArrow,
  RightArrow,
  Slide,
  LocationSpan,
  BoldSpan,
} from './style';
import { numberWithCommas } from '../../helpers';

function Card({
  housePhoto, name, location, price, linkTo,
}) {
  const [current, setCurrent] = useState(0);
  const length = housePhoto?.length;

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(housePhoto) || housePhoto.length <= 0) {
    return null;
  }
  return (
    <HouseContainer>
      <Slider onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {housePhoto.length > 1 ? (
          <>
            <LeftArrow ishover={isHovering.toString()} onClick={prevSlide} />
            <RightArrow ishover={isHovering.toString()} onClick={nextSlide} />
          </>
        ) : null}
        {housePhoto?.map((item, index) => (
          <Slide key={item.photo_id} className={index === current ? 'active' : ''}>
            {index === current && (
              <HouseLink to={linkTo} target="_blank">
                <Image imgSrc={`url(${item.photo})`} />
              </HouseLink>
            )}
          </Slide>
        ))}
      </Slider>
      <HouseLink to={linkTo} target="_blank">
        <HouseInfo>
          <BoldSpan>{name}</BoldSpan>
          <LocationSpan>{location}</LocationSpan>
          <div>
            <BoldSpan>
              Rp
              {' '}
              {numberWithCommas(price)}
              {' '}
              IDR
            </BoldSpan>
            <span>
              {' '}
              night
            </span>
          </div>
        </HouseInfo>
      </HouseLink>
    </HouseContainer>
  );
}

export default Card;
