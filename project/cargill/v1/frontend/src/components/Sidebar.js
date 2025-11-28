import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if a nav item is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Handle logout
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      // Clear authentication data
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      
      // Redirect to login
      navigate('/login');
    }
  };

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
        <button 
          onClick={() => navigate('/')}
          className={`nav-item ${isActive('/') ? 'active' : ''}`}
        >
          <span className="nav-icon">🏠</span>
          <span className="nav-text">Homepage</span>
        </button>
        
        <button 
          onClick={() => navigate('/dataset-refresh')}
          className={`nav-item ${isActive('/dataset-refresh') ? 'active' : ''}`}
        >
          <span className="nav-icon">🔄</span>
          <span className="nav-text">Dataset Refresh</span>
        </button>
        
        <button 
          onClick={() => navigate('/audit-logs')}
          className={`nav-item ${isActive('/audit-logs') ? 'active' : ''}`}
        >
          <span className="nav-icon">📋</span>
          <span className="nav-text">Audit Logs</span>
        </button>
        
        <button 
          onClick={() => navigate('/asset-performance')}
          className={`nav-item ${isActive('/asset-performance') ? 'active' : ''}`}
        >
          <span className="nav-icon">📊</span>
          <span className="nav-text">Asset Performance</span>
        </button>
      </nav>

      {/* Footer with Logout */}
      <div className="sidebar-footer">
        <button 
          onClick={handleLogout}
          className="logout-btn"
        >
          <span className="nav-icon">🚪</span>
          <span className="nav-text">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;