import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import Input from 'components/atoms/Input';
import Space from 'components/atoms/Space';
import Button from 'components/atoms/Button';

import Alert from '@material-ui/lab/Alert';

const ConfirmSignupForm = ({ onSubmit, error, fetching }) => (
  <Formik onSubmit={onSubmit} initialValues={{}}>
    <Form>
      <Space size={25} />
      <Field component={Input} name="confirmationCode" label="Confirmation Code" />

      {error && !!error.Message && (
        <>
          <Space size={25} />
          <Alert severity="error">{error.Message}</Alert>
        </>
      )}
      <Space size={20} />
      <Button disabled={fetching} type="submit" logixBlue bold size="large">
        Submit
      </Button>
    </Form>
  </Formik>
);

ConfirmSignupForm.propTypes = {
  onSubmit: PropTypes.func,
  error: PropTypes.shape(),
  fetching: PropTypes.bool,
};

export default ConfirmSignupForm;
