import React, { useState, useEffect } from 'react';
import './DatasetRefresh.css';

const DatasetRefresh = () => {
  // State Management
  const [datasets, setDatasets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);

  // Sample dataset refresh data
  useEffect(() => {
    const sampleDatasets = [
      {
        id: 1,
        name: 'Sales_Global_Master',
        workspace: 'Sales Ops',
        icon: '📊',
        iconColor: '#3b82f6',
        frequency: 'Hourly',
        frequencyIcon: '🕐',
        frequencyColor: '#8b5cf6',
        nextRun: {
          date: 'Nov 24, 2025',
          time: '14:00 PM'
        },
        lastRefresh: {
          date: 'Nov 24, 2025',
          time: '13:00 PM'
        },
        duration: '12m 45s',
        status: 'Completed',
        hasWarning: true
      },
      {
        id: 2,
        name: 'Marketing_Campaign_ROI',
        workspace: 'Marketing',
        icon: '📈',
        iconColor: '#ef4444',
        frequency: 'Daily',
        frequencyIcon: '📅',
        frequencyColor: '#3b82f6',
        nextRun: {
          date: 'Nov 25, 2025',
          time: '08:00 AM'
        },
        lastRefresh: {
          date: 'Nov 24, 2025',
          time: '08:00 AM'
        },
        duration: '—',
        status: 'Failed',
        hasWarning: true
      },
      {
        id: 3,
        name: 'HR_Employee_Analytics',
        workspace: 'Human Resources',
        icon: '👥',
        iconColor: '#10b981',
        frequency: 'Weekly',
        frequencyIcon: '📆',
        frequencyColor: '#6366f1',
        nextRun: {
          date: 'Nov 27, 2025',
          time: '08:00 AM'
        },
        lastRefresh: {
          date: 'Nov 20, 2025',
          time: '08:00 AM'
        },
        duration: '24m 18s',
        status: 'Completed',
        hasWarning: false
      },
      {
        id: 4,
        name: 'Inventory_Stock_Levels',
        workspace: 'Operations',
        icon: '📦',
        iconColor: '#f59e0b',
        frequency: '30 Minutes',
        frequencyIcon: '⏱️',
        frequencyColor: '#8b5cf6',
        nextRun: {
          date: 'Nov 24, 2025',
          time: '14:30 PM'
        },
        lastRefresh: {
          date: 'Nov 24, 2025',
          time: '14:00 PM'
        },
        duration: '5m 32s',
        status: 'Completed',
        hasWarning: false
      }
    ];
    setDatasets(sampleDatasets);
  }, []);

  // Handle schedule action
  const handleSchedule = (timeSlot) => {
    alert(`Scheduling dataset refresh for ${timeSlot}`);
  };

  return (
    <div className="dataset-refresh">
      {/* Page Header */}
      <div className="page-header-refresh">
        <div className="header-title-section">
          <h1 className="page-title-refresh">Dataset Refresh Schedule</h1>
          <span className="active-badge">24 Active</span>
        </div>
        <div className="header-search">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search datasets..."
            className="search-input-header"
          />
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

      {/* Stats Cards */}
      <div className="stats-grid-refresh">
        <div className="stat-card-refresh">
          <div className="stat-header-refresh">
            <span className="stat-label-refresh">Total Datasets</span>
            <span className="stat-icon-refresh blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor"/>
                <rect x="3" y="13" width="7" height="7" rx="1" fill="currentColor"/>
                <rect x="13" y="3" width="7" height="7" rx="1" fill="currentColor"/>
              </svg>
            </span>
          </div>
          <div className="stat-value-refresh">142</div>
        </div>

        <div className="stat-card-refresh">
          <div className="stat-header-refresh">
            <span className="stat-label-refresh">Scheduled Today</span>
            <span className="stat-icon-refresh purple">📅</span>
          </div>
          <div className="stat-value-refresh">86</div>
        </div>

        <div className="stat-card-refresh">
          <div className="stat-header-refresh">
            <span className="stat-label-refresh">Success Rate</span>
            <span className="stat-icon-refresh green">✓</span>
          </div>
          <div className="stat-value-refresh success">98.2%</div>
        </div>

        <div className="stat-card-refresh">
          <div className="stat-header-refresh">
            <span className="stat-label-refresh">Failed Refreshes</span>
            <span className="stat-icon-refresh red">⚠</span>
          </div>
          <div className="stat-value-refresh failed">3</div>
        </div>
      </div>

      {/* Optimal Time Slots Section */}
      <div className="optimal-slots-section">
        <div className="optimal-header">
          <div className="optimal-title-group">
            <span className="bulb-icon">💡</span>
            <div>
              <h3 className="optimal-title">Optimal Time Slots</h3>
              <p className="optimal-subtitle">AI-recommended available slots for new refresh schedules</p>
            </div>
          </div>
          <span className="ai-badge">🤖 AI Suggested</span>
        </div>

        <div className="time-slots-grid">
          {/* Best Slot */}
          <div className="time-slot-card best">
            <div className="slot-header">
              <span className="slot-rank">#1 BEST</span>
              <div className="slot-stars">
                <span className="star filled">⭐</span>
                <span className="star filled">⭐</span>
                <span className="star filled">⭐</span>
              </div>
            </div>
            <h4 className="slot-time">02:00 - 03:00 AM</h4>
            <p className="slot-description">Low system load period</p>
            <div className="slot-metrics">
              <div className="metric">
                <span className="metric-icon green">●</span>
                <span className="metric-text">CPU Usage: 12%</span>
              </div>
              <div className="metric">
                <span className="metric-icon green">▬</span>
                <span className="metric-text">Active Jobs: 3</span>
              </div>
              <div className="metric">
                <span className="metric-icon green">●</span>
                <span className="metric-text">Avg Duration: 8m 45s</span>
              </div>
            </div>
            <button 
              className="schedule-btn best-btn"
              onClick={() => handleSchedule('02:00 - 03:00 AM')}
            >
              + Schedule Here
            </button>
          </div>

          {/* Good Slot */}
          <div className="time-slot-card good">
            <div className="slot-header">
              <span className="slot-rank">#2 GOOD</span>
              <div className="slot-stars">
                <span className="star filled">⭐</span>
                <span className="star filled">⭐</span>
                <span className="star empty">⭐</span>
              </div>
            </div>
            <h4 className="slot-time">11:00 PM - 12:00 AM</h4>
            <p className="slot-description">Off-peak hours</p>
            <div className="slot-metrics">
              <div className="metric">
                <span className="metric-icon blue">●</span>
                <span className="metric-text">CPU Usage: 28%</span>
              </div>
              <div className="metric">
                <span className="metric-icon blue">▬</span>
                <span className="metric-text">Active Jobs: 7</span>
              </div>
              <div className="metric">
                <span className="metric-icon blue">●</span>
                <span className="metric-text">Avg Duration: 12m 20s</span>
              </div>
            </div>
            <button 
              className="schedule-btn good-btn"
              onClick={() => handleSchedule('11:00 PM - 12:00 AM')}
            >
              + Schedule Here
            </button>
          </div>

          {/* Fair Slot */}
          <div className="time-slot-card fair">
            <div className="slot-header">
              <span className="slot-rank">#3 FAIR</span>
              <div className="slot-stars">
                <span className="star filled">⭐</span>
                <span className="star empty">⭐</span>
                <span className="star empty">⭐</span>
              </div>
            </div>
            <h4 className="slot-time">06:00 - 07:00 AM</h4>
            <p className="slot-description">Early morning window</p>
            <div className="slot-metrics">
              <div className="metric">
                <span className="metric-icon orange">●</span>
                <span className="metric-text">CPU Usage: 45%</span>
              </div>
              <div className="metric">
                <span className="metric-icon orange">▬</span>
                <span className="metric-text">Active Jobs: 12</span>
              </div>
              <div className="metric">
                <span className="metric-icon orange">●</span>
                <span className="metric-text">Avg Duration: 18m 15s</span>
              </div>
            </div>
            <button 
              className="schedule-btn fair-btn"
              onClick={() => handleSchedule('06:00 - 07:00 AM')}
            >
              + Schedule Here
            </button>
          </div>
        </div>

        {/* Info Box */}
        <div className="info-box">
          <span className="info-icon">ℹ️</span>
          <div className="info-content">
            <h4 className="info-title">How are these calculated?</h4>
            <p className="info-text">
              Our AI analyzes historical system load, concurrent job patterns, and success rates over the past 30 days 
              to recommend optimal time slots that minimize conflicts and maximize refresh success probability.
            </p>
          </div>
        </div>
      </div>

      {/* Dataset Refresh Status Table */}
      <div className="refresh-status-section">
        <div className="section-header-refresh">
          <div>
            <h3 className="section-title">Dataset Refresh Status</h3>
            <p className="section-subtitle">Real-time monitoring of dataset refresh cycles across all workspaces.</p>
          </div>
          <button className="filter-btn" onClick={() => setShowFilter(!showFilter)}>
            ▼ Filter
          </button>
        </div>

        <div className="refresh-table-container">
          <table className="refresh-table">
            <thead>
              <tr>
                <th>DATASET NAME</th>
                <th>FREQUENCY</th>
                <th>NEXT RUN</th>
                <th>LAST REFRESH</th>
                <th>DURATION</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {datasets.map((dataset) => (
                <tr key={dataset.id}>
                  {/* Dataset Name */}
                  <td>
                    <div className="dataset-cell">
                      <span 
                        className="dataset-icon"
                        style={{ backgroundColor: dataset.iconColor }}
                      >
                        {dataset.icon}
                      </span>
                      <div className="dataset-info">
                        <div className="dataset-name">{dataset.name}</div>
                        <div className="dataset-workspace">Workspace: {dataset.workspace}</div>
                      </div>
                    </div>
                  </td>

                  {/* Frequency */}
                  <td>
                    <div className="frequency-cell">
                      <span 
                        className="frequency-icon"
                        style={{ backgroundColor: dataset.frequencyColor }}
                      >
                        {dataset.frequencyIcon}
                      </span>
                      <span className="frequency-text">{dataset.frequency}</span>
                    </div>
                  </td>

                  {/* Next Run */}
                  <td>
                    <div className="datetime-cell">
                      <div className="datetime-date">{dataset.nextRun.date}</div>
                      <div className="datetime-time">{dataset.nextRun.time}</div>
                    </div>
                  </td>

                  {/* Last Refresh */}
                  <td>
                    <div className="datetime-cell">
                      <div className="datetime-date">{dataset.lastRefresh.date}</div>
                      <div className="datetime-time">{dataset.lastRefresh.time}</div>
                    </div>
                  </td>

                  {/* Duration */}
                  <td>
                    <span className="duration-text">{dataset.duration}</span>
                  </td>

                  {/* Status */}
                  <td>
                    <span className={`status-badge-refresh ${dataset.status.toLowerCase()}`}>
                      ● {dataset.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td>
                    <div className="actions-cell">
                      {dataset.hasWarning && (
                        <span className="warning-icon">⚠️</span>
                      )}
                      <button className="action-menu-btn" aria-label="More actions">
                        ⋮
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <span className="pagination-info">Showing 1-4 of 142 datasets</span>
          <div className="pagination-buttons">
            <button className="pagination-btn" disabled>Previous</button>
            <button className="pagination-btn active">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatasetRefresh;