import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    
    // Redirect to login
    navigate('/login');
  };

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
          <div className="user-profile-wrapper">
            <div 
              className="user-profile"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img
                src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=667eea&color=fff`}
                alt={user?.name || 'User'}
                className="user-avatar"
              />
              <div className="user-info">
                <div className="user-name">{user?.name || 'User'}</div>
                <div className="user-role">{user?.role || 'User'}</div>
              </div>
            </div>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="profile-dropdown">
                <div className="dropdown-header">
                  <div className="dropdown-user-name">{user?.name}</div>
                  <div className="dropdown-user-email">{user?.email}</div>
                </div>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item" onClick={() => navigate('/profile')}>
                  <span>👤</span>
                  <span>Profile Settings</span>
                </button>
                <button className="dropdown-item" onClick={() => navigate('/settings')}>
                  <span>⚙️</span>
                  <span>Account Settings</span>
                </button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item logout" onClick={handleLogout}>
                  <span>🚪</span>
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;