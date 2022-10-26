import React from 'react';
import {
  Buttons,
} from './style';

function Button({ btnType, children, ...props }) {
  if (btnType === 'submit') {
    return (
      <Buttons type="submit" className={props.classes} disabled={props.isDisabled}>
        {children}
      </Buttons>
    );
  }
  return (
    <Buttons type="button" onClick={props.handleClick} className={props.classes} disabled={props.isDisabled}>
      {children}
    </Buttons>
  );
}

export default Button;
