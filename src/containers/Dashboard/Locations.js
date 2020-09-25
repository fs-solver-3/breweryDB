import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Widget from 'components/atoms/Widget';
import Space from 'components/atoms/Space';
import Button from 'components/atoms/Button';
import { Grid, Popover, CircularProgress } from '@material-ui/core';
import SearchBar from 'components/atoms/SearchBar';
import Table from 'components/atoms/Table';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { locationsList } from 'redux/locations/actionCreators';

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
  facilityType: {
    width: '85%',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  noLocations: {
    textAlign: 'center',
  },
}));

const Locations = ({ userDetails, fetching, locationsList, locations, isFetching }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortingOrder, setSortingOrder] = useState([false, false, false, false, false, false]);
  const facilityTypeRef = useRef(null);
  useEffect(() => {
    if (!locations.hasOwnProperty('data') && !fetching) {
      let data = {
        lastKnowKey: null,
        limit: null,
        entity: 'BREWERY',
        type: 'LOCATION',
        filter: 'breweryName = :v10 ',
        filterValue: {
          ':v10': userDetails.breweryName,
        },
      };
      locationsList(data);
    }
    // if (!locations.hasOwnProperty('data') && !fetching) {
    //   locationsList({ breweryId: userDetails.breweryId });
    // }
  }, [fetching]);

  const handlePopoverOpen = event => {
    // Todo check text width and then add popover accordingly
    // if(facilityTypeRef && facilityTypeRef.current.offsetWidth<facilityTypeRef && facilityTypeRef.current.offsetParent.clientWidth){
    setAnchorEl(event.currentTarget);
    // }
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const renderLocations = () => {
    if (locations.hasOwnProperty('data')) {
      return locations.data.Items.slice(0, 4);
    }
    return [];
  };

  useEffect(() => {
    if (!isFetching) {
      setData(renderLocations());
      setFilteredData(renderLocations());
    }
  }, [isFetching]);

  const handleSearch = event => {
    const { value } = event.target;
    setFilteredData(
      data.filter(
        item =>
          item.breweryLocationName.toLowerCase().includes(value.toLowerCase()) ||
          item.city.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  const open = Boolean(anchorEl);

  const handleHeaderClick = (heading, index) => {
    setSortingOrder(
      sortingOrder.map((order, i) => {
        if (i === index) {
          return !order;
        } else {
          return order;
        }
      }),
    );
    const order = sortingOrder.find((item, i) => i === index);
    if (index === 0 || index === 4 || index === 5) {
      let data = [...filteredData];
      data.sort((a, b) => {
        let fa =
            index === 0
              ? a.breweryLocationName.toLowerCase()
              : index === 4
              ? a.city.toLowerCase()
              : index === 5
              ? a.stateProvinceRegion.toLowerCase()
              : null,
          fb =
            index === 0
              ? b.breweryLocationName.toLowerCase()
              : index === 4
              ? b.city.toLowerCase()
              : index === 5
              ? b.stateProvinceRegion.toLowerCase()
              : null;
        if (fa < fb) {
          return order ? -1 : 1;
        }
        if (fa > fb) {
          return order ? 1 : -1;
        }
        return 0;
      });
      setFilteredData(data);
    }
  };
  return (
    <Widget title="Your Locations">
      <Space size={10} />
      <Grid container justify="flex-end">
        {/* <Button size="large" logixBlue bold>Show more Locations</Button> */}
        <SearchBar onChange={handleSearch} />
      </Grid>
      <Space size={20} />
      {isFetching ? (
        <CircularProgress />
      ) : (
        <Table
          headers={[
            'Location Name',
            'Facility Type',
            'Operation Satus',
            'Address',
            'City',
            'State/Region',
            'Completion %',
          ]}
          onHeaderClick={(heading, index) => handleHeaderClick(heading, index)}>
          {filteredData.length > 0 ? (
            filteredData.map((row, i) => (
              <tr key={i}>
                <td>{row.breweryLocationName}</td>
                <td onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
                  <p className={classes.facilityType} ref={facilityTypeRef}>
                    {row.locationFacilityType}
                  </p>
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
                    disableRestoreFocus>
                    {row.locationFacilityType}
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
                </td>
                <td>{row.isProductionFacilityOpentoPublic}</td>
                <td>{row.streetAddress}</td>
                <td>{row.city}</td>
                <td>{row.stateProvinceRegion}</td>
                <td>
                  {/* <span style={{ margin: '0 15px' }}>100%</span> */}
                  {i % 2 === 0 ? (
                    <Link to="/locations/edit" component={Button} size="xsmall" bold>
                      Continue Editing
                    </Link>
                  ) : (
                    <Link to="/locations/edit" component={Button} seafoamBlue size="xsmall" bold>
                      <img src="./images/editLocation.png" className="edit-location-icon1" />
                      Edit
                    </Link>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <div className={classes.noLocations}>No locations found</div>
          )}
        </Table>
      )}

      <Space size={30} />
      <Grid container justify="space-around">
        <Link to="/locations" component={Button} size="large" seafoamBlue bold>
          View All Locations
        </Link>
        <Link to="/locations/add" component={Button} size="large" bold>
          Add a Location
        </Link>
      </Grid>
    </Widget>
  );
};

const mapStateToProps = ({ locations, userProfile }) => ({
  userDetails: userProfile.userDetails,
  fetching: userProfile.fetching,
  locations: locations.location,
  isFetching: locations.fetching,
});

export default connect(mapStateToProps, { locationsList })(Locations);
