import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ChevronLeft from './chevron-left.svg';

const Breadcumb = ({ links = [], showArrowOnFirstElement }) => (
  <div className="brewery-breadcumb">
    {links.map((link, i) => (
      <Link key={i} to={link.link}>
        {(i !== 0 || showArrowOnFirstElement) && (
          <img
            style={{
              width: 16,
            }}
            src={ChevronLeft}
            alt={link.label}
          />
        )}
        {link.label}
      </Link>
    ))}
  </div>
);

Breadcumb.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape()),
};

export default Breadcumb;
