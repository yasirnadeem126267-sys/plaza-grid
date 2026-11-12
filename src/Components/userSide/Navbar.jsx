import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <>
    <nav className="navbar navbar-light bg-light navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className="navbar-nav  align-items-lg-center d-flex justify-content-evenly w-100">
          <li className="nav-item">
            <Link to='/home' className='hovers'>Home</Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link  hovers"
              href="../Shop-Product-page/Shop-Product.html"
            >
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  hovers" href="../About Us/about.html">
              About Us
            </a>
          </li>
          <li className="nav-item">
           <Link to="/contact" className='hovers'>Contact Us</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link  hovers" href="../FAQ/faq.html">
              FAQ
            </a>
          </li>
          {/*More*/}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle hovers"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              More
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="../MyAccount-Profile/myAccount.html"
                >
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../Policies/policies.html">
                  Policies
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../Privacy/privacy.html">
                  Privacy
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="../MyOrders-History/myOrders.html"
                >
                  History
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../WishList/wishList.html">
                  Wish List
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    
    </>
  )
}

export default Navbar