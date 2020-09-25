import React, { useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux';

import Widget from 'components/atoms/Widget';
import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';
import Input from 'components/atoms/Input';
import Select from 'components/atoms/Select';
import Checkbox from 'components/atoms/Checkbox';
import Textarea from 'components/atoms/Textarea';
import Flex from 'components/atoms/Flex';
import Button from 'components/atoms/Button';
import HeadsLogo from 'components/molecules/HeadsLogo';
import ContentTemplate from 'components/molecules/ContentTemplate';
import { callAPI } from 'helper/apiUtils';

import WebsiteAndContact from './WebsiteAndContact';
import SocialMediaHandles from './SocialMediaHandles';
import LogoAndImagery from './LogoAndImagery';
import Locations from './Locations';

import './style.css';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const GetOnTheMap = props => {
  const initialState = {
    breweryID: '',
    breweryAKAName: '',
    breweryType: '',
    breweryStage: '',
    projectedOpening: '',
    breweryYearEstablished: '',
    isBreweryINew: '',
    breweryDescription: '',
    breweryLogo: 's3://imge.jpg',
    breweryImages: ['s3://image1.jpg', 's3://image2.jpg'],
    breweryWebsite: '',
    breweryEmailAddress: '',
    breweryFacebook: '',
    breweryInstagram: '',
    breweryTwitter: '',
    otherSocialMedia: [
      {
        linkText: '',
        socialMedialink: '',
      },
    ],
    breweryPrimaryLocationName: '',
    breweryPrimaryAddressLineOne: '',
    breweryPrimaryAddressLineTwo: '',
    breweryPrimaryCity: '',
    breweryPrimaryStateRegionProvince: '',
    breweryPrimaryPostalCode: '',
    breweryPrimaryCountry: '',
    breweryGUID: '',
    seatingCapacity: '',
    tapHighlights: '',
    otherHighlights: '',
    getOnTheMapNotes: '',
    GPSPosition: '',
    isBreweryClaimed: 'no',
    isBreweryIndependentCraftBrewer: 'no',
    locationClassification: 'local',
    isBreweryMassOwned: 'no',
    breweryRecordCreateDate: '',
    breweryLastUpdatedDate: '',
    isbreweryMarkForDelete: 'no',
    breweryLocationClosedDate: '',
    breweryInBusiness: '',
    breweryClassification: '',
    breweryGuild: [],
    locationCompletionPercent: '',
    isBreweryOrganic: 'no',
  };

  const [mapFields, setMapFields] = useState(initialState);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const breweryName = useSelector((state) => state.userProfile.userDetails.breweryName);

  const handleChange = event => {
    setMapFields({ ...mapFields, [event.target.name]: event.target.value });
  };

  const handleInputChange = (name, type = 'input') => e => {
    const event = {
      target: {
        name,
        value: type === 'input' ? e.target.value : e,
      },
    };

    handleChange(event);
  };

  const handleCheckboxChange = (name, field) => (label, value) => {
    const event = {
      target: {
        name,
        value: value ? field : '',
      },
    };

    handleChange(event);
  };

  const handleProjectedOpening = field => e => {
    let finalDate = '';
    if (field === 'month') {
      setMonth(e.target.value);
      finalDate = e.target.value + '/' + year;
    } else {
      setYear(e.target.value);
      finalDate = month + '/' + e.target.value;
    }
    setMapFields({ ...mapFields, projectedOpening: finalDate });
  };

  const handleSave = () => {
    const data = {
      ...mapFields,
      breweryName
    };

    window.scrollTo(0, 0);
    setIsLoading(true);
    callAPI('/digi-bpl/upsert', {}, 'POST', data).then(res => {
      if (res.data && !res.data.hasOwnProperty('message')) {
        setOpen(true);
        setIsLoading(false);
        setTimeout(() => {
          props.history.push('/');
        }, 1000);
      }
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onHandleLocation = location => {
    setMapFields({
      ...mapFields,
      breweryPrimaryLocationName: location.breweryLocationName,
      breweryPrimaryAddressLineOne: location.streetAddress,
      breweryPrimaryAddressLineTwo: location.extendedAddress,
      breweryPrimaryCity: location.city,
      breweryPrimaryStateRegionProvince: location.stateProvinceRegion,
      breweryPrimaryPostalCode: location.postalCode,
      breweryPrimaryCountry: location.country,
    });
  };

  return (
    <ContentTemplate title="Get On The Map">
      <HeadsLogo logo="/images/BreweryDBMapRoute.png" title="Get On The Map" />
      <Space size={10} />
      <Widget cneter width={1080}>
        {isLoading && <CircularProgress />}
        <div
          className="mx-auto"
          style={{
            width: 745,
          }}>
          <Headding as="h3" bold title="Brewery Branding Basics" />
          <Space size={30} />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Input placeholder="Enter Name" label="Brewery Name" value={breweryName} disabled />
            </Grid>
            <Grid item xs={6}>
              <Input
                placeholder="Enter Name"
                label="Brewery Alias / AKA"
                onChange={handleInputChange('breweryAKAName')}
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                options={[
                  { label: 'Macro Brewery', value: 'Macro Brewery' },
                  { label: 'Micro Brewery', value: 'Micro Brewery' },
                  { label: 'Nano Brewery', value: 'Nano Brewery' },
                ]}
                label="Brewery Type"
                onChange={handleInputChange('breweryType', 'dropdown')}
              />
            </Grid>
            <Grid item xs={12}>
              <Headding as="h5" bold title="Brewery Stage" />
              <Flex>
                <Checkbox
                  onChange={handleCheckboxChange('breweryStage', 'Established')}
                  checked={mapFields.breweryStage === 'Established'}
                />
                <Headding as="h5" title="Established" />
              </Flex>
              <Flex>
                <Checkbox
                  onChange={handleCheckboxChange('breweryStage', 'In Planning')}
                  checked={mapFields.breweryStage === 'In Planning'}
                />
                <Headding as="h5" title="In Planning" />
              </Flex>
            </Grid>
            <Grid item xs={6}>
              <Headding as="h5" bold title="Projected Opening" />
              <Space size={10} />
              <div className="dates-input-container">
                <Input
                  width="51px"
                  placeholder="MM"
                  label=""
                  value={month}
                  onChange={handleProjectedOpening('month')}
                />
                <Input
                  containerStyle={{ marginLeft: '10px' }}
                  width="67px"
                  placeholder="YYYY"
                  label=""
                  onChange={handleProjectedOpening('year')}
                  value={year}
                />
              </div>
              <Space size={15} />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Textarea
                label="Brewery Description"
                rows="10"
                placeholder="Describe your Brewery"
                onChange={handleInputChange('breweryDescription')}
              />
            </Grid>
          </Grid>
        </div>
      </Widget>
      <Space size={25} />
      <LogoAndImagery />
      <Space size={25} />
      <SocialMediaHandles onChange={handleChange} values={mapFields} />
      <Space size={25} />
      <WebsiteAndContact onChange={handleChange} values={mapFields} />
      <Space size={25} />
      <Locations onSetLocation={onHandleLocation} />
      <Space size={25} />

      <Grid
        container
        justify="center"
        style={{
          margin: '0 auto',
          maxWidth: 1080,
        }}>
        <Grid item>
          <Button additionalClassName="save-exit-button" size="large" onClick={handleSave}>
            Save and Exit
          </Button>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Map Added Successfully!
        </Alert>
      </Snackbar>
    </ContentTemplate>
  );
};

export default GetOnTheMap;
