import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
     <footer className="main-footer">
    <div className="container">
      <div className="row g-4 footer-main">
        <div className="col-lg-4 col-md-6">
          <p href="#" className="footer-logo">
            <i className="bi bi-bag-check-fill" />
            MyShop<span>.</span>
          </p>
          <p className="footer-description">
            Your trusted online marketplace for quality products, reliable
            sellers, and a better shopping experience.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <i className="bi bi-facebook" />
            </a>
            <a href="#" aria-label="Instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href="#" aria-label="Twitter">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="#" aria-label="YouTube">
              <i className="bi bi-youtube" />
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-6">
          <h5 className="footer-heading">Quick Links</h5>
          <ul className="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">All Products</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Flash Deals</a>
            </li>
            <li>
              <a href="#">Professional Shops</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 col-6">
          <h5 className="footer-heading">Customer Service</h5>
          <ul className="footer-links">
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">My Orders</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 col-6">
          <h5 className="footer-heading">For Sellers</h5>
          <ul className="footer-links">
            <li>
              <a href="#">Become a Seller</a>
            </li>
            <li>
              <a href="#">Open a Shop</a>
            </li>
            <li>
              <a href="#">Seller Dashboard</a>
            </li>
            <li>
              <a href="#">Seller Guidelines</a>
            </li>
            <li>
              <a href="#">Contact Support</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 col-6">
          <h5 className="footer-heading">Contact Us</h5>
          <ul className="footer-links footer-contact">
            <li>
              <i className="bi bi-envelope" />
              <a href="">Email Support</a>
            </li>
            <li>
              <i className="bi bi-telephone" />
              <a href="">Call Support</a>
            </li>
            <li>
              <i className="bi bi-clock" />
              <span>24/7 Support</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 plazaGrid. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>

    </>
  )
}

export default Footer;