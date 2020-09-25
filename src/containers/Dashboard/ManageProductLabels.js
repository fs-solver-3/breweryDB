import React, { useState } from 'react';
import { Modal } from '@material-ui/core';
import Headding from '../../components/atoms/Headding';
import Space from '../../components/atoms/Space';
import Button from '../../components/atoms/Button';

import './style.css';
import Select from '../../components/atoms/Select';

export function ManageProductLabels(props) {
  const { isOpen, onClose } = props;

  const [selectedType, updateSelectedType] = useState('11');

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="upload-images-modal product-labels-modal">
        <span onClick={onClose} className="modal-close-button">
          <img src="./images/close.png" alt="" className="close-icon" />
        </span>
        {/* <div className="left-dropdown"> */}
        {/*  A-Z by Products */}
        {/*  <img className="dropdown-icon" src="./images/dropdown.png" alt="ddn" /> */}
        {/* </div> */}
        <Select
          styles={{
            control: (base, state) => ({
              ...base,
              borderColor: state.isFocused ? 'transparent' : 'transparent',
              boxShadow: state.isFocused ? null : null,
              '&:hover': {
                borderColor: state.isFocused ? 'transparent' : 'transparent',
              },
            }),
            menu: (base) => ({
              ...base,
              borderRadius: 0,
              marginTop: 0,
            }),
            menuList: (base) => ({
              ...base,
              padding: 0,
            }),
            option: (base, state) => ({
              ...base,
              background: 'white',
              color: '#003b71',
              cursor: 'pointer',
              fontWeight: '400',
              '&:hover': {
                background: state.isFocused ? '#e9f1f8' : '#e9f1f8',
              },
            }),
          }}
          defaultValue={{ label: 'A-Z by Products' }}
          className="left-dropdown"
          label=""
          placeholder="A-Z by Products"
          options={[{ label: 'A-Z by Products' }, { label: 'Z-A by Products' }, { label: 'Last modified' }]}
        />

        <Headding
          style={{
            padding: '25px',
            fontWeight: 'bold',
          }}
          as="h4"
          align="center"
        >
          Manage Product Labels
        </Headding>
        <div className="manage-logo-container">
          <div className="left-logo-container">
            <div className="left-label-list-container">
              {[1, 2, 3, 4].map((x) => (
                <div className="label-row-container">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      onClick={() => updateSelectedType(`${i}${x}`)}
                      className={`product-label-image-container ${
                        selectedType === `${i}${x}` && 'logo-type-selected'
                      }`}
                    >
                      {i === 1 && x === 1 ? (
                        <img src="./images/defaultLogo.png" alt="defLogo" className="product-label-image" />
                      ) : (
                        <div className="product-label-image empty-image" />
                      )}
                      <Space size={10} />
                      <Headding
                        style={{
                          fontWeight: 'bold',
                        }}
                        as="p"
                      >
                        Product Name
                      </Headding>
                    </div>
                  ))}
                </div>
              ))}
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
                  <img src="./images/defaultLogo.png" alt="default-logo" className="logo-default" />
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
