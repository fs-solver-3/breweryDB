import React, { useState } from 'react';
import { Modal } from '@material-ui/core';
import Headding from '../../components/atoms/Headding';
import Space from '../../components/atoms/Space';
import Button from '../../components/atoms/Button';

import './style.css';

export function ManageLogos(props) {
  const { isOpen, onClose } = props;

  const [selectedType, updateSelectedType] = useState('square');

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="upload-images-modal">
        <span onClick={onClose} className="modal-close-button">
          <img src="./images/close.png" alt="" className="close-icon" />
        </span>
        <Headding
          style={{
            padding: '25px',
            fontWeight: 'bold',
          }}
          as="h4"
          align="center"
        >
          Manage Logos
        </Headding>
        <div className="manage-logo-container">
          <div className="left-logo-container">
            <div className="logo-type" onClick={() => updateSelectedType('square')}>
              <Headding
                style={{
                  fontWeight: 'bold',
                }}
                as="h5"
              >
                Square Optimized
              </Headding>
              <Space size={10} />
              <div className={`logo-type-container ${selectedType === 'square' && 'logo-type-selected'}`}>
                <img src="./images/defaultLogo.png" alt="defLogo" className="logo-type-image" />
                <Space size={10} />
                <Headding
                  style={{
                    fontWeight: 'bold',
                  }}
                  as="p"
                >
                  Logo Full Color
                </Headding>
              </div>
            </div>
            <div className="logo-type" onClick={() => updateSelectedType('horizontal')}>
              <Headding
                style={{
                  fontWeight: 'bold',
                }}
                as="h5"
              >
                Horizontal Optimized
              </Headding>
              <Space size={10} />
              <div className={`logo-type-container ${selectedType === 'horizontal' && 'logo-type-selected'}`}>
                <div className="logo-type-image empty-image" />
                <Space size={10} />
                <Headding
                  style={{
                    fontWeight: 'bold',
                  }}
                  as="p"
                >
                  Logo Full Color
                </Headding>
              </div>
            </div>
            <div className="logo-type" onClick={() => updateSelectedType('vertical')}>
              <Headding
                style={{
                  fontWeight: 'bold',
                }}
                as="h5"
              >
                Vertical Optimized
              </Headding>
              <Space size={10} />
              <div className={`logo-type-container ${selectedType === 'vertical' && 'logo-type-selected'}`}>
                <div className="logo-type-image empty-image" />
                ß
                <Space size={10} />
                <Headding
                  style={{
                    fontWeight: 'bold',
                  }}
                  as="p"
                >
                  Logo Full Color
                </Headding>
              </div>
            </div>
          </div>
          <div className="right-logo-container">
            <div>
              <Headding
                style={{
                  fontWeight: 'bold',
                }}
                as="h5"
              >
                Selected Image
              </Headding>
              <Space size={20} />
              <div className="selected-image-details">
                <div className="logo-default-container">
                  <img src="./images/defaultLogo.png" alt={''} className="logo-default" />
                </div>
                <div className="logo-details">
                  <Headding as="h5">
                    File NameFull Color
                    {' '}
                    <br />
                    Logo.png
                  </Headding>
                  <Space size={20} />
                  <Headding as="h5">12/25/20 - 12:59 PM</Headding>
                  <Space size={20} />
                  <Headding as="h5">
                    1.2 MB
                    {' '}
                    <br />
                    512 x 1080 Pixels
                  </Headding>
                </div>
              </div>
            </div>
            <Button size="xsmall" logixBlue additionalClassName="replace-image-button">
              Replace Image
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
