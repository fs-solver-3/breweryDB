import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import ContentTemplate from 'components/molecules/ContentTemplate';
import Breadcumb from 'components/atoms/Breadcumb';
import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';
import Card from 'components/molecules/Card';
import UndoIcon from 'components/molecules/Card/assets/undo.svg';
import Button from 'components/atoms/Button';
import { callAPI } from 'helper/apiUtils';

import BreweryCard from './components/BreweryCard';
import ProductionFacilityDetails from './components/ProductionFacilityDetails';
import ProductLibrary from './components/ProductLibrary';
import BuildTraffic from './components/BuildTraffic';

const links = [
  {
    label: 'Dashboard',
    link: '/',
  },
  {
    label: 'All Locations',
    link: '/locations',
  },
  {
    label: 'Upland Fountain Square',
    link: '/locations/add',
  },
];

const AddLocation = props => {
  const initialState = {
    breweryID: '',
    brewerylocationID: '',
    isInPlanning: 'no',
    locationID: '',
    completionPercent: 0,
    breweryLocationImage: '',
    productsKnownForImage: ['', ''],
    tapHighlights: '',
    otherHighlights: '',
    breweryName: '',
    tourDetails: '',
    isTourFree: '',
    tourCostMin: '',
    tourCostMax: '',
    tourAgeRestrictions: '',
    brewingSpecialtiesFocus: '',
    foodOptions: '',
    seatingOptions: '',
    entertainmentOptions: '',
    relatedOptions: '',
    isPetFriendly: '',
    isFamilyFriendly: '',
    nearbyAttractions: [
      {
        attractionName: '',
        approxDistance: '',
      },
    ],
    carryoutSales: 'no',
    carryoutSaleOptions: '',
    facebookEventPageLink: '',
    guildMembership: [
      {
        guildName: '',
      },
    ],
    festival: [
      {
        festivalName: '',
        festivalYear: '',
      },
    ],
    award: [
      {
        awardName: '',
        awardYear: '',
      },
    ],
    historyofBrewery: '',
    mailingListEmail: '',
    isNonAlcoholOptionsAvailable: '',
    locationTrafficNotes: '',
    isPrimaryLocation: '',
    breweryLocationName: '',
    locationFacilityType: '',
    operationStatus: '',
    breweryLocationOpeningDate: '',
    isProductionFacilityOpentoPublic: '',
    isFacilityToursAvailable: '',
    isFacilityOpenSunday: '',
    isFacilityOpenMonday: '',
    isFacilityOpenTuesday: '',
    isFacilityOpenWednesday: '',
    isFacilityOpenThursday: '',
    isFacilityOpenFriday: '',
    isFacilityOpenSaturday: '',
    facilitySundayHours: [
      {
        openFrom: '',
        openTo: '',
      },
    ],
    facilityMondayHours: [
      {
        openFrom: '',
        openTo: '',
      },
    ],
    facilityTuesdayHours: [
      {
        openFrom: '',
        openTo: '',
      },
    ],
    facilityWednesdayHours: [
      {
        openFrom: '',
        openTo: '',
      },
    ],
    facilityThursdayHours: [
      {
        openFrom: '',
        openTo: '',
      },
    ],
    facilityFridayHours: [
      {
        openFrom: '',
        openTo: '',
      },
    ],
    facilitySaturdayHours: [
      {
        openFrom: '',
        openTo: '',
      },
    ],
    isTourOpenSunday: 'no',
    isTourOpenMonday: 'no',
    isTourOpenTuesday: 'no',
    isTourOpenWednesday: 'no',
    isTourOpenThursday: 'no',
    isTourOpenFriday: 'no',
    isTourOpenSaturday: 'no',
    tourSundayHours: [
      {
        openFrom: '',
        openTo: '',
      },
    ],
    tourMondayHours: [
      {
        openFrom: '',
        openTo: '',
      },
    ],
    tourTuesdayHours: [
      {
        openFrom: '',
        openTo: '',
      },
    ],
    tourWednesdayHours: [
      {
        openFrom: '',
        openTo: '',
      },
    ],
    tourThursdayHours: [
      {
        openFrom: '',
        openTo: '',
      },
    ],
    tourFridayHours: [
      {
        openFrom: '',
        openTo: '',
      },
    ],
    tourSaturdayHours: [
      {
        openFrom: '',
        openTo: '',
      },
    ],
    isHappyOpenSunday: 'no',
    isHappyOpenMonday: 'no',
    isHappyOpenTuesday: 'no',
    isHappyOpenWednesday: 'no',
    isHappyOpenThursday: 'no',
    isHappyOpenFriday: 'no',
    isHappyOpenSaturday: 'no',
    happySundayHours: [
      {
        openFrom: '',
        openTo: '',
        specials: '',
      },
    ],
    happyMondayHours: [
      {
        openFrom: '',
        openTo: '',
        specials: '',
      },
    ],
    happyTuesdayHours: [
      {
        openFrom: '',
        openTo: '',
        specials: '',
      },
    ],
    happyWednesdayHours: [
      {
        openFrom: '',
        openTo: '',
        specials: '',
      },
    ],
    happyThursdayHours: [
      {
        openFrom: '',
        openTo: '',
        specials: '',
      },
    ],
    happyFridayHours: [
      {
        openFrom: '',
        openTo: '',
        specials: '',
      },
    ],
    happySaturdayHours: [
      {
        openFrom: '',
        openTo: '',
        specials: '',
      },
    ],
    locationSpecificURL: '',
    locationWebsite: '',
    locationSpecificSocialMedia: '',
    socialMedia: [
      {
        socialMediaType: '',
        socialMediaHandle: '',
      },
    ],
    associatedProducts: [
      {
        productName: '',
        productID: '',
        availability: '',
        isServedHere: '',
        isOnTapHere: '',
        style: '',
        ABV: '',
        completionPercent: '',
      },
    ],
    guestProducts: [
      {
        productName: '',
        productID: '',
        availability: '',
        isServedHere: '',
        isOnTapHere: '',
        style: '',
        ABV: '',
        completionPercent: '',
      },
    ],
    streetAddress: '',
    extendedAddress: '',
    city: '',
    stateProvinceRegion: '',
    postalCode: '',
    country: '',
    phoneNumber: '',
    emailAddress: '',
    hoursOfOperations: '',
    timeZone: '',
    yearOpened: '',
    isTemporarilyClosed: 'no',
    isPermanentlyClosed: 'no',
  };

  const [locationFields, setLocationFields] = useState(initialState);

  const handleChange = event => {
    setLocationFields({ ...locationFields, [event.target.name]: event.target.value });
  };

  const handleHoursData = values => {
    setLocationFields({ ...locationFields, ...values });
  };

  const handleSave = async () => {
    const response = await callAPI('/digi-update-breweryLocation', {}, 'POST', locationFields);
    console.log(response);
  };

  return (
    <ContentTemplate title="Locations">
      <Breadcumb links={links} />
      <Headding as="h3" bold title="Upland Fountain Square" />
      <Space size={15} />
      <Grid className="section-padding-left" container spacing={4}>
        <Grid item xs={9}>
          <BreweryCard onChange={handleChange} values={locationFields} onHoursChange={handleHoursData} />
          <Space size={40} />
          <ProductionFacilityDetails onChange={handleChange} values={locationFields} />
          <Space size={40} />
          <ProductLibrary values={locationFields} onChange={handleChange} />
          <Space size={40} />
          <BuildTraffic values={locationFields} onChange={handleChange} onHoursChange={handleHoursData} />
          <Grid container justify="space-between" style={{ marginTop: 25 }}>
            <Button onClick={() => props.history.push('/locations')} seafoamBlue size="large">
              Exit
            </Button>
            <Button onClick={handleSave} size="large">
              Save
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Card style={{ width: '100%', minHeight: 'auto' }}>
            <Space size={10} />
            <Grid container justify="center">
              <img src="/images/upland.png" alt="card" />
            </Grid>
            <Space size={10} />
            <div style={{ padding: 15 }}>
              <Headding as="h5" fontSize={16} bold title="Upland Fountain Square" />
              <Space size={5} />
              <Headding as="p" fontSize={15} title="1201 Prospect St. Indianapolis, IN" />

              <Space size={15} />
              <Headding
                as="h5"
                fontSize={16}
                bold
                title="Production, Tap/Tasting Room, Brewpub, Restaurant/Brewhouse"
              />
              <Space size={15} />
              <Headding as="h5" fontSize={15} title="Tap Highlights" />
              <Headding as="p" fontSize={15} title="Production, Tap/Tasting Room, Brewpub, Restaurant/Brewhouse" />

              <Space size={15} />
              <Headding as="h5" fontSize={16} bold title="Other Highlights" />
              <Space size={5} />
              <Headding as="p" fontSize={15}>
                Family Friendly, dog Friendly, (Patio): Kid Friendly; Curated Food Menu of Indiana Favs; Vegetarian
                Options Indiana Favs; Vegetarian Options
              </Headding>

              <Space size={25} />
              <Headding as="h5" fontSize={16} bold title="Other Highlights" />
              <Space size={5} />
              <Headding as="p" fontSize={15}>
                Family Friendly, dog Friendly, (Patio): Kid Friendly; Curated Food Menu of Indiana Favs; Vegetarian
                Options
              </Headding>
            </div>
            <Space size={20} />
            <div className="card--share">
              <img src={UndoIcon} alt="share" />
            </div>
          </Card>
          <Space size={100} />

          <Card
            style={{
              width: '100%',
              minHeight: 'auto',
              padding: '20px 10px 0',
              position: 'relative',
            }}>
            {[1, 2, 3].map(() => (
              <>
                <Grid style={{ display: 'flex' }} item xs={12} direction="row" justify="space-between">
                  <Grid justify="center" align="center" item xs={6}>
                    <img className="bv-images" src="./images/bv.png" />
                    <div className="location-card-details-holder">
                      <Headding as="h5" fontSize={16} style={{ textAlign: 'left' }} bold title="Nap In the Hammock," />
                      <Headding as="p" fontSize={15}>
                        Style
                      </Headding>
                      <Headding as="p" fontSize={15}>
                        Style
                      </Headding>
                    </div>
                  </Grid>
                  <Grid justify="center" align="center" item xs={6}>
                    <img className="bv-images" src="./images/bv1.png" />
                    <div className="location-card-details-holder">
                      <Headding as="h5" fontSize={16} style={{ textAlign: 'left' }} bold title="Nap In the Hammock," />
                      <Headding as="p" fontSize={15}>
                        Style
                      </Headding>
                      <Headding as="p" fontSize={15}>
                        Style
                      </Headding>
                    </div>
                  </Grid>
                </Grid>
                <Space size={20} />
              </>
            ))}
            <div className="card--share lower-card-share">
              <img src={UndoIcon} alt="share" />
            </div>
            <div className="card--share lower-card-edit">
              <img src="./images/editIcon.png" alt="share" className="edit-card" />
            </div>
            <Headding
              as="h5"
              fontSize={16}
              style={{
                textAlign: 'center',
                position: 'absolute',
                top: 0,
                left: '30%',
              }}
              bold
              title="Give These a Try!"
            />
          </Card>
        </Grid>
      </Grid>
    </ContentTemplate>
  );
};

export default AddLocation;
