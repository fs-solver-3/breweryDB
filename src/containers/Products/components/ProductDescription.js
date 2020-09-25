import React, { useState, useEffect } from 'react';
import Widget from 'components/atoms/Widget';
import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';
import Textarea from 'components/atoms/Textarea';
import Button from 'components/atoms/Button';
import Glassware from 'components/molecules/Glassware';
import { Grid } from '@material-ui/core';
// import Select from '../../../components/atoms/Select';
import SelectSearchBar from 'components/atoms/SelectSearchBar';

import axios from 'axios';

const ProductDescription = ({ onChange,ColorCode,
  ColorName,productDetails}) => {
  const [yeastData, setYeastData] = useState([]);
  const [filteredYeastData, setFilteredYeastData] = useState([]);
  const [hopData, setHopData] = useState([]);
  const [filteredHopsData, setFilteredHopsData] = useState([]);
  const [maltData, setMaltData] = useState([]);
  const [filteredMaltData, setFilteredMaltData] = useState([]);

  const INITIAL_STATE = {
    yeastName: '',
    maltName: '',
    hopName: '',
  };
  const [state, setState] = useState(INITIAL_STATE);
  const URL = 'https://be5v9uz8x9.execute-api.us-east-2.amazonaws.com/Dev';
  const Headers = {
    'x-api-key': '9c5lLsXsjaazbX5cc8Gb53jvurStCIUhaBc2Wbwc',
    'Content-Type': 'application/json',
  };

  useEffect(() => {
    const fetchData = () => {
      axios({
        headers: Headers,
        method: 'get',
        url: `${URL}/digi-update-yeast`,
      })
        .then((response) => {
          setYeastData(response.data);
        })
        .catch((error) => error);

      axios({
        headers: Headers,
        method: 'get',
        url: `${URL}/digi-update-malt`,
      })
        .then((response) => {
          setMaltData(response.data);
        })
        .catch((error) => error);

      axios({
        headers: Headers,
        method: 'get',
        url: `${URL}/digi-update-hop`,
      })
        .then((response) => {
          setHopData(response.data);
        })
        .catch((error) => error);
    };

    fetchData();
  }, []);

  const handleFilterYeastData = (inputValue) => {
    if (inputValue) {
      const filteredYeastsData = yeastData
        .filter(
          (item) => item.name
            && item.name.toLowerCase().startsWith(inputValue.toLowerCase()),
        )
        .map((itemSearched) => ({
          name: itemSearched.name,
          label: itemSearched.name,
        }));
      setFilteredYeastData(filteredYeastsData);
    }
  };

  const handleFilterHopsData = (inputValue) => {
    if (inputValue) {
      const filteredHopData = hopData
        .filter(
          (item) => item.name
            && item.name.toLowerCase().startsWith(inputValue.toLowerCase()),
        )
        .map((itemSearched) => ({
          name: itemSearched.name,
          label: itemSearched.name,
        }));
      setFilteredHopsData(filteredHopData);
    }
  };

// filters - foopairing,yeast,malt,hops

const handleChangeFilterYeast = (newValue, actionMeta) => {
  if (actionMeta.action === 'clear') {
    const data = [
      {
        label:'',
        value:''
      }
    ]
    handleChangeMultiple('yeast', 'yeastName', data)
  } else if (actionMeta.action === 'create-option') {
    const data = [
      {
        label:newValue.value,
        value:newValue.value
      }
    ]
    handleChangeMultiple('yeast', 'yeastName', data)
  } else if (actionMeta.action === 'select-option') {
    const data = [
      {
        label:newValue.name,
        value:newValue.name
      }
    ]
    handleChangeMultiple('yeast', 'yeastName', data)
  }
};

const handleChangeFilterHop = (newValue, actionMeta) => {
  if (actionMeta.action === 'clear') {
    const data = [
      {
        label:'',
        value:''
      }
    ]
    handleChangeMultiple('hops', 'hopName', data)
  } else if (actionMeta.action === 'create-option') {
    const data = [
      {
        label:newValue.value,
        value:newValue.value
      }
    ]
    handleChangeMultiple('hops', 'hopName', data)
  } else if (actionMeta.action === 'select-option') {
    const data = [
      {
        label:newValue.name,
        value:newValue.name
      }
    ]
    handleChangeMultiple('hops', 'hopName', data)
  }
};

const handleChangeFilterMalt = (newValue, actionMeta) => {
  if (actionMeta.action === 'clear') {
    const data = []
    handleChangeMultiple('malt', 'maltName', data)
  } else if (actionMeta.action === 'create-option') {
    const data = [
      {
        label:newValue.value,
        value:newValue.value
      }
    ]
    handleChangeMultiple('malt', 'maltName', data)
  } else if (actionMeta.action === 'select-option') {
    const data = [
      {
        label:newValue.name,
        value:newValue.name
      }
    ]
    handleChangeMultiple('malt', 'maltName', data)
  }
};

  const handleFilterMaltData = (inputValue) => {
    if (inputValue) {
      const filteredMaltsData = maltData
        .filter(
          (item) => item.name
            && item.name.toLowerCase().startsWith(inputValue.toLowerCase()),
        )
        .map((itemSearched) => ({
          name: itemSearched.name,
          label: itemSearched.name,
        }));
      setFilteredMaltData(filteredMaltsData);
    }
  };

  const handleAddYeasts = () => {
    const productDetailsAll = productDetails;

    axios({
      headers: Headers,
      method: 'post',
      url: `${URL}/digi-update-product`,
      data: productDetailsAll,
    })
      .catch((error) => error);
  };

  const handleAddMalts = () => {
    const productDetailsAll = productDetails;

    axios({
      headers: Headers,
      method: 'post',
      url: `${URL}/digi-update-product`,
      data: productDetailsAll,
    })
      .catch((error) => error);
  };

  const handleAddHops = () => {
    const productDetailsAll = productDetails;

    axios({
      headers: Headers,
      method: 'post',
      url: `${URL}/digi-update-product`,
      data: productDetailsAll,
    })
      .catch((error) => error);
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
  const  SRM  = productDetails && productDetails.SRM;
  return (
    <Widget>
      <div style={{ marginLeft: '10%' }}>
        <Headding as="h3" bold title="Glassware Recommendations" />
        <Space size={10} />
        <Glassware 
        onChange={(data) => handleChangeMultiple('glasswares', 'glassware', data)}
        SRM={SRM}       
        getColorName={(value) => ColorName(value)}
        getColorCode={(value) => ColorCode(value)}
       />
      </div>

      <div className="item-container">
        <Space size={25} />
        <Headding as="h3" bold title="Brewing Details" />
        <Space size={10} />
        <Grid container spacing={4} style={{ marginLeft: 20 }}>
          <Grid item xs={6}>
            <SelectSearchBar
              label="Yeasts"
              placeholder="Enter Name of Yeast "
              name="yeastName"
              onInputChange={handleFilterYeastData}
              onChange={handleChangeFilterYeast}
              options={filteredYeastData}
            />
            {/* <Select
              options={[
                { label: 'Steak', value: 'Steak' },
                { label: 'Hamburgers', value: 'Hamburgers' },
                { label: 'French Fries', value: 'French Fries' },
                { label: 'Burger', value: 'Burger' },
              ]}
              isMulti
              label="Yeasts"
              placeholder="Enter Name of Yeast "
              onChange={(val, data) => {handleChangeMultiple('yeast', 'yeastName', data);console.log(data)}}
            /> */}
            <Space size={8} />
            <Button seafoamBlue size="small" bold onClick={handleAddYeasts}>
              Add Yeasts
            </Button>
          </Grid>
          <Grid item xs={6}>
          <SelectSearchBar
            label="Hops"
            name="hopName"
            onInputChange={handleFilterHopsData}
            onChange={handleChangeFilterHop}
            options={filteredHopsData}
          />
            {/* <Select
              options={[
                { label: 'Steak', value: 'Steak' },
                { label: 'Hamburgers', value: 'Hamburgers' },
                { label: 'French Fries', value: 'French Fries' },
                { label: 'Burger', value: 'Burger' },
              ]}
              isMulti
              label="Hops"
              placeholder="Enter Name of Hops"
              onChange={(val, data) => handleChangeMultiple('hops', 'hopName', data)}
            /> */}
            <Space size={8} />
            <Button seafoamBlue size="small" bold onClick={handleAddHops}>
              Add Hops
            </Button>
          </Grid>
          <Grid item xs={6}>
          <SelectSearchBar
            label="Malts"
            name="maltName"
            onInputChange={handleFilterMaltData}
            onChange={handleChangeFilterMalt}
            options={filteredMaltData}
          />
            {/* <Select
              options={[
                { label: 'Steak', value: 'Steak' },
                { label: 'Hamburgers', value: 'Hamburgers' },
                { label: 'French Fries', value: 'French Fries' },
                { label: 'Burger', value: 'Burger' },
              ]}
              isMulti
              label="Malts"
              placeholder="Enter Name of Malts"
              onChange={(val, data) => handleChangeMultiple('malt', 'maltName', data)}
            /> */}
            <Space size={8} />
            <Button seafoamBlue size="small" bold onClick={handleAddMalts}>
              Add Malts
            </Button>
          </Grid>
        </Grid>
        <Space size={25} />

        <Headding as="h3" bold title="Product Description" />
        <Space size={20} />
        <div style={{ marginLeft: 30 }}>
          <Textarea
            rows="7"
            label="Go Ahead… Tell Your Story!"
            placeholder={
              'Tell us the story of your brew! \n\nExample:  “In 1902, Walter Bruhn, the son of German immigrants, created a recipe for a new pilsener beer named Champagne Velvet. Over the next 50 years it grew to become one of Indiana’s most popular beers, a go-to for many of our grandparents and great-grandparents…”'
            }
            name="productDescription"
            onChange={onChange}
          />
        </div>
      </div>
    </Widget>
  );
};

export default ProductDescription;
