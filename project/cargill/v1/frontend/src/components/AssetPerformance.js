import React, { useState } from 'react';
import './AssetPerformance.css';

const AssetPerformance = () => {
  // State Management
  const [viewMode, setViewMode] = useState('week');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample chart data for dashboard views
  const dashboardViewsData = [
    { day: 'Mon', value: 1500 },
    { day: 'Tue', value: 1600 },
    { day: 'Wed', value: 1300 },
    { day: 'Thu', value: 2000 },
    { day: 'Fri', value: 2100 },
    { day: 'Sat', value: 1000 },
    { day: 'Sun', value: 800 }
  ];

  // Sample dataset performance data
  const datasetPerformance = [
    {
      id: 1,
      name: 'Finance_Global_Model',
      owner: 'J. Smith',
      cpu: { usage: 82, memory: 140 },
      execution: { time: '45m 12s', comparison: '+12% vs avg' },
      concurrency: 8,
      queuing: '12m',
      status: 'Healthy'
    },
    {
      id: 2,
      name: 'Sales_Daily_Agg',
      owner: 'M. Ross',
      cpu: { usage: 24, memory: 4 },
      execution: { time: '12m 05s', comparison: 'Within SLA' },
      concurrency: 2,
      queuing: '—',
      status: 'Healthy'
    },
    {
      id: 3,
      name: 'HR_Employee_Master',
      owner: 'S. Connor',
      cpu: { usage: 65, memory: 8 },
      execution: { time: '28m 48s', comparison: 'Near Timeout' },
      concurrency: 4,
      queuing: '5m',
      status: 'Warning'
    }
  ];

  // Dashboard usage data
  const dashboardUsage = [
    {
      name: 'Executive Summary',
      lastUpdated: '2 hours ago',
      viewsWeek: 1247,
      viewsMonth: 5893,
      uniqueUsers: 234,
      avgSession: '8m 42s'
    },
    {
      name: 'Sales Performance',
      lastUpdated: '1 hour ago',
      viewsWeek: 892,
      viewsMonth: 3456,
      uniqueUsers: 156,
      avgSession: '6m 18s'
    },
    {
      name: 'Financial Overview',
      lastUpdated: '42 min ago',
      viewsWeek: 543,
      viewsMonth: 2187,
      uniqueUsers: 89,
      avgSession: '12m 05s'
    }
  ];

  // Assets missing metadata
  const missingMetadata = [
    {
      name: 'Customer_Analytics_DB',
      type: 'Dataset',
      environment: true,
      enterprise: false,
      subfunction: false,
      description: true,
      title: true,
      domain: false
    },
    {
      name: 'Marketing_Dashboard',
      type: 'Dashboard',
      environment: false,
      enterprise: true,
      subfunction: false,
      description: false,
      title: true,
      domain: true
    },
    {
      name: 'Operations_Report',
      type: 'Dataset',
      environment: true,
      enterprise: false,
      subfunction: true,
      description: false,
      title: false,
      domain: true
    }
  ];

  const handleExport = () => {
    alert('Export functionality would be implemented here');
  };

  return (
    <div className="asset-performance">
      {/* Page Header */}
      <div className="page-header-performance">
        <h1 className="page-title-performance">Performance Overview</h1>
      </div>

      {/* Scope Filters */}
      <div className="scope-filters">
        <span className="scope-label">SCOPE:</span>
        <select className="scope-select">
          <option>🌐 Finance Domain</option>
        </select>
        <select className="scope-select">
          <option>🏢 Global Enterprise</option>
        </select>
        <span className="last-refresh">Last refreshed: 10 mins ago</span>
        <button className="refresh-btn" aria-label="Refresh">🔄</button>
      </div>

      {/* Charts Section */}
      <div className="charts-grid">
        {/* Dashboard Views Trend */}
        <div className="chart-card">
          <div className="chart-header">
            <div className="chart-title-group">
              <span className="chart-icon blue">📊</span>
              <h3 className="chart-title">Dashboard Views Trend</h3>
            </div>
            <div className="view-toggle">
              <button 
                className={`toggle-btn ${viewMode === 'week' ? 'active' : ''}`}
                onClick={() => setViewMode('week')}
              >
                Week
              </button>
              <button 
                className={`toggle-btn ${viewMode === 'month' ? 'active' : ''}`}
                onClick={() => setViewMode('month')}
              >
                Month
              </button>
            </div>
          </div>
          <div className="chart-content">
            <svg className="line-chart" viewBox="0 0 500 200">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05"/>
                </linearGradient>
              </defs>
              
              {/* Grid lines */}
              <line x1="50" y1="160" x2="450" y2="160" stroke="#e5e7eb" strokeWidth="1"/>
              <line x1="50" y1="120" x2="450" y2="120" stroke="#e5e7eb" strokeWidth="1"/>
              <line x1="50" y1="80" x2="450" y2="80" stroke="#e5e7eb" strokeWidth="1"/>
              <line x1="50" y1="40" x2="450" y2="40" stroke="#e5e7eb" strokeWidth="1"/>
              
              {/* Y-axis labels */}
              <text x="35" y="165" fontSize="11" fill="#9ca3af" textAnchor="end">0</text>
              <text x="35" y="125" fontSize="11" fill="#9ca3af" textAnchor="end">500</text>
              <text x="35" y="85" fontSize="11" fill="#9ca3af" textAnchor="end">1000</text>
              <text x="35" y="45" fontSize="11" fill="#9ca3af" textAnchor="end">1500</text>
              <text x="35" y="25" fontSize="11" fill="#9ca3af" textAnchor="end">2000</text>
              
              {/* Area fill */}
              <path
                d="M 70,120 L 120,105 L 170,125 L 220,40 L 270,30 L 320,100 L 370,140"
                fill="url(#lineGradient)"
                stroke="none"
              />
              <path
                d="M 70,120 L 120,105 L 170,125 L 220,40 L 270,30 L 320,100 L 370,140 L 370,160 L 70,160 Z"
                fill="url(#lineGradient)"
              />
              
              {/* Line */}
              <path
                d="M 70,120 L 120,105 L 170,125 L 220,40 L 270,30 L 320,100 L 370,140"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* X-axis labels */}
              <text x="70" y="180" fontSize="11" fill="#6b7280" textAnchor="middle">Mon</text>
              <text x="120" y="180" fontSize="11" fill="#6b7280" textAnchor="middle">Tue</text>
              <text x="170" y="180" fontSize="11" fill="#6b7280" textAnchor="middle">Wed</text>
              <text x="220" y="180" fontSize="11" fill="#6b7280" textAnchor="middle">Thu</text>
              <text x="270" y="180" fontSize="11" fill="#6b7280" textAnchor="middle">Fri</text>
              <text x="320" y="180" fontSize="11" fill="#6b7280" textAnchor="middle">Sat</text>
              <text x="370" y="180" fontSize="11" fill="#6b7280" textAnchor="middle">Sun</text>
            </svg>
          </div>
        </div>

        {/* Dataset Resource Impact */}
        <div className="chart-card">
          <div className="chart-header">
            <div className="chart-title-group">
              <span className="chart-icon yellow">📊</span>
              <h3 className="chart-title">Dataset Resource Impact</h3>
            </div>
            <span className="chart-subtitle">CPU vs Memory Usage</span>
          </div>
          <div className="chart-content bar-chart-content">
            <svg className="bar-chart" viewBox="0 0 400 200">
              {/* Bars */}
              <g>
                {/* Finance Model */}
                <rect x="30" y="30" width="60" height="130" fill="#ef4444" rx="4"/>
                <rect x="30" y="140" width="60" height="20" fill="#fbbf24" rx="4"/>
                
                {/* Sales Agg */}
                <rect x="120" y="130" width="60" height="30" fill="#ef4444" rx="4"/>
                <rect x="120" y="145" width="60" height="15" fill="#fbbf24" rx="4"/>
                
                {/* HR Master */}
                <rect x="210" y="50" width="60" height="110" fill="#ef4444" rx="4"/>
                <rect x="210" y="120" width="60" height="40" fill="#fbbf24" rx="4"/>
                
                {/* Ops Report */}
                <rect x="300" y="90" width="60" height="70" fill="#ef4444" rx="4"/>
                <rect x="300" y="130" width="60" height="30" fill="#fbbf24" rx="4"/>
              </g>
              
              {/* X-axis labels */}
              <text x="60" y="185" fontSize="10" fill="#6b7280" textAnchor="middle">Finance Model</text>
              <text x="150" y="185" fontSize="10" fill="#6b7280" textAnchor="middle">Sales Agg</text>
              <text x="240" y="185" fontSize="10" fill="#6b7280" textAnchor="middle">HR Master</text>
              <text x="330" y="185" fontSize="10" fill="#6b7280" textAnchor="middle">Ops Report</text>
            </svg>
            <div className="legend">
              <div className="legend-item">
                <span className="legend-color cpu"></span>
                <span className="legend-label">CPU</span>
              </div>
              <div className="legend-item">
                <span className="legend-color memory"></span>
                <span className="legend-label">Memory</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dataset Performance Metrics */}
      <div className="performance-metrics-section">
        <div className="section-header-performance">
          <div className="section-title-group">
            <span className="section-icon purple">📊</span>
            <div>
              <h3 className="section-title-main">Dataset Performance Metrics</h3>
              <p className="section-subtitle-main">Detailed breakdown of execution, resources, and concurrency</p>
            </div>
          </div>
          <div className="section-actions">
            <input
              type="text"
              placeholder="Search datasets..."
              className="search-input-section"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="export-btn-section" onClick={handleExport}>
              ⬇️ Export
            </button>
          </div>
        </div>

        <div className="metrics-table-container">
          <table className="metrics-table">
            <thead>
              <tr>
                <th>DATASET NAME</th>
                <th>CPU & MEMORY</th>
                <th>EXECUTION TIME</th>
                <th>CONCURRENCY</th>
                <th>QUEUING</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {datasetPerformance.map((dataset) => (
                <tr key={dataset.id}>
                  {/* Dataset Name */}
                  <td>
                    <div className="dataset-name-cell">
                      <div className="dataset-name-text">{dataset.name}</div>
                      <div className="dataset-owner">Owner: {dataset.owner}</div>
                    </div>
                  </td>

                  {/* CPU & Memory */}
                  <td>
                    <div className="cpu-memory-cell">
                      <div className="resource-row">
                        <span className="resource-label">CPU</span>
                        <div className="resource-bar-container">
                          <div 
                            className={`resource-bar ${dataset.cpu.usage > 70 ? 'high' : dataset.cpu.usage > 40 ? 'medium' : 'low'}`}
                            style={{ width: `${dataset.cpu.usage}%` }}
                          ></div>
                        </div>
                        <span className={`resource-value ${dataset.cpu.usage > 70 ? 'high' : dataset.cpu.usage > 40 ? 'medium' : 'low'}`}>
                          {dataset.cpu.usage}%
                        </span>
                      </div>
                      <div className="resource-row">
                        <span className="resource-label">Mem</span>
                        <div className="resource-bar-container">
                          <div 
                            className={`resource-bar ${dataset.cpu.memory > 100 ? 'high' : dataset.cpu.memory > 50 ? 'medium' : 'low'}`}
                            style={{ width: `${Math.min(dataset.cpu.memory, 100)}%` }}
                          ></div>
                        </div>
                        <span className={`resource-value ${dataset.cpu.memory > 100 ? 'high' : dataset.cpu.memory > 50 ? 'medium' : 'low'}`}>
                          {dataset.cpu.memory}GB
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Execution Time */}
                  <td>
                    <div className="execution-cell">
                      <div className="execution-time">
                        <span className="time-icon">⏱️</span>
                        {dataset.execution.time}
                      </div>
                      <div className={`execution-comparison ${dataset.execution.comparison.includes('+') ? 'warning' : 'success'}`}>
                        {dataset.execution.comparison.includes('+') ? '⚠️' : '✓'} {dataset.execution.comparison}
                      </div>
                    </div>
                  </td>

                  {/* Concurrency */}
                  <td>
                    <span className="concurrency-badge">{dataset.concurrency}</span>
                  </td>

                  {/* Queuing */}
                  <td>
                    <span className="queuing-text">{dataset.queuing}</span>
                  </td>

                  {/* Status */}
                  <td>
                    <span className={`status-badge-performance ${dataset.status.toLowerCase()}`}>
                      {dataset.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="view-all-link">
          <a href="/datasets">View All 24 Datasets</a>
        </div>
      </div>

      {/* Dashboard Usage Analytics */}
      <div className="usage-analytics-section">
        <div className="section-header-analytics">
          <span className="section-icon green">📈</span>
          <div>
            <h3 className="section-title-main">Dashboard Usage Analytics</h3>
            <p className="section-subtitle-main">Weekly and monthly view statistics</p>
          </div>
        </div>

        <div className="analytics-table-container">
          <table className="analytics-table">
            <thead>
              <tr>
                <th>DASHBOARD NAME</th>
                <th>VIEWS THIS WEEK</th>
                <th>VIEWS THIS MONTH</th>
                <th>UNIQUE USERS</th>
                <th>AVG SESSION</th>
              </tr>
            </thead>
            <tbody>
              {dashboardUsage.map((dashboard, index) => (
                <tr key={index}>
                  <td>
                    <div className="dashboard-name-cell">
                      <div className="dashboard-name">{dashboard.name}</div>
                      <div className="dashboard-updated">Last updated: {dashboard.lastUpdated}</div>
                    </div>
                  </td>
                  <td>
                    <span className="views-value week">{dashboard.viewsWeek.toLocaleString()}</span>
                  </td>
                  <td>
                    <span className="views-value month">{dashboard.viewsMonth.toLocaleString()}</span>
                  </td>
                  <td>
                    <span className="users-value">{dashboard.uniqueUsers}</span>
                  </td>
                  <td>
                    <span className="session-value">{dashboard.avgSession}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Assets Missing Metadata */}
      <div className="missing-metadata-section">
        <div className="section-header-warning">
          <div className="warning-title-group">
            <span className="warning-icon">⚠️</span>
            <div>
              <h3 className="section-title-main">Assets Missing Metadata</h3>
              <p className="section-subtitle-main">
                Assets requiring Environment, Enterprise, Subfunction, Description, Title & Domain tags
              </p>
            </div>
          </div>
          <span className="issues-badge">16 Issues</span>
        </div>

        <div className="metadata-table-container">
          <table className="metadata-table">
            <thead>
              <tr>
                <th>ASSET NAME</th>
                <th>ENVIRONMENT</th>
                <th>ENTERPRISE</th>
                <th>SUBFUNCTION</th>
                <th>DESCRIPTION</th>
                <th>TITLE</th>
                <th>DOMAIN</th>
              </tr>
            </thead>
            <tbody>
              {missingMetadata.map((asset, index) => (
                <tr key={index}>
                  <td>
                    <div className="asset-name-cell">
                      <div className="asset-name">{asset.name}</div>
                      <div className="asset-type">{asset.type}</div>
                    </div>
                  </td>
                  <td>
                    <span className={`metadata-status ${asset.environment ? 'present' : 'missing'}`}>
                      {asset.environment ? '✓' : '✗'}
                    </span>
                  </td>
                  <td>
                    <span className={`metadata-status ${asset.enterprise ? 'present' : 'missing'}`}>
                      {asset.enterprise ? '✓' : '✗'}
                    </span>
                  </td>
                  <td>
                    <span className={`metadata-status ${asset.subfunction ? 'present' : 'missing'}`}>
                      {asset.subfunction ? '✓' : '✗'}
                    </span>
                  </td>
                  <td>
                    <span className={`metadata-status ${asset.description ? 'present' : 'missing'}`}>
                      {asset.description ? '✓' : '✗'}
                    </span>
                  </td>
                  <td>
                    <span className={`metadata-status ${asset.title ? 'present' : 'missing'}`}>
                      {asset.title ? '✓' : '✗'}
                    </span>
                  </td>
                  <td>
                    <span className={`metadata-status ${asset.domain ? 'present' : 'missing'}`}>
                      {asset.domain ? '✓' : '✗'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="view-all-link warning">
          <a href="/missing-metadata">View All Missing Metadata Issues</a>
        </div>
      </div>
    </div>
  );
};

export default AssetPerformance;