import React from 'react';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/creatable';

const Select = ({
  htmlFor, label, options, width, ...props
}) => (
  <div
    className="brewery-select-wrap"
    style={{
      width,
    }}
  >
    <label htmlFor={htmlFor}>{label}</label>
    <CreatableSelect
      {...props}
      classNamePrefix="brewery-select"
      isSearchable
      isClearable
      options={options}
      placeholder="All"
    />
  </div>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape()),
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  width: PropTypes.number,
};

Select.defaultProps = {
  htmlFor: 'unnamed',
};

export default Select;
