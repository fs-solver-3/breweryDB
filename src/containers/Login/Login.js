import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Space from 'components/atoms/Space';
import Headding from 'components/atoms/Headding';
import LoginForm from './components/LoginForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import ResetPasswordForm from './components/ResetPasswordForm';
import ConfirmSignupForm from './components/ConfirmSignupForm';
import NewPasswordRequired from './components/NewPasswordRequired';
import { callAPI } from '../../helper/apiUtils';
import { apiUrls } from '../../helper/apiUrls';
import AddBrewery from './components/AddBrewery';

const Login = ({
  confirmSignup,
  forgotPassword,
  login,
  resetLoginError,
  resetPasswprd,
  signupError,
  fetchUserDetails,
  authReucer,
  createNewPassword,
}) => {
  const { fetching, error } = authReucer;
  const [formType, setFormType] = React.useState('login');
  const [userName, setUserName] = React.useState(null);
  const [loginCredentials, updateCredentials] = React.useState({});
  const history = useHistory();

  function handleLogin(values) {
    if (values.rememberMe) {
      localStorage.setItem('savedCredentials', JSON.stringify(values));
    }
    login(values).then(response => {
      if (response.value && response.value.ChallengeName === 'NEW_PASSWORD_REQUIRED') {
        const data = {
          ...values,
          accessToken: response.value.Session,
        };
        updateCredentials(data);
        setFormType('newPasswordRequired');
      } else if (response.action.payload.AccessToken) {
        navigateToDashboard(response.action.payload.AccessToken);
        // setFormType('addBrewery')
      }
    });
  }

  const handleSetNewPassword = values => {
    createNewPassword(values, loginCredentials).then(response => {
      navigateToDashboard(response.value.AccessToken);
    });
  };

  const navigateToDashboard = aToken => {
    fetchUserDetails(aToken);
    history.push('/');
  };

  function handleConfirmSignup(values) {
    confirmSignup({
      ...values,
      email: userName,
    }).then(() => setFormType('login'));
  }

  function handleForgotPassword({ email }) {
    setUserName(email);
    forgotPassword(email).then(() => setFormType('resetPassword'));
  }

  function handleResetPassword(values) {
    resetPasswprd({
      confirmationCode: values.code,
      username: userName,
      new_password: values.password,
    }).then(() => setFormType('login'));
  }

  const changeFormToForgotPassword = () => {
    setFormType('forgotPassword');
    resetLoginError();
  };

  return (
    <div className="bdb-login">
      <div className="bdb-login--box">
        <img src="/images/breweryDBLogo.png" alt="breweryDBLogo" />
        <Space size={30} />

        {formType === 'login' && (
          <>
            <LoginForm
              error={error}
              fetching={fetching}
              onClickForgotPassword={changeFormToForgotPassword}
              onSubmit={handleLogin}
            />
            <Space size={15} />
          </>
        )}

        {formType === 'addBrewery' && (
          <>
            <AddBrewery />
            <Space size={15} />
          </>
        )}

        {formType === 'forgotPassword' && (
          <>
            <ForgotPasswordForm error={error} fetching={fetching} onSubmit={handleForgotPassword} />
            <Space size={15} />
            <Headding as="h5" bold onClick={() => setFormType('login')} title="< Back to login page" />
          </>
        )}

        {formType === 'resetPassword' && (
          <>
            <ResetPasswordForm error={error} fetching={fetching} onSubmit={handleResetPassword} />
          </>
        )}

        {formType === 'newPasswordRequired' && (
          <>
            <NewPasswordRequired error={error} fetching={fetching} onSubmit={handleSetNewPassword} />
          </>
        )}

        {formType === 'confirmSignup' && (
          <>
            <ConfirmSignupForm error={signupError} onSubmit={handleConfirmSignup} fetching={fetching} />
          </>
        )}
        <Space size={25} />
        <hr />

        <Space size={25} />
        <div className="text-center">
          <Headding as="h5" title="Need Assistance? 800-257-6898 | support@brewlogix.com" />
          <Space size={5} />
          <Headding as="h5" title="©2020 BrewLogix LLC. All Rights Reserved." />
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  confirmSignup: PropTypes.func,
  forgotPassword: PropTypes.func,
  login: PropTypes.func,
  resetLoginError: PropTypes.func,
  resetPasswprd: PropTypes.func,
  signupError: PropTypes.shape(),
  error: PropTypes.shape(),
  fetching: PropTypes.bool,
};

export default Login;
