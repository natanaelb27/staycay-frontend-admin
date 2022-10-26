import React from 'react';
import {
  Labels,
} from './style';

function Label({ ...props }) {
  return (
    <Labels htmlFor={props.labelFor}>
      {props.children}
    </Labels>
  );
}

export default Label;
