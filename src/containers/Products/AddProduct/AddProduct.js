import React, { useState, useEffect } from 'react';
import ContentTemplate from 'components/molecules/ContentTemplate';
import Button from 'components/atoms/Button';
import { Grid } from '@material-ui/core';
import Space from 'components/atoms/Space';
import HeadsLogo from 'components/molecules/HeadsLogo';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { callAPI } from 'helper/apiUtils';
import ProductHighlights from '../components/ProductHighlights';
import TastingNotes from '../components/TastingNotes';
import ProductDescription from '../components/ProductDescription';
import NutritionFacts from '../components/NutritionFacts';
import Card from '../components/Card';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddProduct = props => {
  const initialState = {
    productID: '',
    productStyle: 'abc',
    breweryID: props.userDetails && props.userDetails.breweryId,
    brewery: props.userDetails && props.userDetails.breweryName,
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
    glasswares: [],
    productLabelImagePath: '',
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
  const [ColorNameValue, SetColorNameValue] = useState();
  const [ColorCode, SetColorCode] = useState();
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChange = event => {
    const data = {
      [event.target.name]: event.target.value,
    };
    const productDetailsTemp = { ...productDetails, ...data };
    setProductDetails(productDetailsTemp);
  };

  const handleSave = async () => {
    callAPI('/digi-bpl/product', {}, 'POST', productDetails).then(res => {
      if (res.data && !res.data.hasOwnProperty('message')) {
        setProductDetails(initialState);
        setOpen(true);
        setTimeout(() => {
          props.history.push('/products');
        }, 700);
      }
    });
  };

  return (
    <ContentTemplate title="Products">
      <HeadsLogo logo="/images/BreweryDB_PromoteProducts.png" title="Your Product" />
      <Grid container spacing={4}>
        <Grid item xs={9}>
          <ProductHighlights onChange={handleChange} productDetails={productDetails} />
          <Space size={20} />
          <TastingNotes onChange={handleChange} productDetails={productDetails} />
          <Space size={20} />
          <ProductDescription onChange={handleChange}             
            ColorCode={(value) => SetColorCode(value)}
            ColorName={(value) => SetColorNameValue(value)}
            productDetails={productDetails}
          />
          <Space size={20} />
          <NutritionFacts onChange={handleChange} />
          <Space size={20} />
          <Grid container justify="space-between">
            <Button onClick={() => props.history.push('/products')} seafoamBlue size="large">
              Exit
            </Button>
            <Button onClick={handleSave} size="large">
              Save
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Card hideCheckbox productDetails={productDetails} ColorNameValue={ColorNameValue} ColorCode={ColorCode}/>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Product Added Successfully!
        </Alert>
      </Snackbar>
    </ContentTemplate>
  );
};

export default AddProduct;
