import { Auth } from 'aws-amplify';
import { callAPI } from 'helper/apiUtils';

export function registerUser(values) {
  return {
    type: 'REGISTER_USER',
    payload: Auth.signUp(values),
  };
}

export function getRegisteredUsers(params) {
  return {
    type: 'GET_REGISTERED_USERS',
    payload: callAPI('/digi-update-user-registration', params || {}, 'GET')
  };
}
