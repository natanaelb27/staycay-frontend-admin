import React from 'react';
import {
  Inputs,
} from './style';

function Input({ ...props }) {
  if (props.inputType === 'date') {
    return (
      <Inputs
        type={props.inputType}
        id={props.inputID}
        name={props.inputName}
        value={props.inputValue}
        placeholder={props.inputPlaceholder}
        disabled={props.isDisabled}
        onChange={props.handleChange}
        min={props.inputMin}
        max={props.inputMax}
        onKeyDown={props.handleKeyDown}
      />
    );
  }

  if (props.inputType === 'file') {
    return (
      <Inputs
        type={props.inputType}
        id={props.inputID}
        name={props.inputName}
        onChange={props.handleChange}
        multiple={props.isMultiple}
        accept={props.inputAccept}
      />
    );
  }

  return (
    <Inputs
      type={props.inputType}
      id={props.inputID}
      name={props.inputName}
      value={props.inputValue}
      placeholder={props.inputPlaceholder}
      disabled={props.isDisabled}
      onChange={props.handleChange}
      onKeyDown={props.handleKeyDown}
    />
  );
}

export default Input;
