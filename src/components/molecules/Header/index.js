import { connect } from 'react-redux';
import { signout } from 'redux/actions/authActions';

import Header from './Header';
import './style.css';

export default connect(
  ({ authReucer, userProfile }) => ({
    authUser: authReucer.loginStatus,
    userDetails: userProfile.userDetails,
  }),
  {
    signout,
  },
)(Header);
