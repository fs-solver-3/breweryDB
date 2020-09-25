import React from 'react';
import PropTypes from 'prop-types';

const TableViewIcon = ({ color }) => (
  <svg
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    id="Group_2301"
    width="35"
    height="31"
    data-name="Group 2301"
    viewBox="0 0 35 31"
  >
    <g id="Group_2300" data-name="Group 2300">
      <path id="Rectangle_3404" d="M0 0H7V7H0z" data-name="Rectangle 3404" />
      <path id="Rectangle_3405" d="M0 0H23V7H0z" data-name="Rectangle 3405" transform="translate(12)" />
    </g>
    <g id="Group_2299" data-name="Group 2299" transform="translate(0 12)">
      <path id="Rectangle_3407" d="M0 0H7V7H0z" data-name="Rectangle 3407" />
      <path id="Rectangle_3406" d="M0 0H23V7H0z" data-name="Rectangle 3406" transform="translate(12)" />
    </g>
    <g id="Group_2298" data-name="Group 2298" transform="translate(0 24)">
      <path id="Rectangle_3409" d="M0 0H7V7H0z" data-name="Rectangle 3409" />
      <path id="Rectangle_3408" d="M0 0H23V7H0z" data-name="Rectangle 3408" transform="translate(12)" />
    </g>
  </svg>
);

TableViewIcon.propTypes = {
  color: PropTypes.string,
};

export default TableViewIcon;
