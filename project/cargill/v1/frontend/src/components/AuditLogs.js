
import React, { useState, useEffect } from 'react';
import './AuditLogs.css';

const AuditLogs = () => {
  // State Management
  const [auditLogs, setAuditLogs] = useState([]);
  const [timeFilter, setTimeFilter] = useState('last-24-hours');
  const [resourceFilter, setResourceFilter] = useState('all');
  const [activityFilter, setActivityFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample audit log data
  useEffect(() => {
    // This would normally fetch from API
    const sampleLogs = [
      {
        id: 1,
        timestamp: 'Nov 24, 2024',
        time: '10:42:15 AM',
        user: {
          name: 'John Doe',
          email: 'john.d@company.com',
          avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=667eea&color=fff'
        },
        activity: {
          type: 'Viewed Report',
          icon: '👁️',
          color: '#3b82f6'
        },
        item: {
          name: 'Q3 Revenue Analysis',
          icon: '📊'
        },
        workspace: 'Finance WS',
        status: 'success'
      },
      {
        id: 2,
        timestamp: 'Nov 24, 2024',
        time: '10:38:22 AM',
        user: {
          name: 'Sarah Smith',
          email: 'sarah.s@company.com',
          avatar: 'https://ui-avatars.com/api/?name=Sarah+Smith&background=ec4899&color=fff'
        },
        activity: {
          type: 'Edited Dataset',
          icon: '✏️',
          color: '#8b5cf6'
        },
        item: {
          name: 'Customer Master',
          icon: '📊'
        },
        workspace: 'Sales Ops',
        status: 'success'
      },
      {
        id: 3,
        timestamp: 'Nov 24, 2024',
        time: '10:15:00 AM',
        user: {
          name: 'System Account',
          email: 'service-principal',
          avatar: null,
          isSystem: true
        },
        activity: {
          type: 'Refresh Dataset',
          icon: '🔄',
          color: '#f97316'
        },
        item: {
          name: 'Logistics Realtime',
          icon: '📊'
        },
        workspace: 'Logistics',
        status: 'failed'
      },
      {
        id: 4,
        timestamp: 'Nov 24, 2024',
        time: '09:53:12 AM',
        user: {
          name: 'Mike Ross',
          email: 'mike.r@company.com',
          avatar: 'https://ui-avatars.com/api/?name=Mike+Ross&background=10b981&color=fff'
        },
        activity: {
          type: 'Shared Dashboard',
          icon: '🔗',
          color: '#10b981'
        },
        item: {
          name: 'Executive Overview',
          icon: '📊'
        },
        workspace: 'Executive',
        status: 'success'
      },
      {
        id: 5,
        timestamp: 'Nov 24, 2024',
        time: '09:30:45 AM',
        user: {
          name: 'Emily Chen',
          email: 'emily.c@company.com',
          avatar: 'https://ui-avatars.com/api/?name=Emily+Chen&background=f59e0b&color=fff'
        },
        activity: {
          type: 'Deleted Report',
          icon: '🗑️',
          color: '#ef4444'
        },
        item: {
          name: 'Old Marketing Report',
          icon: '📊',
          deleted: true
        },
        workspace: 'Marketing',
        status: 'success'
      }
    ];
    setAuditLogs(sampleLogs);
  }, []);

  // Export to CSV function
  const handleExportCSV = () => {
    console.log('Exporting to CSV...');
    alert('Export functionality would be implemented here');
  };

  return (
    <div className="audit-logs">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Audit Logs</h1>
      </div>

      {/* Scope Filters */}
      <div className="scope-filters">
        <span className="scope-label">SCOPE:</span>
        <select className="scope-select">
          <option>🌐 Finance Domain</option>
        </select>
        <select className="scope-select">
          <option>📦 Production Environment</option>
        </select>
        <span className="last-refresh">Last refreshed: 2 mins ago</span>
        <button className="refresh-btn" aria-label="Refresh">🔄</button>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">TOTAL EVENTS (24H)</span>
            <span className="stat-icon blue">📋</span>
          </div>
          <div className="stat-value">14,205</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">UNIQUE USERS</span>
            <span className="stat-icon purple">👥</span>
          </div>
          <div className="stat-value">342</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">FAILED OPERATIONS</span>
            <span className="stat-icon red">⚠️</span>
          </div>
          <div className="stat-value red">28</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">MOST ACTIVE WS</span>
            <span className="stat-icon orange">🔥</span>
          </div>
          <div className="stat-value">Finance Reports</div>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="filter-bar">
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search by user, report name, or activity..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-controls">
          <select 
            className="filter-select"
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
          >
            <option value="last-24-hours">📅 Last 24 Hours</option>
            <option value="last-7-days">Last 7 Days</option>
            <option value="last-30-days">Last 30 Days</option>
          </select>

          <select 
            className="filter-select"
            value={resourceFilter}
            onChange={(e) => setResourceFilter(e.target.value)}
          >
            <option value="all">🗂️ All Resource Types</option>
            <option value="reports">Reports</option>
            <option value="datasets">Datasets</option>
            <option value="dashboards">Dashboards</option>
          </select>

          <select 
            className="filter-select"
            value={activityFilter}
            onChange={(e) => setActivityFilter(e.target.value)}
          >
            <option value="all">⚡ All Activities</option>
            <option value="viewed">Viewed</option>
            <option value="edited">Edited</option>
            <option value="deleted">Deleted</option>
            <option value="shared">Shared</option>
          </select>

          <button className="export-btn" onClick={handleExportCSV}>
            <span>⬇️</span> Export CSV
          </button>
        </div>
      </div>

      {/* Audit Logs Table */}
      <div className="audit-table-container">
        <table className="audit-table">
          <thead>
            <tr>
              <th>TIMESTAMP</th>
              <th>USER</th>
              <th>ACTIVITY</th>
              <th>ITEM NAME</th>
              <th>WORKSPACE</th>
              <th>STATUS</th>
              <th>DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {auditLogs.map((log) => (
              <tr key={log.id}>
                {/* Timestamp */}
                <td>
                  <div className="timestamp-cell">
                    <div className="timestamp-date">{log.timestamp}</div>
                    <div className="timestamp-time">{log.time}</div>
                  </div>
                </td>

                {/* User */}
                <td>
                  <div className="user-cell">
                    {log.user.isSystem ? (
                      <div className="user-avatar system">SYS</div>
                    ) : (
                      <img 
                        src={log.user.avatar} 
                        alt={log.user.name}
                        className="user-avatar"
                      />
                    )}
                    <div className="user-info">
                      <div className="user-name">{log.user.name}</div>
                      <div className="user-email">{log.user.email}</div>
                    </div>
                  </div>
                </td>

                {/* Activity */}
                <td>
                  <div className="activity-cell">
                    <span 
                      className="activity-icon"
                      style={{ backgroundColor: log.activity.color }}
                    >
                      {log.activity.icon}
                    </span>
                    <span className="activity-text">{log.activity.type}</span>
                  </div>
                </td>

                {/* Item Name */}
                <td>
                  <div className="item-cell">
                    <span className="item-icon">{log.item.icon}</span>
                    <span className={`item-name ${log.item.deleted ? 'deleted' : ''}`}>
                      {log.item.name}
                    </span>
                  </div>
                </td>

                {/* Workspace */}
                <td>
                  <span className="workspace-badge">{log.workspace}</span>
                </td>

                {/* Status */}
                <td>
                  <span className={`status-indicator ${log.status}`}>
                    {log.status === 'success' ? '✓' : '✗'}
                  </span>
                </td>

                {/* Details */}
                <td>
                  <button className="details-btn" aria-label="View details">
                    ⋮
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditLogs;