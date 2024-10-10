import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faSquareMinus } from '@fortawesome/free-solid-svg-icons';

import './PropertyOverview.css';

const PropertyOverview = () => {
  return (
    <div className="property-overview-card">
      {/* Heading */}
      <div>
      <div className="card-header">
        <h2 className="card-title">Property Occupancy Overview</h2>
        
        <div className="card-buttons">
          <button className="action-button">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
          <button className="action-button">
            <FontAwesomeIcon icon={faPlus} /> Add New
          </button>
        </div>
      </div>
      {/* Description */}
      <div className="card-description">
      Detailed occupancy breakdown.
      </div>
      </div>

      

      {/* Table */}
      <table className="property-table">
        <thead>
          <tr>
            <th><FontAwesomeIcon icon={faSquareMinus} /></th>
            <th>Owner Name</th>
            <th>Property Name</th>
            <th>Total Units</th>
            <th>Filled Units</th>
            <th>Vacant Units</th>
            <th>Occupancy Rate</th>
            <th>Last Maintenance Date</th>
          </tr>
        </thead>
        <tbody>
          
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Dinesh {index + 1}</td>
                <td>TajMahal {index + 1}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{new Date().toLocaleDateString()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyOverview;
