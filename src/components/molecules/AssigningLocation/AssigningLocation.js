import React from 'react';
import { Drawer, Grid } from '@material-ui/core';
import Button from 'components/atoms/Button';
import Space from 'components/atoms/Space';

const AssigningLocation = ({ open, setOpen }) => (
  // const [open, setOpen] = React.useState(false);

  <div className="bdb-assigning-drawer">
    <img src="./images/dropdown.png" alt={''} className="select-all-icon" />
    {/* <p onClick={() => setOpen(true)}> */}
    {/*  <img src="/images/Group2156.svg" alt="Group2156" /> */}
    {/*  Associate Products to a Location(s) */}
    {/* </p> */}
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <div className="bdb-assigning-drawer--container">
        <img onClick={() => setOpen(false)} src="./images/close.png" alt={''} className="close-icon-modal" />
        <div className="bdb-assigning-drawer--container-head">
          <h1>Add to Location(s)</h1>
        </div>
        <div className="bdb-assigning-drawer--container-brod">
          <p>All Locations</p>
        </div>

        <div className="bdb-assigning-drawer--container-list">
          <div>
            <p>Location Name Goes here</p>
            <small>123 Beer St. Indianapolis, Indiana, 90802</small>
          </div>
          <img src="/images/Group2461-add.png" alt="" />
        </div>
        <div className="bdb-assigning-drawer--container-list">
          <div>
            <p>Location Name Goes here</p>
            <small>123 Beer St. Indianapolis, Indiana, 90802</small>
          </div>
          <img src="/images/Group2461.svg" alt="" />
        </div>
        <div className="bdb-assigning-drawer--container-list">
          <div>
            <p>Location Name Goes here</p>
            <small>123 Beer St. Indianapolis, Indiana, 90802</small>
          </div>
          <img src="/images/Group2461.svg" alt="" />
        </div>

        <Space size={25} />
        <Grid container justify="center">
          <Button size="larg" bold>
            Add Products to these Locations
          </Button>
        </Grid>
      </div>
    </Drawer>
  </div>
);
export default AssigningLocation;
