import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import Headding from 'components/atoms/Headding';
import Widget from 'components/atoms/Widget';
import Space from 'components/atoms/Space';
import UploadImage from 'components/molecules/UploadImages';
import { ImageUploadModal } from '../../components/molecules/ImageUploadModal/ImageUploadModal';

const LogoAndImagery = () => {
  const [brandModal, toggleBrandModal] = useState(false);
  const [logoModal, toggleLogoModal] = useState(false);
  const [logoUploads, setLogoUploads] = useState([]);
  const [brandUploads, setBrandUploads] = useState([]);

  const handleUpload = (isLogoModal) => (files) => {
    if (isLogoModal) {
      setLogoUploads(files);
    } else {
      setBrandUploads(files);
    }
  };

  return (
    <Widget cneter width={1080}>
      <div
        className="mx-auto"
        style={{
          width: 745,
        }}
      >
        <Headding as="h3" bold title="Logo and Imagery" />
        <Space size={30} />
        <Grid container spacing={3} justify="space-around">
          <Grid>
            <Grid item xs={12}>
              <UploadImage handleUploadImage={() => toggleLogoModal(true)} label="Brewery Logo" />
            </Grid>
            <Grid item xs={12}>
              {logoUploads.map((file, i) => (
                <div className="files-uploaded" key={i}>
                  <img src="./images/tick.png" alt="tick" className="tick-icon" />
                  <p>{file.name}</p>
                </div>
              ))}
            </Grid>
          </Grid>
          <Grid>
            <Grid item xs={12}>
              <UploadImage handleUploadImage={() => toggleBrandModal(true)} label="Brand Images" />
              <Space size={10} />
              <Headding as="p" bold title="For display on your primary brewery page" />
            </Grid>
            <Grid item xs={12}>
              {brandUploads.map((file, i) => (
                <div className="files-uploaded" key={i}>
                  <img src="./images/tick.png" alt="tick" className="tick-icon" />
                  <p>{file.name}</p>
                </div>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <ImageUploadModal
        isOpen={logoModal || brandModal}
        onClose={() => (logoModal ? toggleLogoModal(false) : toggleBrandModal(false))}
        title={logoModal ? 'Upload Logo' : 'Upload Brand Images'}
        onUpload={handleUpload(logoModal)}
      />
    </Widget>
  );
};

export default LogoAndImagery;
