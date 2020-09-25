import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

import './style.css';
import { Modal } from '@material-ui/core';
import Headding from '../../atoms/Headding';
import Button from '../../atoms/Button';

export function ImageUploadModal(props) {
  const [files, setFiles] = useState([]);

  const {
    isOpen, onClose, title, onUpload,
  } = props;

  const handleFileUpload = (filesData) => {
    setFiles(filesData);
  };

  const removeFile = (index) => () => {
    const clonedFiles = [...files];
    clonedFiles.splice(index, 1);
    setFiles(clonedFiles);
  };

  const onApply = () => {
    onUpload(files);
    handleClose();
  };

  const handleClose = () => {
    setFiles([]);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="upload-images-common-modal">
        <span onClick={onClose} className="modal-close-button">
          <img src="./images/close.png" alt="" className="close-icon" />
        </span>
        <Headding
          style={{
            padding: '25px',
            fontWeight: 'bold',
          }}
          as="h4"
          align="center"
        >
          {title || 'Upload Logo'}
        </Headding>

        <div className="upload-image-container">
          <Dropzone onDrop={handleFileUpload} multiple accept="image/*">
            {({ getRootProps, getInputProps }) => (
              <div className="image-placeholder" {...getRootProps()}>
                <input {...getInputProps()} />
                <img src="./images/cloud.png" alt="upload" className="cloud-icon" />
                <Button logixBlue size="xsmall" additionalClassName="button-modal">
                  Browse Files
                </Button>
              </div>
            )}
          </Dropzone>

          <div>
            <Headding
              style={{
                padding: '25px 0',
                fontWeight: 'bold',
                marginTop: '30px',
                textAlign: 'left',
              }}
              as="h5"
              align="center"
            >
              Uploading
            </Headding>

            {files.map((file, index) => (
              <div className="image-details" key={index}>
                <div className="left-section-details">
                  <span className="tick-icon-container">
                    <img src="./images/tick.png" alt="tick" className="tick-icon" />
                  </span>
                  <Headding
                    style={{
                      padding: '0',
                      fontWeight: 'normal',
                      marginLeft: '30px',
                    }}
                    as="p"
                    align="center"
                  >
                    {file.name}
                  </Headding>
                </div>
                <img src="./images/delete.png" alt="tick" className="delete-icon" onClick={removeFile(index)} />
              </div>
            ))}
          </div>
        </div>
        <div className="footer-modal-container">
          <Button onClick={handleClose} logixBlue size="xsmall" additionalClassName="button-modal button-modal-cancel">
            Cancel
          </Button>
          <Button onClick={onApply} logixBlue size="xsmall" additionalClassName="button-modal">
            Apply
          </Button>
        </div>
      </div>
    </Modal>
  );
}

ImageUploadModal.propTypes = {
  onUpload: PropTypes.func,
};

ImageUploadModal.defaultProps = {
  onUpload: () => {},
};
