import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import Input from 'components/atoms/Input';
import Space from 'components/atoms/Space';
import Button from 'components/atoms/Button';

import Alert from '@material-ui/lab/Alert';
import * as Yup from 'yup';

const ResetPasswordForm = ({ onSubmit, error, fetching }) => (
  <Formik
    onSubmit={onSubmit}
    initialValues={{ password: '', confirm_password: '', code: '' }}
    validationSchema={Yup.object().shape({
      code: Yup.string().required('Verification Code is required!'),
      password: Yup.string()
        .required('Password is required!')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, 'Password strength weak!'),
      confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Confirm password does not match new password!')
        .required('Password confirm is required'),
    })}
    enableReinitialize
    validateOnChange={false}
    validateOnBlur={false}
  >
    {(payload) => (
      <Form>
        <Space size={25} />
        <Field component={Input} name="code" label="Verification Code" />
        <Space size={25} />
        <Field component={Input} name="password" label="New Password" type="password" />
        <Space size={25} />
        <Field component={Input} name="confirm_password" label="Confirm Password" type="password" />
        {((error && !!error.Message) || !!Object.values(payload.errors).length) && (
          <>
            <Space size={25} />
            <Alert severity="error">{Object.values(payload.errors)[0] || error.Message}</Alert>
          </>
        )}
        <Space size={20} />
        <Button disabled={fetching} type="submit" logixBlue bold size="large">
          Submit
        </Button>
      </Form>
    )}
  </Formik>
);

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  error: PropTypes.shape(),
  fetching: PropTypes.bool,
};

export default ResetPasswordForm;
