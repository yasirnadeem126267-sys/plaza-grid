import React from 'react'
import './TopSearch.css'
import { Link } from 'react-router-dom'
function TopSearch() {
  return (
    <>
    {/*Topbar start*/}
  <div className="top-bar ">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <span>
            <i className="bi bi-truck" />
            Free Delivery on Orders Over Rs. 3000
          </span>
        </div>
        <div className="top-links">
          <a href="#">Track Order</a>
          <a href="#">Help &amp; Support</a>
        </div>
      </div>
    </div>
  </div>
  {/*Topbar end*/}
  {/*Navbar start*/}
  <nav>
    <div className="navbar navbar-expand-lg main-navbar">
      <div className="container">
        {/* LOGO */}
        <a className="navbar-brand logo" href="#">
          Plaza<span>grid</span>
        </a>
        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          {/* CATEGORIES BUTTON */}
          <button className="category-btn ms-lg-4">
            <i className="bi bi-grid" />
            Categories
          </button>
          {/* SEARCH */}
          <form className="search-box mx-lg-4 my-3 my-lg-0">
            <input
              type="search"
              placeholder="Search for products..."
              id="searchInput"
            />
            <button type="button" id="searchBtn">
              <i className="bi bi-search" />
            </button>
          </form>
          {/* RIGHT SIDE */}
          <div className="nav-actions ms-lg-auto d-flex  ">
            {/* ACCOUNT */}
            <a href="#" className="nav-action me-3"></a>
            <div>
              
              
               <Link to="/signIn" className='btn btn-success'>Sign In</Link>
              
            </div>
            {/* CART */}
            <a href="#" className="nav-action cart-link d-flex" id="cart">
              <div>
                <small>Your</small>
                <strong>Cart</strong>
              </div>
              <i className="bi bi-cart3" />
              <span className="cart-count" id="cartCount">
                0
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>{" "}
    {/*1st div close*/}
   
    {/*2nd div close*/}
  </nav>
    </>
  )
}

export default TopSearch