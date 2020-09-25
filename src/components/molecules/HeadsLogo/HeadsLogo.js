import React from 'react';
import PropTypes from 'prop-types';

import Headding from 'components/atoms/Headding';

const HeadsLogo = ({ title, logo }) => (
  <div>
    <div
      style={{
        position: 'absolute',
      }}
    >
      <img src="/images/breweryDBLogo.png" alt="logo" />
    </div>
    <div className="heads-logo">
      <img style={{ width: '200px' }} src={logo} alt={title} />
      <Headding as="h1" title={title} fontSize={74} />
    </div>
  </div>
);

HeadsLogo.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
};

export default HeadsLogo;
