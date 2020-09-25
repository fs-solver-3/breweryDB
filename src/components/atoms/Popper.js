import React from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import Fade from '@material-ui/core/Fade';
import PopperUI from '@material-ui/core/Popper';

const Popper = ({ trigger, children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'transitions-popper' : undefined;

  return (
    <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
      <div>
        <div aria-describedby={id} onClick={handleClick}>
          {trigger}
        </div>
        <PopperUI id={id} open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              {children}
            </Fade>
          )}
        </PopperUI>
      </div>
    </ClickAwayListener>
  );
};

Popper.propTypes = {
  trigger: PropTypes.node,
  children: PropTypes.node,
};

export default Popper;
