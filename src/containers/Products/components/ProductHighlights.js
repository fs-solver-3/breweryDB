import React, { useState ,useEffect} from 'react';
import { Grid } from '@material-ui/core';

import Widget from 'components/atoms/Widget';
import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';
import Input from 'components/atoms/Input';
import Select from 'components/atoms/Select';
import UploadImages from 'components/molecules/UploadImages';
import SRMSlide from 'components/molecules/SRMSlide';
import { ImageUploadModal } from '../../../components/molecules/ImageUploadModal/ImageUploadModal';
import axios from 'axios';

const ProductHighlights = ({ edit, onChange, productDetails }) => {
  const [brewersAssociationStyle, setBrewersAssociationStyle] = useState([]);
  const URL = 'https://be5v9uz8x9.execute-api.us-east-2.amazonaws.com/Dev';
  const Headers = { 'x-api-key': '9c5lLsXsjaazbX5cc8Gb53jvurStCIUhaBc2Wbwc' };
  const [imageModal, toggleImageModal] = useState(false);
  const [files, saveUploads] = useState([]);

  useEffect(() => {
    const URL = 'https://be5v9uz8x9.execute-api.us-east-2.amazonaws.com/Dev';
    const Headers = { 'x-api-key': '9c5lLsXsjaazbX5cc8Gb53jvurStCIUhaBc2Wbwc' };

    const fetchData = async () => {
      axios({
        headers: Headers,
        method: 'get',
        url: `${URL}/digi-update-style`,
      })
        .then((response) => {
          const optionData = response.data.map((item) => ({
            label: item.style,
            value: item.style,
          }));
          setBrewersAssociationStyle(optionData);
        })
        .catch((error) => error);
    };
    fetchData();
  }, []);

  const handleUpload = filesData => {
    const imagePath = window.URL.createObjectURL(filesData[0])
    const file = filesData[0];
    saveUploads(filesData);
    axios({
      headers: Headers,
      method: 'get',
      url: `${URL}/digi-image-handler/product/location/${file.name}`,
    })
      .then((res) => {
        axios.put(res.data.posturl, file);
        const event = {
          target: {
            name:'productLabelImagePath',
            value: res.data.geturl,
          },
        };
        onChange(event);
      })
      .catch((error) => error);
  };

  const handleChange = name => value => {
    const event = {
      target: {
        name,
        value: value.toLowerCase(),
      },
    };
    onChange(event);
  };

  const handleSliderChange = name => value => {
    const event = {
      target: {
        name,
        value,
      },
    };
    onChange(event);
  };

  const handleChangeMultiple = (name, value = null, data) => {
    const tempData = [];
    data.map((item, i) => {
      const temp = {
        [value]: item.label,
      };
      tempData.push(temp);
    });

    const event = {
      target: {
        name,
        value: tempData,
      },
    };
    onChange(event);
  };

  return (
    <Widget>
      <Grid container spacing={15} className="item-container">
        <Headding as="h3" bold title="Product Highlights" />
        <Space size={20} />
        <Grid container spacing={4} style={{ marginLeft: 20, marginTop: 15 }}>
          <Grid item xs={6}>
            <Input
              defaultValue={edit ? productDetails.productName : ''}
              name="productName"
              onChange={onChange}
              on
              label="Product Name"
              placeholder="Enter Product Name"
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              defaultValue={edit && { label: 'Yes' }}
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ]}
              label="Is This a New Product?"
              placeholder="Select"
              onChange={handleChange('isNew')}
            />
          </Grid>
          <Grid item xs={2}>
            <Input
              defaultValue={edit && productDetails.ABV}
              label="ABV"
              name="ABV"
              onChange={onChange}
              placeholder="00.00%"
            />
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={2}>
            <Input
              defaultValue={edit && productDetails.IBU}
              label="IBU"
              name="IBU"
              onChange={onChange}
              placeholder="000"
            />
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={6}>
            <Select
              defaultValue={edit && { label: 'Year Round' }}
              options={[
                { label: 'Year Round', value: 'Year Round' },
                { label: 'Seasonal, or Limited', value: 'Seasonal, or Limited' },
                { label: 'Archived (for Now)', value: 'Archived (for Now)' },
              ]}
              label="Availability"
              onChange={handleChange('availability')}
            />
          </Grid>
          <Grid item xs={6}>
            {/* <Input label="SRM" /> */}

            <SRMSlide onChange={handleSliderChange('SRM')} defaultValue={edit ? productDetails.SRM : 0} />
          </Grid>
          <Grid item xs={6}>
            <Select
              defaultValue={edit && { label: 'Yes' }}
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ]}
              label="Gluten Free?"
              onChange={handleChange('isglutenFree')}
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              defaultValue={edit && { label: productDetails.isCertifiedOrganic }}
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ]}
              label="Certified Organic?"
              onChange={handleChange('isCertifiedOrganic')}
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              defaultValue={edit && { label: 'Yes' }}
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ]}
              label="Non-Alcoholic?"
              onChange={handleChange('isnonAlcoholic')}
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              defaultValue={edit && { label: 'Nuts' }}
              isMulti
              options={[
                { label: 'Dairy', value: 'Dairy' },
                { label: 'Nuts', value: 'Nuts' },
                { label: 'Eggs', value: 'Eggs' },
                { label: 'None', value: 'None' },
              ]}
              label="Allergy Warnings"
              onChange={(val, data) => handleChangeMultiple('allergyWarnings', 'allergyNames', data)}
            />
          </Grid>
        </Grid>

        <Headding as="h3" bold title="Product Label" style={{ marginTop: 25 }} />
        <Grid container style={{ marginLeft: 30 }}>
          <Grid item xs={12}>
            <UploadImages handleUploadImage={() => toggleImageModal(true)} productDetails={productDetails}/>
          </Grid>
          <Grid item xs={12}>
            {files.map((file, i) => (
              <div className="files-uploaded" key={i}>
                <img src="./images/tick.png" alt="tick" className="tick-icon" />
                <p>{file.name}</p>
              </div>
            ))}
          </Grid>
        </Grid>

        <Space size={30} />
        <Headding bold as="h3" title="Official Brewers Association Style *" style={{ marginTop: 25 }} />
        <Space size={15} />
        <Grid container spacing={4} style={{ marginLeft: 20, marginTop: 10, display: 'block' }}>
          <Grid item xs={12} style={{ width: 500 }}>
            <Select
              options={brewersAssociationStyle}
              // defaultValue={edit && { label: 'American-Style Amber (Low Calorie) Lager' }}
              // options={[
              //   {
              //     label: 'American-Style Amber (Low Calorie) Lager',
              //     value: 'American-Style Amber (Low Calorie) Lager',
              //   },
              //   { label: 'American-Style Amber Lager', value: 'American-Style Amber Lager' },
              //   { label: 'American-Style Amber/Red Ale', value: 'American-Style Amber/Red Ale' },
              //   { label: 'American-Style Barley Wine Ale', value: 'American-Style Barley Wine Ale' },
              //   { label: 'American-Style Black Ale', value: 'American-Style Black Ale' },
              // ]}
              label="Type of Select Style"
              onChange={handleChange('productStyle')}
            />
          </Grid>
          <Grid item xs={12} style={{ width: 500 }}>
            <Input
              label="Custom Style Name (optional)"
              name="customStyleName"
              onChange={onChange}
              placeholder="Enter Custom Style"
            />
          </Grid>
        </Grid>
      </Grid>
      <ImageUploadModal
        isOpen={imageModal}
        onClose={() => toggleImageModal(false)}
        onUpload={handleUpload}
        title="Upload Product Label"
      />
    </Widget>
  );
};

export default ProductHighlights;
