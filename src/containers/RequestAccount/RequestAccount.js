import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import RequestSection from './RequestSection';
import ContentBox from './ContentBox';
import { callAPI } from '../../helper/apiUtils';
import { ThankyouSection } from './ThankyouSection';

const RequestAccount = ({ successMsg, fetching, getCountries, isLoggedIn }) => {
  const [isSuccessMessageVisible, toggleMessage] = useState(false);
  const [slideInClass, updateClass] = useState('');
  const [errorMessage, updateError] = useState('');

  function handleOnsubmit(values, breweryData, callback) {
    const data = JSON.parse(JSON.stringify(values));
    data.workPhone = values.workPhone !== '' ? `+1${values.workPhone}` : values.workPhone;
    data.breweryID = '';
    data.breweryName = data.breweryName.value;
    data.stateProvinceRegion = data.stateProvinceRegion.value;
    data.country = data.country.value;
    data.beerlove = data.beerlove.value;
    data.rolestring = data.role;
    delete data.role;
    delete data.confirm_email;

    Array.isArray(breweryData) &&
      breweryData.forEach(item => {
        if (item.breweryAKAName === data.breweryName) {
          data.breweryID = item.breweryID;
        }
      });
    callAPI('/digi-update-user-registration', {}, 'POST', data).then(response => {
      if (response.data && response.data.Error) {
        updateError(response.data.Error.Message);
      } else {
        toggleMessage(true);
        callback();
      }
    });
  }

  React.useEffect(() => {
    getCountries();
    updateClass('form-eased-in');
  }, []);

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="bd-request-account--header">
        <Grid container alignItems="center" justify="space-between">
          <img src="/images/breweryDBLogo.png" style={{ height: 51 }} alt="logo" />
          <p>
            Already Have an Account?
            <b>
              <Link to="/login">Login Here</Link>
            </b>
          </p>
        </Grid>
      </div>
      <div className="bd-request-account">
        <img src="/images/wave.svg" className="wave-pattern-bg" alt="logo" />
        <Grid container spacing={0}>
          <Grid item xs={7} className="bd-request-account--content">
            <ContentBox />
          </Grid>
          <Grid item xs={5} className="bd-request-account--form">
            <div className={`slide-in-form ${slideInClass}`}>
              {isSuccessMessageVisible ? (
                <ThankyouSection />
              ) : (
                  <RequestSection
                    onSubmit={handleOnsubmit}
                    successMsg={successMsg}
                    errorMessage={errorMessage}
                    fetching={fetching}
                  />
                )}
              <div className="assistance-text">
                <Grid item container justify="center">
                  <span>Need Assistance? 317-296-7474 | outreach@BreweryDB.com</span>
                  <span>©2020 BrewLogix LLC. All Rights Reserved.</span>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

RequestAccount.propTypes = {
  getCountries: PropTypes.func,
  successMsg: PropTypes.string,
  fetching: PropTypes.bool,
};

export default RequestAccount;
