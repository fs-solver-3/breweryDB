import React from 'react';
import PropTypes from 'prop-types';
import Headding from 'components/atoms/Headding';

const Board = ({ title, children }) => (
  <div className="bdb-board">
    <div className="bdb-board--head">
      <Headding as="h3" bold title={title} />
    </div>
    <div className="bdb-board--container">{children}</div>
  </div>
);

Board.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Board;
