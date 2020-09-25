import React, { useState } from 'react';
import Headding from 'components/atoms/Headding';
import Grid from '@material-ui/core/Grid';
import Input from 'components/atoms/Input';
import Space from 'components/atoms/Space';
import Select from 'components/atoms/Select';
import Textarea from 'components/atoms/Textarea';
import Widget from 'components/atoms/Widget';
import AppModal from 'components/atoms/Modal';
import { makeStyles } from '@material-ui/core/styles';
import '../style.css';

const useStyles = makeStyles(() => ({
  searchProduct: {
    backgroundColor: '#e9f1f8',
    padding: '5px 25px 25px 25px',
  },
  searchProductInput: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchItem: {
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: '3px',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
    border: '1px solid #003f76',
    marginBottom: '10px',
  },
  searchProductDetail: {
    paddingTop: '7px',
    paddingLeft: '5px',
  },
  searchProductHeading: {
    fontSize: '14px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '190px',
  },
  searchProductDesc: {
    fontSize: '11px',
    color: '#003b71',
  },
  searchProductImg: {
    width: '33px',
    height: '33px',
    objectFit: 'cover',
    objectPosition: 'center',
    margin: '5px',
  },
  closeIcon: {
    position: 'absolute',
    top: '5px',
    right: '5px',
  },
  productsSection: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  productItem: {
    marginRight: '15px',
    marginBottom: '15px',
    position: 'relative',
  },
  productAddImg: {
    height: '45px',
    width: '45px',
  },
  productAddSection: {
    backgroundColor: '#e9f1f8',
    padding: '12px',
    textAlign: 'center',
    marginRight: '15px',
    marginBottom: '15px',
    border: '2px dashed #79add560',
  },
}));

