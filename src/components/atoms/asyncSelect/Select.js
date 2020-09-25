import React from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
import ReactSelect, { components, createFilter } from 'react-select';
import Creatable from 'react-select/creatable';
import Checkbox from '../Checkbox';

const Select = ({
  htmlFor,
  label,
  options,
  width,
  field = {},
  form = {},
  allowCustomInput = false,
  placeholder = 'All',
  isMulti,
  checkboxOptions,
  onChange,
  onInputChange,
  inputValue,
  ...props
}) => {

  const filterColors = (inputValue) => {
    return []
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    console.log('onInputChange', inputValue);
    onInputChange(inputValue);
    return inputValue;
  };

  return (
    <div
      className="brewery-select-wrap"
      style={{
        width,
      }}>
      <label htmlFor={htmlFor}>{label}</label>

      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        inputValue={inputValue}
        onInputChange={handleInputChange}
      />
 
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape()),
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.number,
  field: PropTypes.shape(),
  form: PropTypes.shape(),
  onChange: PropTypes.func,
};

Select.defaultProps = {
  htmlFor: 'unnamed',
  onChange: () => {},
};

export default Select;
