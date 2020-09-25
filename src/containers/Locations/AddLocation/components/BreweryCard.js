import React, { useState } from 'react';
import Headding from 'components/atoms/Headding';
import Grid from '@material-ui/core/Grid';
import Input from 'components/atoms/Input';
import Space from 'components/atoms/Space';
import Select from 'components/atoms/Select';
import Switch from 'components/atoms/Switch';
import Flex from 'components/atoms/Flex';
import Textarea from 'components/atoms/Textarea';
import Widget from 'components/atoms/Widget';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const BreweryCard = ({ onChange, values, onHoursChange }) => {
  const [facilityDayStatus, setFacilityDayStatus] = useState({
    isFacilityOpenSunday: false,
    isFacilityOpenMonday: false,
    isFacilityOpenTuesday: false,
    isFacilityOpenWednesday: false,
    isFacilityOpenThursday: false,
    isFacilityOpenFriday: false,
    isFacilityOpenSaturday: false,
  });

  const [facilityTimes, setFacilityTimes] = useState({
    facilitySundayHours: [{ openFrom: '', openTo: '' }],
    facilityMondayHours: [{ openFrom: '', openTo: '' }],
    facilityTuesdayHours: [{ openFrom: '', openTo: '' }],
    facilityWednesdayHours: [{ openFrom: '', openTo: '' }],
    facilityThursdayHours: [{ openFrom: '', openTo: '' }],
    facilityFridayHours: [{ openFrom: '', openTo: '' }],
    facilitySaturdayHours: [{ openFrom: '', openTo: '' }],
  });

  const handleChange = (name, type = 'input') => e => {
    const event = {
      target: {
        name,
        value: type === 'input' ? e.target.value : e,
      },
    };

    onChange(event);
  };

  const handleSwitchChange = key => value => {
    const data = { ...facilityDayStatus, [key]: value };
    setFacilityDayStatus(data);
    const dataToSend = {};
    for (let key in data) {
      dataToSend[key] = data[key] ? 'yes' : 'no';
    }
    onHoursChange(dataToSend);
  };

  const handleHoursChange = (parentKey, itemKey) => event => {
    const changedValue = [...facilityTimes[parentKey]];
    changedValue[0][itemKey] = event.target.value;
    const data = {
      ...facilityTimes,
      [parentKey]: changedValue,
    };
    setFacilityTimes(data);
    onHoursChange(data);
  };

  return (
    <Widget isAccordion title="Market This Location: Your Location Card">
      <Space size={15} />
      <Headding as="h3" bold title="Location Details" />
      <Space size={20} />
      <Grid className="section-padding-left" container spacing={4}>
        <Grid item xs={4}>
          <Input
            label="Location Name"
            value={values.breweryLocationName}
            onChange={handleChange('breweryLocationName')}
          />
        </Grid>
        <Grid item xs={4}>
          <Select
            label="Facility Type"
            options={[
              { label: 'Production Facility', value: 'Production Facility' },
              { value: 'Tap/Tasting Room', label: 'Tap/Tasting Room' },
              { value: 'BrewPub', label: 'BrewPub' },
              { value: 'Restaurant &Brewhouse', label: 'Restaurant &Brewhouse' },
            ]}
            onChange={handleChange('locationFacilityType', 'dropdown')}
            value={{ label: values.locationFacilityType }}
          />
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Input label="Address Line 1" value={values.streetAddress} onChange={handleChange('streetAddress')} />
        </Grid>
        <Grid item xs={4}>
          <Input label="Address Line 2" value={values.extendedAddress} onChange={handleChange('extendedAddress')} />
        </Grid>
        <Grid item xs={4}>
          <Select
            label="Country"
            options={[
              { value: 'US', label: 'US' },
              { value: 'Canada', label: 'Canada' },
            ]}
            onChange={handleChange('country', 'dropdown')}
          />
        </Grid>
        <Grid item xs={4}>
          <Input label="City" value={values.city} onChange={handleChange('city')} />
        </Grid>
        <Grid item xs={4}>
          <Select label="State / Province / Region" />
        </Grid>
        <Grid item xs={4}>
          <Input label="Zip" value={values.postalCode} onChange={handleChange('postalCode')} />
        </Grid>
      </Grid>

      <Space size={40} />
      <Headding as="h3" bold title="Facility Hours" />
      <Space size={20} />
      {days.map((day, i) => (
        <Grid key={i} container alignItems="center" justify="center">
          <Grid item xs={2}>
            <Headding as="h5" bold title={day} />
          </Grid>
          <Grid item xs={2}>
            <Flex>
              <Switch onChange={handleSwitchChange(`isFacilityOpen${day}`)} />
              <Headding as="p" title={facilityDayStatus[`isFacilityOpen${day}`] ? 'Open' : 'Closed'} />
            </Flex>
          </Grid>
          <Grid item xs={6}>
            <Flex>
              <Input
                width={110}
                size="small"
                rounded
                value={facilityTimes[`facility${day}Hours`][0].openFrom}
                onChange={handleHoursChange(`facility${day}Hours`, 'openFrom')}
              />
              <Headding
                bold
                as="h5"
                title="-"
                style={{
                  margin: '0 15px',
                }}
              />
              <Input
                width={110}
                size="small"
                rounded
                value={facilityTimes[`facility${day}Hours`][0].openTo}
                onChange={handleHoursChange(`facility${day}Hours`, 'openTo')}
              />
              <Headding
                as="h5"
                bold
                title="Add Hours"
                style={{
                  marginLeft: 20,
                }}
              />
            </Flex>
          </Grid>
        </Grid>
      ))}

      <Space size={40} />
      <Headding as="h3" bold title="Highlights" />
      <Space size={25} />
      <Textarea
        rows="7"
        label="Tap Highlights"
        value={values.tapHighlights}
        onChange={handleChange('tapHighlights')}
        text="26 Taps including barrel aged, sour ales, seasonals, exclusive beers year - round staples and kombucha"
      />
      <Space size={20} />
      <Textarea
        rows="7"
        label="Other Highlights"
        value={values.otherHighlights}
        onChange={handleChange('otherHighlights')}
        text="Family Friendly, dog Friendly, (Patio): Kid Friendly; Curated Food Menu of Indiana Favs; Vegetarian Options"
      />

      <Space size={40} />
      <Headding as="h3" bold title="Products This Location is Known For" />
      <Space size={25} />
      <Flex>
        <div className="upload-box" />
        <div className="upload-box" />
        <div className="upload-box" />
        <div className="text-center">
          <img src="/images/add-an-event.png" alt="AddEvent" />
          <Space size={10} />
          <Headding as="h5" bold title="Add another Product" />
        </div>
      </Flex>
    </Widget>
  );
};

export default BreweryCard;
