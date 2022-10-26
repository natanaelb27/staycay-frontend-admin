import React from 'react';
import { ErrorPage, MainContainer } from '../../components';

function NotFound() {
  return (
    <MainContainer>
      <ErrorPage
        code={404}
        message="Page Not Found"
      />
    </MainContainer>
  );
}

export default NotFound;
