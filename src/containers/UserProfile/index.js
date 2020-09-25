import { connect } from 'react-redux';

import UserProfile from './UserProfile';

export default connect(({ userProfile, authReucer }) => ({
  userDetails: userProfile.userDetails,
  authReucer,
}))(UserProfile);
