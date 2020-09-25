import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { callAPI } from 'helper/apiUtils';
import ContentTemplate from 'components/molecules/ContentTemplate';
import Breadcumb from 'components/atoms/Breadcumb';
import Widget from 'components/atoms/Widget';
import Headding from 'components/atoms/Headding';
import Button from 'components/atoms/Button';
import { Grid } from '@material-ui/core';
import Space from 'components/atoms/Space';

import ProductHighlights from '../components/ProductHighlights';
import TastingNotes from '../components/TastingNotes';
import ProductDescription from '../components/ProductDescription';
import NutritionFacts from '../components/NutritionFacts';
import Card from '../components/Card';

import '../style.css';
import LowerCard from '../components/LowerCard';

const links = [
  {
    label: 'Dashboard',
    link: '/',
  },
  {
    label: 'All Products',
    link: '/products',
  },
  {
    label: 'A Sip of Sunshine',
    link: '/products/edit',
  },
];

const EditProduct = ({ products }) => {
  const { id } = useParams();

  const initialState = {
    productID: 'P1',
    productStyle: 'abc',
    breweryID: 'B00001',
    brewery: 'xyz',
    productName: '',
    density: 12,
    isNew: '',
    styleDescription: 'Test product',
    ABV: '',
    IBU: '',
    perceivedBitterness: 'Low-to-no',
    SRM: '30',
    productDescription: '',
    tastingNotes: '',
    primaryFlavorNotes: [],
    secondaryFlavorNotes: [],
    availability: 'Year Round',
    ingredients: 'test',
    foodPairings: [],
    isCertifiedOrganic: '',
    isglutenFree: '',
    isnonAlcoholic: 'yes',
    allergyWarnings: [],
    servingTemperature: '',
    glasswares: [{ glassware: 'Flute' }],
    productLabelImagePath: 's3:\\image.jpg',
    nutritionalServingSize: '',
    calories: '',
    Fat: 23,
    SaturatedFat: '23',
    TransFat: '45',
    Cholesterol: 'test',
    Sodium: '',
    Carbohydrates: '',
    DietaryFiber: 'tesr',
    Sugars: '',
    Protein: '',
    probiotics: '',
    hops: [],
    malt: [],
    yeast: [],
    adjuncts: 'adjuncts',
    originalGravity: 'gravity',
    isCollaboration: 'yes',
    collaborationPartners: 'na',
    releaseDate: 'tesrt',
    productCompletionPercent: '67',
    promoteYourProductsNotes: 'na',
    customStyleName: '',
  };

  const [productDetails, setProductDetails] = useState(initialState);

  useEffect(() => {
    if (products.hasOwnProperty('data') && products.data.hasOwnProperty('Items')) {
      const item = products.data.Items.find(item => item.productID === id);
      setProductDetails({ ...productDetails, ...item });
    }
  }, []);

  const handleChange = event => {
    const data = {
      [event.target.name]: event.target.value,
    };
    const productDetailsTemp = { ...productDetails, ...data };
    setProductDetails(productDetailsTemp);
  };

  const handleSave = async () => {
    const response = await callAPI('/digi-update-product', {}, 'PUT', productDetails);
    if (response && response.status === 200) {
      console.log(response);
    }
  };

  return (
    <ContentTemplate title="Products">
      <Breadcumb links={links} />
      <Widget>
        <Headding as="h3" bold title={`${productDetails.productName}, ${productDetails.productStyle}`} />
        <Space size={15} />
        <Grid container spacing={4}>
          <Grid item xs={9}>
            <Widget title={productDetails.productName}>
              <ProductHighlights edit onChange={handleChange} productDetails={productDetails} />
              <Space size={20} />
              <TastingNotes edit onChange={handleChange} productDetails={productDetails} />
              <Space size={20} />
              <ProductDescription onChange={handleChange} productDetails={productDetails} />
              <Space size={20} />
              <NutritionFacts onChange={handleChange} productDetails={productDetails} />
              <Space size={20} />
              <Grid container justify="center">
                {/* <Link
                  to="/products"
                  component={Button}
                  additionalClassName="save-exit-product-button"
                  size="large"
                  >
                  Save & Exit
                </Link> */}
                <Button additionalClassName="save-exit-product-button" size="large" onClick={handleSave}>
                  {' '}
                  Save & Exit
                </Button>
              </Grid>
            </Widget>
          </Grid>
          <Grid item xs={3}>
            <Card isProductPage hideCheckbox productDetails={productDetails} />
            <Space size={1300} />
            <LowerCard isProductPage hideCheckbox />
          </Grid>
        </Grid>
      </Widget>
    </ContentTemplate>
  );
};

const mapStateToProps = ({ products }) => ({
  products: products.product,
  isFetching: products.fetching,
});

export default connect(mapStateToProps)(EditProduct);
