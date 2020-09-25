import React from 'react';
import PropTypes from 'prop-types';
import Widget from 'components/atoms/Widget';
import RegisterForm from './components/RegisterForm';

const RegisterUser = ({
  registerUser, error, fetching, successMessage,
}) => {
  function handleRegisterUser(values) {
    registerUser(values);
  }

  return (
    <Widget
      style={{
        width: 600,
        margin: '33px auto',
      }}
    >
      <RegisterForm error={error} onSubmit={handleRegisterUser} fetching={fetching} successMessage={successMessage} />
    </Widget>
  );
};

RegisterUser.propTypes = {
  registerUser: PropTypes.func,
  error: PropTypes.shape(),
  fetching: PropTypes.bool,
  successMessage: PropTypes.string,
};

export default RegisterUser;
