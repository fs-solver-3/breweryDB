import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ContentTemplate from 'components/molecules/ContentTemplate';
import ViewFilter from 'components/molecules/ViewFilter';

import Widget from 'components/atoms/Widget';
import Breadcumb from 'components/atoms/Breadcumb';
import Headding from 'components/atoms/Headding';
import SearchBar from 'components/atoms/SearchBar';
import Space from 'components/atoms/Space';
import Table from 'components/atoms/Table';
import Button from 'components/atoms/Button';
import Checkbox from 'components/atoms/Checkbox';
import AssigningLocation from 'components/molecules/AssigningLocation';
import { productsList } from 'redux/products/actionCreators';

import Card from './components/Card';
import Select from '../../components/atoms/Select';

const links = [
  {
    label: 'Return to Dashboard',
    link: '/',
  },
];

const TableView = ({ data }) => (
  <Table headers={['', 'New', 'Product', 'Brewery', 'Style', 'ABV', 'Availability', 'Completion %']}>
    {data.map((row, i) => (
      <tr key={i}>
        <td>
          <Checkbox />
        </td>
        <td>
          <img src="/images/RedStar.png" alt="red-star" />
        </td>
        <td>{row.productName}</td>
        <td>{row.brewery}</td>
        <td>{row.productStyle}</td>
        <td>{row.ABV}</td>
        <td>{row.availability}</td>
        <td>
          <span style={{ margin: '0 15px' }}>{row.IBU}</span>
          <Link to={`/products/edit/${row.productID}`} component={Button} seafoamBlue size="xsmall" bold>
            <img src="./images/editLocation.png" className="edit-location-icon1" />
            Edit
          </Link>
          {/* {i % 2 === 0 ? (
            <Link to="/products/edit" component={Button} size="xsmall" bold>
              Continue Editing
            </Link>
          ) : (
            <Link to="/products/edit" component={Button} seafoamBlue size="xsmall" bold>
              <img src="./images/editLocation.png" className="edit-location-icon1" />
              Edit
            </Link>
          )} */}
        </td>
      </tr>
    ))}
  </Table>
);

const GridView = ({ data }) => (
  <Grid style={{ paddingLeft: '90px' }} container spacing={4}>
    {data.map((item,key) => (
      <Grid key={item.productID} item xl={3} lg={3}>
        <Card productDetails={item} backgroundColorProp={key % 2 === 0 ? '#ffffff':'#e9f1f8'}/>
      </Grid>
    ))}
  </Grid>
);

const Products = ({ products, productsList, isFetching ,userDetails}) => {
  console.log(products,'products');
  console.log(productsList,'productsList')

  const [viewType, setViewType] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [size, setSize] = React.useState(10);

  useEffect(() => {
    if (
      !products.hasOwnProperty('data') ||
      (products.hasOwnProperty('data') && !products.data.hasOwnProperty('Items'))
    ) {
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
      // productsList();
    }
  }, [products.data]);

  const fetchProductItems = page => {
    if (products.hasOwnProperty('data')) {
      return products.data.hasOwnProperty('Items') ? products.data.Items.slice((page - 1) * size, page * size) : [];
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
    if (products.hasOwnProperty('data')) {
      return products.data.hasOwnProperty('Items') ? Math.ceil(products.data.Items.length / size) : 0;
    }
    return 0;
  };

  return (
    <ContentTemplate title="Products">
      <Breadcumb showArrowOnFirstElement links={links} />
      <Widget>
        <Grid container justify="space-between">
          <div className="head-view-left">
            <Headding as="h3" bold title="Product Library" />
            <Space size={22} />
            {viewType !== 0 && (
              <div className="filter-sort-container">
                <Headding as="h4" bold title="Filter & Sort" />
                <Space size={18} />
                <Grid style={{ marginLeft: '15px' }} item container justify="center">
                  <Select
                    name="facilityType"
                    label="Facility Type"
                    options={[
                      { label: 'Production Facility', value: 'Production Facility' },
                      { label: 'Tap/Tasting Room', value: 'Tap/Tasting Room' },
                      { label: 'Brew Pub', value: 'Brew Pub' },
                      { label: 'Restaurant/Brewhouse', value: 'Restaurant/Brewhouse' },
                    ]}
                  />
                  <span className="sort-by-dropdown-cont">
                    <Select
                      name="sortBy"
                      label="Sort By"
                      options={[
                        { label: 'Completion %', value: 'Completion %' },
                        { label: 'New', value: 'New' },
                        { label: 'Availability', value: 'Availability' },
                        { label: 'Style', value: 'Style' },
                      ]}
                    />
                  </span>
                </Grid>
              </div>
            )}
          </div>
          <div className="head-view-filters">
            <SearchBar />
            <Space size={22} />
            <ViewFilter onSetActive={changeView} />
            <Space size={22} />
            {viewType !== 0 && (
              <Grid item container justify="center">
                <Link
                  to="/products/add"
                  onClick={e => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                  component={Button}
                  size="large"
                  bold
                  additionalClassName="add-product-button">
                  Assign Product to Location(s)
                </Link>
                <Link to="/products/add" component={Button} size="large" bold additionalClassName="add-product-button">
                  Add a Product
                </Link>
              </Grid>
            )}
          </div>
        </Grid>

        <Grid container alignItems="center">
          <div style={{ padding: '0 15px' }}>
            <Checkbox />
          </div>
          <AssigningLocation open={open} setOpen={setOpen} />
        </Grid>
        {isFetching ? (
          <CircularProgress />
        ) : (
          <>
            {viewType === 0 ? (
              <>
                <TableView data={fetchProductItems(page)} />
                <br />
                <Pagination count={totalCount()} page={page} onChange={handlePageChange} />
              </>
            ) : (
              <>
                <GridView data={fetchProductItems(page)} />
                <br />
                <Pagination count={totalCount()} page={page} onChange={handlePageChange} />
              </>
            )}
          </>
        )}

        <Space size={30} />
        {viewType === 0 && (
          <Grid container justify="center">
            <Link
              onClick={e => {
                e.preventDefault();
                setOpen(true);
              }}
              to="/products/add"
              component={Button}
              size="large"
              bold
              additionalClassName="add-product-button bottom-assign-button">
              Assign Products to Location(s)
            </Link>
            <Link to="/products/add" component={Button} size="large" bold additionalClassName="add-product-button">
              Add a Product
            </Link>
          </Grid>
        )}
      </Widget>
    </ContentTemplate>
  );
};

const mapStateToProps = ({ products ,userProfile}) => ({
  products: products.product,
  isFetching: products.fetching,
  userDetails: userProfile.userDetails,
});

export default connect(mapStateToProps, { productsList })(Products);
