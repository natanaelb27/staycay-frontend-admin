import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    opacity: 0;
    transition: all 0.3s ease-in-out;
    pointer-events: none;

    &.show {
        opacity: 1;
        pointer-events: visible;

    }
`;

export const ModalContent = styled.div`
    width: 50%;
    background-color: #fff;

    transform: translateY(-100%);
    transition: all 0.3s ease-in-out;

    &.show {
        transform: translateY(0);
    }
`;

export const ModalHeader = styled.div`
    padding: 1rem;
    display: grid;
    justify-content: center;
`;

export const ModalTitle = styled.h1`
    margin: 0;
`;

export const ModalBody = styled.div`
    padding: 1rem;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    display: grid;
    justify-content: center;
`;

export const ModalFooter = styled.div`
    padding: 1rem;
    display: grid;
    justify-content: right;
    grid-template-columns: 20% 20%;
    gap: 1rem;

`;
