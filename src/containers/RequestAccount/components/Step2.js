import React from 'react';
import { Field } from 'formik';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Input from 'components/atoms/Input';
import Select from 'components/atoms/Select';
import { CanadianProvinces, newRoles, USStates } from 'helper/constants';
import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';

const Step2 = ({ breweryData, inputErrorProps, loadOptions, isLoading, formik }) => {
  const countries = useSelector(state => state.constants.countries);
  return (
    <>
      <Headding bold title="Please provide brewery information." />
      <Space size={40} />
      <Grid
        style={{
          width: 540,
          margin: '0 auto',
        }}
        container
        spacing={2}>
        <Grid item xs={6}>
          <Field
            component={Select}
            name="breweryName"
            label="Brewery Name*"
            options={
              Array.isArray(breweryData)
                ? breweryData.map(item => ({
                    label: item.breweryName,
                    value: item.breweryName
                  }))
                : []
            }
            isLoading={isLoading}
            placeholder=""
            onInputChange={loadOptions}
            {...inputErrorProps('breweryName')}
            value="breweryName"
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            component={Select}
            name="beerlove"
            label="Your Role*"
            options={newRoles}
            {...inputErrorProps('beerlove')}
            value={newRoles.find(e => e.value === inputErrorProps('beerlove').value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            component={Input}
            name="addressLine1"
            label="Address Line 1*"
            required
            {...inputErrorProps('addressLine1')}
          />
        </Grid>
        <Grid item xs={6}>
          <Field component={Input} name="addressLine2" label="Address Line 2" {...inputErrorProps('addressLine2')} />
        </Grid>
        <Grid item xs={6}>
          <Field component={Input} name="city" label="City*" required {...inputErrorProps('city')} />
        </Grid>
        <Grid item xs={6}>
          <Field
            component={Select}
            name="country"
            label="Country*"
            options={countries.map(count => ({
              label: count.name,
              value: count.alpha2Code,
            }))}
            {...inputErrorProps('country')}
            value={countries
              .map(count => ({
                label: count.name,
                value: count.alpha2Code,
              }))
              .find(e => e.value === inputErrorProps('country').value)}
            defaultValue={{ value: 'US', label: 'United States of America' }}
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            component={Select}
            name="stateProvinceRegion"
            label="State / Province / Region*"
            options={[...USStates, ...CanadianProvinces].map(state => ({ label: state, value: state }))}
            {...inputErrorProps('stateProvinceRegion')}
            value={[...USStates, ...CanadianProvinces]
              .map(state => ({ label: state, value: state }))
              .find(e => e.value === inputErrorProps('stateProvinceRegion').value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Field component={Input} name="postalcode" label="Zip*" required {...inputErrorProps('postalcode')} />
        </Grid>
      </Grid>
    </>
  );
};

export default Step2;
