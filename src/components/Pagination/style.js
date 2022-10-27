import styled from 'styled-components';

export const PaginationContainer = styled.div`
    display: grid;
    margin-top: 2%;
    grid-auto-flow: column;
    justify-content: center;
    padding: 2%;
`;

export const PageButton = styled.button`
    padding: 0.5rem;
    font-size: 0.8rem;
    background-color: #ffffff;
    color: black;
    border: 1px solid gray;
    cursor: pointer;

    &:hover {
        background-color: var(--staycay-red);
        color: #ffffff;
    }
    &.active {
        background-color: var(--staycay-red);
        color: #ffffff;
    }
`;

export const HelperButton = styled.button`
    padding: 0.5rem;
    font-size: 0.8rem;
    background-color: #ffffff;
    color: black;
    border: 1px solid gray;
    cursor: pointer;

    &:hover {
        background-color: var(--staycay-red);
        color: #ffffff;
    }
`;

export const EllipsesButton = styled.button`
    padding: 0.5rem;
    font-size: 0.8rem;
    background-color: #ffffff;
    color: black;
    border: 1px solid gray;
    cursor: pointer;

    &:hover {
        background-color: var(--staycay-red);
        color: #ffffff;
    }
`;
