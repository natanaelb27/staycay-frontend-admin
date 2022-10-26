import React from 'react';
import { ErrorPage, MainContainer } from '../../components';

function InternalServerError() {
  return (
    <MainContainer>
      <ErrorPage
        code={500}
        message="Internal Server Error"
      />
    </MainContainer>
  );
}

export default InternalServerError;
