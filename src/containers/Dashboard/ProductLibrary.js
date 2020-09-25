import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Widget from 'components/atoms/Widget';
import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';
import Button from 'components/atoms/Button';
import { Grid, CircularProgress } from '@material-ui/core';
import SearchBar from 'components/atoms/SearchBar';
import Table from 'components/atoms/Table';
import { productsList } from 'redux/products/actionCreators';
import { sortPlainArrayOfObjects } from 'helper/utility';

const widgetStyle = {
  width: 447,
  textAlign: 'center',
};

const ProductLibrary = ({ userDetails, fetching, productsList, products, isFetching }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentSortBy, setCurrentSortBy] = useState('');

  useEffect(() => {
    if (!fetching) {
      let data = {
        lastKnowKey: null,
        limit: null,
        entity: 'BREWERY',
        type: 'PRODUCT',
        filter: 'brewery = :v10 ',
        filterValue: {
          ':v10': userDetails.breweryName,
        },
      };
      productsList(data);
    }
  }, [fetching, userDetails]);

  const renderProducts = () => {
    if (products.hasOwnProperty('data')) {
      return products.data.hasOwnProperty('Items') ? products.data.Items.slice(0, 4) : [];
    }
    return [];
  };

  useEffect(() => {
    if (!isFetching) {
      setData(renderProducts());
      setFilteredData(renderProducts());
    }
  }, [products, isFetching]);

  const handleSearch = event => {
    const { value } = event.target;

    setFilteredData(data.filter(item => item.productName.toLowerCase().includes(value.toLowerCase())));
  };

  const sortData = (sortBy) => {
    const allowedSorting = {
      ABV: 'ABV',
      Brewery: 'brewery',
      Product: 'productName',
      Style: 'productStyle'
    };

    const sortingKey = allowedSorting[sortBy];

    if (!sortingKey) {
      return;
    }

    if (sortingKey && sortBy === currentSortBy) {
      setFilteredData([...filteredData.reverse()]);
      return;
    }

    setCurrentSortBy(sortBy);
    sortPlainArrayOfObjects(filteredData, sortingKey, setFilteredData);
  };

  return (
    <Widget title="Your Product Library">
      <Space size={10} />
      <Grid container justify="flex-end">
        {/* <Button size="large" logixBlue bold>Show more Products</Button> */}
        <SearchBar onChange={handleSearch} />
      </Grid>
      <Space size={20} />
      {isFetching ? (
        <CircularProgress />
      ) : (
          <Table
            headers={['New', 'Product', 'Brewery', 'Style', 'ABV', 'Availability', 'Completion %']}
            onHeaderClick={sortData}
          >
            {filteredData.map((row, i) => (
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
                  {/* {parseInt(row.IBU, 10) < 100 ? (
                  <Link to="/products/1/edit" component={Button} size="xsmall" bold>
                    Continue Editing
                  </Link>
                ) : (
                  <Link to="/products/add" component={Button} seafoamBlue size="xsmall" bold>
                    <img src="./images/editLocation.png" className="edit-location-icon1" alt="" />
                    Edit
                  </Link>
                )} */}
                </td>
              </tr>
            ))}
          </Table>
        )}

      <Space size={30} />
      <Grid direction="column" container justify="center" alignItems="center">
        <Link to="/products" component={Button} size="large" seafoamBlue bold>
          View All Products
        </Link>
        <Space size={25} />
        <Headding style={{ fontWeight: '500' }} fontSize={36} title="Quick links" />
        <Space size={25} />
      </Grid>

      <Grid container justify="space-around" alignItems="stretch">
        <Widget style={widgetStyle}>
          <img src="/images/group3069.svg" alt="group3069Icon" />
          <Space size={20} />
          <Headding as="h3" align="center">
            Assign <br /> Products to Locations
          </Headding>
          <Space size={40} />
          <Link to="/products" component={Button} bold>
            Assign Products
          </Link>
        </Widget>

        <Widget style={widgetStyle}>
          <img src="/images/group2688.svg" alt="group2688Icon" />
          <Space size={10} />
          <Headding as="h3" align="center">
            Add a Product
          </Headding>
          <Space size={73} />
          <Link to="/products/add" component={Button} bold>
            Add a Product
          </Link>
        </Widget>
      </Grid>
    </Widget>
  );
};

const mapStateToProps = ({ products, userProfile }) => ({
  userDetails: userProfile.userDetails,
  fetching: userProfile.fetching,
  products: products.product,
  isFetching: products.fetching,
});

export default connect(mapStateToProps, { productsList })(ProductLibrary);
