import React from 'react';
import PropTypes from 'prop-types';

const ContentTemplate = ({ children, title }) => (
  <div className="bdb-content-template">
    <div className="bdb-content-template--header">
      <div>
        <h1>{title}</h1>
      </div>
    </div>
    <div className="bdb-content-template--container">{children}</div>
  </div>
);

ContentTemplate.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default ContentTemplate;
