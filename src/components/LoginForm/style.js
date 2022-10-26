import styled from 'styled-components';

export const MainContainer = styled.div`
    max-width: 100%;
    display: grid;
    align-content: center; 
    place-items: center; 
`;

export const TitleContainer = styled.div`
    width: 100%;
    background-color: var(--staycay-red);
    font-weight: bold;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 0.25rem;
    margin-bottom: 2rem;
    border-color: transparent;
`;

export const Title = styled.h1`
    color: white;
    text-align: center;
`;

export const Form = styled.form`
    display: grid; 
    align-content: center; 
    place-items: center; 
    width: 100%; 
    max-width: 24rem; 
    margin-bottom: 1%;
    grid-template-columns: repeat(1, minmax(0, 1fr)); 
    margin-top: 2%;
    box-shadow: 1px 0px 5px 0 rgba(0,0,0,0.5);
    padding-left: 3%;
    padding-right: 3%;
    padding-top: 5%;
    padding-bottom: 5%;
`;

export const MainInputContainer = styled.div`
    width: 100%;
`;

export const InputContainer = styled.div`
    margin-bottom: 1.5rem; 
    width: 95%;
`;
