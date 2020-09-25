import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Glassware = ({ text, svg }) => (
  <div className="bdb-glassware">
    {svg}
    <span className="glassware__text">{text}</span>
  </div>
);

Glassware.propTypes = {
  text: PropTypes.string,
  svg: PropTypes.element,
};

export default Glassware;
