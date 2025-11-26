
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AuditLogs from './components/AuditLogs';
import DatasetRefresh from './components/DatasetRefresh';
import AssetPerformance from './components/AssetPerformance';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="page-wrapper">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dataset-refresh" element={<DatasetRefresh />} />
              <Route path="/audit-logs" element={<AuditLogs />} />
              <Route path="/asset-performance" element={<AssetPerformance />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;