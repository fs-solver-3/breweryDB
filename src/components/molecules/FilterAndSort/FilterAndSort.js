import React from 'react';
import PropTypes from 'prop-types';

import Space from 'components/atoms/Space';
import Select from 'components/atoms/Select';

const FilterAndSort = ({ filters, sortOptions }) => (
  <div className="filter-sort">
    <h6>Filter & Sort</h6>
    <Space size={15} />
    <div className="flex">
      <Select label="Filter" options={filters} />
      <Select label="Sort By" options={sortOptions} />
    </div>
  </div>
);

FilterAndSort.defaultProps = {
  filters: [],
  sortOptions: [
    {
      label: 'A - Z',
      value: 'A - Z',
    },
    {
      label: 'Z - A',
      value: 'Z - A',
    },
  ],
};

FilterAndSort.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.shape()),
  sortOptions: PropTypes.arrayOf(PropTypes.shape()),
};

export default FilterAndSort;
