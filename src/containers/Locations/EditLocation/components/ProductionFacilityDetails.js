import React, { useState } from 'react';
import Headding from 'components/atoms/Headding';
import Grid from '@material-ui/core/Grid';
import Input from 'components/atoms/Input';
import Space from 'components/atoms/Space';
import Button from 'components/atoms/Button';
import Select from 'components/atoms/Select';
import Widget from 'components/atoms/Widget';
import UploadImages from 'components/molecules/UploadImages';
import { ImageUploadModal } from 'components/molecules/ImageUploadModal/ImageUploadModal';

import Hours from './Hours';

const ProductionFacilityDetails = () => {
  const [imageModal, toggleImageModal] = useState(false);
  const [files, saveUploads] = useState([]);

  const handleUpload = (filesData) => {
    saveUploads(filesData);
  };

  return (
    <Widget isAccordion title="Market This Location: Your BreweryDB Location Page">
      <Headding as="h3" bold title="Location Images" style={{ marginTop: 25 }} />
      <p style={{ color: '#003b71' }}>These Images Will Rotate on Your BreweryDB Location Page</p>
      <Grid container style={{ marginLeft: 40 }}>
        <Grid item xs={12}>
          <UploadImages handleUploadImage={() => toggleImageModal(true)} />
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

      <Space size={80} />
      <Headding as="h3" bold title="Location Info" />
      <Space size={20} />
      <Grid container spacing={4} style={{ marginLeft: 30 }}>
        <Grid item xs={4}>
          <Select
            label="Operation Status"
            options={[{ value: 'Temporarily Closed', label: 'Temporarily Closed' }]}
            defaultValue={{ value: 'Temporarily Closed', label: 'Temporarily Closed' }}
          />
        </Grid>
        <Grid item xs={4}>
          <Input label="Year Opened" value="YYYY" />
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginLeft: 30 }}>
        <Grid item xs={4}>
          <Select
            label="Open to the Public?"
            options={[{ value: 'Yes', label: 'Yes' }]}
            defaultValue={{ value: 'Yes', label: 'Yes' }}
          />
        </Grid>
        <Grid item xs={4}>
          <Select
            label="Are Tours Available?"
            options={[{ value: 'Yes', label: 'Yes' }]}
            defaultValue={{ value: 'Yes', label: 'Yes' }}
          />
        </Grid>
      </Grid>

      <Space size={40} />
      <Headding as="h3" bold title="Location Hours" />
      <Space size={20} />
      <Grid container spacing={4}>
        <Hours day="Sunday" val1="12:00 PM" val2="10:00 PM" selected />
        <Hours day="Monday" val1="" val2="" selected={false} />
        <Hours day="Tuesday" val1="10:00 AM" val2="1:00 PM" val3="3:30 PM" val4="11:00 PM" selected />
        <Hours day="Wednesday" val1="12:00 PM" val2="10:00 PM" selected />
        <Hours day="Thursday" val1="12:00 PM" val2="2:00 AM" selected />
        <Hours day="Friday" val1="12:00 PM" val2="2:00 AM" selected />
        <Hours day="Saturday" val1="12:00 PM" val2="2:00 AM" selected />
      </Grid>

      <Space size={80} />
      <Headding as="h3" bold title="Location Contact Information" />
      <Space size={20} />
      <Grid container spacing={4} style={{ marginLeft: 30 }}>
        <Grid item xs={4}>
          <Input label="Phone Number" value="(123) 456-7890" />
        </Grid>
        <Grid item xs={4}>
          <Input label="Email" value="Location#1@brewery.com" />
        </Grid>
      </Grid>

      <Space size={80} />
      <Headding as="h3" bold title="Location Social Media and Website" />
      <Space size={20} />
      <Grid container spacing={2} style={{ marginLeft: 30 }}>
        <Grid item xs={4}>
          <Select
            label="Location specific Social Media?"
            options={[{ value: 'Yes', label: 'Yes' }]}
            defaultValue={{ value: 'Yes', label: 'Yes' }}
          />
        </Grid>
        <Grid container item xs={8} spacing={2} alignItems="flex-end">
          <Grid item xs={10} style={{ paddingLeft: 30 }}>
            <Input label="Facebook Profile" value="http://facebook.com/Uplandfsq" />
          </Grid>
          <Grid item xs={2}>
            <Button reddyBrown bold>
              Delete
            </Button>
          </Grid>

          <Grid item xs={10} style={{ paddingLeft: 30 }}>
            <Input label="Facebook Fan Page" placeholder="http://facebook.com/YourBrewery" />
          </Grid>
          <Grid item xs={2}>
            <Button disabled bold>
              Delete
            </Button>
          </Grid>

          <Grid item xs={10} style={{ paddingLeft: 30 }}>
            <Input label="Instagram" placeholder="http://instagram.com/YourBrewery" />
          </Grid>
          <Grid item xs={2}>
            <Button disabled bold>
              Delete
            </Button>
          </Grid>
          <Grid item xs={10} style={{ paddingLeft: 30 }}>
            <Input label="Twitter" placeholder="http://twitter.com/YourBrewery" />
          </Grid>
          <Grid item xs={2}>
            <Button disabled bold>
              Delete
            </Button>
          </Grid>
          <Grid item xs={10} style={{ paddingLeft: 30 }}>
            <Input label="YouTube" placeholder="http://youtube.com/YourBrewery" />
          </Grid>
          <Grid item xs={2}>
            <Button disabled bold>
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Space size={40} />
      <Grid container spacing={2} style={{ marginLeft: 30, marginBottom: 50 }}>
        <Grid item xs={4}>
          <Select
            label="Location Specific Web URL"
            options={[{ value: 'Yes', label: 'Yes' }]}
            defaultValue={{ value: 'Yes', label: 'Yes' }}
          />
        </Grid>
        <Grid item xs={4} style={{ marginLeft: 30 }}>
          <Input label="Location Specific Web URL" value="www.uplandfsq.com" />
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

export default ProductionFacilityDetails;
