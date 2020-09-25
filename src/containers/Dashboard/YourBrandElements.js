import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import Widget from 'components/atoms/Widget';
import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';
import Button from 'components/atoms/Button';
import { ManageLogos } from './ManageLogos';
import { ManageProductLabels } from './ManageProductLabels';
import { ManageLocationImages } from './ManageLocationImages';

const widgetStyle = {
  width: 447,
  textAlign: 'center',
};

const YourBrandElements = () => {
  const [isManageLogoModalVisible, toggleManageLogo] = useState(false);
  const [isProductLabelModalVisible, toggleProductLabel] = useState(false);
  const [isLocationImagesModalVisible, toggleLocationImages] = useState(false);

  return (
    <div>
      <Widget title="Your Brand Elements">
        <Grid container justify="space-between" alignItems="stretch">
          <Widget style={widgetStyle}>
            <div className="logo-section" />
            <Space size={40} />
            <Headding as="h3" align="center">
              Manage logos here
            </Headding>
            <Space size={40} />
            <Button onClick={() => toggleManageLogo(true)} bold>
              View Assets
            </Button>
          </Widget>

          <Widget style={widgetStyle}>
            <div className="logo-section" />
            <Space size={40} />
            <Headding as="h3" align="center">
              Manage product labels here
            </Headding>
            <Space size={40} />
            <Button onClick={() => toggleProductLabel(true)} bold>
              View Assets
            </Button>
          </Widget>

          <Widget style={widgetStyle}>
            <div className="logo-section" />
            <Space size={40} />
            <Headding as="h3" align="center">
              Manage location images here
            </Headding>
            <Space size={40} />
            <Button bold onClick={() => toggleLocationImages(true)}>
              View Assets
            </Button>
          </Widget>

          <ManageLogos isOpen={isManageLogoModalVisible} onClose={() => toggleManageLogo(false)} />
          <ManageProductLabels isOpen={isProductLabelModalVisible} onClose={() => toggleProductLabel(false)} />
          <ManageLocationImages isOpen={isLocationImagesModalVisible} onClose={() => toggleLocationImages(false)} />
        </Grid>
      </Widget>
    </div>
  );
};

export default YourBrandElements;
