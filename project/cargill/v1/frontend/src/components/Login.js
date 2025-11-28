import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [systemStatus, setSystemStatus] = useState('Operational');

  // Azure AD Configuration
  const azureConfig = {
    clientId: process.env.REACT_APP_AZURE_CLIENT_ID || 'YOUR_CLIENT_ID_HERE',
    authority: `https://login.microsoftonline.com/${process.env.REACT_APP_AZURE_TENANT_ID || 'common'}`,
    redirectUri: window.location.origin,
    scopes: ['User.Read', 'openid', 'profile', 'email']
  };

  // Check if user is already authenticated
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user');
    
    if (token && user) {
      // User is already logged in, redirect to homepage
      navigate('/');
    }
  }, [navigate]);

  // Handle Azure SSO Login
  const handleAzureLogin = async () => {
    setIsLoading(true);
    setError('');

    try {
      // Check if configuration is set
      if (azureConfig.clientId === 'YOUR_CLIENT_ID_HERE') {
        throw new Error('Azure AD configuration is missing. Please set REACT_APP_AZURE_CLIENT_ID in your .env file');
      }

      // Create authorization URL
      const authUrl = buildAuthorizationUrl();
      
      // Store state for verification
      const state = generateRandomString(32);
      sessionStorage.setItem('authState', state);
      
      // Redirect to Azure AD login
      window.location.href = authUrl.replace('STATE_PLACEHOLDER', state);
      
    } catch (err) {
      console.error('Azure login error:', err);
      setError(err.message || 'Failed to initiate Azure login');
      setIsLoading(false);
    }
  };

  // Build Azure AD authorization URL
  const buildAuthorizationUrl = () => {
    const params = new URLSearchParams({
      client_id: azureConfig.clientId,
      response_type: 'code',
      redirect_uri: azureConfig.redirectUri,
      response_mode: 'query',
      scope: azureConfig.scopes.join(' '),
      state: 'STATE_PLACEHOLDER',
      prompt: 'select_account'
    });

    return `${azureConfig.authority}/oauth2/v2.0/authorize?${params.toString()}`;
  };

  // Generate random string for state parameter
  const generateRandomString = (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Handle OAuth callback
  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const state = urlParams.get('state');
      const error = urlParams.get('error');
      const errorDescription = urlParams.get('error_description');

      if (error) {
        setError(`Authentication failed: ${errorDescription || error}`);
        // Clear URL params
        window.history.replaceState({}, document.title, window.location.pathname);
        return;
      }

      if (code && state) {
        // Verify state
        const storedState = sessionStorage.getItem('authState');
        if (state !== storedState) {
          setError('Invalid state parameter. Possible CSRF attack.');
          window.history.replaceState({}, document.title, window.location.pathname);
          return;
        }

        setIsLoading(true);

        try {
          // In a real implementation, you would exchange the code for tokens
          // on your backend server. For demo purposes, we'll simulate success.
          
          // Simulate token exchange delay
          await new Promise(resolve => setTimeout(resolve, 1000));

          // Mock user data (in production, this comes from the token)
          const mockUser = {
            name: 'Alex Morgan',
            email: 'alex.morgan@company.com',
            role: 'Admin',
            id: 'user-' + Math.random().toString(36).substr(2, 9)
          };

          // Store auth token and user info
          const mockToken = 'mock-jwt-token-' + Math.random().toString(36).substr(2, 16);
          localStorage.setItem('authToken', mockToken);
          localStorage.setItem('user', JSON.stringify(mockUser));

          // Clear session storage
          sessionStorage.removeItem('authState');

          // Clear URL params
          window.history.replaceState({}, document.title, window.location.pathname);

          // Redirect to homepage
          navigate('/');

        } catch (err) {
          console.error('Token exchange error:', err);
          setError('Failed to complete authentication');
          window.history.replaceState({}, document.title, window.location.pathname);
        } finally {
          setIsLoading(false);
        }
      }
    };

    handleCallback();
  }, [navigate]);

  // Demo login (fallback for testing without Azure AD)
  const handleDemoLogin = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const mockUser = {
        name: 'Demo User',
        email: 'demo@company.com',
        role: 'Admin',
        id: 'demo-user'
      };

      localStorage.setItem('authToken', 'demo-token-123');
      localStorage.setItem('user', JSON.stringify(mockUser));
      navigate('/');
    }, 1000);
  };

  return (
    <div className="login-container">
      {/* Left Side - Branding */}
      <div className="login-left">
        <div className="login-branding">
          <div className="brand-logo">
            <div className="logo-icon">📊</div>
          </div>
          
          <h1 className="brand-title">
            BI Governance
            <br />
            <span className="brand-subtitle">HUB</span>
          </h1>

          <p className="brand-description">
            Centralized control for your organization's data assets. 
            Manage compliance, monitor performance, and streamline analytics 
            governance in one secure platform.
          </p>

          <div className="feature-badges">
            <span className="feature-badge primary">
              🛡️ Enterprise Security
            </span>
            <span className="feature-badge secondary">
              ⚡ Real-time Monitoring
            </span>
            <span className="feature-badge tertiary">
              ✓ Compliance Ready
            </span>
          </div>

          <div className="login-footer">
            <p>© 2024 BI Governance HUB. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="login-right">
        <div className="login-form-container">
          <h2 className="login-title">Welcome back</h2>
          <p className="login-subtitle">
            Sign in with your Azure account to access your dashboard.
          </p>

          {/* Azure SSO Button */}
          <button 
            className="azure-sso-btn"
            onClick={handleAzureLogin}
            disabled={isLoading}
          >
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEgxMFYxMEgwVjBaIiBmaWxsPSIjRjI1MDIyIi8+CjxwYXRoIGQ9Ik0xMSAwSDIxVjEwSDExVjBaIiBmaWxsPSIjN0ZCQTAwIi8+CjxwYXRoIGQ9Ik0wIDExSDEwVjIxSDBWMTFaIiBmaWxsPSIjMDBBNEVGIi8+CjxwYXRoIGQ9Ik0xMSAxMUgyMVYyMUgxMVYxMVoiIGZpbGw9IiNGRkIwMDAiLz4KPC9zdmc+"
              alt="Microsoft"
              className="microsoft-logo"
            />
            {isLoading ? 'Signing in...' : 'Sign in with Azure SSO'}
          </button>

          {/* Error Message */}
          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* Azure SSO Info Box */}
          <div className="info-box">
            <div className="info-header">
              <span className="info-icon">ℹ️</span>
              <span className="info-title">Azure SSO Authentication</span>
            </div>
            <p className="info-text">
              Use your organization's Microsoft Azure credentials to securely 
              access BI Governance HUB. Your login is protected by enterprise-grade 
              security.
            </p>
          </div>

          {/* Security Features */}
          <div className="security-features">
            <div className="security-header">
              <span className="security-icon">🔒</span>
              <span className="security-title">Secure Access Features</span>
            </div>
            <ul className="security-list">
              <li>
                <span className="check-icon">✓</span>
                Multi-factor authentication enabled
              </li>
              <li>
                <span className="check-icon">✓</span>
                Single sign-on across all enterprise applications
              </li>
              <li>
                <span className="check-icon">✓</span>
                Automatic session management and timeout protection
              </li>
            </ul>
          </div>

          {/* Support Link */}
          <div className="support-section">
            <p className="support-text">Having trouble logging in?</p>
            <a href="/support" className="support-link">Contact IT Support</a>
          </div>

          {/* System Status */}
          <div className="system-status">
            <span className="status-indicator operational"></span>
            <span className="status-text">System Status: {systemStatus}</span>
          </div>

          {/* Demo Login (for testing) */}
          <div className="demo-section">
            <button 
              className="demo-login-btn"
              onClick={handleDemoLogin}
              disabled={isLoading}
            >
              🎭 Demo Login (Testing Only)
            </button>
            <p className="demo-note">
              Note: Use this for testing without Azure AD configuration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;