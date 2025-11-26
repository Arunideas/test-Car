import React, { useState, useEffect } from 'react';
import { getUsers, createUser, deleteUser } from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
  // State Management
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    email: '',
    full_name: '',
    role: 'user'
  });

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // API Functions
  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      await createUser(newUser);
      setShowModal(false);
      setNewUser({ email: '', full_name: '', role: 'user' });
      fetchUsers();
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Error creating user: ' + (error.response?.data?.detail || 'Unknown error'));
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(id);
        fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <div className="dashboard">
      {/* Scope Filters Section */}
      <div className="scope-filters">
        <span className="scope-label">SCOPE:</span>
        <select className="scope-select">
          <option>🌐 Finance Domain</option>
        </select>
        <select className="scope-select">
          <option>📦 Production Environment</option>
        </select>
        <span className="last-refresh">Last refreshed: 2 mins ago</span>
        <button className="refresh-btn">🔄</button>
      </div>

      {/* Onboarding Card */}
      <div className="onboarding-card">
        <div className="onboarding-header">
          <div>
            <span className="quick-start-badge">QUICK START</span>
            <h2>Onboarding Kit</h2>
            <p>
              Welcome to your analytics command center. We've prepared a set of tools
              to help you hit the ground running. Choose an action below to get started.
            </p>
          </div>
          <button className="close-btn">✕</button>
        </div>
        <div className="onboarding-actions">
          <button className="action-btn primary">📊 Request Power BI Desktop</button>
          <button className="action-btn secondary">👑 Get Premium Capacity</button>
          <button className="action-btn tertiary">🎓 Take Training</button>
        </div>
      </div>

      {/* User Management Section Header */}
      <div className="section-header">
        <div>
          <h3>📋 User Management</h3>
          <p>Manage user accounts and permissions</p>
        </div>
        <button className="add-user-btn" onClick={() => setShowModal(true)}>
          + Add User
        </button>
      </div>

      {/* Users Table */}
      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Full Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.full_name}</td>
                <td>
                  <span className={`role-badge ${user.role}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${user.is_active ? 'active' : 'inactive'}`}>
                    {user.is_active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>{new Date(user.created_at).toLocaleDateString()}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteUser(user.id)}
                    aria-label={`Delete ${user.full_name}`}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add User Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="modal-header">
              <h3>Add New User</h3>
              <button 
                className="close-btn" 
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleCreateUser}>
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="user-email">Email</label>
                <input
                  id="user-email"
                  type="email"
                  required
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  placeholder="user@example.com"
                />
              </div>

              {/* Full Name Field */}
              <div className="form-group">
                <label htmlFor="user-fullname">Full Name</label>
                <input
                  id="user-fullname"
                  type="text"
                  required
                  value={newUser.full_name}
                  onChange={(e) => setNewUser({ ...newUser, full_name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>

              {/* Role Field */}
              <div className="form-group">
                <label htmlFor="user-role">Role</label>
                <select
                  id="user-role"
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="analyst">Analyst</option>
                </select>
              </div>

              {/* Modal Actions */}
              <div className="modal-actions">
                <button 
                  type="button" 
                  className="btn-cancel" 
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;