const BreweryCard = () => {
  const classes = useStyles();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFlavors, updateSelectedFlavors] = useState([]);

  const openModal = () => {
    setModalOpen(!isModalOpen);
  };

  const flavorProps = id => ({
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
  });

  return (
    <Widget isAccordion title="Market This Location: Your Location Card">
      <Space size={15} />
      <Headding as="h3" bold title="Location Details" />
      <Space size={20} />
      <Grid style={{ marginLeft: 30 }}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Input label="Location Name" value="Upland Fountain Space" />
          </Grid>
          <Grid item xs={4}>
            <Select
              label="Facility Type"
              options={[{ value: 'Tap/Tasting Room', label: 'Tap/Tasting Room' }]}
              defaultValue={{ value: 'Tap/Tasting Room', label: 'Tap/Tasting Room' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid style={{ marginLeft: 30 }}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Input label="Address Line 1" value="1201 Prospect St." />
          </Grid>
          <Grid item xs={4}>
            <Input label="Address Line 2" />
          </Grid>
          <Grid item xs={4}>
            <Select
              label="Country"
              options={[{ value: 'United States', label: 'United States' }]}
              value={{ value: 'United States', label: 'United States' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid style={{ marginLeft: 30 }}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Input label="City" value="Indianapolis" />
          </Grid>
          <Grid item xs={4}>
            <Select
              label="State / Province / Region"
              options={[{ value: 'Indiana', label: 'Indiana' }]}
              value={{ value: 'Indiana', label: 'Indiana' }}
            />
          </Grid>
          <Grid item xs={4}>
            <Input label="Postal Code" value="46032" />
          </Grid>
        </Grid>
      </Grid>

      <Grid>
        <Grid item xs={12}>
          <Space size={20} />
          <Headding as="h3" bold title="Location Highlights" />
          <Space size={20} />
        </Grid>
        <Grid style={{ marginLeft: 30 }}>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Select
                options={[{ value: 'Tap Highlights', label: 'Tap Highlights' }]}
                value={{ value: 'Tap Highlights', label: 'Tap Highlights' }}
              />
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={4}>
              <Headding as="p" style={{ textAlign: 'right', marginTop: '32px' }}>
                Character Limit: 140
              </Headding>
            </Grid>
          </Grid>
        </Grid>
        <Grid style={{ marginTop: 5, marginLeft: 30 }}>
          <Grid container>
            <Grid item xs={12}>
              <Textarea
                rows="7"
                text="26 Taps including barrel aged, sour ales, seasonals, exclusive beers year - round staples and kombucha"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid style={{ marginTop: 5, marginLeft: 30 }}>
          <Grid container spacing={4}>
            <Grid item sm={4}>
              <Select
                options={[{ value: 'Custom Headline', label: 'Custom Headline' }]}
                value={{ value: 'Custom Headline', label: 'Custom Headline' }}
              />
            </Grid>
            <Grid item sm={4}>
              <Select
                options={[{ value: 'Ambiance Highlights', label: 'Ambiance Highlights' }]}
                value={{ value: 'Ambiance Highlights', label: 'Ambiance Highlights' }}
              />
            </Grid>
            <Grid item xs={4}>
              <Headding as="p" style={{ textAlign: 'right', marginTop: 32 }}>
                Character Limit: 140
              </Headding>
            </Grid>
          </Grid>
        </Grid>
        <Grid style={{ marginTop: 5, marginLeft: 30 }}>
          <Grid container>
            <Grid item xs={12}>
              <Textarea
                rows="7"
                text="Family Friendly, dog Friendly, (Patio): Kid Friendly; Curated Food Menu of Indiana Favs; Vegetarian Options"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Space size={20} />
      <Headding as="h3" bold title="Products You Want to Feature" />
      <Space size={20} />
      <Grid style={{ marginLeft: 30 }}>
        <Headding as="h5" bold title="Search Your Product Library" style={{ marginBottom: 5 }} />
        <Grid container spacing={5}>
          <Grid item xs={5}>
            <div className={classes.searchProduct}>
              <div className={classes.searchProductInput}>
                <Input placeholder="Search" />
                <img src="/images/search-icon.svg" alt="" />
              </div>

              {[1, 2, 3].map(item => (
                <div className={classes.searchItem} key={item}>
                  <img src="/images/search-item.jpg" alt="" className={classes.searchProductImg} />
                  <Grid className={classes.searchProductDetail}>
                    <h5 className={classes.searchProductHeading}>Elemental Claown Bansndsjs </h5>
                    <p className={classes.searchProductDesc}>Indiana City B… 7.5% Juicy/Hazy IPA</p>
                  </Grid>
                </div>
              ))}
            </div>
          </Grid>
          <Grid item xs={5} className={classes.productsSection}>
            <div className={classes.productItem}>
              <img src="/images/product2.jpg" alt="" />
              <img src="/images/cross-icon.svg" className={classes.closeIcon} alt="" />
            </div>
            <div className={classes.productItem}>
              <img src="/images/product1.jpg" alt="" />
              <img src="/images/cross-icon.svg" className={classes.closeIcon} alt="" />
            </div>
            <div className={classes.productItem}>
              <img src="/images/product3.jpg" alt="" />
              <img src="/images/cross-icon.svg" className={classes.closeIcon} alt="" />
            </div>
            <div
              style={{ width: 90 }}
              className={[classes.productAddSection]}
              //className="text-center product-item product-item-add"
              onClick={openModal}>
              <img src="/images/add-an-event.png" alt="AddEvent" className={classes.productAddImg} />
              <Space size={8} />
              <p style={{ fontSize: '11px', color: '#003b71 ' }}>Add another Primary Note</p>
            </div>

            <div style={{ width: 90 }} className={classes.productAddSection} onClick={openModal}>
              <img src="/images/add-an-event.png" alt="AddEvent" className={classes.productAddImg} />
              <Space size={8} />
              <p style={{ fontSize: '11px' }}>Add another Primary Note</p>
            </div>

            <div style={{ width: 90 }} className={classes.productAddSection} onClick={openModal}>
              <img src="/images/add-an-event.png" alt="AddEvent" className={classes.productAddImg} />
              <Space size={8} />
              <p style={{ fontSize: '11px' }}>Add another Primary Note</p>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <AppModal isOpen={isModalOpen} onClose={openModal} callback={openModal} title="Primary Flavor Notes">
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

export default BreweryCard;
