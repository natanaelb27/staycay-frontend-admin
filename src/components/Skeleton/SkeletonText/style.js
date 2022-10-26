import styled from 'styled-components';

export const SkeletonContainer = styled.div`
    padding: 1rem; 
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

    @keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: .5;
    }
    }; 
    max-width: 24rem; 
    border-radius: 0.25rem; 
    border-width: 1px; 
    border-color: #E5E7EB; 
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 


    @media (min-width: 768px) { 
    padding: 1.5rem; 
    }

    &.full {
        max-width: 100%;
    }
`;

export const Text = styled.div`
    background-color: #E5E7EB; 
    height: 0.625rem; 
    border-radius: 9999px; 

    &.title {
        width: 12rem; 
        margin-bottom: 1rem; 
    }
    
    &.content {
        margin-bottom: 0.625rem; 
    }
`;
