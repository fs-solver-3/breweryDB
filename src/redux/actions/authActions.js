import { Auth } from 'aws-amplify';

import { callAPI } from 'helper/apiUtils';
import { apiUrls } from 'helper/apiUrls';
import {
  LOGIN_CHECK,
  RESET_LOGIN_ERROR
} from '../redux-constants';

export function login(values) {
  return {
    type: 'LOGIN',
    payload: callAPI(apiUrls.login2, {}, 'POST', {
      username: values.email,
      password: values.password,
    }).then(response => {
      localStorage.setItem('loginData', JSON.stringify(response.data));
      return response.data;
    }),
  };
}

export function createNewPassword(values, loginCredentials) {
  return {
    type: 'LOGIN',
    payload: callAPI(
      apiUrls.createNewPassword2,
      {},
      'PUT',
      {
        username: loginCredentials.email,
        new_password: values.password,
      },
      {},
      { Authorization: loginCredentials.accessToken },
    ).then(response => {
      localStorage.setItem('loginData', JSON.stringify(response.data));
      return response.data;
    }),
  };
}

export function signup(values) {
  return {
    type: 'SIGNUP',
    payload: Auth.signUp(values),
  };
}

export function confirmSignup(values) {
  return {
    type: 'CONFIRM_SIGNUP',
    payload: Auth.confirmSignUp(values.email, values.confirmationCode),
  };
}

// export function signout() {
//   return {
//     type: 'SIGNOUT',
//     payload: Auth.signOut({ global: true }),
//   };
// }

export function signout() {
  localStorage.clear();
  return {
    type: 'SIGNOUT'
  };
}

// export function checkLoginStatus() {
//   return {
//     type: 'UPDATE_CURRENT_USER_STATUS',
//     payload: Auth.currentAuthenticatedUser(),
//   };
// }

const isUserLoggedIn = async () => {
  const token = await JSON.parse(localStorage.getItem('user'));
  let isLoggedIn = false;
  if (token && Object.keys(token).length > 0) {
    isLoggedIn = true;
  }

  return isLoggedIn;
};

export const checkLoginStatus = () => (dispatch) => {
  dispatch({
    type: LOGIN_CHECK,
    payload: isUserLoggedIn()
  });
};

export function forgotPassword(email) {
  return {
    type: 'FORGOT_PASSWORD',
    payload: callAPI(apiUrls.forgotPassword2, {}, 'POST', { username: email }),
  };
}

export function resetPasswprd(values) {
  return {
    type: 'RESET_PASSWORD',
    payload: callAPI(apiUrls.confirmForgotPassword2, {}, 'POST', values),
  };
}

export const resetLoginError = () => {
  return {
    type: RESET_LOGIN_ERROR
  };
};
