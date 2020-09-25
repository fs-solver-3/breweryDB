import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Formik, Form } from 'formik';

import ContentTemplate from 'components/molecules/ContentTemplate';
import Breadcumb from 'components/atoms/Breadcumb';
import Headding from 'components/atoms/Headding';
import Space from 'components/atoms/Space';
import Button from 'components/atoms/Button';
import Card from 'components/molecules/Card';
import UndoIcon from 'components/molecules/Card/assets/undo.svg';

import { initialEditLocationValues } from 'helper/formik-initial-values';
import BreweryCard from './components/BreweryCard';
import ProductionFacilityDetails from './components/ProductionFacilityDetails';
import ProductLibrary from './components/ProductLibrary';
import BuildTraffic from './components/BuildTraffic';

const links = [
  {
    label: 'Dashboard',
    link: '/'
  },
  {
    label: 'All Locations',
    link: '/locations'
  },
  {
    label: 'Upland Fountain Square',
    link: '/locations/add'
  }
];

const EditLocation = () => {
  const submitForm = (values) => {
    console.log('Edit submitted', values);
  };

  return (
    <Formik
      initialValues={initialEditLocationValues}
      onSubmit={submitForm}
    >
      {({ values }) => (
        <Form>
          <ContentTemplate title="Locations">
            <Breadcumb links={links} />
            <Space size={50} />
            <Headding as="h3" bold title="Upland Fountain Square" />
            <Space size={15} />
            <div style={{ marginLeft: 100 }}>
              <Grid container spacing={4}>
                <Grid item xs={9}>
                  <BreweryCard />
                  <Space size={40} />
                  <ProductionFacilityDetails />
                  <Space size={40} />
                  <ProductLibrary />
                  <Space size={40} />
                  <BuildTraffic
                    formikValues={values}
                  />
                  <div style={{ textAlign: 'center', marginTop: 30 }}>
                    <Button size="small" bold rounded type="submit">
                      Save and Exit
                    </Button>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <Card style={{ width: '100%', minHeight: 'auto' }}>
                    <Space size={10} />
                    <Grid container justify="center">
                      <img src="/images/upland.png" alt="card" />
                    </Grid>
                    <Space size={10} />
                    <div style={{ padding: 15 }}>
                      <Headding as="h5" fontSize={16} bold title="Upland Fountain Square" />
                      <Space size={5} />
                      <Headding as="p" fontSize={15} title="1201 Prospect St. Indianapolis, IN" />

                      <Space size={25} />
                      <Headding as="h5" fontSize={16} bold title="Hours" />
                      <Space size={5} />
                      <Headding as="p" fontSize={15} title="Sun - Sat 11:30AM - 8PM" />

                      <Space size={25} />
                      <Headding as="h5" fontSize={16} bold title="Tap Highlights" />
                      <Space size={5} />
                      <Headding as="p" fontSize={15}>
                        26 Taps including barrel aged, sour ales, seasonals, exclusive beers year - round staples and kombucha
                      </Headding>

                      <Space size={25} />
                      <Headding as="h5" fontSize={16} bold title="Other Highlights" />
                      <Space size={5} />
                      <Headding as="p" fontSize={15}>
                        Family Friendly, dog Friendly, (Patio): Kid Friendly; Curated Food Menu of Indiana Favs; Vegetarian
                        Options
                      </Headding>
                    </div>
                    <Space size={20} />
                    <Grid container justify="center">
                      <Button size="small" bold rounded>
                        View Location
                      </Button>
                    </Grid>
                    <Space size={15} />
                    <div className="card--share">
                      <img src={UndoIcon} alt="share" />
                    </div>
                  </Card>
                  <Card style={{ width: '100%', minHeight: 'auto', marginTop: 300 }}>
                    <Space size={10} />
                    <div style={{ textAlign: 'center', marginTop: -18, position: 'relative' }}>
                      <Headding as="h4" title="Give These a Try!" bold />
                      <img
                        src="/images/editIcon.png"
                        alt=""
                        style={{
                          width: 20,
                          height: 20,
                          position: 'absolute',
                          top: 0,
                          right: 3
                        }}
                      />
                    </div>

                    <Space size={10} />

                    <div className="sidebar-icons" style={{ padding: 15 }}>
                      {[1, 2, 3, 4, 5, 6].map((item, i) => (
                        <div className="item" key={item}>
                          <img src={i % 2 === 0 ? '/images/product2.jpg' : '/images/product1.jpg'} alt="" />
                          <div className="detail">
                            <p className="title">Nap in Hammock</p>
                            <p>
                              <small>Style</small>
                            </p>
                            <p>
                              <small>Style</small>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Space size={15} />
                    <div className="card--share">
                      <img src="/images/inward.svg" alt="share" />
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </ContentTemplate>
        </Form>
      )}
    </Formik>
  );
};

export default EditLocation;
