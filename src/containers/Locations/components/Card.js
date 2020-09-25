import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Space from 'components/atoms/Space';
import Headding from 'components/atoms/Headding';
import Button from 'components/atoms/Button';
import Card from 'components/molecules/Card';
import UndoIcon from 'components/molecules/Card/assets/undo.svg';

const imgStyle = {
  width: 135
};

/**
 * Using below data just for the purpose of display
 * Need to remove this data and and its usages post proper data is available
 */
const HOURS = 'Mon - Sat 11:00 AM - 9:00 PM';
const OTHER_HIGHLIGHTS = 'Other Highlights - N/A';
const TAP_HIGHLIGHTS = 'Tap Highlights - N/A';

const Card1 = ({ data, link, handleArrowClick }) => {
  const {hours = HOURS, otherHighlights = OTHER_HIGHLIGHTS, tapHighlights = TAP_HIGHLIGHTS} = data;

  return (
    <Card completion={100} style={{ width: '100%', minHeight: 555 }}>
      <Space size={10} />
      <Grid container justify="center">
        <img src="/images/upland.png" alt="card" />
      </Grid>
      <Space size={10} />
      <div style={{ padding: 15 }}>
        <Headding as="h5" fontSize={16} bold title={data.breweryLocationName} />
        <Space size={5} />
        <Headding as="p" fontSize={15} title={data.streetAddress} />

        <Space size={25} />
        <Headding as="h5" fontSize={16} bold title="Hours" />
        <Space size={5} />
        <Headding as="p" fontSize={15} title={hours} />

        <Space size={25} />
        <Headding as="h5" fontSize={16} bold title="Tap Highlights" />
        <Space size={5} />
        <Headding as="p" fontSize={15}>
          {tapHighlights}
      </Headding>

        <Space size={25} />
        <Headding as="h5" fontSize={16} bold title="Other Highlights" />
        <Space size={5} />
        <Headding as="p" fontSize={15}>
          {otherHighlights}
      </Headding>
      </div>
      <Space size={20} />
      <Grid container justify="center">
        <Link additionalClassName="edit-location-button" size="small" component={Button} bold rounded to={link}>
          Edit Location
      </Link>
      </Grid>
      <Space size={15} />
      <div className="card--share" onClick={() => handleArrowClick(data.breweryLocationName)}>
        <img src={UndoIcon} alt="share" />
      </div>
    </Card>
  );
};

const Card2 = ({ data, handleArrowClick }) => (
  <Card isEven completion={70} style={{ minHeight: 555 }}>
    <div style={{ padding: '0 10px' }}>
      <Space size={10} />
      <Headding bold as="h5" title="Known For" />
      <Space size={20} />
      <Grid container justify="space-between" alignItems="center" spacing={4}>
        <Grid item>
          <img style={imgStyle} src="/images/Image-35.png" alt="card" />
          <Headding as="h5" fontSize={14} bold title="Nap in Hammock" />
          <Headding as="p" fontSize={11}>
            Style
          </Headding>
          <Headding as="p" fontSize={11}>
            Style
          </Headding>
        </Grid>
        <Grid item>
          <img style={imgStyle} src="/images/Image-36.png" alt="card" />
          <Headding as="h5" fontSize={14} bold title="Nap in Hammock" />
          <Headding as="p" fontSize={11}>
            Style
          </Headding>
          <Headding as="p" fontSize={11}>
            Style
          </Headding>
        </Grid>
        <Grid item>
          <img style={imgStyle} src="/images/Image-37.png" alt="card" />
          <Headding as="h5" fontSize={14} bold title="Nap in Hammock" />
          <Headding as="p" fontSize={11}>
            Style
          </Headding>
          <Headding as="p" fontSize={11}>
            Style
          </Headding>
        </Grid>
        <Grid item>
          <img style={imgStyle} src="/images/Image-35.png" alt="card" />
          <Headding as="h5" fontSize={14} bold title="Nap in Hammock" />
          <Headding as="p" fontSize={11}>
            Style
          </Headding>
          <Headding as="p" fontSize={11}>
            Style
          </Headding>
        </Grid>
        <Grid item>
          <img style={imgStyle} src="/images/Image-36.png" alt="card" />
          <Headding as="h5" fontSize={14} bold title="Nap in Hammock" />
          <Headding as="p" fontSize={11}>
            Style
          </Headding>
          <Headding as="p" fontSize={11}>
            Style
          </Headding>
        </Grid>
        <Grid item>
          <img style={imgStyle} src="/images/Image-37.png" alt="card" />
          <Headding as="h5" fontSize={14} bold title="Nap in Hammock" />
          <Headding as="p" fontSize={11}>
            Style
          </Headding>
          <Headding as="p" fontSize={11}>
            Style
          </Headding>
        </Grid>
      </Grid>
    </div>
    <Space size={40} />
    <div className="card--share" onClick={() => handleArrowClick(data.breweryLocationName)}>
      <img src={UndoIcon} alt="share" />
    </div>
  </Card>
);

export { Card1, Card2 };
