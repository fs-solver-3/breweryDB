import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

import Checkbox from 'components/atoms/Checkbox';
import Space from 'components/atoms/Space';
import Slider from 'components/molecules/Card/Slider';
import MCard from 'components/molecules/Card';

import BaconIcon from 'components/molecules/Card/assets/Bacon.svg';
import BreadIcon from 'components/molecules/Card/assets/Bread.svg';
import JoshDoeImg from 'components/molecules/Card/assets/Josh_Doe.jpg';
import MaltIcon from 'components/molecules/Card/assets/Malt.svg';
import UndoIcon from 'components/molecules/Card/assets/undo.svg';
import Headding from 'components/atoms/Headding';
import Button from 'components/atoms/Button';
const Card = ({ isEven, userDetails, onClick, checked }) => {
  const assignedLocations = userDetails.assignedLocations;
  return (
    <MCard isEven={isEven}>
      <div className="flex">
        <div>
          <Checkbox greyDesign checked={checked} onClick={onClick} />
        </div>
        <div>
          <Headding bold title={`${userDetails['custom:first_name']} ${userDetails['custom:last_name']}`} />
          <Space size={3} />
          <Headding title={`${userDetails['custom:first_name']} ${userDetails['custom:last_name']}`} />
          <Headding title={userDetails.phone_number} />
          <Space size={16} />
          <Headding bold as="h5" title={userDetails['custom:beer_love']} />
          <Space size={8} />
          <Avatar
            alt={`${userDetails['custom:first_name']} ${userDetails['custom:last_name']}`}
            src={userDetails.picture || JoshDoeImg}
            style={{
              width: 108,
              height: 108,
            }}
          />
          <Space size={10} />
          {!assignedLocations && (
            <Button size="xsmall" bold>
              Pending
            </Button>
          )}
          {assignedLocations && (
            <div className="card--locations">
              <Headding bold title="Locations" />
              <Space size={5} />
              {assignedLocations.map((loc, i) => {
                return <Headding title={loc || ''} />;
              })}
              <Space size={7} />
            </div>
          )}
          <Space size={50} />
          <Headding bold title="Communication Preference" />
          <Space size={15} />
          <div className="card--preference">
            <div>
              <Checkbox checked={userDetails['custom:com_preferences'] === 'email'} readonly={true} />
              <Headding as="p" bold title="Email" />
            </div>
            <div>
              <Checkbox checked={userDetails['custom:com_preferences'] === 'phone'} readonly={true} />
              <Headding as="p" bold title="Phone" />
            </div>
            <div>
              <Checkbox checked={userDetails['custom:com_preferences'] === 'both'} readonly={true} />
              <Headding as="p" bold title="Both" />
            </div>
          </div>
          <Space size={42} />
          <Headding bold title="How Much do you love Beer?" />
          <Space size={10} />
          <Slider />
          <Space size={42} />
          <Headding bold title="Favorite Brew Style" />
          <Space size={5} />
          <div className="flex card--favorite-brew">
            <div>
              <img alt="" src={BreadIcon} />
              <p>Bread</p>
            </div>
            <div>
              <img alt="" src={MaltIcon} />
              <p>Malt</p>
            </div>
            <div>
              <img alt="" src={BaconIcon} />
              <p>Bacon</p>
            </div>
          </div>
          <div className="card--share">
            <img src={UndoIcon} alt="share" />
          </div>
        </div>
      </div>
    </MCard>
  );
};

Card.propTypes = {
  isEven: PropTypes.bool,
};

export default Card;
