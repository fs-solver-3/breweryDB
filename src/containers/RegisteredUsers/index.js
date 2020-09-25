import { connect } from 'react-redux';
import { getRegisteredUsers } from 'redux/registerUser/actionCreators';
import RegisteredUsers from './RegisteredUsers';

export default connect(({ registerUser }) => registerUser, {
  getRegisteredUsers
})(RegisteredUsers);
