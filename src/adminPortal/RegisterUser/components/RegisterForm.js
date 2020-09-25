import React from 'react';
import PropTypes from 'prop-types';
import {
  Field,
  Form,
  Formik,
  // FieldArray,
} from 'formik';
import Input from 'components/atoms/Input';
import Select from 'components/atoms/Select';
import Space from 'components/atoms/Space';
import Button from 'components/atoms/Button';
import {
  subscriptions, roles, comPreferences, bools,
} from 'helper/constants';
import { Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
// import Headding from 'components/atoms/Headding';

const RegisterForm = ({
  onSubmit, error, fetching, successMessage,
}) => (
  <Formik
    onSubmit={onSubmit}
    initialValues={{
      attributes: {}
    }}
  >
    {/* {({ values }) => ( */}
    <Form>
      <Field component={Input} name="attributes.name" label="Name" />
      <Space size={25} />
      <Field component={Input} name="username" label="Email Address" />
      <Space size={25} />
      <Field component={Input} name="password" label="Password" type="password" />
      <Space size={25} />
      <Field component={Input} name="attributes.phone_number" label="Phone" />
      <Space size={25} />
      <Field component={Input} name="attributes.custom:org" label="Org" />
      <Space size={25} />
      <Field component={Input} name="attributes.custom:breweryID" label="BreweryID" />
      <Space size={25} />
      <Field component={Select} name="attributes.custom:subscription" label="Subscription" options={subscriptions} />
      <Space size={25} />
      <Field component={Select} name="attributes.custom:role" label="Role" options={roles} />
      <Space size={25} />
      <Field component={Input} name="attributes.custom:primarylocation" label="Primary Location" />
      <Space size={25} />
      <Field component={Select} name="attributes.custom:comPreferences" label="Preference" options={comPreferences} />
      <Space size={25} />
      <Field component={Select} name="attributes.custom:beerlove" label="Beerlove" options={bools} />
      {error && (
        <>
          <Space size={20} />
          <Alert severity="error">{error.message}</Alert>
        </>
      )}
      {successMessage && (
        <>
          <Space size={20} />
          <Alert severity="success">{successMessage}</Alert>
        </>
      )}
      <Space size={40} />
      <Grid container justify="flex-end">
        <Button full disabled={fetching} type="submit" logixBlue bold size="large">
          REGISTER
        </Button>
      </Grid>
    </Form>
    {/* )} */}
  </Formik>
);

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  error: PropTypes.shape(),
  fetching: PropTypes.bool,
  successMessage: PropTypes.string,
};

export default RegisterForm;
