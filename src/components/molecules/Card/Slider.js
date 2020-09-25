import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import BeerIcon from './assets/beerSlider.svg';

const useStyles = makeStyles(() => ({
  root: {
    width: 220,
  },
}));

const marks = [
  {
    value: 0,
    label: 'Low-to-no',
  },
  {
    value: 25,
    label: 'Mild',
  },
  {
    value: 50,
    label: 'Noticeable',
  },
  {
    value: 75,
    label: 'Decisive',
  },
  {
    value: 100,
    label: 'Powerful',
  },
];

const BeerSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 35,
    width: 35,
    backgroundImage: `url(${BeerIcon})`,
    backgroundPosition: 'center',
    backgroundColor: '#fff',
    borderRadius: '50%',
    marginTop: -11,
    marginLeft: -12,
    boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.16)',
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: 'transparent',
  },
  rail: {
    height: 30,
    borderRadius: 4,
    opacity: 1,
    backgroundColor: 'transparent',
  },
})(Slider);

const CardSlider = ({perceivedBitterness}) => {
  const perceivedBitternessObject = marks.find(
    (item) => item.label === perceivedBitterness,
  );
  let perceivedBitternessValue = 0;
  if (perceivedBitternessObject) {
    perceivedBitternessValue = perceivedBitternessObject.value;
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BeerSlider defaultValue={25} aria-labelledby="discrete-slider-always" step={25} 
       value={perceivedBitternessValue}
      />
    </div>
  );
};

export default CardSlider;
