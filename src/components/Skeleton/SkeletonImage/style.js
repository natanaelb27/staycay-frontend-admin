import styled from 'styled-components';

export const SkeletonContainer = styled.div`
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

    @keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: .5;
    }
    }; 

    width: 100%;
    height: 100%;
`;

export const ImageContainer = styled.div`
    display: flex; 
    margin-bottom: 1rem; 
    background-color: #D1D5DB; 
    justify-content: center; 
    align-items: center; 
    height: 12rem; 
    border-radius: 0.25rem; 

    &.full {
        width: 100%; 
        height: 100%; 
    }

`;

export const Image = styled.svg`
    color: #E5E7EB; 
    width: 3rem; 
    height: 3rem; 
`;
