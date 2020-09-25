import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'components/atoms/Button';

import Headding from 'components/atoms/Headding';
import { callAPI } from '../../helper/apiUtils';

import './style.css';

const useStyles = makeStyles({
  list: {
    width: 569,
  },
  fullList: {
    width: 'auto',
  },
});

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const AssignLocationDrawer = ({ LocationList, handleAssignLocation, open, onClose, userLocale, selectedUser }) => {
  const [locations, setLocations] = React.useState([]);
  const prevProps = usePrevious({ LocationList, locations });
  useEffect(() => {
    let list = [];
    /**
     * Quick fix added to avoid crash by navigating to View All Team Members from Dashboard
     */
    let areListsEqual = !(prevProps === undefined || prevProps === null);
    if (areListsEqual) {
      areListsEqual = prevProps.LocationList !== LocationList;
    }
    if (LocationList && !prevProps && areListsEqual) {
      // process here
      list = LocationList;
      list.map((item) => {
        item.isAssign = false;
        if (userLocale !== null && selectedUser) {
          userLocale.forEach((assignedLocation) => {
            if (item.breweryLocationName === assignedLocation) {
              item.isAssign = true;
            }
          });
        }
      });

      setLocations(list);
    }
  }, [LocationList]);

  const updateSelectedLocations = index => {
    var list = [...locations];
    list[index].isAssign = true;
    setLocations(list);
  };

  const updateTheAssignedLocationToMember = (e) => {
    //call the api here to update the location
    var filteredRecords = locations.filter(item => {
      return item.isAssign;
    });
    const selectedLocationsName = filteredRecords.map(function (item) {
      if (item.isAssign) return item.breweryLocationName;
    });

    callAPI('/digi-bdbuserprofile', {}, 'POST', {
      email: selectedUser.email,
      breweryLocationName: selectedLocationsName,
    });
    onClose(e);
  };

  const classes = useStyles();
  const list = () => (
    <div className={clsx(classes.list)} role="presentation">
      <div className="drawer-header">
        <div>
          <Headding as="h3" bold title="Assign to Location(s)" />
        </div>
      </div>
      <div>
        {locations &&
          locations.map((res, index) => {
            return (
              <div key={index}>
                <div className="location-list">
                  <div>
                    <Typography className="text-darkblue font-900">{res.breweryLocationName || ''}</Typography>
                    <Typography className="text-darkblue">{res.city || '' + res.streetAddress || ''}</Typography>
                    {/* <Typography className="text-darkblue">{res.stateProvinceRegion || ''}</Typography> */}
                  </div>
                  <div className="flex space-between align-center">
                    {/* {res.stateProvinceRegion === userLocale && <img alt="" src="/images/Group2461.svg" />}
                    {res.stateProvinceRegion !== userLocale && (
                      <img
                        alt=""
                        src="/images/Group2461-add.png"
                        onClick={() => handleAssignLocation(selectedUser, LocationList, index)}
                      />
                    )} */}
                    {res.isAssign && <img alt="" src="/images/Group2461.svg" />}
                    {!res.isAssign && (
                      <img alt="" src="/images/Group2461-add.png" onClick={() => updateSelectedLocations(index)} />
                    )}
                  </div>
                </div>
                <Divider />
              </div>
            );
          })}
      </div>
      <div className="Assign-member">
        <Button onClick={updateTheAssignedLocationToMember} size="xsmall" bold>
          Assign Members to these Locations
        </Button>
      </div>
    </div>
  );
  return (
    <Drawer anchor={'right'} open={open} onClose={onClose}>
      {list('right')}
    </Drawer>
  );
};

export default AssignLocationDrawer;
