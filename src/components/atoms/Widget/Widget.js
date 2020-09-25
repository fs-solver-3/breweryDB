import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Headding from '../Headding';

const Widget = ({
  children,
  cneter,
  width,
  style,
  widgetContainerStyle,
  title,
  lowerElements,
  isAccordion,
  containerClass,
}) => {
  const [isCollapsed, toggleMenu] = useState(false);
  return (
    <div
      style={{
        ...style,
        maxWidth: width,
      }}
      className={classNames('bdb-widget', cneter && 'bdb-widget--center-box')}
    >
      {title && (
        <div
          onClick={() => {
            isAccordion && toggleMenu(!isCollapsed);
          }}
          className="bdb-widget--header"
        >
          <Headding as="h1" title={title} />
          {isAccordion && <div className={`arrow-down ${isCollapsed && 'rotate-arrow'}`} />}
        </div>
      )}
      {!isCollapsed && (
        <>
          <div style={widgetContainerStyle} className={`bdb-widget--container ${containerClass}`}>
            {children}
          </div>
          {lowerElements}
        </>
      )}
    </div>
  );
};

Widget.propTypes = {
  children: PropTypes.node,
  cneter: PropTypes.bool,
  width: PropTypes.number,
  title: PropTypes.string,
  style: PropTypes.shape(),
};

export default Widget;
