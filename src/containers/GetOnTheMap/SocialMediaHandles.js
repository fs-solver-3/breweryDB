import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import Headding from 'components/atoms/Headding';
import Input from 'components/atoms/Input';
import Widget from 'components/atoms/Widget';
import Space from 'components/atoms/Space';
import Button from 'components/atoms/Button';

const SocialMediaHandles = ({ onChange, values }) => {
  const handleInputChange = (name, type = 'input') => e => {
    const event = {
      target: {
        name,
        value: type === 'input' ? e.target.value : e,
      },
    };

    onChange(event);
  };

  const handleOtherSocialChange = linkText => e => {
    const otherSocialMedia = [...values.otherSocialMedia];

    const item = values.otherSocialMedia.find(media => media.linkText === linkText);
    const index = values.otherSocialMedia.findIndex(media => media.linkText === linkText);
    if (item) {
      item.socialMedialink = e.target.value;
      otherSocialMedia[index] = item;
    } else {
      otherSocialMedia.push({ linkText, socialMedialink: e.target.value });
    }

    const event = {
      target: {
        name: 'otherSocialMedia',
        value: otherSocialMedia,
      },
    };
    onChange(event);
  };

  const fetchOtherSocialMediaValue = linkText => {
    const item = values.otherSocialMedia.find(value => value.linkText === linkText);
    let value = '';
    if (item) {
      value = item.socialMedialink;
    }

    return value;
  };

  return (
    <Widget cneter width={1080}>
      <div
        className="mx-auto"
        style={{
          width: 745,
        }}>
        <Headding as="h3" bold title="Social Media Handles" />
        <Space size={20} />
        <Grid container spacing={3} alignItems="flex-end">
          <Grid item xs={10}>
            <Input
              placeholder="http://facebook.com/YourBrewery"
              label="Facebook Profile"
              onChange={handleInputChange('breweryFacebook')}
              value={values.breweryFacebook}
            />
          </Grid>
          <Grid item xs={2}>
            <Button reddyBrown bold>
              Delete
            </Button>
          </Grid>
          <Grid item xs={10}>
            <Input
              placeholder="http://facebook.com/YourBrewery"
              label="Facebook Fan Page"
              onChange={handleOtherSocialChange('facebook fan page')}
              value={fetchOtherSocialMediaValue('facebook fan page')}
            />
          </Grid>
          <Grid item xs={2}>
            <Button reddyBrown bold>
              Delete
            </Button>
          </Grid>
          <Grid item xs={10}>
            <Input
              placeholder="http://Instagram.com/YourBrewery"
              label="Instagram"
              onChange={handleInputChange('breweryInstagram')}
              value={values.breweryInstagram}
            />
          </Grid>
          <Grid item xs={2}>
            <Button reddyBrown bold>
              Delete
            </Button>
          </Grid>
          <Grid item xs={10}>
            <Input
              placeholder="http://Twitter.com/YourBrewery"
              label="Twitter"
              onChange={handleInputChange('breweryTwitter')}
              value={values.breweryTwitter}
            />
          </Grid>
          <Grid item xs={2}>
            <Button reddyBrown bold>
              Delete
            </Button>
          </Grid>
          <Grid item xs={10}>
            <Input
              placeholder="http://Twitter.com/YourBrewery"
              label="YouTube"
              onChange={handleOtherSocialChange('youtube')}
              value={fetchOtherSocialMediaValue('youtube')}
            />
          </Grid>
          <Grid item xs={2}>
            <Button reddyBrown bold>
              Delete
            </Button>
          </Grid>
        </Grid>
        <Space size={20} />
      </div>
    </Widget>
  );
};

export default SocialMediaHandles;
