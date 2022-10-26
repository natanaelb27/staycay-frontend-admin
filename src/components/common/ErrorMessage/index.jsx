import React from 'react';
import {
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  ErrorContainer,
  ErrorIcon,
  ErrorMessages,
} from './style';

function ErrorMessage({ ...props }) {
  return (
    <ErrorContainer>
      <ErrorIcon icon={faExclamationCircle} />
      <ErrorMessages>{props.children}</ErrorMessages>
    </ErrorContainer>
  );
}

export default ErrorMessage;
