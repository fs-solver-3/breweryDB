import { callAPI } from 'helper/apiUtils';
import * as actions from './actions';

export function fetchMembersList(params = {}) {
  return {
    type: actions.MEMBERS_LIST,
    payload: callAPI('/digi-cognito-listUsers', params, 'GET'),
  };
}

export const deleteUser = (user) => {
  const data = {
    username: user.email
  };

  return {
    type: actions.DELETE_MEMBER,
    payload: callAPI('/digi-cognito-adminDeleteUser', null, 'DELETE', data)
  };
};

export const resetMemberDeletionData = () => {
  return {
    type: actions.RESET_MEMBER_DELETION_DATA
  };
};
