import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CheckboxUI from '@material-ui/core/Checkbox';

const Checkbox = ({
  greyDesign,
  label,
  htmlFor,
  size,
  bold,
  labelStyle,
  containerStyle,
  field = {},
  onChange,
  onClick,
  checked,
  readonly,
}) => {
  const handleChange = event => {
    onChange(label, event.target.checked);
  };

  return (
    <div
      style={containerStyle}
      onClick={onClick}
      className={classNames('bdb-checkbox', size && `bdb-checkbox--size-${size}`, bold && 'bdb-checkbox--bold')}>
      <CheckboxUI
        checked={checked}
        className={classNames('brewery-checkbox', greyDesign && 'brewery-checkbox--grey')}
        color="primary"
        checkedIcon={<span className="brewery-checkbox--checked" />}
        icon={<span className="brewery-checkbox--icon" />}
        onChange={handleChange}
        disableRipple={readonly}
        {...field}
      />
      {label && (
        <label style={labelStyle} htmlFor={htmlFor}>
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  greyDesign: PropTypes.bool,
  bold: PropTypes.bool,
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  field: PropTypes.shape(),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  htmlFor: 'unnamed',
  checked: false,
  onChange: () => {},
};

export default Checkbox;
