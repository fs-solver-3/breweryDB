import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import Input from 'components/atoms/Input';
import Space from 'components/atoms/Space';
import Button from 'components/atoms/Button';

import Alert from '@material-ui/lab/Alert';
import Headding from 'components/atoms/Headding';
import Checkbox from 'components/atoms/Checkbox';
import { LoadingDots } from 'components/atoms/LoadingDots/LoadingDots';

const LoginForm = ({
  onSubmit, error, onClickForgotPassword, fetching,
}) => {
  const [formInitialData, updateFormData] = useState({});

  useEffect(() => {
    const data = localStorage.getItem('savedCredentials');
    const dataObject = data ? JSON.parse(data) : {};
    updateFormData({
      email: dataObject.email || '',
      password: dataObject.password || '',
    });
  }, []);

  return (
    <Formik onSubmit={onSubmit} initialValues={formInitialData} enableReinitialize>
      <Form className="login-form">
        <Space size={25} />
        <Field component={Input} name="email" label="Email Address" type="email" />
        <Space size={25} />
        <Field component={Input} name="password" label="Password" type="password" />
        <Space size={25} />
        <Headding title="Forgot Password?" as="h5" onClick={onClickForgotPassword} />
        {error && !!error.Message && (
          <>
            <Space size={25} />
            <Alert severity="error">{error.Message}</Alert>
          </>
        )}
        <Space size={20} />
        <Button disabled={fetching} type="submit" logixBlue bold size="large">
          {!fetching ? <span>SIGN IN</span> : <LoadingDots />}
        </Button>
        <span className="flex remember-checkbox">
          <Field component={Checkbox} name="rememberMe" id="rememberMe" label="" />
          <label htmlFor="rememberMe">Remember Me</label>
        </span>
      </Form>
    </Formik>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  onClickForgotPassword: PropTypes.func,
  error: PropTypes.shape(),
  fetching: PropTypes.bool,
};

export default LoginForm;
