import { connect } from 'react-redux';

import {
  login, forgotPassword, resetPasswprd, resetLoginError, signup, confirmSignup, createNewPassword,
} from 'redux/actions/authActions';

import { fetchUserDetails, fetchUsersList } from 'redux/userProfile/actionCreators';
import Login from './Login';
import './style.css';

const mapStateToProps = (state) => ({ authReucer: state.authReucer });

export default connect(mapStateToProps, {
  login,
  forgotPassword,
  resetLoginError,
  resetPasswprd,
  signup,
  confirmSignup,
  fetchUserDetails,
  fetchUsersList,
  createNewPassword,
})(Login);
