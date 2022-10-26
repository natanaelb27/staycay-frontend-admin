import React, { useEffect } from 'react';
import Button from '../Button';
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,

} from './style';

function DangerModal({
  isShow, onClose, title, children, handleSubmit, submitText,
}) {
  // if (!isShow) {
  //   return null;
  // }

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  return (
    <ModalContainer onClick={onClose} className={`${isShow ? 'show' : ''}`}>
      <ModalContent onClick={(e) => e.stopPropagation()} className={`${isShow ? 'show' : ''}`}>
        <ModalHeader>
          <ModalTitle>
            {title}
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          <Button type="button" handleClick={onClose}>Close</Button>
          <Button type="button" handleClick={handleSubmit} classes="danger">{submitText}</Button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
}

export default DangerModal;
