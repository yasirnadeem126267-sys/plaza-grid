import React from 'react'
import style from './Myprofile.module.css'
function Myprofile() {
  return (
    <>
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Profile | plazaGrid</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
  />
  <link rel="stylesheet" href="../CSS/myProfile.css" />
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg bg-white border-bottom">
    <div className="container">
      <a className={`${style['navbar-brand']} navbar-brand fw-bold`} href="../index.html">
        plaza<span>Grid</span>
      </a>
      <a href="products.html" className={`btn ${style['btn-outline-orange']} btn-sm`}>
        Continue Shopping
      </a>
    </div>
  </nav>
  {/* Main Content */}
  <main className="container py-5">
    <div className={`${style['page-heading']} mb-4`}>
      <h2>My Profile</h2>
      <p className="text-muted">Manage your personal information.</p>
    </div>
    <div className={`${style['profile-card']}`}>
      {/* Profile Header */}
      <div className={`${style['profile-header']}`}>
        <div>
          <h4 id="profileName">Customer Name</h4>
          <p className="text-muted mb-0">Customer Account</p>
        </div>
      </div>
      <hr />
      {/* Profile Form */}
      <form id="profileForm">
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="fullName" className={`${style['form-label']} form-label`}>
              Full Name
            </label>
            <input
              type="text"
              className={`${style['form-control']} form-control`}
              id="fullName"
              required=""
              minLength={3}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className={`${style['form-label']} form-label`}>
              Email Address
            </label>
            <input
              type="email"
              className={`${style['form-control']} form-control`}
              id="email"
              required=""
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className={`${style['form-label']} form-label`}>
              Phone Number
            </label>
            <input
              type="tel"
              className={`${style['form-control']} form-control`}
              id="phone"
              maxLength={11}
              pattern="03[0-9]{9}"
              required=""
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="city" className={`${style['form-label']} form-label`}>
              City
            </label>
            <input type="text" className={`${style['form-control']} form-control`} id="city" required="" />
          </div>
          <div className="col-12">
            <label htmlFor="address" className={`${style['form-label']}form-label`}>
              Complete Address
            </label>
            <textarea
              className={`${style['form-control']} form-control`}
              id="address"
              rows={3}
              required=""
              defaultValue={""}
            />
          </div>
        </div>
        {/* Buttons */}
        <div className={`${style['profile-actions']} mt-4`}>
          <button type="button" id="editBtn" className={`btn ${style['btn-outline-orange']}`}>
            Edit Profile
          </button>
          <button
            type="submit"
            id="saveBtn"
            className={`btn ${style['btn-orange']}`}
            disabled=""
          >
            Save Changes
          </button>
        </div>
        <p id="successMessage" className={`${style['success-message']} mt-3 d-none`}>
          Profile updated successfully!
        </p>
      </form>
    </div>
    {/* Quick Links */}
    <div className={`${style['quick-links']} mt-4`}>
      <a href="my-orders.html">
        <span>My Orders</span>
      </a>
      <a href="wishlist.html">
        <span>My Wishlist</span>
      </a>
      <a href="cart.html">
        <span>Shopping Cart</span>
      </a>
    </div>
  </main>
</>

    </>
  )
}

export default Myprofile