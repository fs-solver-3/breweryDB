import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Headding from 'components/atoms/Headding';
import Input from 'components/atoms/Input';
import Widget from 'components/atoms/Widget';
import Space from 'components/atoms/Space';
import Select from 'components/atoms/Select';
import Button from 'components/atoms/Button';
import { CanadianProvinces, USStates } from 'helper/constants';
import { callAPI } from 'helper/apiUtils';

const initialState = {
  breweryLocationName: '',
  breweryName: '',
  city: '',
  country: '',
  extendedAddress: '',
  isInPlanning: 'N',
  isProductionFacilityOpentoPublic: 'N',
  locationFacilityType: '',
  locationGUID: '',
  locationWebsite: '',
  phoneNumber: '',
  postalCode: '',
  sk: '',
  stateProvinceRegion: '',
  streetAddress: '',
  yearOpened: '',
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Locations = ({ onSetLocation }) => {
  const countries = useSelector(state => state.constants.countries);
  const userDetail = useSelector(state => state.userProfile.userDetails);

  const [locations, setLocations] = useState([]);
  const [fields, setFields] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isFetching, setFetching] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const fetchLocations = () => {
    setFetching(true);
    callAPI('/digi-bpl', {}, 'POST', {
      lastKnowKey: null,
      limit: null,
      entity: 'BREWERY',
      type: 'LOCATION',
      filter: 'breweryName = :v10 ',
      filterValue: {
        ':v10': userDetail.breweryName,
      },
    }).then(res => {
      if (res.status === 200 && res.data.status === 0) {
        setLocations(res.data.Items);
      }
      setFetching(false);
    });
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleInputChange = (name, type = 'input') => e => {
    const value = type === 'input' ? e.target.value : e;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    callAPI('/digi-bpl/location', {}, 'POST', { ...fields, breweryName: userDetail.breweryName }).then(res => {
      if (res.status === 200 && res.data.hasOwnProperty('data') && res.data.data === 'Success') {
        setIsLoading(false);
        setFields(initialState);
        setOpen(true);
        fetchLocations();
      }
    });
  };

  const markLocation = location => () => {
    setSelectedLocation(location.locationID);
    onSetLocation(location);
  };

  return (
    <Widget
      cneter
      width={1080}
      widgetContainerStyle={{
        borderBottom: '1px solid #003b71',
        paddingBottom: '35px',
      }}
      lowerElements={
        <Grid className="location-card-container" container spacing={3}>
          {isFetching && <CircularProgress />}
          {locations.map(location => (
            <Grid item xs={6} key={location.locationID}>
              <div className="location-card">
                <div className="loc-upper-container">
                  <img src="./images/locationImage.jpg" alt="" className="loc-image" />
                  <div className="loc-details">
                    <span className="loc-name">{location.breweryLocationName}</span>
                    <span className="loc-address">
                      {location.streetAddress} {location.extendedAddress}
                    </span>
                    <span className="loc-type">{location.locationFacilityType}</span>
                  </div>
                  <img src="./images/editIcon.png" alt="" className="loc-edit-icon" />
                </div>
                <Button
                  additionalClassName="loc-card-button"
                  size="large"
                  onClick={markLocation(location)}
                  reddyBrown={selectedLocation === location.locationID}>
                  {selectedLocation !== location.locationID ? 'Mark This Location!' : 'Selected'}
                </Button>
              </div>
            </Grid>
          ))}
        </Grid>
      }>
      <div
        className="mx-auto"
        style={{
          width: '745px',
        }}>
        {isLoading && <CircularProgress />}
        <Headding as="h3" bold title="Location(s)" />
        <Headding as="p" title="*You will be able to add another location after completing your first address" />
        <Space size={20} />
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Input
              placeholder="Enter Location Name"
              label="Location Name"
              onChange={handleInputChange('breweryLocationName')}
              value={fields.breweryLocationName}
            />
          </Grid>
          <Grid item xs={4}>
            <Select
              label="Facility Type"
              options={[
                { label: 'Production Facility', value: 'Production Facility' },
                { label: 'Tap/Tasting Room ', value: 'Tap/Tasting Room ' },
                { label: 'Brewpub ', value: 'Brewpub ' },
                { label: 'Brewhouse', value: 'Brewhouse' },
              ]}
              onChange={handleInputChange('locationFacilityType', 'dropdown')}
            />
          </Grid>
        </Grid>

        <Grid justify="center" container spacing={3}>
          <Grid item xs={4}>
            <Input
              placeholder="123 street"
              label="Street Address"
              onChange={handleInputChange('streetAddress')}
              value={fields.streetAddress}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              placeholder="Suite 700"
              label="Extended Address"
              onChange={handleInputChange('extendedAddress')}
              value={fields.extendedAddress}
            />
          </Grid>
          <Grid item xs={4}>
            <Select
              label="Country"
              options={countries.map(count => ({
                label: count.name,
                value: count.alpha2Code,
              }))}
              onChange={handleInputChange('country', 'dropdown')}
              value={fields.breweryPrimaryCountry}
              value={countries
                .map(count => ({
                  label: count.name,
                  value: count.alpha2Code,
                }))
                .find(e => e.value === fields.country)}
              defaultValue={{ value: 'US', label: 'United States of America' }}
            />
          </Grid>
          <Grid item xs={4}>
            <Input placeholder="Brew Town" label="City" onChange={handleInputChange('city')} value={fields.city} />
          </Grid>
          <Grid item xs={4}>
            <Select
              label="State / Province / Region"
              onChange={handleInputChange('stateProvinceRegion', 'dropdown')}
              options={[...USStates, ...CanadianProvinces].map(state => ({ label: state, value: state }))}
              value={[...USStates, ...CanadianProvinces]
                .map(state => ({ label: state, value: state }))
                .find(e => e.value === fields.stateProvinceRegion)}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              placeholder="Enter Postal Code"
              label="Postal Code"
              onChange={handleInputChange('postalCode')}
              value={fields.postalCode}
            />
          </Grid>
          <Grid item>
            <Button additionalClassName="create-location-button" size="large" onClick={handleSubmit}>
              Create Location
            </Button>
          </Grid>
        </Grid>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Location Added Successfully!
          </Alert>
        </Snackbar>
      </div>
    </Widget>
  );
};

export default Locations;
