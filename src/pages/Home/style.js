import styled from 'styled-components';

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    /* grid-template-columns: repeat(4, minmax(200px, 1fr)); */
    grid-gap: 2rem;
    row-gap: 5rem;
    margin-top: 1rem;

/* 
    @media (max-width: 1280px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));

    }

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));

    }

    @media (max-width: 640px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    } */
`;

export const SortContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 1rem;
    gap: 1rem;

`;
