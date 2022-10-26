import React from 'react';
import {
  Selects,
} from './style';

function Select({ children, ...props }) {
  return (
    <Selects
      id={props.selectID}
      onChange={props.handleChange}
      name={props.selectName}
      value={props.selectValue}
    >
      {children}
    </Selects>
  );
}

export default Select;
