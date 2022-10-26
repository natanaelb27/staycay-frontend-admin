import React from 'react';
// import PropTypes from 'prop-types';

function ErrorPage({ code, message }) {
  return (
    <>
      <h1>{code}</h1>
      <h2>{message}</h2>
    </>
  );
}

// ErrorPage.propTypes = {
//   code: PropTypes.number,
//   message: PropTypes.string,
// };

export default ErrorPage;
