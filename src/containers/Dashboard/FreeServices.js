/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ReactSelect from 'react-select';

import Widget from 'components/atoms/Widget';
import { Grid, Modal } from '@material-ui/core';
import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';
import Button from 'components/atoms/Button';
import { Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import Select from 'components/atoms/Select';
// import history from '../../redux/history/history';
import validationSchema from 'containers/RequestAccount/components/validationSchema';

const widgetStyle = {
  width: 447,
  textAlign: 'center',
};

const FreeServices = props => {
  // history
  let history = useHistory();

  // selector
  const locations = useSelector(state => state.locations.location);

  // state
  const [addMemberFormVisible, toggleMemberForm] = useState(false);
  const [locationId, setLocationId] = useState('');

  const toggleAddMemberForm = flag => {
    toggleMemberForm(flag);
  };
  const validateLocation = value => {
    let error;
    if (!value) {
      error = 'Required';
    }
    return error;
  };

  return (
    <Widget title="Market Your Brand: Free Services">
      <Grid container justify="space-between" alignItems="stretch">
        <Widget style={widgetStyle} containerClass="widget-container-class">
          <img className="service-image" src="/images/BreweryDBMapRoute.png" alt="lgoo" />
          <Space size={10} />
          <Headding as="h3" align="center" className="service-heading">
            Craft enthusiasts are looking for your brewery and your brews! BreweryDB can help you get on their maps and
            on their routes
          </Headding>
          <Space size={10} />
          <Link component={Button} style={{ width: '217px', padding: '12px 0' }} to="/get_on_the_map" bold>
            Get on the Map
          </Link>
        </Widget>

        <Widget style={widgetStyle} containerClass="widget-container-class">
          <img className="service-image" src="/images/BreweryDB_PromoteProducts.png" alt="lgoo" />
          <Space size={10} />
          <Headding as="h3" align="center" className="service-heading">
            Fans of craft love to know about your brews! BreweryDB® can help you get the most accurate information to
            market!
          </Headding>
          <Space size={10} />
          <Link component={Button} style={{ width: '217px', padding: '12px 0' }} to="/products/add" bold>
            Add Your Products
          </Link>
        </Widget>

        <Widget style={widgetStyle} containerClass="widget-container-class">
          <img className="service-image" src="/images/brewery-db-location-traffic.png" alt="lgoo" />
          <Space size={10} />
          <Headding as="h3" align="center" className="service-heading">
            Your tap room or brewpub is where craft lovers want to be! BreweryDB® can help them find what makes your
            location great!
          </Headding>
          <Space size={10} />
          <Link
            component={Button}
            style={{ width: '217px', padding: '12px 0' }}
            // to="/build_traffic"
            onClick={() => toggleAddMemberForm(true)}
            bold>
            <span className="buildButtonText">Build Traffic</span>
          </Link>
        </Widget>
      </Grid>

      <Modal open={addMemberFormVisible}>
        <div onClick={() => toggleAddMemberForm(false)} className="modal-container">
          <div onClick={e => e.stopPropagation()} className="modal">
            <div className="heading">
              <img className="modalImage" src="/images/brewery-db-location-traffic.png" alt="lgoo" />
              <p className="modalHeading">Select Location</p>
              <button className="locationModalCloseButton" onClick={() => toggleAddMemberForm(false)}>
                &times;
              </button>
            </div>
            <Formik
              onSubmit={values => {
                history.push(`build_traffic/${values.location.value}`);
              }}
              initialValues={{ location: '' }}
              enableReinitialize>
              {props => {
                const { values, touched, errors, handleSubmit, handleChange } = props;
                return (
                  <Form onSubmit={handleSubmit}>
                    <div className="content-section-Location">
                      <span className="section-title">Where Do you Want to Drive Traffic?</span>
                      <Grid
                        style={{
                          margin: '0 auto',
                        }}
                        container
                        spacing={2}
                        justify="center">
                        <Grid item xs={4} className="modalSelect">
                          <Field
                            component={Select}
                            required
                            width="500px"
                            name="location"
                            label=""
                            options={
                              locations &&
                              locations.data &&
                              locations.data.Items.map(({ breweryName, city, locationID }) => ({
                                label: `${breweryName}-${city}`,
                                value: locationID,
                              }))
                            }
                            value={
                              values.location
                            }
                            // className={errors.location ? 'input-error-field' : ''}
                            validate={validateLocation}
                            // onChange={(loc) => {
                            //   console.log('loc', loc);
                            // }}
                            onChange={handleChange}

                          />
                          <p className="locationText">{errors.location}</p>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="footer">
                      <Button type="submit" logixBlue size="small">
                        Select
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </Modal>
    </Widget>
  );
};

export default FreeServices;
