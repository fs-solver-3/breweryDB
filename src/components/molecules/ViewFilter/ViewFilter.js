import React from 'react';
import PropTypes from 'prop-types';
import Popper from 'components/atoms/Popper';

import PathSvg from './Path.svg';
import GridViewIcon from './GridViewIcon';
import TableViewIcon from './TableViewIcon';

const ViewFilter = ({ onSetActive }) => {
  const [active, setActive] = React.useState(0);

  function handleActive(state) {
    setActive(state);
    if (onSetActive) {
      onSetActive(state);
    }
  }

  return (
    <div className="view-filter">
      <Popper
        className=""
        trigger={
          <div className="view-filter--triger">
            {active === 0 ? <TableViewIcon color="#003a70" /> : <GridViewIcon color="#003a70" />}
            <p>{active === 0 ? 'LIST VIEW' : 'GRID VIEW'}</p>
            <img src={PathSvg} alt="grid-view" />
          </div>
        }>
        <div className="view-filter--popper">
          <div onClick={() => handleActive(0)} className={active === 0 && 'active'}>
            <TableViewIcon color={active === 0 ? '#fff' : '#79ADD5'} />
            <p>LIST VIEW</p>
          </div>
          <div onClick={() => handleActive(1)} className={active === 1 && 'active'}>
            <GridViewIcon color={active === 1 ? '#fff' : '#79ADD5'} />
            <p>GRID VIEW</p>
          </div>
        </div>
      </Popper>
    </div>
  );
};

ViewFilter.propTypes = {
  onSetActive: PropTypes.func,
};

export default ViewFilter;
