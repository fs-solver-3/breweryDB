import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SortIcon from './sortIcon.svg';

const Table = ({
  headers, children, size, onHeaderClick
}) => {
  const changeSortingOrder = (th, i) => {
    if (onHeaderClick) {
      onHeaderClick(th, i);
    }
  };

  return (
    <div className={classNames('bdb-table', size && `bdb-table--size-${size}`)}>
      <table>
        <thead>
          <tr>
            {headers.map((th, i) => (
              <th key={i} onClick={() => changeSortingOrder(th, i)}>
                {th}
                {th !== '' && <img src={SortIcon} alt="sort" />}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  children: PropTypes.node,
  headers: PropTypes.arrayOf(PropTypes.string),
  onHeaderClick: PropTypes.func,
  size: PropTypes.string
};

export default Table;
