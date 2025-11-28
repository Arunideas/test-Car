import React, { useState } from 'react';
import './Homepage.css';

const Homepage = () => {
  // State Management
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data for Review & Approve Reports
  const approveReports = [
    {
      id: 1,
      workspace: 'Finance Workspace',
      dashboardName: 'Q4 Revenue Analysis',
      icon: '📊',
      iconColor: '#10b981',
      createdDate: 'Oct 24, 2024',
      version: 'v2.4',
      status: 'In Review',
      statusColor: '#f59e0b'
    },
    {
      id: 2,
      workspace: 'Sales Workspace',
      dashboardName: 'Global Targets 2025',
      icon: '🎯',
      iconColor: '#8b5cf6',
      createdDate: 'Nov 02, 2024',
      version: 'v1.0',
      status: 'In Development',
      statusColor: '#3b82f6'
    }
  ];

  // Non-Compliant Reports
  const nonCompliantReports = [
    {
      id: 1,
      name: 'Customer Segmentation Analysis',
      workspace: 'Sales Workspace',
      analyst: {
        name: 'Emma Watson',
        role: 'Senior Analyst',
        avatar: 'https://ui-avatars.com/api/?name=Emma+Watson&background=ec4899&color=fff'
      },
      taggingComplete: 45,
      missingTags: ['Owner', 'Category', 'Sensitivity'],
      disableCountdown: {
        days: 3,
        label: 'Until disabled'
      },
      warningLevel: 'high'
    },
    {
      id: 2,
      name: 'HR Performance Dashboard',
      workspace: 'HR Workspace',
      analyst: {
        name: 'Michael Chen',
        role: 'Data Analyst',
        avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=3b82f6&color=fff'
      },
      taggingComplete: 82,
      missingTags: ['Department', 'Region'],
      disableCountdown: {
        days: 7,
        label: 'Until disabled'
      },
      warningLevel: 'medium'
    }
  ];

  // Top Dashboards
  const topDashboards = [
    {
      rank: 1,
      name: 'Sales Performance',
      workspace: 'Finance Workspace',
      views: 12400,
      color: '#3b82f6'
    },
    {
      rank: 2,
      name: 'Customer Analytics',
      workspace: 'Sales Workspace',
      views: 9800,
      color: '#10b981'
    },
    {
      rank: 3,
      name: 'Operations Overview',
      workspace: 'Ops Workspace',
      views: 7200,
      color: '#8b5cf6'
    }
  ];

  // High Resource Datasets
  const highResourceDatasets = [
    {
      name: 'Global Sales Dataset',
      memory: '2.4 GB Memory',
      usage: 87
    },
    {
      name: 'Customer Data Warehouse',
      memory: '1.8 GB Memory',
      usage: 72
    },
    {
      name: 'Financial Transactions',
      memory: '1.5 GB Memory',
      usage: 65
    }
  ];

  // Dataset Refresh Errors
  const refreshErrors = [
    {
      id: 1,
      name: 'Q4 Financial Report',
      workspace: 'Finance Workspace',
      lastAttempt: '2 hours ago',
      errorType: 'Connection Timeout'
    },
    {
      id: 2,
      name: 'Sales Pipeline Data',
      workspace: 'Sales Workspace',
      lastAttempt: '5 hours ago',
      errorType: 'Auth Failed'
    }
  ];

  const handleExportReport = () => {
    alert('Exporting report...');
  };

  const handleFixNow = (reportName) => {
    alert(`Fixing tags for ${reportName}...`);
  };

  const handleRetry = (datasetName) => {
    alert(`Retrying refresh for ${datasetName}...`);
  };

  return (
    <div className="homepage">
      {/* Page Header */}
      <div className="homepage-header">
        <h1 className="homepage-title">Overview</h1>
        <div className="homepage-header-right">
          <div className="header-search-bar">
            <span className="search-icon-header">🔍</span>
            <input
              type="text"
              placeholder="Search environment, domain..."
              className="search-input-main"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select className="environment-select">
            <option>All Environments</option>
          </select>
          <select className="domain-select">
            <option>All Domains</option>
          </select>
        </div>
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

      {/* Onboarding Kit */}
      {showOnboarding && (
        <div className="onboarding-kit">
          <div className="onboarding-content">
            <div className="onboarding-text">
              <span className="quick-start-label">QUICK START</span>
              <h2 className="onboarding-title">Onboarding Kit</h2>
              <p className="onboarding-description">
                Welcome to your analytics command center. We've prepared a set of tools 
                to help you hit the ground running. Choose an action below to get started.
              </p>
            </div>
            <button 
              className="onboarding-close"
              onClick={() => setShowOnboarding(false)}
              aria-label="Close onboarding"
            >
              ✕
            </button>
          </div>
          <div className="onboarding-actions-grid">
            <button className="onboarding-action-btn primary">
              <span className="btn-icon">💻</span>
              Request Power BI Desktop
            </button>
            <button className="onboarding-action-btn secondary">
              <span className="btn-icon">👑</span>
              Get Premium Capacity
            </button>
            <button className="onboarding-action-btn tertiary">
              <span className="btn-icon">🎓</span>
              Take Training
            </button>
            <button className="onboarding-action-btn quaternary">
              <span className="btn-icon">+</span>
              Create Workspace
            </button>
          </div>
        </div>
      )}

      {/* Review & Approve Reports */}
      <div className="reports-section">
        <div className="section-header-reports">
          <div className="section-title-icon-group">
            <span className="section-icon-list">📋</span>
            <div>
              <h3 className="section-title-reports">Review & Approve Reports</h3>
              <p className="section-subtitle-reports">Manage report lifecycle and versions</p>
            </div>
          </div>
          <button className="filter-btn-reports">▼ Filter</button>
        </div>

        <div className="reports-table-wrapper">
          <table className="reports-table">
            <thead>
              <tr>
                <th></th>
                <th>WORKSPACE</th>
                <th>DASHBOARD NAME</th>
                <th>CREATED DATE</th>
                <th>VERSION</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {approveReports.map((report) => (
                <tr key={report.id}>
                  <td>
                    <button className="expand-btn">›</button>
                  </td>
                  <td>
                    <span className="workspace-name">{report.workspace}</span>
                  </td>
                  <td>
                    <div className="dashboard-name-group">
                      <span 
                        className="dashboard-icon-small"
                        style={{ backgroundColor: report.iconColor }}
                      >
                        {report.icon}
                      </span>
                      <span className="dashboard-name-text">{report.dashboardName}</span>
                    </div>
                  </td>
                  <td>
                    <span className="date-text">{report.createdDate}</span>
                  </td>
                  <td>
                    <span className="version-text">{report.version}</span>
                  </td>
                  <td>
                    <span 
                      className="status-pill"
                      style={{ 
                        backgroundColor: `${report.statusColor}20`,
                        color: report.statusColor,
                        border: `1px solid ${report.statusColor}40`
                      }}
                    >
                      ⭐ {report.status}
                    </span>
                  </td>
                  <td>
                    <button className="action-btn-primary">
                      Publish 🚀
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Non-Compliant Reports */}
      <div className="non-compliant-section">
        <div className="section-header-warning-main">
          <div className="warning-header-left">
            <span className="warning-icon-large">⚠️</span>
            <div>
              <h3 className="section-title-reports">Non-Compliant Reports</h3>
              <p className="section-subtitle-reports">Reports with missing tagging and compliance issues</p>
            </div>
          </div>
          <div className="warning-header-right">
            <div className="auto-disable-warning">
              <span className="warning-dot">●</span>
              Auto-disable in 5 days
            </div>
            <button className="export-report-btn" onClick={handleExportReport}>
              ⬇️ Export Report
            </button>
          </div>
        </div>

        <div className="non-compliant-table-wrapper">
          <table className="non-compliant-table">
            <thead>
              <tr>
                <th>REPORT NAME</th>
                <th>ANALYST</th>
                <th>TAGGING COMPLETE</th>
                <th>MISSING TAGS</th>
                <th>DISABLE COUNTDOWN</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {nonCompliantReports.map((report) => (
                <tr key={report.id} className={`warning-row-${report.warningLevel}`}>
                  <td>
                    <div className="report-name-cell">
                      <span className={`warning-indicator ${report.warningLevel}`}>⚠</span>
                      <div>
                        <div className="report-name-main">{report.name}</div>
                        <div className="report-workspace-sub">{report.workspace}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="analyst-cell">
                      <img 
                        src={report.analyst.avatar} 
                        alt={report.analyst.name}
                        className="analyst-avatar"
                      />
                      <div>
                        <div className="analyst-name">{report.analyst.name}</div>
                        <div className="analyst-role">{report.analyst.role}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-cell">
                      <div className="progress-bar-wrapper">
                        <div 
                          className={`progress-bar-fill ${report.taggingComplete < 50 ? 'low' : 'medium'}`}
                          style={{ width: `${report.taggingComplete}%` }}
                        ></div>
                      </div>
                      <span className={`progress-percentage ${report.taggingComplete < 50 ? 'low' : 'medium'}`}>
                        {report.taggingComplete}%
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="tags-cell">
                      {report.missingTags.map((tag, index) => (
                        <span key={index} className="missing-tag">{tag}</span>
                      ))}
                    </div>
                  </td>
                  <td>
                    <div className="countdown-cell">
                      <div className={`countdown-days ${report.warningLevel}`}>
                        {report.disableCountdown.days}
                      </div>
                      <div className="countdown-label">days</div>
                    </div>
                  </td>
                  <td>
                    <button 
                      className="fix-now-btn"
                      onClick={() => handleFixNow(report.name)}
                    >
                      Fix Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Grid: Top Dashboards & High Resource Usage */}
      <div className="bottom-grid">
        {/* Top Dashboards */}
        <div className="top-dashboards-card">
          <div className="card-header-simple">
            <div className="card-header-left">
              <span className="card-icon fire">🔥</span>
              <div>
                <h3 className="card-title">Top Dashboards in Use</h3>
                <p className="card-subtitle">Most accessed dashboards this week</p>
              </div>
            </div>
          </div>
          
          <div className="dashboard-stats-list">
            {topDashboards.map((dashboard) => (
              <div key={dashboard.rank} className="dashboard-stat-row">
                <div className="dashboard-stat-left">
                  <div 
                    className="dashboard-rank-badge"
                    style={{ backgroundColor: dashboard.color }}
                  >
                    {dashboard.rank}
                  </div>
                  <div>
                    <div className="dashboard-stat-name">{dashboard.name}</div>
                    <div className="dashboard-stat-workspace">{dashboard.workspace}</div>
                  </div>
                </div>
                <div className="dashboard-stat-views">
                  <strong>{(dashboard.views / 1000).toFixed(1)}K</strong>
                  <span className="views-label">views</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* High Resource Datasets */}
        <div className="high-resource-card">
          <div className="card-header-simple">
            <div className="card-header-left">
              <span className="card-icon purple">📊</span>
              <div>
                <h3 className="card-title">High Resource Datasets</h3>
                <p className="card-subtitle">Datasets consuming most resources</p>
              </div>
            </div>
          </div>

          <div className="resource-stats-list">
            {highResourceDatasets.map((dataset, index) => (
              <div key={index} className="resource-stat-row">
                <div>
                  <div className="resource-stat-name">{dataset.name}</div>
                  <div className="resource-stat-memory">{dataset.memory}</div>
                </div>
                <div className={`resource-usage-value ${dataset.usage > 80 ? 'critical' : dataset.usage > 60 ? 'warning' : 'normal'}`}>
                  {dataset.usage}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dataset Refresh Errors */}
      <div className="refresh-errors-section">
        <div className="section-header-error">
          <div className="error-header-left">
            <span className="error-icon-circle">⚠</span>
            <div>
              <h3 className="section-title-reports">Dataset Refresh Errors</h3>
              <p className="section-subtitle-reports">Recent failed refresh attempts</p>
            </div>
          </div>
        </div>

        <div className="errors-table-wrapper">
          <table className="errors-table">
            <thead>
              <tr>
                <th>DATASET NAME</th>
                <th>WORKSPACE</th>
                <th>LAST ATTEMPT</th>
                <th>ERROR TYPE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {refreshErrors.map((error) => (
                <tr key={error.id} className="error-row">
                  <td>
                    <div className="error-dataset-name">{error.name}</div>
                  </td>
                  <td>
                    <span className="error-workspace">{error.workspace}</span>
                  </td>
                  <td>
                    <span className="error-time">{error.lastAttempt}</span>
                  </td>
                  <td>
                    <span className={`error-type-badge ${error.errorType === 'Connection Timeout' ? 'timeout' : 'auth'}`}>
                      {error.errorType}
                    </span>
                  </td>
                  <td>
                    <button 
                      className="retry-btn"
                      onClick={() => handleRetry(error.name)}
                    >
                      Retry
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

  const handlePublish = (reportName) => {
    alert(`Publishing ${reportName}...`);
  };

  const handleFixNow = (reportName) => {
    alert(`Fixing tags for ${reportName}...`);
  };

  const handleRetry = (datasetName) => {
    alert(`Retrying refresh for ${datasetName}...`);
  };

  const handleExportReport = () => {
    alert('Exporting report...');
  };

  return (
    <div className="homepage">
      {/* Page Header */}
      <div className="homepage-header">
        <h1 className="homepage-title">Overview</h1>
        <div className="homepage-header-right">
          <div className="header-search-bar">
            <span className="search-icon-header">🔍</span>
            <input
              type="text"
              placeholder="Search environment, domain..."
              className="search-input-main"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select className="environment-select">
            <option>All Environments</option>
          </select>
          <select className="domain-select">
            <option>All Domains</option>
          </select>
        </div>
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

      {/* Onboarding Kit */}
      {showOnboarding && (
        <div className="onboarding-kit">
          <div className="onboarding-content">
            <div className="onboarding-text">
              <span className="quick-start-label">QUICK START</span>
              <h2 className="onboarding-title">Onboarding Kit</h2>
              <p className="onboarding-description">
                Welcome to your analytics command center. We've prepared a set of tools 
                to help you hit the ground running. Choose an action below to get started.
              </p>
            </div>
            <button 
              className="onboarding-close"
              onClick={() => setShowOnboarding(false)}
              aria-label="Close onboarding"
            >
              ✕
            </button>
          </div>
          <div className="onboarding-actions-grid">
            <button className="onboarding-action-btn primary">
              <span className="btn-icon">💻</span>
              Request Power BI Desktop
            </button>
            <button className="onboarding-action-btn secondary">
              <span className="btn-icon">👑</span>
              Get Premium Capacity
            </button>
            <button className="onboarding-action-btn tertiary">
              <span className="btn-icon">🎓</span>
              Take Training
            </button>
            <button className="onboarding-action-btn quaternary">
              <span className="btn-icon">+</span>
              Create Workspace
            </button>
          </div>
        </div>
      )}

      {/* Review & Approve Reports */}
      <div className="reports-section">
        <div className="section-header-reports">
          <div className="section-title-icon-group">
            <span className="section-icon-list">📋</span>
            <div>
              <h3 className="section-title-reports">Under Development & Review</h3>
              <p className="section-subtitle-reports">Manage report lifecycle and versions</p>
            </div>
          </div>
          <button className="filter-btn-reports">▼ Filter</button>
        </div>

        <div className="reports-table-wrapper">
          <table className="reports-table">
            <thead>
              <tr>
                <th></th>
                <th>WORKSPACE</th>
                <th>DASHBOARD NAME</th>
                <th>CREATED DATE</th>
                <th>VERSION</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {approveReports.map((report) => (
                <tr key={report.id}>
                  <td>
                    <button className="expand-btn">›</button>
                  </td>
                  <td>
                    <span className="workspace-name">{report.workspace}</span>
                  </td>
                  <td>
                    <div className="dashboard-name-group">
                      <span 
                        className="dashboard-icon-small"
                        style={{ backgroundColor: report.iconColor }}
                      >
                        {report.icon}
                      </span>
                      <span className="dashboard-name-text">{report.dashboardName}</span>
                    </div>
                  </td>
                  <td>
                    <span className="date-text">{report.createdDate}</span>
                  </td>
                  <td>
                    <span className="version-text">{report.version}</span>
                  </td>
                  <td>
                    <span 
                      className="status-pill"
                      style={{ 
                        backgroundColor: `${report.statusColor}20`,
                        color: report.statusColor,
                        border: `1px solid ${report.statusColor}40`
                      }}
                    >
                      ⭐ {report.status}
                    </span>
                  </td>
                  <td>
                    <button 
                      className="action-btn-primary"
                      onClick={() => handlePublish(report.dashboardName)}
                    >
                      Send for Review 🚀
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Non-Compliant Reports */}
      <div className="non-compliant-section">
        <div className="section-header-warning-main">
          <div className="warning-header-left">
            <span className="warning-icon-large">⚠️</span>
            <div>
              <h3 className="section-title-reports">Non-Compliant Reports</h3>
              <p className="section-subtitle-reports">Reports with missing tagging and compliance issues</p>
            </div>
          </div>
          <div className="warning-header-right">
            <div className="auto-disable-warning">
              <span className="warning-dot">●</span>
              Auto-disable in 5 days
            </div>
            <button className="export-report-btn" onClick={handleExportReport}>
              ⬇️ Export Report
            </button>
          </div>
        </div>

        <div className="non-compliant-table-wrapper">
          <table className="non-compliant-table">
            <thead>
              <tr>
                <th>REPORT NAME</th>
                <th>ANALYST</th>
                <th>TAGGING COMPLETE</th>
                <th>MISSING TAGS</th>
                <th>DISABLE COUNTDOWN</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {nonCompliantReports.map((report) => (
                <tr key={report.id} className={`warning-row-${report.warningLevel}`}>
                  <td>
                    <div className="report-name-cell">
                      <span className={`warning-indicator ${report.warningLevel}`}>⚠</span>
                      <div>
                        <div className="report-name-main">{report.name}</div>
                        <div className="report-workspace-sub">{report.workspace}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="analyst-cell">
                      <img 
                        src={report.analyst.avatar} 
                        alt={report.analyst.name}
                        className="analyst-avatar"
                      />
                      <div>
                        <div className="analyst-name">{report.analyst.name}</div>
                        <div className="analyst-role">{report.analyst.role}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-cell">
                      <div className="progress-bar-wrapper">
                        <div 
                          className={`progress-bar-fill ${report.taggingComplete < 50 ? 'low' : 'medium'}`}
                          style={{ width: `${report.taggingComplete}%` }}
                        ></div>
                      </div>
                      <span className={`progress-percentage ${report.taggingComplete < 50 ? 'low' : 'medium'}`}>
                        {report.taggingComplete}%
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="tags-cell">
                      {report.missingTags.map((tag, index) => (
                        <span key={index} className="missing-tag">{tag}</span>
                      ))}
                    </div>
                  </td>
                  <td>
                    <div className="countdown-cell">
                      <div className={`countdown-days ${report.warningLevel}`}>
                        {report.disableCountdown.days}
                      </div>
                      <div className="countdown-label">DAYS</div>
                    </div>
                  </td>
                  <td>
                    <button 
                      className="fix-now-btn"
                      onClick={() => handleFixNow(report.name)}
                    >
                      🏷️ Fix Tags
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Grid: Top Dashboards & High Resource Usage */}
      <div className="bottom-grid">
        {/* Top Dashboards */}
        <div className="top-dashboards-card">
          <div className="card-header-simple">
            <div className="card-header-left">
              <span className="card-icon fire">🔥</span>
              <div>
                <h3 className="card-title">Top Dashboards in Use</h3>
                <p className="card-subtitle">Most accessed dashboards this month</p>
              </div>
            </div>
          </div>
          
          <div className="dashboard-stats-table">
            <div className="stats-table-header">
              <span className="stats-col-label">DASHBOARD</span>
              <span className="stats-col-label">VIEWS</span>
              <span className="stats-col-label">USERS</span>
            </div>
            {topDashboards.map((dashboard) => (
              <div key={dashboard.rank} className="dashboard-stat-row">
                <div className="dashboard-stat-left">
                  <div 
                    className="dashboard-rank-badge"
                    style={{ backgroundColor: dashboard.color }}
                  >
                    {dashboard.rank}
                  </div>
                  <div>
                    <div className="dashboard-stat-name">{dashboard.name}</div>
                    <div className="dashboard-stat-workspace">{dashboard.workspace}</div>
                  </div>
                </div>
                <div className="dashboard-stat-views">
                  {(dashboard.views / 1000).toFixed(1)}K
                </div>
                <div className="dashboard-stat-users">
                  {dashboard.users}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* High Resource Usage */}
        <div className="high-resource-card">
          <div className="card-header-simple">
            <div className="card-header-left">
              <span className="card-icon purple">📊</span>
              <div>
                <h3 className="card-title">High Resource Usage</h3>
                <p className="card-subtitle">Datasets consuming significant resources</p>
              </div>
            </div>
          </div>

          <div className="resource-stats-table">
            <div className="stats-table-header">
              <span className="stats-col-label">DATASET</span>
              <span className="stats-col-label">CPU</span>
              <span className="stats-col-label">MEMORY</span>
            </div>
            {highResourceDatasets.map((dataset, index) => (
              <div key={index} className="resource-stat-row">
                <div className="resource-stat-name">{dataset.name}</div>
                <div className={`resource-cpu-value ${dataset.cpu > 80 ? 'critical' : dataset.cpu > 60 ? 'warning' : 'normal'}`}>
                  {dataset.cpu}%
                </div>
                <div className="resource-memory-value">{dataset.memory}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dataset Refresh Errors */}
      <div className="refresh-errors-section">
        <div className="section-header-error">
          <div className="error-header-left">
            <span className="error-icon-circle">⚠</span>
            <div>
              <h3 className="section-title-reports">Dataset Refresh Errors</h3>
              <p className="section-subtitle-reports">Recent failures and issues requiring attention</p>
            </div>
          </div>
        </div>

        <div className="errors-table-wrapper">
          <table className="errors-table">
            <thead>
              <tr>
                <th>DATASET NAME</th>
                <th>WORKSPACE</th>
                <th>ERROR MESSAGE</th>
                <th>LAST ATTEMPT</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {refreshErrors.map((error) => (
                <tr key={error.id} className="error-row">
                  <td>
                    <div className="error-dataset-name">{error.name}</div>
                  </td>
                  <td>
                    <span className="error-workspace">{error.workspace}</span>
                  </td>
                  <td>
                    <span className={`error-type-badge ${error.errorType === 'Connection timeout' ? 'timeout' : 'auth'}`}>
                      {error.errorMessage}
                    </span>
                  </td>
                  <td>
                    <span className="error-time">{error.lastAttempt}</span>
                  </td>
                  <td>
                    <button 
                      className="retry-btn"
                      onClick={() => handleRetry(error.name)}
                    >
                      Retry
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Homepage;