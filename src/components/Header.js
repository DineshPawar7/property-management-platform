import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
      </div>

      <div className="header-right">
        <FontAwesomeIcon icon={faBell} className="bell-icon" />
        <div className="user-info">
          <img
            src="https://avatars.githubusercontent.com/u/175672643?v=4"
            alt="User Logo"
            className="user-logo"
          />
          <span className="user-name">Dinesh Pawar</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
