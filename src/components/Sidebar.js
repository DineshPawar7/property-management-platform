import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faList, faCogs, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="website-name">Dinesh Pawar</h1>
      </div>

      {/* Main Menu Section */}
      <div className="main-menu">
        <h2 className="menu-title">MAIN MENU</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faTachometerAlt} className="menu-icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} className="menu-icon" />
            <span>Create Portfolio</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faList} className="menu-icon" />
            <span>Property List</span>
          </li>
        </ul>
      </div>

      {/* Other Section */}
      <div className="other-section">
        <h2 className="menu-title">OTHER</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCogs} className="menu-icon" />
            <span>Settings</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faLifeRing} className="menu-icon" />
            <span>Contact Support</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
