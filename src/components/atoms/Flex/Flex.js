import React from 'react';
import PropTypes from 'prop-types';

const Flex = ({ children, style }) => (
  <div style={style} className="bdb-flex">
    {children}
  </div>
);

Flex.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape(),
};

export default Flex;
