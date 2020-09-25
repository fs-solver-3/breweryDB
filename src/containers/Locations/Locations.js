import React, { useEffect, useState } from 'react';
import { Grid, Popover, CircularProgress } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { connect } from 'react-redux';

import ContentTemplate from 'components/molecules/ContentTemplate';
import ViewFilter from 'components/molecules/ViewFilter';
import { locationsList } from 'redux/locations/actionCreators';

import Widget from 'components/atoms/Widget';
import Breadcumb from 'components/atoms/Breadcumb';
import Headding from 'components/atoms/Headding';
import SearchBar from 'components/atoms/SearchBar';
import Space from 'components/atoms/Space';
import Table from 'components/atoms/Table';
import Button from 'components/atoms/Button';
import Select from 'components/atoms/Select';
import { Card1, Card2 } from './components/Card';

const links = [
  {
    label: 'Return to Dashboard',
    link: '/',
  },
];

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

const TableView = ({ data }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortingOrder, setSortingOrder] = useState([false, false, false, false, false, false]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

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

  const open = Boolean(anchorEl);
  return (
    <Table
      headers={['Location Name', 'Facility Type', 'Operation Satus', 'Address', 'City', 'State', 'Completion %']}
      onHeaderClick={(a, b) => handleHeaderClick(a, b)}>
      {filteredData.map((row, i) => (
        <tr key={i}>
          <td>{row.breweryLocationName}</td>
          <td onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
            {row.locationFacilityType}
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
              <p>{row.locationFacilityType}</p>
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
            {/* {i % 2 === 0 ? (
              <Link to="/locations/edit" component={Button} size="xsmall" bold>
                Continue Editing
              </Link>
            ) : (
              <Link to="/locations/edit" component={Button} seafoamBlue size="xsmall" bold>
                <img src="./images/editLocation.png" className="edit-location-icon1" />
                Edit
              </Link>
            )} */}

            <Link to="/locations/edit" component={Button} seafoamBlue size="xsmall" bold>
              <img src="./images/editLocation.png" alt="edit-location" className="edit-location-icon1" />
              Edit
            </Link>
          </td>
        </tr>
      ))}
    </Table>
  );
};

