import React from 'react';
import SwitchUI from '@material-ui/core/Switch';

const Switch = ({ field, form, onClick, checked, ...props }) => {
  const isChecked = checked || (field ? field.value : false);

  return (
    <div className="bdb-switch" onClick={onClick}>
      <SwitchUI color="primary" {...field} {...props} checked={isChecked} />
    </div>
  );
};

export default Switch;
