import React, { useState } from 'react';
import Headding from 'components/atoms/Headding';
import Grid from '@material-ui/core/Grid';
import Input from 'components/atoms/Input';
import Space from 'components/atoms/Space';
import Button from 'components/atoms/Button';
import Select from 'components/atoms/Select';
import Switch from 'components/atoms/Switch';
import Flex from 'components/atoms/Flex';
import Textarea from 'components/atoms/Textarea';
import Widget from 'components/atoms/Widget';
import Checkbox from 'components/atoms/Checkbox';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const BuildTraffic = ({ onChange, values, onHoursChange }) => {
  const [nearbyAttraction, setNearbyAttraction] = useState({
    attractionName: '',
    approxDistance: '',
  });
  const [guildMembership, setGuildMembership] = useState({
    guildName: '',
  });
  const [festival, setFestival] = useState({
    festivalName: '',
    festivalYear: '',
  });
  const [award, setAwards] = useState({
    awardName: '',
    awardYear: '',
  });
  const [tourDayStatus, setFacilityDayStatus] = useState({
    isTourOpenSunday: false,
    isTourOpenMonday: false,
    isTourOpenTuesday: false,
    isTourOpenWednesday: false,
    isTourOpenThursday: false,
    isTourOpenFriday: false,
    isTourOpenSaturday: false,
  });

  const [tourTimes, setFacilityTimes] = useState({
    tourSundayHours: [{ openFrom: '', openTo: '', specials: '' }],
    tourMondayHours: [{ openFrom: '', openTo: '', specials: '' }],
    tourTuesdayHours: [{ openFrom: '', openTo: '', specials: '' }],
    tourWednesdayHours: [{ openFrom: '', openTo: '', specials: '' }],
    tourThursdayHours: [{ openFrom: '', openTo: '', specials: '' }],
    tourFridayHours: [{ openFrom: '', openTo: '', specials: '' }],
    tourSaturdayHours: [{ openFrom: '', openTo: '', specials: '' }],
  });

  const [happyDayStatus, setHappyDayStatus] = useState({
    isHappyOpenSunday: false,
    isHappyOpenMonday: false,
    isHappyOpenTuesday: false,
    isHappyOpenWednesday: false,
    isHappyOpenThursday: false,
    isHappyOpenFriday: false,
    isHappyOpenSaturday: false,
  });

  const [happyTimes, setHappyTimes] = useState({
    happySundayHours: [{ openFrom: '', openTo: '' }],
    happyMondayHours: [{ openFrom: '', openTo: '' }],
    happyTuesdayHours: [{ openFrom: '', openTo: '' }],
    happyWednesdayHours: [{ openFrom: '', openTo: '' }],
    happyThursdayHours: [{ openFrom: '', openTo: '' }],
    happyFridayHours: [{ openFrom: '', openTo: '' }],
    happySaturdayHours: [{ openFrom: '', openTo: '' }],
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
    const data = { ...tourDayStatus, [key]: value };
    setFacilityDayStatus(data);
    const dataToSend = {};
    for (let key in data) {
      dataToSend[key] = data[key] ? 'yes' : 'no';
    }
    onHoursChange(dataToSend);
  };

  const handleHoursChange = (parentKey, itemKey) => event => {
    const changedValue = [...tourTimes[parentKey]];
    changedValue[0][itemKey] = event.target.value;
    const data = {
      ...tourTimes,
      [parentKey]: changedValue,
    };
    setFacilityTimes(data);
    onHoursChange(data);
  };

  const handleHappySwitchChange = key => value => {
    const data = { ...happyDayStatus, [key]: value };
    setHappyDayStatus(data);
    const dataToSend = {};
    for (let key in data) {
      dataToSend[key] = data[key] ? 'yes' : 'no';
    }
    onHoursChange(dataToSend);
  };

  const handleHappyHoursChange = (parentKey, itemKey) => event => {
    const changedValue = [...happyTimes[parentKey]];
    changedValue[0][itemKey] = event.target.value;
    const data = {
      ...happyTimes,
      [parentKey]: changedValue,
    };
    setHappyTimes(data);
    onHoursChange(data);
  };

  const handleCheckboxChange = name => (label, value) => {
    const event = {
      target: {
        name,
        value: value ? label : '',
      },
    };

    onChange(event);
  };

  const handleNearbyAttraction = key => e => {
    const attractions = {
      ...nearbyAttraction,
      [key]: e.target.value,
    };
    const event = {
      target: {
        name: 'nearbyAttractions',
        value: [attractions],
      },
    };
    setNearbyAttraction(attractions);
    onChange(event);
  };

  const handleGuild = key => e => {
    const guild = {
      ...guildMembership,
      [key]: e.target.value,
    };
    const event = {
      target: {
        name: 'guildMembership',
        value: [guild],
      },
    };
    setGuildMembership(guild);
    onChange(event);
  };

  const handleFestival = key => e => {
    const data = {
      ...festival,
      [key]: e.target.value,
    };
    const event = {
      target: {
        name: 'festival',
        value: [data],
      },
    };
    setFestival(data);
    onChange(event);
  };

  const handleAward = key => e => {
    const awards = {
      ...award,
      [key]: e.target.value,
    };
    const event = {
      target: {
        name: 'award',
        value: [awards],
      },
    };
    setAwards(awards);
    onChange(event);
  };

  return (
    <>
      <Widget isAccordion title="Build Traffic">
        <Space size={15} />
        <Headding as="h3" bold title="Tour Related Search Filters" />
        <Space size={40} />
        <Headding as="h3" bold title="Tour Costs" />
        <Space size={20} />
        <Grid container justify="space-around">
          <Grid item>
            <Select
              label="Free?"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
              defaultValue={values.isTourFree}
              onChange={handleChange('isTourFree', 'dropdown')}
            />
          </Grid>
          <Grid item>
            <Headding bold as="h5" title="Enter Minimum - Maximum Price Range*" />
            <Space size={8} />
            <Flex>
              <Input value={values.tourCostMin} onChange={handleChange('tourCostMin')} />
              <Headding
                bold
                as="h5"
                title="-"
                style={{
                  margin: '0 30px',
                }}
              />
              <Input value={values.tourCostMax} onChange={handleChange('tourCostMax')} />
            </Flex>
          </Grid>
        </Grid>

        <Space size={40} />
        <Headding as="h3" bold title="Tour Days & Hours" />
        <Space size={20} />
        {days.map((day, i) => (
          <Grid key={i} container alignItems="center" justify="center">
            <Grid item xs={2}>
              <Headding as="h5" bold title={day} />
            </Grid>
            <Grid item xs={2}>
              <Flex>
                <Switch onChange={handleSwitchChange(`isTourOpen${day}`)} />
                <Headding as="p" title={tourDayStatus[`isTourOpen${day}`] ? 'Open' : 'Closed'} />
              </Flex>
            </Grid>
            <Grid item xs={6}>
              <Flex>
                <Input
                  width={110}
                  size="small"
                  rounded
                  value={tourTimes[`tour${day}Hours`][0].openFrom}
                  onChange={handleHoursChange(`tour${day}Hours`, 'openFrom')}
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
                  value={tourTimes[`tour${day}Hours`][0].openTo}
                  onChange={handleHoursChange(`tour${day}Hours`, 'openTo')}
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
        <Headding as="h3" bold title="Age Restictions" />
        <Space size={15} />
        <Checkbox
          label="None"
          checked={values.tourAgeRestrictions === 'None'}
          onChange={handleCheckboxChange('tourAgeRestrictions')}
        />
        <Checkbox
          label="All ages welcome"
          checked={values.tourAgeRestrictions === 'All ages welcome'}
          onChange={handleCheckboxChange('tourAgeRestrictions')}
        />
        <Checkbox
          label="Underage parties must be accompanied by an adult"
          checked={values.tourAgeRestrictions === 'Underage parties must be accompanied by an adult'}
          onChange={handleCheckboxChange('tourAgeRestrictions')}
        />
        <Checkbox
          label="Must be 17 or older"
          checked={values.tourAgeRestrictions === 'Must be 17 or older'}
          onChange={handleCheckboxChange('tourAgeRestrictions')}
        />
        <Checkbox
          label="Must be 18 or older"
          checked={values.tourAgeRestrictions === 'Must be 18 or older'}
          onChange={handleCheckboxChange('tourAgeRestrictions')}
        />
        <Checkbox
          label="Must be 21 or older"
          checked={values.tourAgeRestrictions === 'Must be 21 or older'}
          onChange={handleCheckboxChange('tourAgeRestrictions')}
        />
      </Widget>

      <Space size={25} />
      <Widget isAccordion>
        <Headding as="h3" bold title="Tap Room / BrewPub Search Filters" />
        <Space size={40} />
        <Grid container justify="space-between" spacing={4}>
          <Grid item xs={5}>
            <Headding as="h3" bold title="Food Options" />
            <Space size={15} />
            {/* <Headding as="h5" bold title="Check all that apply" /> */}
            <Space size={10} />
            <Checkbox
              label="Full Service Kitchen/Menu"
              checked={values.foodOptions === 'Full Service Kitchen/Menu'}
              onChange={handleCheckboxChange('foodOptions')}
            />
            <Checkbox
              label="Limited Menu"
              checked={values.foodOptions === 'Limited Menu'}
              onChange={handleCheckboxChange('foodOptions')}
            />
            <Checkbox
              label="Snacks/Apps"
              checked={values.foodOptions === 'Snacks/Apps'}
              onChange={handleCheckboxChange('foodOptions')}
            />
            <Checkbox
              label="Food Truck"
              checked={values.foodOptions === 'Food Truck'}
              onChange={handleCheckboxChange('foodOptions')}
            />
            <Checkbox
              label="Order-in"
              checked={values.foodOptions === 'Order-in'}
              onChange={handleCheckboxChange('foodOptions')}
            />
            <Checkbox
              label="Carry-in"
              checked={values.foodOptions === 'Carry-in'}
              onChange={handleCheckboxChange('foodOptions')}
            />
            <Checkbox
              label="Late Night Menu"
              checked={values.foodOptions === 'Late Night Menu'}
              onChange={handleCheckboxChange('foodOptions')}
            />
          </Grid>

          <Grid item xs={5}>
            <Headding as="h3" bold title="Related Options" />
            <Space size={15} />
            {/* <Headding as="h5" bold title="Check all that apply" /> */}
            <Space size={10} />
            <Checkbox
              label="Vegetarian"
              checked={values.relatedOptions === 'Vegetarian'}
              onChange={handleCheckboxChange('relatedOptions')}
            />
            <Checkbox
              label="Non Alcoholic"
              checked={values.relatedOptions === 'Non Alcoholic'}
              onChange={handleCheckboxChange('relatedOptions')}
            />
            <Checkbox
              label="Gluten Free"
              checked={values.relatedOptions === 'Gluten Free'}
              onChange={handleCheckboxChange('relatedOptions')}
            />
            <Checkbox
              label="Organic"
              checked={values.relatedOptions === 'Organic'}
              onChange={handleCheckboxChange('relatedOptions')}
            />
            <Checkbox
              label="Free Range"
              checked={values.relatedOptions === 'Free Range'}
              onChange={handleCheckboxChange('relatedOptions')}
            />
            <Checkbox
              label="Farm to Table"
              checked={values.relatedOptions === 'Farm to Table'}
              onChange={handleCheckboxChange('relatedOptions')}
            />
          </Grid>

          <Grid item xs={5}>
            <Headding as="h3" bold title="Entertainment Options" />
            <Space size={15} />
            {/* <Headding as="h5" bold title="Check all that apply" /> */}
            <Space size={10} />
            <Checkbox
              label="Music"
              checked={values.entertainmentOptions === 'Music'}
              onChange={handleCheckboxChange('entertainmentOptions')}
            />
            <Checkbox
              label="Comedy"
              checked={values.entertainmentOptions === 'Comedy'}
              onChange={handleCheckboxChange('entertainmentOptions')}
            />
            <Checkbox
              label="Sports Viewing"
              checked={values.entertainmentOptions === 'Sports Viewing'}
              onChange={handleCheckboxChange('entertainmentOptions')}
            />
            <Checkbox
              label="Games/Activities"
              checked={values.entertainmentOptions === 'Games/Activities'}
              onChange={handleCheckboxChange('entertainmentOptions')}
            />
          </Grid>

          <Grid item xs={5}>
            <Headding as="h3" bold title="Seating Options" />
            <Space size={15} />
            <Headding as="h5" bold title="Check all that apply" />
            <Space size={10} />
            <Checkbox
              label="Indoor/Outdoor Seating"
              checked={values.tourAgeRestrictions === 'None'}
              onChange={handleCheckboxChange('tourAgeRestrictions')}
            />
            <Checkbox
              label="Patio/Beer Garden"
              checked={values.tourAgeRestrictions === 'None'}
              onChange={handleCheckboxChange('tourAgeRestrictions')}
            />
            <Checkbox
              label="Beachside"
              checked={values.tourAgeRestrictions === 'None'}
              onChange={handleCheckboxChange('tourAgeRestrictions')}
            />
            <Checkbox
              label="Rooftop"
              checked={values.tourAgeRestrictions === 'None'}
              onChange={handleCheckboxChange('tourAgeRestrictions')}
            />
            <Checkbox
              label="Mountainside"
              checked={values.tourAgeRestrictions === 'None'}
              onChange={handleCheckboxChange('tourAgeRestrictions')}
            />
            <Checkbox
              label="Reservations Available"
              checked={values.tourAgeRestrictions === 'None'}
              onChange={handleCheckboxChange('tourAgeRestrictions')}
            />
            <Checkbox
              label="Call-Ahead Seating"
              checked={values.tourAgeRestrictions === 'None'}
              onChange={handleCheckboxChange('tourAgeRestrictions')}
            />
          </Grid>
        </Grid>
      </Widget>

      <Space size={25} />
      <Widget isAccordion>
        <Headding as="h3" bold title="Happy Hour / Specials " />
        <Space size={40} />
        <Select width={275} label="Happy Hours?" />
        <Space size={30} />
        <Headding as="h5" bold title="Happy Hour Schedule" />
        <Space size={9} />
        {days.map((day, i) => (
          <Grid key={i} container alignItems="center">
            <Grid item xs={2}>
              <Headding as="h5" bold title={day} />
            </Grid>
            <Grid item xs={2}>
              <Flex>
                <Switch onChange={handleHappySwitchChange(`isHappyOpen${day}`)} />
                <Headding as="p" title={happyDayStatus[`isHappyOpen${day}`] ? 'Open' : 'Closed'} />
              </Flex>
            </Grid>
            <Grid item>
              <Flex>
                <Input
                  width={110}
                  size="small"
                  rounded
                  value={happyTimes[`happy${day}Hours`][0].openFrom}
                  onChange={handleHappyHoursChange(`happy${day}Hours`, 'openFrom')}
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
                  value={happyTimes[`happy${day}Hours`][0].openTo}
                  onChange={handleHappyHoursChange(`happy${day}Hours`, 'openTo')}
                />
                <Headding
                  as="p"
                  bold
                  title="Add Hours"
                  style={{
                    margin: '0 20px',
                  }}
                />
                <Input width={270} size="small" placeholder="Enter Specials" />
              </Flex>
            </Grid>
          </Grid>
        ))}
      </Widget>

      <Space size={25} />
      <Widget isAccordion>
        <Headding as="h3" bold title="Who is Welcome" />
        <Space size={40} />
        <Grid container spacing={4} justify="space-between">
          <Grid item>
            <Select
              width={280}
              label="Pet Friendly"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
              defaultValue={values.isPetFriendly}
              onChange={handleChange('isPetFriendly', 'dropdown')}
            />
          </Grid>
          <Grid item xs={4}>
            <Select
              width={280}
              label="Family Friendly?"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
              defaultValue={values.isFamilyFriendly}
              onChange={handleChange('isFamilyFriendly', 'dropdown')}
            />
          </Grid>
        </Grid>

        <Space size={40} />
        <Headding as="h3" bold title="Nearby Attractions" />
        <Space size={20} />
        <Grid container spacing={4} justify="space-between">
          <Grid item>
            <Input width={280} label="Enter Attraction" onChange={handleNearbyAttraction('attractionName')} />
          </Grid>
          <Grid item xs={4}>
            <Input width={280} label="Approximate Distance" onChange={handleNearbyAttraction('approxDistance')} />
          </Grid>
        </Grid>
        <Space size={10} />
        <Button seafoamBlue size="small">
          Add Another Attraction
        </Button>

        <Space size={40} />
        <Headding as="h3" bold title="Carrryout Sales" />
        <Space size={20} />
        <Grid container spacing={4} justify="space-between">
          <Grid item>
            <Select
              width={280}
              label="Select an option "
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
              onChange={handleChange('carryoutSales', 'dropdown')}
            />
          </Grid>
          <Grid item xs={4}>
            <Input width={280} label="Option Name" onChange={handleChange('carryoutSaleOptions')} />
          </Grid>
        </Grid>

        <Space size={40} />
        <Headding as="h3" bold title="Routine Activities / Events" />
        <Space size={20} />
        <Grid container spacing={10} alignItems="center">
          <Grid item xs={6}>
            <Input label="Facebook Event Page Link" onChange={handleChange('facebookEventPageLink')} />
          </Grid>
          <Grid item xs={3}>
            <div className="text-center">
              <img src="/images/add-an-event.png" alt="AddEvent" />
              <Space size={10} />
              <Headding as="h5" bold title="Add an event" />
            </div>
          </Grid>
        </Grid>
      </Widget>

      <Space size={25} />
      <Widget isAccordion>
        <Headding as="h3" bold title="Guild Memberships" />
        <Space size={30} />
        <Grid container>
          <Grid item xs={10}>
            <Space size={20} />
            <Input placeholder="Enter Guild Name" onChange={handleGuild('guildName')} />
            <Space size={10} />
            <Button seafoamBlue size="small">
              Add Guild
            </Button>

            <Space size={30} />
            <Headding as="h3" bold title="Festivals / Awards" />
            <Space size={20} />
            <Grid container justify="space-between">
              <Grid item xs={5}>
                <Input label="Festivals" placeholder="Enter Fesitivals" onChange={handleFestival('festivalName')} />
              </Grid>
              <Grid item xs={5}>
                <Input label="Year" placeholder="YYYY" onChange={handleFestival('festivalYear')} />
              </Grid>
            </Grid>
            <Space size={10} />
            <Button seafoamBlue size="small">
              Add Festival
            </Button>

            <Space size={30} />
            <Grid container justify="space-between">
              <Grid item xs={5}>
                <Input label="Award" placeholder="Enter Award" onChange={handleAward('awardName')} />
              </Grid>
              <Grid item xs={5}>
                <Input label="Year" placeholder="YYYY" onChange={handleAward('awardYear')} />
              </Grid>
            </Grid>
            <Space size={10} />
            <Button seafoamBlue size="small">
              Add Award
            </Button>

            <Space size={30} />
            <Headding as="h3" bold title="Mailing List" />
            <Space size={20} />
            <Grid container justify="space-between">
              <Grid item xs={4}>
                <Input label="Email" placeholder="Mailinglist@gmail.com" onChange={handleChange('mailingListEmail')} />
              </Grid>
            </Grid>
            <Space size={10} />

            <Space size={30} />
            <Headding as="h3" bold title="History of the Brewery " />
            <Space size={20} />
            <Grid container justify="space-between">
              <Grid item xs={12}>
                <Textarea label="Describe your Brewery " rows={10} onChange={handleChange('historyofBrewery')} />
              </Grid>
            </Grid>
            <Space size={10} />
          </Grid>
        </Grid>
      </Widget>
    </>
  );
};

export default BuildTraffic;
