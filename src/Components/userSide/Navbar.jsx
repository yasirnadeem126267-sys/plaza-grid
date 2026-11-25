import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
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
            <Link to='/' className={`${style.hovers} `}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/products'
              className={` ${style.hovers}`}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link  to="/about" className={` ${style.hovers}`} >
              About Us
            </Link>
          </li>
          <li className="nav-item">
           <Link to="/contact" className={`${style.hovers}`}>Contact Us</Link>
          </li>
          <li className="nav-item">
           <Link to='/faq' className={`${style.hovers} `}>FAQ</Link>
          </li>
          {/*More*/}
          <li className="nav-item dropdown">
            <a
              className={` dropdown-toggle ${style.hovers}`}
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
                <Link to="/policies" className={`dropdown-item ${style.hovers}`} >
                  Policies
                </Link>
              </li>
              <li>
                <Link  to='/privacy' className={` ${style.hovers} dropdown-item`}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/history"
                  className={` ${style.hovers}  dropdown-item`}
                  
                >
                  History
                </Link>
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