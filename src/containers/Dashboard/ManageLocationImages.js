import React, { useState } from 'react';
import { Modal, Popover } from '@material-ui/core';
import Headding from '../../components/atoms/Headding';
import Space from '../../components/atoms/Space';
import Button from '../../components/atoms/Button';

import './style.css';
import Checkbox from '../../components/atoms/Checkbox';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';
import Select from '../../components/atoms/Select';

const useStyles = makeStyles(() => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    // padding: theme.spacing(1),
    boxShadow: 'none',
    backgroundColor: '#003a70',
    color: '#fff',
    width: '211px',
    padding: '20px 15px',
    overflowX: 'visible',
    overflowY: 'visible',
    position: 'relative',
    top: 0,
  },
}));

export function ManageLocationImages(props) {
  const classes = useStyles();

  const { isOpen, onClose } = props;

  const [selectedType, updateSelectedType] = useState(['11']);
  const [selectedLocations, updateLocations] = useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="upload-images-modal location-image-modal">
        <span onClick={onClose} className="modal-close-button">
          <img src="./images/close.png" alt="" className="close-icon" />
        </span>
        {/* <div className="left-dropdown"> */}
        {/*  All Locations */}
        {/*  <img className="dropdown-icon" src="./images/dropdown.png" alt="ddn" /> */}
        {/* </div> */}
        <Select
          defaultValue={{ label: 'All Locations' }}
          className="left-dropdown"
          label=""
          placeholder="A-Z by Products"
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
          options={[{ label: 'All Locations' }, { label: 'Nearby Locations' }, { label: 'Recently Listed' }]}
        />
        <Headding
          style={{
            padding: '25px',
            fontWeight: 'bold',
          }}
          as="h4"
          align="center"
        >
          Manage Location Images
        </Headding>
        <div className="manage-logo-container">
          <div className="left-logo-container location-images-left">
            <div className="left-label-list-container">
              {[1, 2, 3, 4].map((x) => (
                <div className="label-row-container">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      onClick={() => {
                        const data = JSON.parse(JSON.stringify(selectedType));
                        if (data.includes(`${i}${x}`)) {
                          data.splice(data.indexOf(`${i}${x}`), 1);
                        } else {
                          data.push(`${i}${x}`);
                        }
                        updateSelectedType(data);
                      }}
                      className={`product-label-image-container ${
                        selectedType.includes(`${i}${x}`) && 'logo-type-selected'
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
                        Location Images
                      </Headding>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="new-image-button-container">
              <Button size="xsmall" logixBlue additionalClassName="replace-image-button">
                Upload New Image
              </Button>
            </div>
          </div>
          <div className="right-logo-container location-images-right">
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
                <img src="./images/defaultLogo.png" alt="" className="logo-default" />
              </div>
              <div className="logo-details">
                <Headding as="h5">
                  File NameFull Color
                  <br />
                  Logo.png
                </Headding>
                <Space size={20} />
                <Headding as="h5">12/25/20 - 12:59 PM</Headding>
                <Space size={20} />
                <Headding as="h5">
                  1.2 MB
                  <br />
                  512 x 1080 Pixels
                </Headding>
              </div>
            </div>
            <div className="image-cta-button">
              <span>Replace Image</span>
              <span>Delete</span>
            </div>
            <span className="assign-to-location-text">Assign to a Location</span>
            <div className="location-item-list">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <span
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                  className={`location-list-element ${i % 2 === 0 && 'blue-bg-item'} ${
                    selectedLocations.includes(i) && 'item-dark-blue'
                  }`}
                >
                  <span>Upland Brewery Fountain Square </span>
                  <Checkbox
                    field={{
                      onChange: () => {
                        const data = JSON.parse(JSON.stringify(selectedLocations));

                        if (selectedLocations.includes(i)) {
                          data.splice(data.indexOf(i), 1);
                          updateLocations(data);
                        } else {
                          data.push(i);
                          updateLocations(data);
                        }
                      },
                    }}
                  />
                  <Popover
                    id="mouse-over-popover"
                    className={classes.popover}
                    classes={{
                      paper: classes.paper,
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <p>Production Facility Tap/Tasting Room Brewpub Restaurant/Brewhouse.</p>
                    <ArrowDropDownIcon
                      style={{
                        color: '#003a70',
                        position: 'absolute',
                        bottom: -29,
                        left: 15,
                        fontSize: 50,
                      }}
                    />
                  </Popover>
                </span>
              ))}
            </div>
            <div className="assign-button-container">
              <Button size="xsmall" logixBlue additionalClassName="replace-image-button assign-image-button">
                Assign
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
