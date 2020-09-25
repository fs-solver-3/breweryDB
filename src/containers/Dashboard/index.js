import { connect } from 'react-redux';
import { fetchMembersList, deleteUser } from 'redux/teamMembers/actionCreators';
import { getCountries } from 'redux/constants/actionCreators';
import { fetchUsersList } from 'redux/userProfile/actionCreators';
import Dashboard from './Dashboard';

export default connect(
  ({ userProfile }) => ({
    fetching: userProfile.fetching,
    userDetails: userProfile.userDetails,
    userList: userProfile.userList
  }),
  {
    deleteUser, fetchMembersList, getCountries, fetchUsersList
  }
)(Dashboard);
