import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import PropertyOverview from './components/PropertyOverview';



function App() {
  return (
    <div className="App" style={{ backgroundColor: "#243642" }}>
      <Header />
      <Sidebar />
      <Dashboard />
      <PropertyOverview />
      
      
    </div>
  );
}

export default App;
