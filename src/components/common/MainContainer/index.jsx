import React from 'react';
import { Container } from './style';

function MainContainer({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default MainContainer;
