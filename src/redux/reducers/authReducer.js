import {
  LOGIN_CHECK_FULFILLED,
  LOGIN_CHECK_PENDING,
  RESET_LOGIN_ERROR
} from '../redux-constants';

const initialState = {
  isLoginCheckInProgress: true,
  loggedInUser: null,
  loginStatus: false,
  loginError: null,
  signupResponse: null,
  signupError: null,
  signoutError: null,
  error: null,
  isStatusChecked: true,
  forgotPasswordResponse: null,
  resetPasswordResponse: null,
  checkingCurrent: true,
  fetching: false,
  isLoggedIn: false
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATE_CURRENT_USER_STATUS_PENDING':
      return {
        ...state,
        checkingCurrent: true,
      };

    case 'LOGIN_FULFILLED':
      if (payload.AccessToken) {
        return {
          ...state,
          loggedInUser: payload,
          loginStatus: true,
          loginError: null,
          error: null,
          checkingCurrent: false,
          fetching: false,
          isLoggedIn: true,
        };
      }
      return {
        error: payload,
        fetching: false,
      };
    case 'UPDATE_CURRENT_USER_STATUS_FULFILLED':
      return {
        ...state,
        loggedInUser: payload,
        loginStatus: true,
        loginError: null,
        error: null,
        checkingCurrent: false,
        fetching: false,
        isLoggedIn: true,
      };
    case 'SIGNOUT':
    case 'UPDATE_CURRENT_USER_STATUS_REJECTED':
    case 'SIGNOUT_FULFILLED':
      return {
        ...state,
        loggedInUser: null,
        loginStatus: false,
        // loginError: payload,
        checkingCurrent: false,
        isLoggedIn: false
      };
    case 'SIGNUP_PENDING':
      return {
        ...state,
        signupError: null,
        fetching: true,
      };

    case 'SIGNUP_FULFILLED':
      return payload.userConfirmed
        ? {
            ...state,
            loggedInUser: payload,
            loginStatus: true,
            fetching: false,
            isLoggedIn: true,
            signupResponse: { code: 2, message: 'Registered Successfully.' },
          }
        : {
            ...state,
            loginStatus: false,
            fetching: false,
            isLoggedIn: false,
            signupResponse: {
              code: 1,
              message: 'Registered, but need to confirm account.',
            },
          };

    case 'SIGNUP_REJECTED':
      return {
        ...state,
        loggedInUser: null,
        loginStatus: false,
        isLoggedIn: false,
        signupResponse: { code: 0, message: payload.message },
        signupError: payload,
        fetching: false,
      };
    case 'CONFIRM_SIGNUP_FULFILLED':
      return {
        ...state,
        loginStatus: false,
        isLoggedIn: false,
        signupResponse: { code: 2, message: 'Registered Successfully.' },
        fetching: false
      };

    case 'FORGOT_PASSWORD_PENDING':
    case 'LOGIN_PENDING':
    case 'RESET_PASSWORD_PENDING':
      return {
        ...state,
        error: null,
        fetching: true
      };

    case 'RESET_PASSWORD_FULFILLED':
    case 'FORGOT_PASSWORD_FULFILLED':
      return {
        ...state,
        error: null,
        fetching: false,
      };

    case 'RESET_PASSWORD_REJECTED':
    case 'FORGOT_PASSWORD_REJECTED':
    case 'LOGIN_REJECTED':
      return {
        ...state,
        error: payload,
        fetching: false,
      };

    case LOGIN_CHECK_PENDING:
      return {
        ...state,
        isLoginCheckInProgress: true
      };

    case LOGIN_CHECK_FULFILLED:
      return {
        ...state,
        isLoggedIn: payload,
        isLoginCheckInProgress: false
      };

    case RESET_LOGIN_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return { ...state };
  }
};

export default authReducer;
