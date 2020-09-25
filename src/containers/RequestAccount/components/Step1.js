import React from 'react';
import { Field } from 'formik';
import Grid from '@material-ui/core/Grid';
import Input from 'components/atoms/Input';
import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';

const Step1 = ({ inputErrorProps }) => (
  <>
    <Headding bold title="Please provide your contact information." />
    <Space size={40} />
    <Grid item xs={6}>
      <Field component={Input} name="firstName" label="First Name*" required {...inputErrorProps('firstName')} />
    </Grid>
    <Grid item xs={6}>
      <Field component={Input} name="lastName" label="Last Name*" required {...inputErrorProps('lastName')} />
    </Grid>
    <Grid item xs={6}>
      <Field component={Input} name="email" label="Work Email*" required {...inputErrorProps('email')} />
    </Grid>
    <Grid item xs={6}>
      <Field component={Input} name="confirm_email" label="Confirm Email*" {...inputErrorProps('confirm_email')} />
    </Grid>
    <Grid item xs={6}>
      <Field component={Input} name="workPhone" label="Work Phone*" {...inputErrorProps('workPhone')} />
    </Grid>
    <Grid item xs={6}>
      <Field component={Input} name="cellPhone" label="Mobile Phone" {...inputErrorProps('cellPhone')} />
    </Grid>
  </>
);

export default Step1;
