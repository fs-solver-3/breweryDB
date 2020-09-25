import React from 'react';
import { Modal } from '@material-ui/core';
import PropTypes from 'prop-types';

import './style.css';

const AppModal = ({
  children, isOpen, onClose, title, footer, header, callback, additionalClass,
}) => (
  <Modal open={isOpen} onClose={onClose}>
    <div className={`app-modal-container ${additionalClass}`}>
      {header && <div className="header">{title}</div>}
      {children}
      {footer && (
        <div className="footer">
          <button className="cancel-button" onClick={() => onClose()}>
            Cancel
          </button>
          <button className="finish-button" onClick={() => callback()}>
            Finish
          </button>
        </div>
      )}
    </div>
  </Modal>
);

AppModal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  title: PropTypes.string,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  callback: PropTypes.func,
};

AppModal.defaultProps = {
  onClose: () => {},
  callback: () => {},
  title: '',
  header: true,
  footer: true,
};

export default AppModal;
