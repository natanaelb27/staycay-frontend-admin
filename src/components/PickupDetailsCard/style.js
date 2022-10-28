import styled from 'styled-components';

export const MainContainer = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    background-color: #eee;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.5);
    gap: 1rem;
`;

export const SpanTitle = styled.span`
    display: block;
    font-size: 0.95rem;
    font-weight: 700; 
    letter-spacing: 0.025em; 
`;

export const SpanDetail = styled.span`
    display: block;
    font-size: 0.95rem;
    letter-spacing: 0.025em; 
    color: #3C4048;
`;

export const ContentContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;

    @media (max-width: 400px) {
        grid-template-columns: 1fr;
        gap: 0.2rem;
    }
`;

export const EditButtonContainer = styled.div`
    display: grid;
    align-items: start;
    justify-items: right;
`;

export const EditButton = styled.button`
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;
    border: none;
    background: none;
`;

export const EditContainer = styled.div`
    display: grid;
`;

export const SaveButtonContainer = styled.div`
    margin-top: 1rem;
    width: 50%;
`;

export const PickupStatusContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.4fr;
`;