const GridView = ({ data }) => {
  const [showCard2, setShowCard2] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const showSecondCard = item => {
    if (!showCard2.includes(item)) {
      setShowCard2([...showCard2, item]);
    }
  };

  const hideSecondCard = item => {
    const index = showCard2.findIndex(el => el === item);
    let temp = [...showCard2];
    if (index > -1) {
      temp.splice(index, 1);
    }
    setShowCard2(temp);
  };

  return (
    <Grid container spacing={3} direction="row">
      {filteredData.map((r, i) => (
        <Grid item md={3} lg={3} key={i}>
          {/* <Card1 data={r} link={`/product/edit/${r.brewerylocationID}`} handleArrowClick={showSecondCard} /> */}
          {/* {showCard2.includes(r.breweryLocationName) ? <Card2 handleArrowClick={hideSecondCard} /> : null} */}
          {/* {i % 2 === 0 ? ( */}
          {
            showCard2.includes(r.breweryLocationName) ? (
              <div>
                <Card1 data={r} link="/locations/edit" handleArrowClick={showSecondCard} />
                <Card2 data={r} handleArrowClick={hideSecondCard} />
              </div>
            ) : (
              <Card1 data={r} link="/locations/edit" handleArrowClick={showSecondCard} />
            )
            // ) : (
            //   <Card1 data={r} link={`/product/edit/${r.brewerylocationID}`} handleArrowClick={showSecondCard} />
            // )
          }
          {/* {i % 2 === 0 ? <Card1 data={r} /> : <Card2 />} */}
        </Grid>
      ))}
    </Grid>
  );
};
const Locations = ({ locationsList, locations, isFetching, userDetails }) => {
  const [viewType, setViewType] = useState(0);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [selectedFacilityOption, setSelectedFacilityOption] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (!locations.hasOwnProperty('data')) {
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
  }, []);

  const fetchLocationItems = page => {
    if (locations.hasOwnProperty('data')) {
      let allData = locations.data.Items.slice((page - 1) * size, page * size);
      if (selectedFacilityOption !== '') {
        return allData.filter(item => item.locationFacilityType === selectedFacilityOption);
      }
      if (searchText !== '') {
        return allData.filter(
          item =>
            item.breweryLocationName.toLowerCase().includes(searchText.toLowerCase()) ||
            item.city.toLowerCase().includes(searchText.toLowerCase()),
        );
      }
      if (selectedSortOption === 'A - Z') {
        return allData.sort((a, b) => {
          let fa = a.breweryLocationName.toLowerCase(),
            fb = b.breweryLocationName.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
      } else {
        return allData;
      }
    }
    return [];
  };

  const changeView = view => {
    setViewType(view);
    setSize(view === 1 ? 12 : 10);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const totalCount = () => {
    if (locations.hasOwnProperty('data')) {
      return Math.ceil(locations.data.Items.length / size);
    }
    return 0;
  };

  const handleFacilityTypeChange = value => {
    setSelectedFacilityOption(value);
  };

  const handleSortingChange = value => {
    setSelectedSortOption(value);
  };

  const handleSearch = event => {
    const { value } = event.target;
    setSearchText(value);
  };

  return (
    <ContentTemplate title="Locations">
      <Breadcumb links={links} />
      <Widget>
        <Grid container justify="space-between">
          <div>
            <Headding as="h3" bold title="All Locations" />
            <Space size={15} />

            {viewType === 1 && (
              <>
                <Headding as="h4" bold title="Filter & Sort" />

                <Grid container justify="space-between">
                  <span style={{ marginRight: 40, marginLeft: 30, marginTop: 15 }}>
                    <Select
                      label="Facility Type"
                      options={[
                        { value: 'Production Facility', label: 'Production Facility' },
                        { value: 'Tap / Tasting Room', label: 'Tap / Tasting Room' },
                        { value: 'Brewpub', label: 'Brewpub' },
                        { value: 'Restaurant / Brewhouse', label: 'Restaurant / Brewhouse' },
                      ]}
                      value={selectedFacilityOption}
                      onChange={handleFacilityTypeChange}
                    />
                  </span>

                  <span style={{ marginTop: 15 }}>
                    <Select
                      label="Sort By"
                      options={[
                        { value: 'A - Z', label: 'A - Z' },
                        { value: 'Completion %', label: 'Completion %' },
                      ]}
                      value={selectedSortOption}
                      onChange={handleSortingChange}
                    />
                  </span>
                </Grid>
              </>
            )}
          </div>

          <div className="head-view-filters">
            <SearchBar onChange={handleSearch} />
            <Space size={22} />
            <ViewFilter onSetActive={changeView} />
            <Space size={28} />
            {viewType === 0 ? null : (
              <Link to="/locations/add" component={Button} bold>
                Add a Location
              </Link>
            )}
            <Space size={28} />
          </div>
        </Grid>

        {isFetching ? (
          <CircularProgress />
        ) : (
          <>
            {viewType === 0 ? (
              <>
                <TableView data={fetchLocationItems(page)} />
                <br />
                <Pagination count={totalCount()} page={page} onChange={handlePageChange} />
              </>
            ) : (
              <>
                <GridView data={fetchLocationItems(page)} />
                <br />
                <Pagination count={totalCount()} page={page} onChange={handlePageChange} />
              </>
            )}
          </>
        )}

        <Space size={30} />
        <Grid container justify="space-around">
          {viewType === 0 ? (
            <Link to="/locations/add" component={Button} size="large" bold>
              Add a Location
            </Link>
          ) : null}
        </Grid>
      </Widget>
    </ContentTemplate>
  );
};

const mapStateToProps = ({ locations, userProfile }) => ({
  locations: locations.location,
  isFetching: locations.fetching,
  userDetails: userProfile.userDetails,
});

export default connect(mapStateToProps, { locationsList })(Locations);
