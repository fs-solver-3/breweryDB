import React from 'react';
import PropTypes from 'prop-types';

import Headding from 'components/atoms/Headding';
import Flex from 'components/atoms/Flex';
import Button from 'components/atoms/Button';
import Space from 'components/atoms/Space';

const UploadImage = ({ label, handleUploadImage ,productDetails}) => (
  <div className="bdb-upload-image">
    <Headding bold title={label} />
    <Space size={10} />
    <Flex>
      <div className="bdb-upload-image--board">
       {productDetails && productDetails.productLabelImagePath ? (
          <img
            className="productcard__img--label"
            src={productDetails.productLabelImagePath}
            alt=" "
            style={{
              backgroundColor: 'rgb(233, 241, 248)',
              border: '2px dashed rgb(121, 173, 213)',
              height: '114px',
              width: '111px',
            }}
          />
        ) : (
          <img
            className="productcard__img--label"
            alt=""
            src='/images/sipOfSunshine.jpg'
            style={{
              backgroundColor: 'rgb(233, 241, 248)',
              border: '2px dashed rgb(121, 173, 213)',
              height: '114px',
              width: '111px',
            }}
          />
        )} 
      </div>
      <div>
        <Button additionalClassName="upload-toggle-button" rounded logixBlue onClick={handleUploadImage}>
          Upload Image
        </Button>
        <p>JPG, GIF or PNG</p>
      </div>
    </Flex>
  </div>
);

UploadImage.propTypes = {
  label: PropTypes.string,
};

export default UploadImage;
