import React, { useState, useEffect } from 'react';
import Widget from 'components/atoms/Widget';
import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';
import { Grid } from '@material-ui/core';
import Textarea from 'components/atoms/Textarea';
import SlideHop from 'components/molecules/SlideHop';
import { marks } from 'helper/constants';
import AppModal from 'components/atoms/Modal';
import Select from '../../../components/atoms/Select';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/Button';
import SelectSearchBar from 'components/atoms/SelectSearchBar';

import axios from 'axios';

const TastingNotes = ({ onChange, edit, productDetails }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSecModalOpen, setSecModalOpen] = useState(false);
  const [selectedFlavors, updateSelectedFlavors] = useState(edit ? [1, 2, 6] : []);
  const [selectedSecFlavors, updateSecSelectedFlavors] = useState(edit ? [6] : []);
  const [foodPairingData, setFoodPairingData] = useState([]);
  const [filteredFoodPairingData, setFilteredFoodPairingData] = useState([]);
 
  const openModal = () => {
    isModalOpen ? setModalOpen(!isModalOpen) : setSecModalOpen(!isSecModalOpen);
  };

  const flavorData = [
    { icon: '/images/Bread.svg', label: 'Bread' },
    { icon: '/images/Malt.svg', label: 'Malt' },
    { icon: '/images/Bacon.svg', label: 'Bacon' },
    { icon: '/images/Bread.svg', label: 'Bread' },
    { icon: '/images/Malt.svg', label: 'Malt' },
    { icon: '/images/Bacon.svg', label: 'Bacon' },
    { icon: '/images/Bread.svg', label: 'Bread' },
    { icon: '/images/Malt.svg', label: 'Malt' },
    { icon: '/images/Bacon.svg', label: 'Bacon' },
    { icon: '/images/Bread.svg', label: 'Bread' },
    { icon: '/images/Malt.svg', label: 'Malt' },
    { icon: '/images/Bacon.svg', label: 'Bacon' },
  ];

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
        url: `${URL}/digi-update-flavorCategory`,
      })
        .then((response) => {
          setFoodPairingData(response.data);
        })
        .catch((error) => error);
    }
    fetchData();
    const first = [];

    selectedFlavors.map((item, i) => {
      const temp = { notes: flavorData[item - 1].label };
      first.push(temp);
    });
    handleFlavorOptionsFirst('primaryFlavorNotes', first);
  }, [selectedFlavors]);

  useEffect(() => {
    const second = [];
    selectedSecFlavors.map((item, i) => {
      const temp = { notes: flavorData[item - 1].label };
      second.push(temp);
    });
    handleFlavorOptionsSecond('secondaryFlavorNotes', second);
  }, [selectedSecFlavors]);

  const flavorProps = id => {
    if (isModalOpen) {
      return {
        className: `${selectedFlavors.includes(id) ? 'highlight-flavor' : 'flavor-item'}`,
        onClick: () => {
          const flavors = [...selectedFlavors];
          if (selectedFlavors.includes(id)) {
            flavors.splice(flavors.indexOf(id), 1);
          } else {
            flavors.push(id);
          }
          updateSelectedFlavors(flavors);
        },
      };
    }
    return {
      className: `${selectedSecFlavors.includes(id) ? 'highlight-flavor' : 'flavor-item'}`,
      onClick: () => {
        const flavors = [...selectedSecFlavors];
        if (selectedSecFlavors.includes(id)) {
          flavors.splice(flavors.indexOf(id), 1);
        } else {
          flavors.push(id);
        }
        updateSecSelectedFlavors(flavors);
      },
    };
  };

  const handleFlavorOptionsFirst = (name, value) => {
    const event = {
      target: {
        name,
        value,
      },
    };
    onChange(event);
  };

  const handleFlavorOptionsSecond = (name, value) => {
    const event = {
      target: {
        name,
        value,
      },
    };
    onChange(event);
  };

  const handleSliderChange = value => {
    const event = {
      target: {
        name : 'perceivedBitterness',
        value,
      },
    };
    onChange(event);
  };

  const handleChangeMultiple = (name, value = null, data) => {
    const pairs = [];

    data.map((item, i) => {
      const temp = {
        foodPairing: item.label,
      };
      pairs.push(temp);
    });

    const event = {
      target: {
        name,
        value: pairs,
      },
    };
    onChange(event);
  };

  const handleChange = name => value => {
    const event = {
      target: {
        name,
        value: value,
      },
    };
    onChange(event);
  };

  const handleAddFoodPairings = () => {
    const productDetailsAll = productDetails;

    axios({
      url: `${URL}/digi-update-product`,
      method: 'post',
      headers: Headers,
      data: productDetailsAll,
    })
      .catch((error) => error);
  };


  // filters - foopairing,yeast,malt,hops

  const handleChangeFilter = (newValue, actionMeta) => {
    if (actionMeta.action === 'clear') {
      const data = []
      handleChangeMultiple('foodPairings', 'foodpairing', data)
    } else if (actionMeta.action === 'create-option') {
      const data = [
        {
          label:newValue.value,
          value:newValue.value
        }
      ]
      handleChangeMultiple('foodPairings', 'foodpairing', data)
    } else if (actionMeta.action === 'select-option') {
      const data = [
        {
          label:newValue.name,
          value:newValue.name
        }
      ]
      handleChangeMultiple('foodPairings', 'foodpairing', data)
    }
  };

  const handleFilterFoodPairing = (inputValue) => {
    if (inputValue) {
      const filteredFoodPairingsData = foodPairingData
        .filter(
          (item) => item.food
            && item.food.toLowerCase().startsWith(inputValue.toLowerCase()),
        )
        .map((itemSearched) => ({
          name: itemSearched.food,
          label: itemSearched.food,
        }));
        setFilteredFoodPairingData(filteredFoodPairingsData);
    }
  };

  return (
    <Widget>
      <div className="item-container">
        <Headding as="h3" bold title="Tasting Notes" />
        <Grid container spacing={4} style={{ marginTop: 15 }}>
          <Grid className="tasting-experience" item xs={12} style={{ marginLeft: 30 }}>
            <Textarea
              defaultValue={edit && productDetails.productDescription}
              maxlength={210}
              name="tastingNotes"
              onChange={onChange}
              label="Describe the tasting experience"
              placeholder='Sample Tasting Note:  "A crisp ale with big, fruity hop aromas, solid viscosity in the mouth, a solid bitterness finish.”'
            />
            <Headding className="character-limit" as="p" bold title="Character Limit: 210" />
          </Grid>
        </Grid>

        <Space size={25} />
        <Headding as="h3" bold title="Perceived Bitterness" />
        <Space size={10} />
        <Headding
          as="p"
          bold
          title="Slide the Hop to the Appropriate Perceived Bitterness"
          style={{ marginLeft: 30 }}
        />
        <Space size={10} />
        <div style={{ marginLeft: 30 }}>
          <SlideHop 
          marks={marks} 
          bitterNessValue={(value) => handleSliderChange(value)}
          />
        </div>

        <Space size={25} />
        <Headding as="h3" bold title="Primary Flavor Notes" />
        <Space size={15} />
        <div className="flavours-container" style={{ marginLeft: 30 }}>
          <div className="flavour-items">
            {selectedFlavors.map(i => (
              <div key={i} className="flavor-item">
                <img alt="" src={flavorData[i - 1].icon} />
                <p>{flavorData[i - 1].label}</p>
              </div>
            ))}
            <div
              style={{ width: 100, marginTop: '10px' }}
              className="text-center"
              onClick={() => {
                setModalOpen(true);
              }}>
              <img src="/images/add-an-event.png" alt="AddEvent" />
              <Space size={8} />
              <p style={{ fontSize: '11px' }}>Add another Primary Note</p>
            </div>
          </div>
        </div>

        <Space size={25} />
        <Headding as="h3" bold title='"Hints of" Flavor Notes' />
        <Space size={15} />
        <div className="flavours-container" style={{ marginLeft: 30 }}>
          <div className="flavour-items">
            {selectedSecFlavors.map(i => (
              <div key={i} className="flavor-item">
                <img alt="" src={flavorData[i - 1].icon} />
                <p>{flavorData[i - 1].label}</p>
              </div>
            ))}
            <div style={{ width: 100 }} className="text-center" onClick={() => setSecModalOpen(true)}>
              <img src="/images/add-an-event.png" alt="AddEvent" />
              <Space size={8} />
              <p style={{ fontSize: '11px' }}>Add another Primary Note</p>
            </div>
          </div>
        </div>

        <Space size={25} />
        <Headding as="h3" bold title="Serving Temperature and Food Pairings" />
        <Space size={20} />
        <div style={{ width: 400, marginLeft: 30 }}>
          <Select
            options={[
              { label: 'Very Cold - (0-4C/32-39F', value: 'Very Cold - (0-4C/32-39F' },
              { value: 'Cold - (4-7C/39-45F)', label: 'Cold - (4-7C/39-45F)' },
              { value: 'Cool - (8-12C/45-54F)', label: 'Cool - (8-12C/45-54F)' },
              { value: 'Cellar - (12-14C/54-57F)', label: 'Cellar - (12-14C/54-57F)' },
              { value: 'Warm - (14-16C/57-61F)', label: 'Warm - (14-16C/57-61F)' },
              { value: 'Hot - (70C/158F)', label: 'Hot - (70C/158F)' },
            ]}
            onChange={handleChange('servingTemperature')}
            label="Suggest Serving Temperature"
          />
          <Space size={25} />
          <SelectSearchBar
          label="Suggest Appropriate Food Pairings"
          name="foodPairings"
          onInputChange={handleFilterFoodPairing}
          onChange={handleChangeFilter}
          options={filteredFoodPairingData}
        />
          {/* <Select
            isMulti
            name="colors"
            // label="Suggest Appropriate Food Pairings"
            options={[
              { label: 'Steak', value: 'Steak' },
              { label: 'Hamburgers', value: 'Hamburgers' },
              { label: 'French Fries', value: 'French Fries' },
              { label: 'Burger', value: 'Burger' },
            ]}
            onChange={(name, data) => console.log(data,'data')}
          /> */}
          {/* <Input label="Suggest Appropriate Food Pairings" placeholder="Enter Each Pairing Individually " /> */}
          <Space size={10} />
          <Button seafoamBlue size="small" bold onClick={handleAddFoodPairings}>
            {' '}
            Add Another Pairing
          </Button>
        </div>
      </div>

      <AppModal
        isOpen={isModalOpen || isSecModalOpen}
        onClose={openModal}
        callback={openModal}
        title="Primary Flavor Notes">
        <div className="flavours-container">
          <div className="flavor-items-container">
            <div className="flavour-items">
              <div {...flavorProps(1)}>
                <img alt="" src="/images/Bread.svg" />
                <p>Bread</p>
              </div>
              <div {...flavorProps(2)}>
                <img alt="" src="/images/Malt.svg" />
                <p>Malt</p>
              </div>
              <div {...flavorProps(3)}>
                <img alt="" src="/images/Bacon.svg" />
                <p>Bacon</p>
              </div>
              <div {...flavorProps(4)}>
                <img alt="" src="/images/Bread.svg" />
                <p>Bread</p>
              </div>
              <div {...flavorProps(5)}>
                <img alt="" src="/images/Malt.svg" />
                <p>Malt</p>
              </div>
              <div {...flavorProps(6)}>
                <img alt="" src="/images/Bacon.svg" />
                <p>Bacon</p>
              </div>
              <div {...flavorProps(7)}>
                <img alt="" src="/images/Bacon.svg" />
                <p>Bacon</p>
              </div>
              <div {...flavorProps(8)}>
                <img alt="" src="/images/Bread.svg" />
                <p>Bread</p>
              </div>
              <div {...flavorProps(9)}>
                <img alt="" src="/images/Malt.svg" />
                <p>Malt</p>
              </div>
              <div {...flavorProps(10)}>
                <img alt="" src="/images/Bacon.svg" />
                <p>Bacon</p>
              </div>
              <div className="pointer flavor-item">
                <div className="add-icon">+</div>
                <p>See More</p>
              </div>
            </div>
            <div className="flavour-items">
              <div {...flavorProps(11)}>
                <img alt="" src="/images/Bread.svg" />
                <p>Bread</p>
              </div>
              <div {...flavorProps(12)}>
                <img alt="" src="/images/Malt.svg" />
                <p>Malt</p>
              </div>
            </div>
          </div>
          <div className="search-flavour">
            <h4>Don't see your Flavor? Search Here</h4>
            <Input placeholder="Search Flavor Notes" />
          </div>
        </div>
      </AppModal>
    </Widget>
  );
};

export default TastingNotes;
