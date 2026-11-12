import React from 'react'
import './Signup.css'
function Signup() {
  return (
    <>
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Create Account | plazaGrid</title>
  {/* Bootstrap CSS */}
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="../CSS/sign-up.css" />
  <section className="signup-section">
    <div className="container">
      <div className="signup-wrapper">
        {/* Left Side: Welcome Section */}
        <div className="signup-welcome">
          <p className="plazaHeading"> plazaGrid</p>
          <div className="welcome-content">
            <span className="welcome-badge">JOIN OUR COMMUNITY</span>
            <h1>
              Start Your Shopping
              <span>Journey Today.</span>
            </h1>
            <p>
              Create your free account and enjoy a simple, convenient and secure
              shopping experience with plazaGrid.
            </p>
            <div className="welcome-features">
              <div className="welcome-feature">
                <span className="feature-icon"></span>
                <div>
                  <h6>Easy Shopping</h6>
                  <p>Explore products with ease.</p>
                </div>
              </div>
              <div className="welcome-feature">
                <span className="feature-icon"></span>
                <div>
                  <h6>Order Tracking</h6>
                  <p>Stay updated on your orders.</p>
                </div>
              </div>
              <div className="welcome-feature">
                <span className="feature-icon"></span>
                <div>
                  <h6>Secure Experience</h6>
                  <p>Shop with confidence.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="welcome-bottom">
            Your shopping experience matters to us.
          </div>
        </div>
        {/* Right Side: Registration Form */}
        <div className="signup-form-area">
          <div className="signup-form-header">
            <span className="form-top-label">CREATE ACCOUNT</span>
            <h2>Create Your Account</h2>
            <p>Please enter your details to get started.</p>
          </div>
          <form id="signupForm">
            {/* Full Name */}
            <div className="form-group-custom">
              <label htmlFor="fullName">Full Name</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="fullName"
                  className="form-control"
                  placeholder="Enter your full name"
                  required=""
                />
              </div>
            </div>
            {/* Email */}
            <div className="form-group-custom">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  required=""
                />
              </div>
            </div>
            {/* Phone */}
            <div className="form-group-custom">
              <label htmlFor="phone">Phone Number</label>
              <div className="input-wrapper">
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  placeholder="Enter your phone number"
                  required=""
                />
              </div>
            </div>
            {/* Password */}
            <div className="form-group-custom">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Create a password"
                  minLength={8}
                  required=""
                />
                <button
                  type="button"
                  className="password-toggle"
                  onclick="togglePassword('password', this)"
                  aria-label="Show password"
                >
                  <i className="bi bi-eye" />
                </button>
              </div>
            </div>
            {/* Confirm Password */}
            <div className="form-group-custom">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-wrapper">
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  placeholder="Confirm your password"
                  minLength={8}
                  required=""
                />
                <button
                  type="button"
                  className="password-toggle"
                  onclick="togglePassword('confirmPassword', this)"
                  aria-label="Show confirm password"
                >
                  <i className="bi bi-eye" />
                </button>
              </div>
            </div>
            {/* Terms */}
            <div className="signup-terms">
              <input type="checkbox" id="terms" required="" />
              <label htmlFor="terms">
                I agree to the
                <a href="">Terms &amp; Conditions</a>
                and
                <a href="">Privacy Policy</a>.
              </label>
            </div>
            {/* Message */}
            <div id="signupMessage" />
            {/* Submit Button */}
            <button type="submit" className="signup-submit-btn">
              Create Account
            </button>
            {/* Sign-In Link */}
            <div className="signup-login">
              Already have an account?
              <a href="signi-in.html">Sign In</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</>

    </>
  )
}

export default Signup