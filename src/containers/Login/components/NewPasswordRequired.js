import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import Input from 'components/atoms/Input';
import Space from 'components/atoms/Space';
import Button from 'components/atoms/Button';

import Alert from '@material-ui/lab/Alert';
import * as Yup from 'yup';

const NewPasswordRequired = ({ onSubmit, error, fetching }) => (
  <>
    <span className="new-password-text">Please create a new password</span>
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        password: '',
        confirmPassword: '',
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string()
          .required('Password is required!')
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, 'Password strength weak!'),
        confirmPassword: Yup.string()
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
          <Space size={25} />
          <Field component={Input} name="password" label="Create Password" type="password" />
          <Space size={25} />
          <Field component={Input} name="confirmPassword" label="Confirm Password" type="password" />
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
  </>
);

NewPasswordRequired.propTypes = {
  onSubmit: PropTypes.func,
  error: PropTypes.shape(),
  fetching: PropTypes.bool,
};

export default NewPasswordRequired;
