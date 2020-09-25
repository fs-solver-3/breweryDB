import { callAPI } from 'helper/apiUtils';

export function fetchUserDetails(accessToken) {
  return {
    type: 'USER_DETAILS',
    payload: callAPI('/digi-cognito-getUser', {}, 'GET', {}, {}, { Authorization: accessToken }).then(response => {
      //serviceSubscription field should come
      localStorage.setItem('user', JSON.stringify(response.data));
      return response;
    }),
  };
}

export function fetchUsersList(params = {}) {
  return {
    type: 'USERS_LIST',
    payload: callAPI('/digi-cognito-listUsers', params, 'GET', null, {}),
  };
}

export function setUserFromLocalStorage() {
  return {
    type: 'FETCH_USER',
    payload: JSON.parse(localStorage.getItem('user')),
  };
}
