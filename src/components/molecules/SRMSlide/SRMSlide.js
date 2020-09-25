import React from 'react';
import { Slider } from '@material-ui/core';
import Headding from 'components/atoms/Headding';

const SRMSlide = ({ defaultValue, onChange}) => {
  const [value, setValue] = React.useState(0);


  return (
    <div className="bdb-SRMSlide">
      <div>
        <Headding as="h5" bold title="SRM" />
        <div>
          <input value={value} />
          <p>Slide the circle or enter a number</p>
        </div>
      </div>
      <Slider
        value={typeof value === 'number' ? value : 0}
        onChange={(e, newValue) => {setValue(newValue);onChange(newValue)}}
        aria-labelledby="SRMSlide"
        min={1}
        step={1}
        max={40}
        defaultValue={1}
        valueLabelDisplay="off"
      />
    </div>
  );
};

export default SRMSlide;
