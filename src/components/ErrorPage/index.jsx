import React from 'react';

function ErrorPage({ code, message }) {
  return (
    <>
      <h1>{code}</h1>
      <h2>{message}</h2>
    </>
  );
}
export default ErrorPage;
