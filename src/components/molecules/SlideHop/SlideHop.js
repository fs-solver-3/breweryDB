import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';

const SlideHop = ({ marks ,bitterNessValue}) => (
  <div className="slidehop">
    <Slider defaultValue={0} aria-labelledby="discrete-slider-always" step={25} marks={marks}
    onChange={(e, newValue) => {
      marks.map(
        (item, key) => item.value === newValue
          && bitterNessValue(marks[key].label),
      );
    }}
     />
  </div>
);

SlideHop.propTypes = {
  marks: PropTypes.arrayOf(),
};

export default SlideHop;
