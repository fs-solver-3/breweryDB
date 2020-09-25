import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect, { components, createFilter } from 'react-select';
import Creatable from 'react-select/creatable';
import Checkbox from '../Checkbox';

const multiData = [];

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
  value,
  onCustomOnChange,
  ...props
}) => {
  function handleOnChange(data) {
    if (form.setFieldValue) {
      form.setFieldValue(field.name, data);
    }
    if (isMulti && onCustomOnChange) {
      onCustomOnChange(data && data.map((select) => select.value));
    }
    onChange(data.value, data);
  }

  const filterOptions = (candidate, input) => {
    if ((input, candidate.value !== '')) {
      var haystack = candidate.value;
      var prefix = input;
      return String(haystack).startsWith(prefix);
    }
    return true;
  };

  const customOptions = options;

  const styles = {
    styles: {
      multiValue: base => ({ ...base, backgroundColor: '#003b71', color: '#fff' }),
      multiValueLabel: base => ({ ...base, fontWeight: '500', color: 'white' }),
      input: base => ({ ...base, display: 'flex' }),
      option: (base, state) => ({
        ...base,
        padding: checkboxOptions ? '0 12px' : '9px 12px',
        backgroundColor: state.isSelected
          ? '#003b71'
          : options.findIndex(e => e.label === state.label) % 2 === 0
            ? '#e9f1f8'
            : '#fff',
        color: state.isSelected ? '#fff' : '#003b71',
      }),
    },
  };

  const Option = params => (
    <div>
      <components.Option {...params}>
        <Checkbox
          labelStyle={{ color: params.isSelected ? '#fff' : '#003b71' }}
          label={params.value}
          field={{ checked: params.isSelected, onChange: () => null }}
        />
      </components.Option>{' '}
    </div>
  );

  return (
    <div
      className="brewery-select-wrap"
      style={{
        width,
      }}>
      <label htmlFor={htmlFor}>{label}</label>
      {checkboxOptions ? (
        <ReactSelect
          {...field}
          {...props}
          {...styles}
          components={{ Option }}
          isMulti
          closeMenuOnSelect={false}
          onChange={handleOnChange}
          classNamePrefix="brewery-select"
          isSearchable
          options={options}
          hideSelectedOptions={false}
          placeholder={placeholder || 'All'}
          value={value}
        />
      ) : !allowCustomInput ? (
        <ReactSelect
          {...field}
          {...props}
          isMulti={isMulti}
          {...(isMulti ? styles : {})}
          closeMenuOnSelect={!isMulti}
          onChange={handleOnChange}
          classNamePrefix="brewery-select"
          isSearchable
          options={options}
          placeholder={placeholder || 'All'}
          onInputChange={onInputChange}
        />
      ) : (
            <Creatable
              // {...field}
              {...props}
              onChange={handleOnChange}
              classNamePrefix="brewery-select"
              isSearchable
              placeholder={placeholder}
              options={customOptions}
              filterOption={filterOptions}
            />
          )}
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
  onInputChange: PropTypes.func
};

Select.defaultProps = {
  htmlFor: 'unnamed',
  onChange: () => { },
  onInputChange: () => { },
};

export default Select;
