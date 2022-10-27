import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    height: fit-content;
    margin-top: 1%;
`;

export const Title = styled.h1`
    padding-left: 2%;
    line-height: 1rem; 
    font-weight: 700; 
    letter-spacing: 0.025em; 
`;

export const MaxSelectionContainer = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        display: none;
    }
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
    /* grid-template-columns: 1fr 1fr; */

    @media (max-width: 1100px) {
        /* grid-template-columns: 1fr; */
    }
`;

// export const ReservationContainer = styled.div`
//     display: grid;
//     gap: 1rem;
//     justify-content: center;
//     grid-template-columns: 1fr 1fr;

//     @media (max-width: 1100px) {
//         grid-template-columns: 1fr;
//     }
// `;

export const PaginationContainer = styled.div`
    display: grid;
    justify-content: center;
    padding: 2%;
`;
