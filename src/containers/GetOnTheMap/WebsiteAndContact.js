import React from 'react';
import Grid from '@material-ui/core/Grid';

import Headding from 'components/atoms/Headding';
import Input from 'components/atoms/Input';
import Widget from 'components/atoms/Widget';
import Space from 'components/atoms/Space';

const WebsiteAndContact = ({ onChange, values }) => {
  const handleInputChange = (name, type = 'input') => e => {
    const event = {
      target: {
        name,
        value: type === 'input' ? e.target.value : e,
      },
    };

    onChange(event);
  };

  return (
    <Widget cneter width={1080}>
      <div
        className="mx-auto"
        style={{
          width: 745,
        }}>
        <Headding as="h3" bold title="Website and Contact Information" />
        <Space size={20} />
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <Input
              placeholder="http://www.YourBrewery.com"
              label="Brewery website"
              onChange={handleInputChange('breweryWebsite')}
              value={values.breweryWebsite}
            />
          </Grid>
          <Grid item xs={10}>
            <Input
              placeholder="YourBrewery@Gmail.com"
              label="Email"
              onChange={handleInputChange('breweryEmailAddress')}
              value={values.breweryEmailAddress}
            />
          </Grid>
        </Grid>
      </div>
    </Widget>
  );
};

export default WebsiteAndContact;
