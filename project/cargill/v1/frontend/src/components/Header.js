import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Left Section - Page Title */}
      <div className="header-left">
        <h1 className="page-title">Overview</h1>
      </div>
      
      {/* Right Section - Search, Notifications, and Profile */}
      <div className="header-right">
        {/* Search Box */}
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search environment, domain..."
            className="search-input"
          />
        </div>
        
        {/* Header Actions */}
        <div className="header-actions">
          {/* Notification Button */}
          <button className="notification-btn" aria-label="Notifications">
            <span>🔔</span>
            <span className="notification-badge">1</span>
          </button>
          
          {/* User Profile */}
          <div className="user-profile">
            <img
              src="https://ui-avatars.com/api/?name=Alex+Morgan&background=667eea&color=fff"
              alt="Alex Morgan"
              className="user-avatar"
            />
            <div className="user-info">
              <div className="user-name">Alex Morgan</div>
              <div className="user-role">Admin</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;