import React from 'react'
import './SignIn.css'
function SignIn() {
  return (
    <>
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Documents</title>
  {/* Bootstrap CSS */}
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  {/* Bootstrap Icons */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
  />
  {/* Custom CSS */}
  <link rel="stylesheet" href="../CSS/sign-in.css" />
  <section className="login-section">
    <div className="container">
      <div className="login-wrapper">
        {/* Left Side: Welcome Section */}
        <div className="login-welcome">
          <a href="../index.html" className="login-logo">
            plazaGrid<span>.</span>
          </a>
          <div className="login-welcome-content">
            <span className="login-welcome-badge">WELCOME BACK</span>
            <h1>
              Good to See
              <span>You Again.</span>
            </h1>
            <p>
              Log in to your MyShop account and continue enjoying a simple,
              convenient and secure shopping experience.
            </p>
            <div className="login-welcome-features">
              <div className="login-welcome-feature">
                <span className="login-feature-icon"></span>
                <div>
                  <h6>Easy Shopping</h6>
                  <p>Discover products you love.</p>
                </div>
              </div>
              <div className="login-welcome-feature">
                <span className="login-feature-icon"></span>
                <div>
                  <h6>Track Your Orders</h6>
                  <p>Keep an eye on your deliveries.</p>
                </div>
              </div>
              <div className="login-welcome-feature">
                <span className="login-feature-icon"></span>
                <div>
                  <h6>Secure Account</h6>
                  <p>Your shopping journey matters.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="login-welcome-bottom">
            Thank you for shopping with MyShop.
          </div>
          {/* Decorative Shapes */}
          <div className="login-circle login-circle-one" />
          <div className="login-circle login-circle-two" />
        </div>
        {/* Right Side: Login Form */}
        <div className="login-form-area">
          <div className="login-form-header">
            <span className="login-form-top-label">ACCOUNT LOGIN</span>
            <h2>Welcome Back!</h2>
            <p>Enter your account details to continue.</p>
          </div>
          <form id="loginForm">
            {/* Email */}
            <div className="login-form-group">
              <label htmlFor="loginEmail">Email Address</label>
              <div className="login-input-wrapper">
                <input
                  type="email"
                  id="loginEmail"
                  className="form-control"
                  placeholder="Enter your email address"
                  required=""
                />
              </div>
            </div>
            {/* Password */}
            <div className="login-form-group">
              <label htmlFor="loginPassword">Password</label>
              <div className="login-input-wrapper">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                  placeholder="Enter your password"
                  required=""
                />
                <button
                  type="button"
                  className="login-password-toggle"
                  onclick="toggleLoginPassword()"
                  aria-label="Show password"
                >
                  <i className="bi bi-eye" />
                </button>
              </div>
            </div>
            {/* Remember Me & Forgot Password */}
            <div className="login-options">
              <div className="remember-option">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <a href="forgot-password.html" className="forgot-password-link">
                Forgot Password?
              </a>
            </div>
            {/* Message */}
            <div id="loginMessage" />
            {/* Login Button */}
            <button type="submit" className="login-submit-btn">
              Login to Account
              <i className="bi bi-arrow-right" />
            </button>
            {/* Register Link */}
            <div className="login-register">
              Don't have an account?
              <a href="register.html">Create Account</a>
            </div>
          </form>
          {/* Back to Home */}
          <a href="../index.html" className="back-home-link">
            <i className="bi bi-arrow-left" />
            Back to Homepage
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* JavaScript */}
</>

    </>
  )
}

export default SignIn