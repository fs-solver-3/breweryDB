import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { Field, FieldArray } from 'formik';

import Board from 'components/molecules/Board';
import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';
import Checkbox from 'components/atoms/Checkbox';
import Select from 'components/atoms/Select';
import Button from 'components/atoms/Button';
import {
  dayOfWeeeks, categories, distances, activityData
} from 'helper/constants';
import SearchBar from '../../components/atoms/SearchBar';
import Input from '../../components/atoms/Input';

const TapRoolFiltersBoard = (props) => {
  const {
    formikValues
  } = props;

  return (
    <Board title="Experience Related Search Filters">
      <Space size={10} />
      <Grid container justify="space-between" spacing={4}>
        <Grid item xs={4}>
          <Headding as="h3" bold title="Food Options" />

          <Space size={15} />
          <Headding as="h5" bold title="Check all that apply" />
          <Space size={10} />
          <div className="fields-padding-left">

            <>
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.foodOptions"
                label="Full Service Kitchen/Menu"
                value="Full Service Kitchen/Menu"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.foodOptions"
                label="Limited Menu"
                value="Limited Menu"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.foodOptions"
                label="Snacks/Apps"
                value="Snacks/Apps"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.foodOptions"
                label="Late Night Menu"
                value="Late Night Menu"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.foodOptions"
                label="Gluten Free"
                value="Gluten Free"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.foodOptions"
                label="Vegetarian"
                value="Vegetarian"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.foodOptions"
                label="Free Range"
                value="Free Range"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.foodOptions"
                label="Farm to Table"
                value="Farm to Table"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.foodOptions"
                label="Food Truck"
                value="Food Truck"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.foodOptions"
                label="Carry-in"
                value="Carry-in"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.foodOptions"
                label="Order-in"
                value="Order-in"
              />
            </>

          </div>
        </Grid>

        <Grid item xs={4}>
          <Headding as="h3" bold title="Brew Options" />

          <Space size={15} />
          <Headding as="h5" bold title="Check all that apply" />
          <Space size={10} />
          <div className="fields-padding-left">

            <>
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.brewOptions"
                label="Non-Alcoholic"
                value="Non-Alcoholic"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.brewOptions"
                label="Gluten Free"
                value="Gluten Free"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.brewOptions"
                label="Organic"
                value="Organic"
              />
            </>
          </div>
          <Space size={30} />

          <Headding as="h3" bold title="Patron Options" />

          <Space size={15} />
          <Headding as="h5" bold title="Check all that apply" />
          <Space size={10} />
          <div className="fields-padding-left">

            <>
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.patronOption"
                label="Family Friendly (Under 21)"
                value="Family Friendly (Under 21)"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.patronOption"
                label="All Pets"
                value="All Pets"
              />
              <Field component={Checkbox} type="checkbox" name="attributes.patronOption" label="Dogs" value="Dogs" />
              <Field component={Checkbox} type="checkbox" name="attributes.patronOption" label="Cats" value="Cats" />
            </>

          </div>
        </Grid>

        <Grid item xs={4}>
          <Headding as="h3" bold title="Seating Options" />

          <Space size={15} />
          <Headding as="h5" bold title="Check all that apply" />
          <Space size={10} />
          <div className="fields-padding-left">

            <>
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.patronOption"
                label="Indoor/Outdoor Seating"
                value="Indoor/Outdoor Seating"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.patronOption"
                label="Patio/Beer Garden"
                value="Patio/Beer Garden"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.patronOption"
                label="Beachside"
                value="Beachside"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.patronOption"
                label="Reservations Available"
                value="Reservations Available"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.patronOption"
                label="Call-Ahead Seating"
                value="Call-Ahead Seating"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.patronOption"
                label="Rooftop"
                value="Rooftop"
              />
              <Field
                component={Checkbox}
                type="checkbox"
                name="attributes.patronOption"
                label="Mountainside"
                value="Mountainside"
              />
            </>

          </div>
        </Grid>
      </Grid>

      <Space size={40} />
      <Headding as="h3" bold title="NEARBY ATTRACTIONS" />

      <Space size={20} />

      <FieldArray name="attributes.attractions">
        {({ insert, remove, push }) => (
          <div>
            {props.formikValues.attributes.attractions.length > 0 &&
              props.formikValues.attributes.attractions.map((attraction, index) => (
                <React.Fragment key={index}>
                  <Grid className="section-padding-left" container spacing={4}>
                    <Grid item>
                      <Field
                        component={Input}
                        name={`attributes.attractions.${index}.attraction`}
                        label="Enter Attraction"
                      // required
                      // placeholder={errors.firstName && touched.firstName ? errors.firstName : 'Enter Name'}
                      // className={errors.firstName && touched.firstName ? 'input-error-field' : ''}
                      />
                    </Grid>
                    <Grid item xs={6} style={{ marginLeft: 80 }}>
                      <div style={{ display: 'flex' }}>
                        <Field
                          component={Select}
                          name={`attributes.attractions.${index}.distance`}
                          label="Approximate Distance"
                          options={distances}
                          value={distances && distances.find(e => e.value === props.formikValues.distances)}
                        />
                        <button
                          type="button"
                          className={
                            props.formikValues.attributes.attractions.length > 1 ? 'delete-button' : 'delete-button noDrop'
                          }
                          onClick={() => props.formikValues.attributes.attractions.length > 1 && remove(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </Grid>
                  </Grid>
                  <Space size={20} />
                </React.Fragment>
              ))}
            <div className="section-padding-left">
              <Button type="button" logixBlue size="large" onClick={() => push({ attraction: '', distance: '' })}>
                Add Another Attraction
            </Button>
            </div>
          </div>
        )}
      </FieldArray>
      <Space size={40} />
      <Headding as="h3" bold title="Routine Activities" />

      <Space size={20} />
      <Grid className="section-padding-left" container spacing={10}>
        <Grid item xs={5}>
          <Headding as="h5" bold title="Daily Activities" />
          <Space size={5} />

          <div className="activities_container_build">
            {activityData &&
              activityData.map((activity, index) =>
                props.formikValuesattributes && props.formikValuesattributes.activities && props.formikValuesattributes.activities
                  ? props.formikValuesattributes.activities.map(selectedActivity =>
                    activity.activity === selectedActivity
                      ? props.selectActivitiesDayofTheWeek &&
                      props.selectActivitiesDayofTheWeek.map(day =>
                        day === 'every_day' ? (
                          <>
                            <div className="activity_item_build">
                              <img src={activity.source} className="activity-icon" />
                              <Space size={3} />
                              <Headding as="p" bold title={activity.activity} />
                            </div>

                          </>
                        ) : (
                            ''
                          ),
                      )
                      : '',
                  )
                  : '',
              )}
          </div>
          <Space size={20} />
          <Headding as="h5" bold title="Weekly Activities" />
          <Space size={5} />
          <div className="activities_container_build">
            {activityData &&
              activityData.map((activity, index) =>
                props.formikValuesattributes && props.formikValuesattributes.activities
                  ? props.formikValuesattributes.activities.map(selectedActivity =>
                    activity.activity === selectedActivity
                      ? props.selectActivitiesDayofTheWeek &&
                        props.selectActivitiesDayofTheWeek.some(day => day === 'every_day')
                        ? ''
                        : props.selectActivitiesDayofTheWeek && (
                          <>
                            <div className="activity_item_build">
                              <img src={activity.source} className="activity-icon" />
                              <Space size={3} />
                              <Headding as="p" bold title={activity.activity} />
                            </div>
                          </>
                        )
                      : '',
                  )
                  : '',
              )}
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className="activities-container">
            <Select
              isMulti
              label="Day of the Week"
              onCustomOnChange={props.setSelectActivitiesDayofTheWeek}
              options={dayOfWeeeks}
              name="activitiesDayofTheWeek"
            />
            <Select
              isMulti
              label="Category"
              onCustomOnChange={props.setSelectActivitiesCategory}
              options={categories}
              name="activitiesCategory"
            />
          </div>
          <Space size={20} />
          <Headding as="h5" bold title="Select Activities" />
          <Space size={10} />
          <div className="activities-selection-container">
            <div className="search-container">
              <SearchBar placeholder="Search Activities" />
            </div>
            <div className="activities-list">
              {activityData &&
                activityData.map((category, index) =>
                  props.selectActivitiesCategory && props.selectActivitiesCategory ? (
                    props.selectActivitiesCategory.map((selectedCategory, index) =>
                      selectedCategory === category.category ? (
                        <Grid item xs={2} key={index}>
                          <div className="activity-item">
                            <img src={category.source} className="activity-icon" />
                            <Space size={3} />
                            <Headding as="p" bold title={category.activity} />
                            <Space size={3} />
                            <Field
                              component={Checkbox}
                              type="checkbox"
                              name="attributes.activities"
                              label=""
                              value={category.activity}
                            />
                          </div>
                        </Grid>
                      ) : (
                          ''
                        ),
                    )
                  ) : (
                      <Grid item xs={2} key={index}>
                        <div className="activity-item">
                          <img src={category.source} className="activity-icon" />
                          <Space size={3} />
                          <Headding as="p" bold title={category.activity} />
                          <Space size={3} />

                          <Field
                            component={Checkbox}
                            type="checkbox"
                            name="attributes.activities"
                            label=""
                            value={category.activity}
                          />

                        </div>
                      </Grid>
                    ),
                )}
            </div>
            <Space size={20} />
            <div className="search-container">
              <Button bold size="small">
                Save
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Board>
  );
};

TapRoolFiltersBoard.propTypes = {
  formikValues: PropTypes.oneOf(PropTypes.object).isRequired
};

export default TapRoolFiltersBoard;
