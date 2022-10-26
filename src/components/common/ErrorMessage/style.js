import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ErrorContainer = styled.div`
    display: flex;
    align-content: center;
    gap: 0.5rem;
    /* display: grid;
    grid-template-columns: 7% 90%; */
    /* align-items: center; */
    max-height: 2rem;
    margin-top: 0.5rem;
    font-weight: normal;
    text-decoration: none;
`;

export const ErrorMessages = styled.p`
    margin: 0;
    font-size: 0.75rem;
    color: var(--staycay-red);
`;

export const ErrorIcon = styled(FontAwesomeIcon)`
    color: var(--staycay-red);
`;
