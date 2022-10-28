import styled from 'styled-components';

export const MainContainer = styled.div`
    max-width: 100%;
    align-content: center; 
    place-items: center; 
    padding-left: 15%;
    padding-right: 15%; 


    @media (max-width: 500px) {
        padding: 0.5rem;
    }
`;

export const Title = styled.h1`
    padding-left: 2%;
    line-height: 1rem; 
    font-weight: 700; 
    letter-spacing: 0.025em; 
`;

export const InputContainer = styled.div`
    display: grid;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
`;

export const MaxSelectionContainer = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-evenly;
    text-align: center;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const LoadingContainer = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
`;

export const LoadingPickupCardContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
`;

export const MinSelectionContainer = styled.div`
    display: none;
    padding: 1rem;

    @media (max-width: 768px) {
        display: grid;
    }
`;

export const SpanSelection = styled.span`
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.025em;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    &.active {
        text-decoration: underline;
    }
`;

export const SpanDetail = styled.span`
    display: block;
    font-size: 0.95rem;
    letter-spacing: 0.025em; 
    color: #3C4048;
`;

export const PickupContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 2%;
    gap: 1rem;
    justify-content: center;

`;

export const PaginationContainer = styled.div`
    display: grid;
    justify-content: center;
    padding: 2%;
`;
