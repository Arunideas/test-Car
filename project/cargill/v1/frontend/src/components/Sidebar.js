import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar Header with Logo */}
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">📊</div>
          <span className="logo-text">DataAdmin</span>
        </div>
      </div>
      
      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        <a href="/" className="nav-item active">
          <span className="nav-icon">🏠</span>
          <span className="nav-text">Homepage</span>
        </a>
        
        <a href="/dataset-refresh" className="nav-item">
          <span className="nav-icon">🔄</span>
          <span className="nav-text">Dataset Refresh</span>
        </a>
        
        <a href="/audit-logs" className="nav-item">
          <span className="nav-icon">📋</span>
          <span className="nav-text">Audit Logs</span>
        </a>
        
        <a href="/asset-performance" className="nav-item">
          <span className="nav-icon">📊</span>
          <span className="nav-text">Asset Performance</span>
        </a>
      </nav>

      {/* Footer with Logout */}
      <div className="sidebar-footer">
        <a href="/logout" className="logout-btn">
          <span className="nav-icon">🚪</span>
          <span className="nav-text">Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;