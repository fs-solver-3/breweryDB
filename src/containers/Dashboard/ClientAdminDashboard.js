import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import SearchBar from 'components/atoms/SearchBar';
import Space from 'components/atoms/Space';
import Headding from 'components/atoms/Headding';
import Button from 'components/atoms/Button';
import Table from 'components/atoms/Table';

const ClientAdminDashboard = ({}) => {
  return (
    <div className="bdb-login">
      <div className="bdb-login--box">
        <img src="/images/breweryDBLogo.png" alt="breweryDBLogo" />
        <Space size={30} />
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <SearchBar />
          </Grid>
          <Grid item xs={6}>
            <Button seafoamBlue size="large">
              Add Brewery
            </Button>
          </Grid>
        </Grid>
        <Space size={30} />

        {/* <Table headers={['New', 'Product', 'Brewery', 'Style', 'ABV', 'Availability', 'Completion %']}>
          {[].map((row, i) => (
            <tr key={i}>
              <td>{i % 2 === 0 && <img src="/images/RedStar.png" alt="red-star" />}</td>
              <td>{row.productName}</td>
              <td>{row.brewery}</td>
              <td>{row.productStyle}</td>
              <td>{row.ABV}</td>
              <td>{row.availability ? row.availability : '-'}</td>
              <td>
                <span style={{ margin: '0 15px' }}>{row.IBU ? row.IBU : '-'}</span>
                <Link
                  to={{
                    pathname: `/products/edit/${row.productID}`,
                    state: row,
                  }}
                  component={Button}
                  seafoamBlue
                  size="xsmall"
                  bold>
                  <img src="./images/editLocation.png" className="edit-location-icon1" alt="" />
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </Table> */}

        <Space size={25} />
        <div className="text-center">
          <Headding as="h5" title="Need Assistance? 800-257-6898 | support@brewlogix.com" />
          <Space size={5} />
          <Headding as="h5" title="©2020 BrewLogix LLC. All Rights Reserved." />
        </div>
      </div>
    </div>
  );
};

ClientAdminDashboard.propTypes = {};

export default ClientAdminDashboard;
