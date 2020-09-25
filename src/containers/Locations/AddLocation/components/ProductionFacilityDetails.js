import React from 'react';
import Headding from 'components/atoms/Headding';
import Grid from '@material-ui/core/Grid';
import Input from 'components/atoms/Input';
import Space from 'components/atoms/Space';
import Button from 'components/atoms/Button';
import Select from 'components/atoms/Select';
import Widget from 'components/atoms/Widget';

const ProductionFacilityDetails = ({ values, onChange }) => {
  const handleChange = (name, type = 'input') => e => {
    const event = {
      target: {
        name,
        value: type === 'input' ? e.target.value : e,
      },
    };

    onChange(event);
  };

  return (
    <Widget isAccordion title="Production Facility Details">
      <Space size={15} />
      <Headding as="h3" bold title="Facility Details" />
      <Space size={20} />
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Select label="Operation Status" />
        </Grid>
        <Grid item xs={6}>
          <Select label="Year Opened" />
        </Grid>
        <Grid item xs={6}>
          <Select label="Open to the Public?" />
        </Grid>
        <Grid item xs={6}>
          <Select label="Are Tours Available?" />
        </Grid>
      </Grid>

      <Space size={80} />
      <Headding as="h3" bold title="Facility Contact Infomration" />
      <Space size={20} />
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Input label="Phone Number" value={values.phoneNumber} onChange={handleChange('phoneNumber')} />
        </Grid>
        <Grid item xs={6}>
          <Input label="Email" value={values.emailAddress} onChange={handleChange('emailAddress')} />
        </Grid>
      </Grid>

      <Space size={80} />
      <Headding as="h3" bold title="Facility Social Media" />
      <Space size={20} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Select
            label="Location specific Social Media?"
            options={[
              { value: 'Yes', label: 'Yes' },
              { value: 'No', label: 'No' },
            ]}
            onChange={handleChange('locationSpecificSocialMedia', 'dropdown')}
          />
        </Grid>
        <Grid container item xs={8} spacing={2} alignItems="flex-end">
          <Grid item xs={10}>
            <Input
              label="Facebook"
              value={values.facebookEventPageLink}
              onChange={handleChange('facebookEventPageLink')}
            />
          </Grid>
          <Grid item xs={2}>
            <Button reddyBrown bold>
              Delete
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Button logixBlue bold>
            Add Another Handle
          </Button>
        </Grid>
      </Grid>
      <Space size={40} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Select label="Location Specific Web URL" />
        </Grid>
        <Grid container item xs={8} spacing={2} alignItems="flex-end">
          <Grid item xs={10}>
            <Input
              label="Location Specific Web URL"
              value={values.locationSpecificURL}
              onChange={handleChange('locationSpecificURL')}
            />
          </Grid>
          <Grid item xs={2}>
            <Button reddyBrown bold>
              Delete
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Button logixBlue bold>
            Add Another Handle
          </Button>
        </Grid>
      </Grid>
    </Widget>
  );
};

export default ProductionFacilityDetails;
