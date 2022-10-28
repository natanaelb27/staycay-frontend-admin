import styled from 'styled-components';

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

`;
