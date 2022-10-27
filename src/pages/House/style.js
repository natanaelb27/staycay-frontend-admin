import styled from 'styled-components';

export const MainContainer = styled.div`
    max-width: 100%;
    align-content: center; 
    place-items: center; 
    padding-left: 15%;
    padding-right: 15%; 
    margin-top: 1%;
    margin-bottom: 1%;

    @media (max-width: 500px) {
        padding: 0.5rem;
    }
`;

export const HouseTitleContainer = styled.div`
    width: 100%;
    margin-top: 3%;
`;

export const HouseImageContainer = styled.div`
    height: 40rem;
    margin-top: 3%;
`;

export const HouseContentContainer = styled.div`
    margin-top: 3%;
`;

export const HouseContentDetailsContainer = styled.div`
    display: grid;
    gap: 1rem;
`;

export const Line = styled.div`
    border-bottom: 0.2px solid #C5C5C5;
    width: 100%;

`;

export const HouseStatusContainer = styled.div`
    display: flex; 
    width: 50%;
    gap: 0.5rem;

    @media (max-width: 900px) {
        flex-direction: column;
        width: 100%;
        gap: 0rem;

    } 

    /* display: grid;
    grid-template-columns: 1fr 1fr;
    width: 50%;
    gap: 1rem;

    @media (max-width: 300px) {
        grid-template-columns: 1fr;
        gap: 0rem;

    } */
`;

export const ContentContainer = styled.div`
    width: 100%;
    display: grid;
    gap: 0.5rem;
`;

export const SpanTitle = styled.span`
    display: block;
    font-size: 1rem;
    line-height: 1rem; 
    font-weight: 700; 
    letter-spacing: 0.025em;
`;

export const SpanDetail = styled.span`
    display: block;
    font-size: 0.9rem;
    line-height: 1rem; 
    letter-spacing: 0.025em;
`;
