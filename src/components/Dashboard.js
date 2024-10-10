import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
        <h1 className="dashboard-heading">Dashboard</h1>
       
        <div className="dashboard">
                        <div className="dashboard-cards">
                <div className="dashboard-card" style={{ backgroundColor: "#DAA520" }}>
                    <h2>Number of Properties</h2>
                    <p className="card-value">3</p>
                    <p className="card-description">Lorem ipsum</p>
                </div>

                <div className="dashboard-card" style={{ backgroundColor: "#FF6F61" }}>
                    <h2>Average Occupancy Rate</h2>
                    <p className="card-value">78.33%</p>
                    <p className="card-description">Lorem ipsum</p>
                </div>

                <div className="dashboard-card" style={{ backgroundColor: "#1E90FF" }}>
                    <h2>Average Vacancy Rate</h2>
                    <p className="card-value">22.00%</p>
                    <p className="card-description">Lorem ipsum</p>
                </div>

                <div className="dashboard-card" style={{ backgroundColor: "#2E8B7B" }}>
                    <h2>Overall Net Profit</h2>
                    <p className="card-value">30,000</p>
                    <p className="card-description">Lorem ipsum</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;
