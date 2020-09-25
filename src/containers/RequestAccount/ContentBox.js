import React from 'react';
import Grid from '@material-ui/core/Grid';
import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';
import Widget from 'components/atoms/Widget';

const ContentBox = () => (
  <div>
    <h1>
      Market Your Brewery on BreweryDB.com
      <span className="for-free-text free-box" />
      <span className="for-free-text free-text">For Free</span>
    </h1>
    <Space size={35} />
    <h4>
      In 2019, over 1 million people found their way to U.S. breweries using BreweryDB.com. In October, 2020 an ALL NEW
      BreweryDB.com will launch its new web and mobile apps – bigger and better than ever! Here on marketmybrewery.com,
      you can stage your brewery, its location, and its brew information so you’re 100% up to date and ready to go when
      the new apps go live!
    </h4>
    <Space size={20} />
    <span className="need-help-text">
      Need help getting started? Our Brewery Outreach Team is here for you! Just shoot us an email at
      {' '}
      <b>outreach@BreweryDB.com</b>
      {' '}
      or call Conner or Luke at
      <b>317.296.7474</b>
      .
    </span>
    <Space size={20} />
    <Grid container spacing={4} className="bd-request-account--cards">
      <Grid item xs={4}>
        <Widget style={{ textAlign: 'center' }}>
          <img src="/images/BreweryDBMapRoute.png" alt="" />
          <Space size={35} />
          <Headding fontSize={16} as="h3">
            Craft enthusiasts are looking for your brewery and your brews! BreweryDB can help you get on their maps and
            brewery routes!
          </Headding>
          <Space size={20} />
        </Widget>
      </Grid>
      <Grid item xs={4}>
        <Widget style={{ textAlign: 'center' }}>
          <img src="/images/BreweryDB_PromoteProducts.png" alt="" />
          <Space size={35} />
          <Headding fontSize={16} as="h3">
            Fans of craft love to know about your brews! BreweryDB can help you get the most accurate information to
            market!
          </Headding>
          <Space size={20} />
        </Widget>
      </Grid>
      <Grid item xs={4}>
        <Widget style={{ textAlign: 'center' }}>
          <img style={{ width: 210 }} src="/images/brewery-db-location-traffic.png" alt="" />
          <Space size={35} />
          <Headding fontSize={16} as="h3">
            Your tap room or brewpub is where craft lovers want to be! BreweryDB can help them find what makes your
            location great!
          </Headding>
          <Space size={20} />
        </Widget>
      </Grid>
    </Grid>
  </div>
);

export default ContentBox;
