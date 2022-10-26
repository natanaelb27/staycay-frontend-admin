import styled from 'styled-components';

export const Buttons = styled.button`
    width: 100%;
    background-color: black;
    color: white;
    font-weight: bold;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    border-color: transparent;

    &:hover {
        background-color: #3C4048;
    }

    &.blue {
        background-color: var(--blue);
    }

    &.blue:hover {
        background-color: var(--light-blue);
    }
    
    &.danger {
        background-color: var(--staycay-red);
    }

    &.danger:hover {
        background-color: var(--staycay-light-red);
    }

    :disabled {
        cursor: default;
        background-color: #cccccc;

        :hover {
            background-color: #cccccc;
        }
    }
`;
