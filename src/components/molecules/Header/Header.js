import React, { useEffect, useRef } from 'react';

import Avatar from '@material-ui/core/Avatar';
import { NavLink, useHistory } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import BrewLogix from './BrewLogix.png';

const links = [
  {
    label: 'Home',
    to: '/',
    exact: true,
  },
  {
    label: 'Locations',
    to: '/locations',
  },
  {
    label: 'Products',
    to: '/products',
  },
  {
    label: 'Team Members',
    to: '/team_members',
  },
];

const Header = ({ userDetails, signout }) => {
  const wrapperRef = useRef('popup');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const history = useHistory();

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleOutsideClick = e => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      handlePopoverClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <header className="bdb-header">
      <div className="bdb-header--navbar">
        <div>
          <img src={BrewLogix} alt="logo" />
        </div>
        {links.map((link, i) => (
          <NavLink key={i} to={link.to} activeClassName="active" exact={link.exact}>
            {link.label}
          </NavLink>
        ))}
      </div>
      <div ref={wrapperRef} onClick={handlePopoverOpen} className="bdb-header--user">
        <p>{userDetails ? `${userDetails.firstName || ''} ${userDetails.lastName || ''}` : ''}</p>
        <Avatar alt="Remy Sharp" />
        <div style={{ display: open ? 'initial' : 'none' }} className="pop-over-container">
          <ArrowDropDownIcon
            style={{
              color: '#fff',
              position: 'absolute',
              top: '-56px',
              right: '15px',
              fontSize: '102px',
              zIndex: 11,
              transform: 'rotate(180deg)',
            }}
          />
          <div className="pop-top-section">
            <span className="pop-greet">{`Hello, ${(userDetails && userDetails.firstName) || ''}!`}</span>
            <span className="pop-email">{(userDetails && userDetails.email) || ''}</span>
            <span
              onClick={e => {
                e.stopPropagation();
                handlePopoverClose();
                history.push(`/profile/${userDetails && userDetails.breweryId}`);
              }}
              className="pop-edit">
              Edit User Profile
            </span>
          </div>
          <div className="pop-top-section">
            <span className="pop-knowledge">Knowledge Center</span>
            <span className="pop-contact">Contact BreweryDB®</span>
            <span className="pop-cont-info">
              317-296-7474 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{' '}
              {(userDetails && userDetails.breweryName) || ''}
            </span>
          </div>
          <div className="pop-footer">
            <span
              onClick={e => {
                e.stopPropagation();
                signout();
                handlePopoverClose();
              }}
              className="pop-signout">
              Sign Out
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
