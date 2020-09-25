import React from 'react';
import './radio.css';

import classNames from 'classnames';

const InputFeedback = ({ error }) => (error ? <div className={classNames('input-feedback')}>{error}</div> : null);

export const RadioButton = ({ field: { name, value, onChange, onBlur }, id, label, className, ...props }) => (
  <div className="radio-button-container">
    <input
      name={name}
      id={id}
      type="radio"
      value={id} // could be something else for output?
      checked={id === value}
      onChange={onChange}
      onBlur={onBlur}
      className={classNames('radio-button')}
      {...props}
    />
    <label htmlFor={id}>{label}</label>
  </div>
);

export const RadioButtonGroup = ({ value, error, touched, label, className, children }) => {
  const classes = classNames(
    'input-field',
    {
      'is-success': value || (!error && touched), // handle prefilled or user-filled
      'is-error': !!error && touched,
    },
    className,
  );

  return (
    <div className={classes}>
      <legend>{label}</legend>
      {children}
      {touched && <InputFeedback error={error} />}
    </div>
  );
};
