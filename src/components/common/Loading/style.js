import styled from 'styled-components';

export const Spinner = styled.div`
  border: 5px solid grey;
  border-top: 5px black solid;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
