import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonUI from '@material-ui/core/Button';

const Button = ({
  children,
  reddyBrown,
  logixBlue,
  seafoamBlue,
  green,
  rounded,
  bold,
  size,
  full,
  additionalClassName,
  disabled,
  ...props
}) => (
  <ButtonUI
    className={classNames(
      'brewery-button',
      reddyBrown && 'brewery-button--reddy-brown',
      logixBlue && 'brewery-button--blue',
      seafoamBlue && 'brewery-button--seafoam-blue',
      green && 'brewery-button--green',
      disabled && 'brewery-button--disabled',
      rounded && 'brewery-button--rounded',
      bold && 'brewery-button--bold',
      full && 'brewery-button--full',
      size && `brewery-button--size-${size}`,
      additionalClassName || '',
    )}
    variant="contained"
    {...props}>
    {children}
  </ButtonUI>
);

Button.propTypes = {
  children: PropTypes.node,
  reddyBrown: PropTypes.bool,
  green: PropTypes.bool,
  logixBlue: PropTypes.bool,
  seafoamBlue: PropTypes.bool,
  rounded: PropTypes.bool,
  bold: PropTypes.bool,
  size: PropTypes.bool,
  full: PropTypes.bool,
};

export default Button;
