import React, { useState } from 'react';
import './Overview.css';

const Overview = () => {
  // State Management
  const [showOnboarding, setShowOnboarding] = useState(true);

  return (
    <div className="overview-page">
      {/* Page Header - Title is in main Header component */}

      {/* Scope Filters */}
      <div className="scope-filters-overview">
        <div className="scope-left">
          <span className="scope-label">▼ SCOPE:</span>
          <button className="scope-btn">
            <span className="scope-icon">🌐</span>
            Finance Domain
            <span className="dropdown-arrow">▼</span>
          </button>
          <button className="scope-btn">
            <span className="scope-icon">📦</span>
            Production Environment
            <span className="dropdown-arrow">▼</span>
          </button>
        </div>
        <div className="scope-right">
          <span className="refresh-text">Last refreshed: 2 mins ago</span>
          <button className="refresh-icon-btn">🔄</button>
        </div>
      </div>

      {/* Onboarding Kit Banner */}
      {showOnboarding && (
        <div className="onboarding-banner">
          <div className="onboarding-header">
            <div className="onboarding-left">
              <div className="quick-start-tag">QUICK START</div>
              <h2 className="onboarding-h2">Onboarding Kit</h2>
              <p className="onboarding-desc">
                Welcome to your analytics command center. We've prepared a set of tools 
                to help you hit the ground running. Choose an action below to get started.
              </p>
            </div>
            <button 
              className="onboarding-close-x"
              onClick={() => setShowOnboarding(false)}
            >
              ✕
            </button>
          </div>
          <div className="onboarding-buttons">
            <button className="onboarding-btn primary-btn">
              💻 Request Power BI Desktop
            </button>
            <button className="onboarding-btn secondary-btn">
              👑 Get Premium Capacity
            </button>
            <button className="onboarding-btn tertiary-btn">
              🎓 Take Training
            </button>
            <button className="onboarding-btn quaternary-btn">
              + Create Workspace
            </button>
          </div>
        </div>
      )}

      {/* Review & Approve Reports Section */}
      <div className="section-card">
        <div className="section-header-row">
          <div className="section-header-left">
            <span className="section-icon-title">📋</span>
            <div>
              <h3 className="section-h3">Review & Approve Reports</h3>
              <p className="section-subtitle">Manage report lifecycle and versions</p>
            </div>
          </div>
          <button className="filter-toggle-btn">▼ Filter</button>
        </div>

        <table className="data-table">
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
            <tr>
              <td><button className="chevron-btn">›</button></td>
              <td><span className="table-text">Finance Workspace</span></td>
              <td>
                <div className="dashboard-name-cell">
                  <span className="dashboard-icon green">📊</span>
                  <span>Q4 Revenue Analysis</span>
                </div>
              </td>
              <td><span className="table-text">Oct 24, 2024</span></td>
              <td><span className="version-tag">v2.4</span></td>
              <td>
                <span className="status-badge yellow">
                  ⭐ In Review
                </span>
              </td>
              <td>
                <button className="publish-btn">
                  Publish 🚀
                </button>
              </td>
            </tr>
            <tr>
              <td><button className="chevron-btn">›</button></td>
              <td><span className="table-text">Sales Workspace</span></td>
              <td>
                <div className="dashboard-name-cell">
                  <span className="dashboard-icon purple">🎯</span>
                  <span>Global Targets 2025</span>
                </div>
              </td>
              <td><span className="table-text">Nov 02, 2024</span></td>
              <td><span className="version-tag">v1.0</span></td>
              <td>
                <span className="status-badge blue">
                  ⭐ In Development
                </span>
              </td>
              <td>
                <button className="publish-btn">
                  Publish 🚀
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Non-Compliant Reports Section */}
      <div className="section-card warning-section">
        <div className="section-header-row">
          <div className="section-header-left">
            <span className="section-icon-title warning">⚠️</span>
            <div>
              <h3 className="section-h3">Non-Compliant Reports</h3>
              <p className="section-subtitle">Reports with missing tagging and compliance issues</p>
            </div>
          </div>
          <div className="section-header-right">
            <div className="auto-disable-badge">
              <span className="red-dot">●</span>
              Auto-disable in 5 days
            </div>
            <button className="export-link-btn">⬇️ Export Report</button>
          </div>
        </div>

        <table className="data-table">
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
            <tr className="warning-row">
              <td>
                <div className="report-name-cell">
                  <span className="warning-triangle red">⚠</span>
                  <div>
                    <div className="report-name">Customer Segmentation Analysis</div>
                    <div className="report-workspace">Sales Workspace</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="analyst-info">
                  <img 
                    src="https://ui-avatars.com/api/?name=Emma+Watson&background=ec4899&color=fff" 
                    alt="Emma Watson" 
                    className="analyst-avatar-img"
                  />
                  <div>
                    <div className="analyst-name">Emma Watson</div>
                    <div className="analyst-title">Senior Analyst</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="progress-container">
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill red" style={{ width: '45%' }}></div>
                  </div>
                  <span className="progress-text red">45%</span>
                </div>
              </td>
              <td>
                <div className="tags-container">
                  <span className="tag-chip red">Owner</span>
                  <span className="tag-chip red">Category</span>
                  <span className="tag-chip red">Sensitivity</span>
                </div>
              </td>
              <td>
                <div className="countdown-display">
                  <div className="countdown-number red">3</div>
                  <div className="countdown-label">days</div>
                  <div className="countdown-subtitle">Until disabled</div>
                </div>
              </td>
              <td>
                <button className="fix-btn">Fix Now</button>
              </td>
            </tr>
            <tr className="warning-row">
              <td>
                <div className="report-name-cell">
                  <span className="warning-triangle orange">⚠</span>
                  <div>
                    <div className="report-name">HR Performance Dashboard</div>
                    <div className="report-workspace">HR Workspace</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="analyst-info">
                  <img 
                    src="https://ui-avatars.com/api/?name=Michael+Chen&background=3b82f6&color=fff" 
                    alt="Michael Chen" 
                    className="analyst-avatar-img"
                  />
                  <div>
                    <div className="analyst-name">Michael Chen</div>
                    <div className="analyst-title">Data Analyst</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="progress-container">
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill orange" style={{ width: '82%' }}></div>
                  </div>
                  <span className="progress-text orange">82%</span>
                </div>
              </td>
              <td>
                <div className="tags-container">
                  <span className="tag-chip orange">Department</span>
                  <span className="tag-chip orange">Region</span>
                </div>
              </td>
              <td>
                <div className="countdown-display">
                  <div className="countdown-number orange">7</div>
                  <div className="countdown-label">days</div>
                  <div className="countdown-subtitle">Until disabled</div>
                </div>
              </td>
              <td>
                <button className="fix-btn">Fix Now</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom Grid - Dashboards and Datasets */}
      <div className="bottom-two-column">
        {/* Top Dashboards */}
        <div className="section-card">
          <div className="section-header-left">
            <span className="section-icon-title">🔥</span>
            <div>
              <h3 className="section-h3">Top Dashboards in Use</h3>
              <p className="section-subtitle">Most accessed dashboards this week</p>
            </div>
          </div>

          <div className="dashboard-list">
            <div className="dashboard-item">
              <div className="dashboard-item-left">
                <div className="rank-badge blue">1</div>
                <div>
                  <div className="dashboard-item-name">Sales Performance</div>
                  <div className="dashboard-item-workspace">Finance Workspace</div>
                </div>
              </div>
              <div className="dashboard-views">
                <div className="views-number">12.4K</div>
                <div className="views-label">views</div>
              </div>
            </div>

            <div className="dashboard-item">
              <div className="dashboard-item-left">
                <div className="rank-badge green">2</div>
                <div>
                  <div className="dashboard-item-name">Customer Analytics</div>
                  <div className="dashboard-item-workspace">Sales Workspace</div>
                </div>
              </div>
              <div className="dashboard-views">
                <div className="views-number">9.8K</div>
                <div className="views-label">views</div>
              </div>
            </div>

            <div className="dashboard-item">
              <div className="dashboard-item-left">
                <div className="rank-badge purple">3</div>
                <div>
                  <div className="dashboard-item-name">Operations Overview</div>
                  <div className="dashboard-item-workspace">Ops Workspace</div>
                </div>
              </div>
              <div className="dashboard-views">
                <div className="views-number">7.2K</div>
                <div className="views-label">views</div>
              </div>
            </div>
          </div>
        </div>

        {/* High Resource Datasets */}
        <div className="section-card">
          <div className="section-header-left">
            <span className="section-icon-title">📊</span>
            <div>
              <h3 className="section-h3">High Resource Datasets</h3>
              <p className="section-subtitle">Datasets consuming most resources</p>
            </div>
          </div>

          <div className="dataset-list">
            <div className="dataset-item">
              <div>
                <div className="dataset-name">Global Sales Dataset</div>
                <div className="dataset-memory">2.4 GB Memory</div>
              </div>
              <div className="usage-percent critical">87%</div>
            </div>

            <div className="dataset-item">
              <div>
                <div className="dataset-name">Customer Data Warehouse</div>
                <div className="dataset-memory">1.8 GB Memory</div>
              </div>
              <div className="usage-percent warning">72%</div>
            </div>

            <div className="dataset-item">
              <div>
                <div className="dataset-name">Financial Transactions</div>
                <div className="dataset-memory">1.5 GB Memory</div>
              </div>
              <div className="usage-percent normal">65%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Dataset Refresh Errors */}
      <div className="section-card error-section">
        <div className="section-header-left">
          <span className="section-icon-title error">⚠</span>
          <div>
            <h3 className="section-h3">Dataset Refresh Errors</h3>
            <p className="section-subtitle">Recent failed refresh attempts</p>
          </div>
        </div>

        <table className="data-table">
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
            <tr className="error-row">
              <td><span className="dataset-name-text">Q4 Financial Report</span></td>
              <td><span className="table-text">Finance Workspace</span></td>
              <td><span className="table-text">2 hours ago</span></td>
              <td><span className="error-badge timeout">Connection Timeout</span></td>
              <td><button className="retry-link-btn">Retry</button></td>
            </tr>
            <tr className="error-row">
              <td><span className="dataset-name-text">Sales Pipeline Data</span></td>
              <td><span className="table-text">Sales Workspace</span></td>
              <td><span className="table-text">5 hours ago</span></td>
              <td><span className="error-badge auth">Auth Failed</span></td>
              <td><button className="retry-link-btn">Retry</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;