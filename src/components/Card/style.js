import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

export const HouseContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
`;

export const HouseInfo = styled.div`
    margin-top: 10%;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    row-gap: 5%;
`;

export const HouseLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const Slider = styled.div`
    width: 20rem;
    height: 20rem;
    border-radius: 20px;    
    margin: 0px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LeftArrow = styled(FaChevronLeft)`
    opacity: ${(props) => (props.ishover === 'true' ? '100%' : '0%')};
    transition: opacity 0.2s ease-in-out;
    position: absolute;
    left: 5%;
    font-size: 0.75rem;
    z-index: 10;
    cursor: pointer;
    padding: 3%;
    border-radius: 20px;
    /* background-color: white;
    color: #000; */
    background-color: #000;
    color: white;
    user-select: none;
`;

export const RightArrow = styled(FaChevronRight)`
    opacity: ${(props) => (props.ishover === 'true' ? '100%' : '0%')};
    transition: opacity 0.2s ease-in-out;
    position: absolute;
    right: 5%;
    font-size: 0.75rem;
    z-index: 10;
    cursor: pointer;
    padding: 3%;
    border-radius: 20px;
    /* background-color: white;
    color: #000; */
    background-color: #000;
    color: white;
    user-select: none;
`;

export const Image = styled.div`
    background-size: cover;
    background-image: ${(props) => (props.imgSrc ? props.imgSrc : null)};

    width: 20rem;
    height: 20rem;
    border-radius: 20px;
    border: 0.1px solid gray;
`;

// export const Image = styled.img`
//     background-size: cover;
//     background-image: ${(props) => (props.imgSrc ? props.imgSrc : null)};

//     width: 20rem;
//     height: 20rem;
//     border-radius: 20px;
//     border: 0.1px solid gray;
// `;

export const Slide = styled.div`
    opacity: 0;
    /* transform: translateX(-100%); */
    transition-duration: 1s ease;

    &.active {
        opacity: 1;
        animation: slide-in 0.5s forwards;
        transition-duration: 1s;
    }
`;

export const LocationSpan = styled.span`
    color: #717171;
`;

export const BoldSpan = styled.span`
    color: #222222;
    font-weight: bold;

`;

// export const Wrapper = styled.div`
//     height: 20rem;
//     width: 20rem;
//     border-radius: 20px;
//     background-size: cover;
//     background-image: ${(props) => (props.img ? `url(${props.img})` : null)};
// `;
