import styled from 'styled-components';

export const MainContainer = styled.div`
    display: grid;
    height: fit-content;
    padding-left: 2.5rem;
    padding-right: 2.5rem; 

    @media (max-width: 420px){
        padding-left: 0;
        padding-right: 0;
    }
`;

export const Container = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 2rem;
    row-gap: 5rem;
    margin-top: 1rem;
`;

export const SortContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 1rem;
    gap: 1rem;

    @media (max-width: 420px){
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;
