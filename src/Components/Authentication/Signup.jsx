import React from 'react'
import style from './Signup.module.css'
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
  <section className={`${style['signup-section']}`}>
    <div className="container">
      <div className={`${style['signup-wrapper']}`}>
        {/* Left Side: Welcome Section */}
        <div className={`${style['signup-welcome']}`}>
          <p className={`${style.plazaHeading}`}> plazaGrid</p>
          <div className={`${style['welcome-content']}`}>
            <span className={`${style['welcome-badge']}`}>JOIN OUR COMMUNITY</span>
            <h1>
              Start Your Shopping
              <span>Journey Today.</span>
            </h1>
            <p>
              Create your free account and enjoy a simple, convenient and secure
              shopping experience with plazaGrid.
            </p>
            <div className={`${style['welcome-features']}`}>
              <div className={`${style['welcome-feature']}`}>
                <span className={`${style['feature-icon']}`}></span>
                <div>
                  <h6>Easy Shopping</h6>
                  <p>Explore products with ease.</p>
                </div>
              </div>
              <div className={`${style['welcome-feature']}`}>
                <span className={`${style['feature-icon']}`}></span>
                <div>
                  <h6>Order Tracking</h6>
                  <p>Stay updated on your orders.</p>
                </div>
              </div>
              <div className={`${style['welcome-feature']}`}>
                <span className={`${style['feature-icon']}`}></span>
                <div>
                  <h6>Secure Experience</h6>
                  <p>Shop with confidence.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${style['welcome-bottom']}`}>
            Your shopping experience matters to us.
          </div>
        </div>
        {/* Right Side: Registration Form */}
        <div className={`${style['signup-form-area']}`}>
          <div className={`${style['signup-form-header']}`}>
            <span className={`${style['form-top-label']}`}>CREATE ACCOUNT</span>
            <h2>Create Your Account</h2>
            <p>Please enter your details to get started.</p>
          </div>
          <form id="signupForm">
            {/* Full Name */}
            <div className={`${style['form-group-custom']}`}>
              <label htmlFor="fullName">Full Name</label>
              <div className={`${style['input-wrapper']}`}>
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
            <div className={`${style['form-group-custom']}`}>
              <label htmlFor="email">Email Address</label>
              <div className={`${style['input-wrapper']}`}>
                <input
                  type="email"
                  id="email"
                  className={`${style['form-control']}`}
                  placeholder="Enter your email address"
                  required=""
                />
              </div>
            </div>
            {/* Phone */}
            <div className={`${style['form-group-custom']}`}>
              <label htmlFor="phone">Phone Number</label>
              <div className={`${style['input-wrapper']}`}>
                <input
                  type="tel"
                  id="phone"
                  className={`${style['form-control']}`}
                  placeholder="Enter your phone number"
                  required=""
                />
              </div>
            </div>
            {/* Password */}
            <div className={`${style['form-group-custom']}`}>
              <label htmlFor="password">Password</label>
              <div className={`${style['input-wrapper']}`}>
                <input
                  type="password"
                  id="password"
                  className={`${style['form-control']}`}
                  placeholder="Create a password"
                  minLength={8}
                  required=""
                />
                <button
                  type="button"
                  className={`${style['password-toggle']}`}
                  onclick="togglePassword('password', this)"
                  aria-label="Show password"
                >
                  <i className="bi bi-eye" />
                </button>
              </div>
            </div>
            {/* Confirm Password */}
            <div className={`${style['form-group-custom']}`}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className={`${style['input-wrapper']}`}>
                <input
                  type="password"
                  id="confirmPassword"
                  className={`${style['form-control']}`}
                  placeholder="Confirm your password"
                  minLength={8}
                  required=""
                />
                <button
                  type="button"
                  className={`${style['password-toggle']}`}
                  onclick="togglePassword('confirmPassword', this)"
                  aria-label="Show confirm password"
                >
                  <i className="bi bi-eye" />
                </button>
              </div>
            </div>
            {/* Terms */}
            <div className={`${style['signup-terms']}`}>
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
            <button type="submit" className={`${style['signup-submit-btn']}`}>
              Create Account
            </button>
            {/* Sign-In Link */}
            <div className={`${style['signup-login']}`}>
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