import React, { useState } from 'react'
import style from './userSignIn.module.css'
import { Link, useNavigate } from 'react-router-dom'
function SignIn() {
  let [email, setEmail]=useState("User@gmial.com");
  let [password, setPassword]=useState("09876");
  let navigate= useNavigate();
  const check=(e)=>{
    e.preventDefault();
    if(email==="User@gmail.com" && password==="09876"){
      navigate('/userProfile')
    }else{
      alert("Please enter correct credential")
    }
  }
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
  <section className={`${style['login-section']}`}>
    <div className="container">
      <div className={`${style['login-wrapper']}`}>
        {/* Left Side: Welcome Section */}
        <div className={`${style['login-welcome']}`}>
          <a href="../index.html" className={`${style['login-logo']}`}>
            plazaGrid<span>.</span>
          </a>
          <div className={`${style['login-welcome-content']}`}>
            <span className={`${style['login-welcome-badge']}`}>WELCOME BACK</span>
            <h1>
              Good to See
              <span>You Again.</span>
            </h1>
            <p>
              Log in to your MyShop account and continue enjoying a simple,
              convenient and secure shopping experience.
            </p>
            <div className={`${style['login-welcome-features']}`}>
              <div className={`${style['login-welcome-feature']}`}>
                <span className={`${style['login-feature-icon']}`}></span>
                <div>
                  <h6>Easy Shopping</h6>
                  <p>Discover products you love.</p>
                </div>
              </div>
              <div className={`${style['login-welcome-feature']}`}>
                <span className={`${style['login-feature-icon']}`}></span>
                <div>
                  <h6>Track Your Orders</h6>
                  <p>Keep an eye on your deliveries.</p>
                </div>
              </div>
              <div className={`${style['login-welcome-feature']}`}>
                <span className={`${style['login-feature-icon']}`}></span>
                <div>
                  <h6>Secure Account</h6>
                  <p>Your shopping journey matters.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${style['login-welcome-bottom']}`}>
            Thank you for shopping with MyShop.
          </div>
          {/* Decorative Shapes */}
          <div className={`${style['login-circle']} ${style['login-circle-one']}`} />
          <div className={`${style['login-circle']} ${style['login-circle-two']}`} />
        </div>
        {/* Right Side: Login Form */}
        <div className={`${style['login-form-area']}`}>
          <div className={`${style['login-form-header']}`}>
            <span className={`${style['login-form-top-label']}`}>ACCOUNT LOGIN</span>
            <h2>Welcome Back!</h2>
            <p>Enter your account details to continue.</p>
          </div>
          <form id="loginForm" onSubmit={check}>
            {/* Email */}
            <div className={`${style['login-form-group']}`}>
              <label htmlFor="loginEmail">Email Address</label>
              <div className={`${style['login-input-wrapper']}`}>
                <input
                  type="email"
                  id="loginEmail"
                  className={`${style['form-control']}form-control`}
                  placeholder="Enter your email address"
                  required=""
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
            </div>
            {/* Password */}
            <div className={`${style['login-form-group']}`}>
              <label htmlFor="loginPassword">Password</label>
              <div className={`${style['login-input-wrapper']}`}>
                <input
                  type="password"
                  id="loginPassword"
                  className={`${style['form-control']} form-control`}
                  placeholder="Enter your password"
                  required
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className={`${style['login-password-toggle']}`}
                 
                  aria-label="Show password"
                >
                  <i className="bi bi-eye" />
                </button>
              </div>
            </div>
            {/* Remember Me & Forgot Password */}
            <div className={`${style['login-options']}`}>
              <div className={`${style['remember-option']}`}>
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <a href="forgot-password.html" className={`${style['forgot-password-link']}`}>
                Forgot Password?
              </a>
            </div>
            {/* Message */}
            <div id="loginMessage" />
            {/* Login Button */}
            <button type="submit" className={`${style['login-submit-btn']}`}>
              Login to Account
              <i className="bi bi-arrow-right" />
            </button>
            {/* Register Link */}
            <div className={`${style['login-register']}`}>
              Don't have an account?
              <Link to="/signup">Create Account</Link>
            </div>
          </form>
          {/* Back to Home */}
          <a href="../index.html" className={`${style['back-home-link']}`}>
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