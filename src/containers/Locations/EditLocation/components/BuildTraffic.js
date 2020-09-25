import React from 'react';
import Headding from 'components/atoms/Headding';
import Grid from '@material-ui/core/Grid';
import Input from 'components/atoms/Input';
import Space from 'components/atoms/Space';
import Select from 'components/atoms/Select';
import Flex from 'components/atoms/Flex';
import Widget from 'components/atoms/Widget';
import Board from 'components/molecules/Board';
import Switch from 'components/atoms/Switch';

import DaysAndHours from 'containers/BuildTraffic/DaysAndHours';
import AgeRestrictions from 'containers/BuildTraffic/AgeRestrictions';
import TapRoolFiltersBoard from 'containers/BuildTraffic/TapRoolFiltersBoard';

const dropdownValues = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const BuildTraffic = ({ formikValues }) => (
  <>
    <Widget isAccordion title="Build Traffic For This Location ">
      <Board title="TOUR RELATED SEARCH FILTERS">
        <Headding as="h3" bold title="Tour Availability & Costs" />
        <Space size={20} />
        <Grid container justify="space-around">
          <Grid item>
            <Select options={dropdownValues} label="Free?" defaultValue={dropdownValues[0]} />
          </Grid>
          <Grid item>
            <Select options={dropdownValues} label="Are Tours Available?" defaultValue={dropdownValues[0]} />
          </Grid>
          <Grid item>
            <Headding bold as="h5" title="Enter Minimum - Maximum Price Range*" />
            <Space size={8} />
            <Flex>
              <Input className="price-range-input" />
              <Headding
                bold
                as="h5"
                title="-"
                style={{
                  margin: '0 30px',
                }}
              />
              <Input className="price-range-input" />
            </Flex>
          </Grid>
        </Grid>
        <Space size={30} />
        <DaysAndHours
          formikValues={formikValues}
        />
        <Space size={30} />
        <AgeRestrictions
          formikValues={formikValues}
        />
      </Board>
    </Widget>
    <Widget style={{ marginTop: 40 }}>
      <TapRoolFiltersBoard
        formikValues={formikValues}
      />
    </Widget>

    <Widget style={{ marginTop: 40 }}>
      <Board title="HAPPY HOUR / SPECIALS">
        <Space size={20} />
        <Headding as="h4" bold title="Specials" />
        <Space size={9} />
        {days.map((day, i) => (
          <Grid key={i} container alignItems="center">
            <Grid item xs={2}>
              <Headding as="h5" bold title={day} />
            </Grid>
            <Grid item xs={2}>
              <Flex>
                <Switch />
                <Headding as="p" title="No" />
              </Flex>
            </Grid>
            <Grid item>
              <Flex>
                <Input width={110} size="small" rounded />
                <Headding
                  bold
                  as="h5"
                  title="-"
                  style={{
                    margin: '0 15px',
                  }}
                />
                <Input width={110} size="small" rounded />
                <Input
                  className="speacials-input"
                  width={370}
                  style={{ width: 270 }}
                  size="small"
                  placeholder="Enter Specials"
                />
              </Flex>
            </Grid>
          </Grid>
        ))}
      </Board>
    </Widget>
  </>
);

export default BuildTraffic;
