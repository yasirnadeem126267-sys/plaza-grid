import React from 'react'
import './Login.css'
function login() {
  return (

   <>
  
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
  />
  <link rel="stylesheet" href="adminLogin.css" />
  <div className="login-container">
    {/* Left Side */}
    <div className="login-left">
      <a href="" className="brand">
        plaza<span>Grid</span>
      </a>
      <div className="welcome-content">
        <h1>Admin Panel</h1>
        <p>
          Manage your store, products, orders and customers from one convenient
          dashboard.
        </p>
      </div>
      <div className="left-footer">
        © <span id="currentYear" /> plazaGrid. All rights reserved.
      </div>
    </div>
    {/* Right Side */}
    <div className="login-right">
      <div className="login-card">
        <div className="login-heading">
          <h2>Admin Login</h2>
          <p>Enter your credentials to access the admin panel.</p>
        </div>
        <form id="adminLoginForm">
          <div className="mb-3">
            <label htmlFor="adminEmail" className="form-label">
              Email Address
            </label>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                id="adminEmail"
                placeholder="Enter admin email"
                required=""
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="adminPassword" className="form-label">
              Password
            </label>
            <div className="input-group">
              <input
                type="password"
                className="form-control"
                id="adminPassword"
                placeholder="Enter password"
                required=""
              />
              <button
                type="button"
                className="input-group-text password-toggle"
                id="togglePassword"
                aria-label="Show password"
              >
                <i className="bi bi-eye" />
              </button>
            </div>
          </div>
          <div className="login-options">
            <a href="">Forgot Password?</a>
          </div>
          <button type="submit" className="btn login-btn w-100">
            Login to Dashboard
          </button>
          <div id="loginMessage" className="login-message" />
        </form>
        <div className="back-home">
          <a href="">Back to Website</a>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default login