import { connect } from 'react-redux';
import { fetchUsersList } from 'redux/userProfile/actionCreators';
import { fetchMembersList } from 'redux/teamMembers/actionCreators';
import { locationsList } from 'redux/locations/actionCreators';
import TeamMembers from './TeamMembers';

import { getCountries } from '../../redux/constants/actionCreators';

export default connect(
  ({ userProfile, teamMembers, locations }) => ({
    userDetails: userProfile.userDetails,
    userList: userProfile.userList,
    memberList: teamMembers.members,
  }),
  { getCountries, fetchUsersList, fetchMembersList, locationsList },
)(TeamMembers);
