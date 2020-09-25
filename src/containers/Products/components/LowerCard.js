import React from 'react';
import PropTypes from 'prop-types';

import Space from 'components/atoms/Space';
import Headding from 'components/atoms/Headding';
import MCard from 'components/molecules/Card';

import UndoIcon from 'components/molecules/Card/assets/undo.svg';
import { Link } from 'react-router-dom';

const LowerCard = ({ isEven, hideCheckbox, isProductPage }) => (
  <MCard isEven={isEven}>
    <div className="flex">
      <div
        style={{
          paddingLeft: hideCheckbox ? 15 : 0,
        }}
      >
        <Headding bold title="Serving Temperature" />
        <Space size={3} />
        <Headding
          style={{
            fontWeight: '500',
          }}
        >
          Very Cold - (0-4C/32-39F)
        </Headding>
        <Space size={25} />
        <Headding bold title="Recommended Glassware" />
        <Space size={8} />
        <div className="flex card--favorite-brew">
          <div className="glassware-image-div">
            <img className="glassware-image-card" alt="" src="/images/glassware/yardtube.svg" />
            <p>Bread</p>
          </div>
          <div className="glassware-image-div">
            <img className="glassware-image-card" alt="" src="/images/glassware/wine.svg" />
            <p>Gluten Free</p>
          </div>
          <div className="glassware-image-div">
            <img className="glassware-image-card" alt="" src="/images/glassware/tumbler.svg" />
            <p>Gluten Free</p>
          </div>
          <div className="glassware-image-div">
            <img className="glassware-image-card" alt="" src="/images/glassware/thistle.svg" />
            <p>Gluten Free</p>
          </div>
        </div>
        <Space size={30} />
        <Headding bold title="Hops" />
        <Space size={5} />
        <Headding
          style={{
            fontWeight: '500',
          }}
        >
          Wai-iti, Cashmere, Citra Hops
        </Headding>
        <Space size={30} />
        <Headding bold title="Yeasts" />
        <Space size={5} />
        <Headding
          style={{
            fontWeight: '500',
          }}
        >
          Chico Ale Yeast
        </Headding>
        <Space size={30} />
        <Headding bold title="Malt" />
        <Space size={5} />
        <Headding
          style={{
            fontWeight: '500',
          }}
        >
          English Pale Malt
        </Headding>

        <Space size={30} />
        <Headding bold title="Description" />
        <Space size={5} />
        <Headding
          style={{
            fontWeight: '500',
            fontSize: '13px',
          }}
        >
          Juiced in Time is a New England-style IPA that’s absolutely dripping with ripe tropical fruit and bold juicy…
        </Headding>
        <Space size={42} />
        <Link
          to={!isProductPage ? '/products/edit' : '/products'}
          size="large"
          bold
          additionalClassName="add-product-button"
        >
          <div className="card--share reverse-share">
            <img src={UndoIcon} alt="share" />
          </div>
        </Link>
      </div>
    </div>
  </MCard>
);

LowerCard.propTypes = {
  isEven: PropTypes.bool,
  hideCheckbox: PropTypes.bool,
};

export default LowerCard;
