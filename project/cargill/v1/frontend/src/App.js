import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Login from './components/Login';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import AuditLogs from './components/AuditLogs';
import DatasetRefresh from './components/DatasetRefresh';
import AssetPerformance from './components/AssetPerformance';
import './App.css';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// Layout Component for authenticated pages
const AuthenticatedLayout = ({ children }) => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="page-wrapper">
          {children}
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route - Login */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <Homepage />
              </AuthenticatedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <Dashboard />
              </AuthenticatedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dataset-refresh"
          element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <DatasetRefresh />
              </AuthenticatedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/audit-logs"
          element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <AuditLogs />
              </AuthenticatedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/asset-performance"
          element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <AssetPerformance />
              </AuthenticatedLayout>
            </ProtectedRoute>
          }
        />
        
        {/* Catch all - redirect to login or home */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;