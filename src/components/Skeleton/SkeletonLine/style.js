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
`;

export const Text = styled.div`
    background-color: #E5E7EB; 
    height: 0.625rem; 
    border-radius: 9999px; 
    width: 12rem; 

    &.w-30p {
        width: 30%; 
    }
`;
