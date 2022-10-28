import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

export const CarouselContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
`;

export const CarouselInner = styled.div`
    height: 100%;
    width: 100%;
    background-image: ${(props) => (props.imgSrc ? props.imgSrc : null)};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
`;

export const CarouselLeft = styled.div`
    flex: 5%;
    height: 100%;
    display: grid;
    place-items: center;
    color: white;
    cursor: pointer;
`;

export const CarouselCenter = styled.div`
    flex: 80%;
    height: 100%;
`;

export const CarouselRight = styled.div`
    flex: 5%;
    height: 100%;
    display: grid;
    place-items: center;
    color: white;
    cursor: pointer;
`;

export const LeftArrow = styled(FaChevronLeft)`
    opacity: ${(props) => (props.ishover === 'true' ? '100%' : '0%')};
    transition: opacity 0.2s ease-in-out;
    font-size: 0.75rem;
    z-index: 10;
    cursor: pointer;
    padding: 10%;
    border-radius: 20px;
    background-color: #000;
    color: white;
    user-select: none;
`;

export const RightArrow = styled(FaChevronRight)`
    opacity: ${(props) => (props.ishover === 'true' ? '100%' : '0%')};
    transition: opacity 0.2s ease-in-out;
    font-size: 0.75rem;
    z-index: 10;
    cursor: pointer;
    padding: 10%;
    border-radius: 20px;
    background-color: #000;
    color: white;
    user-select: none;
`;
