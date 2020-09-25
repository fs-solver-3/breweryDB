import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Field, Formik, Form, FieldArray
} from 'formik';

import { bools } from 'helper/constants';
import HeadsLogo from 'components/molecules/HeadsLogo';
import Widget from 'components/atoms/Widget';
import Space from 'components/atoms/Space';
import Board from 'components/molecules/Board';
import Headding from 'components/atoms/Headding';
import Select from 'components/atoms/Select';
import Flex from 'components/atoms/Flex';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import ContentTemplate from 'components/molecules/ContentTemplate';

import DaysAndHours from './DaysAndHours';
import AgeRestrictions from './AgeRestrictions';
import TapRoolFiltersBoard from './TapRoolFiltersBoard';

import './styel.css';
import Switch from '../../components/atoms/Switch';
import { addBuildTraffic } from '../../redux/BuildTraffic/actionCreators';
import { initialBuildTrafficValues } from '../../helper/formik-initial-values';
import { getApiData } from './build-traffic-svc';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const BuildTraffic = (props) => {
  // history
  const { locationId } = useParams();

  // useDispatch
  const dispatch = useDispatch();

  // selector
  const userDetails = useSelector(state => state.userProfile.userDetails);

  // state
  const [selectActivitiesCategory, setSelectActivitiesCategory] = useState(null);
  const [selectActivitiesDayofTheWeek, setSelectActivitiesDayofTheWeek] = useState(null);

  const addAPICall = (values) => {
    const apiData = getApiData(values, userDetails);

    apiData.activitiesCategory = selectActivitiesCategory;
    apiData.activitiesDayofTheWeek = selectActivitiesDayofTheWeek;
    apiData.brewerylocationID = locationId;

    dispatch(addBuildTraffic(apiData));

    console.log(JSON.stringify(values, null, 2), apiData);
  };

  return (
    <ContentTemplate title="Build Traffic">
      <HeadsLogo logo="/images/brewery-db-location-traffic.png" title="Build Traffic" />
      <Space size={10} />
      <Formik
        initialValues={initialBuildTrafficValues}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          console.log('bjbcs', values.attributes);
          addAPICall(values.attributes);
        }}
      >
        {({ values }) => (
          <Form>
            <Widget cneter width={1080}>
              <Board title="TOUR RELATED SEARCH FILTERS">
                <Headding as="h3" bold title="Tour Availability & Costs" />
                <Space size={20} />
                <Grid className="section-padding-left" container justify="space-between">
                  <Grid item>
                    <Field
                      component={Select}
                      name="attributes.isTourFree"
                      label="Is Tour Free?"
                      options={bools}
                      value={values.attributes.isTourFree}
                    />
                  </Grid>
                  <Grid item>
                    <Field
                      component={Select}
                      name="attributes.isTourAvailable"
                      label="Are Tours Available?"
                      options={bools}
                      value={values.attributes.isTourAvailable}
                    />
                  </Grid>
                  <Grid item>
                    <Headding bold as="h5" title="Enter Minimum - Maximum Price Range*" />
                    <Space size={8} />
                    <Flex>
                      <Field
                        type="number"
                        component={Input}
                        className="price-range-input"
                        name="attributes.tourPriceMin"
                      />
                      <Headding
                        bold
                        as="h5"
                        title="-"
                        style={{
                          margin: '0 30px',
                        }}
                      />
                      <Field
                        type="number"
                        component={Input}
                        className="price-range-input"
                        name="attributes.tourPriceMax"
                      />
                    </Flex>
                  </Grid>
                </Grid>
                <Space size={30} />
                <DaysAndHours
                  formikValues={values}
                />
                <Space size={30} />
                <AgeRestrictions
                  formikValues={values}
                />
              </Board>
            </Widget>
            <Space size={30} />
            <Widget cneter width={1080}>
              <TapRoolFiltersBoard
                setSelectActivitiesCategory={setSelectActivitiesCategory}
                setSelectActivitiesDayofTheWeek={setSelectActivitiesDayofTheWeek}
                selectActivitiesCategory={selectActivitiesCategory}
                selectActivitiesDayofTheWeek={selectActivitiesDayofTheWeek}
                formikValues={values}
              />
            </Widget>

            <Space size={30} />
            <Widget cneter width={1080}>
              <Board title="HAPPY HOUR / SPECIALS">
                <Space size={20} />
                <Headding as="h4" bold title="Specials" />
                <Space size={9} />
                <FieldArray
                  name="attributes.specials"
                  render={arrayHelpers => (
                    <div>
                      {days.map((day, i) => (
                        <Grid key={i} container alignItems="center">
                          <Grid item xs={2}>
                            <Headding as="h5" bold title={day} />
                          </Grid>
                          <Grid item xs={2}>
                            <Flex>
                              <Field name={`attributes.specials.${i}.tour${day}`} component={Switch} />
                              <Headding as="p" title="No" />
                            </Flex>
                          </Grid>
                          <Grid item>
                            <Flex>
                              <Field
                                component={Input}
                                name={`attributes.specials.${i}.happyHourto`}
                                label=""
                                width={110}
                                size="small"
                                rounded
                              />
                              <Headding
                                bold
                                as="h5"
                                title="-"
                                style={{
                                  margin: '0 15px',
                                }}
                              />
                              <Field
                                component={Input}
                                name={`attributes.specials.${i}.happyHourfrom`}
                                label=""
                                width={110}
                                size="small"
                                rounded
                              />
                              <Field
                                component={Input}
                                name={`attributes.specials.${i}.happyhourSpecials`}
                                label=""
                                width={370}
                                style={{ width: 270 }}
                                size="small"
                                placeholder="Enter Specials"
                                className="speacials-input"
                              />
                            </Flex>
                          </Grid>
                        </Grid>
                      ))}
                    </div>
                  )}
                />
              </Board>
            </Widget>
            <Space size={30} />
            <Space size={30} />
            <Grid
              container
              justify="center"
              style={{
                width: '1080px',
                margin: '0 auto'
              }}
            >
              <Button type="submit" bold size="large">
                Save and Exit
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </ContentTemplate>
  );
};

export default BuildTraffic;
