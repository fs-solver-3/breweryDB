import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authUser, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/request_account" />)}
    // render={props => <Component {...props} />}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.node,
  authUser: PropTypes.bool,
  location: PropTypes.shape(),
  isLoggedIn: PropTypes.bool,
};

export default connect(({ authReucer }) => ({
  authUser: authReucer.loginStatus,
  isLoggedIn: authReucer.isLoggedIn,
}))(PrivateRoute);
