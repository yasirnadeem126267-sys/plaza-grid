import './App.css'
import hero from './assets/Hero-Image.avif'
import video1 from './assets/video1.mp4'
import video2 from './assets/video2.mp4'
import video3 from './assets/video3.mp4'
import video4 from './assets/video4.mp4'
let App=()=>{


  return(
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
  />
  
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
              <a href="#" className="nav-action me-3"></a>
              <a href="src/HTML/signi-in.html">
                {" "}
                <button className="btn btn-success">Sign In</button>
              </a>
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
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-md">
        {/*Links div*/}
        <div className="w-50">
          <a className="navbar-brand" href="#">
            Home
          </a>
          <a className="navbar-brand" href="#">
            Shop
          </a>
          <a className="navbar-brand" href="#">
            Products
          </a>
          <a className="navbar-brand" href="#">
            Servies
          </a>
          <a className="navbar-brand" href="#">
            About
          </a>
          <a className="navbar-brand" href="#">
            Contact
          </a>
        </div>{" "}
        {/*Links div end*/}
      </div>
    </div>{" "}
    {/*2nd div close*/}
  </nav>
  {/*Navbar end*/}
  <section className="hero-section container">
    <div className="container">
      <div className="row align-items-center">
        {/* LEFT CONTENT */}
        <div className="col-lg-6 hero-content">
          <span className="hero-badge">Your Trusted Online Marketplace</span>
          <h1>
            Everything You Need,
            <span>All in One Place.</span>
          </h1>
          <p>
            Discover thousands of products from trusted sellers and professional
            shops. Shop easily, securely, and get your products delivered to
            your doorstep.
          </p>
          {/* BUTTONS */}
          <div className="hero-buttons">
            <a href="#" className="hero-btn primary-btn">
              Shop Now
              <i className="bi bi-arrow-right" />
            </a>
            <a href="#" className="hero-btn secondary-btn">
              Explore Categories
            </a>
          </div>
          {/* TRUST POINTS */}
          <div className="hero-trust">
            <div className="trust-item">
              <i className="fa-solid fa-cart-arrow-down hero-icon" />
              <div>
                <strong>Secure Shopping</strong>
                <small>Safe &amp; protected</small>
              </div>
            </div>
            <div className="trust-item">
              <i className="bi bi-truck hero-icon" />
              <div>
                <strong>Fast Delivery</strong>
                <small>To your doorstep</small>
              </div>
            </div>
            <div className="trust-item">
              <i className="fa-solid fa-house-flood-water hero-icon" />
              <div>
                <strong>Trusted Sellers</strong>
                <small>Verified stores</small>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <div className="col-lg-6 hero-image-wrapper">
          <div className="hero-image-box">
            <img
              src={hero}
              alt="Online Shopping"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <main>
    {/* ================= CATEGORIES SECTION ================= */}
    <section className="categories-section py-5">
      <div className="container">
        {/* SECTION HEADER */}
        <div className="d-flex justify-content-between align-items-end mb-4 categories-header">
          <div>
            <span className="text-uppercase  " id="category-heaading">
              SHOP BY CATEGORY
            </span>
            <h2 className="fw-bold mt-2 mb-2">Find What You're Looking For</h2>
            <p className="text-secondary mb-0">
              Explore our most popular categories
            </p>
          </div>
          <a href="#" className="text-dark fw-semibold text-decoration-none">
            <span id="view-all1"> View All Categories</span>
            <i className="bi bi-arrow-right ms-1" id="view-all2" />
          </a>
        </div>
        {/* ================= CATEGORY GRID ================= */}
        <div className="row g-3 text-center">
          {/* =================================
           LARGE CATEGORY 1 — ELECTRONICS
      ================================== */}
          <div className="col-lg-6">
            <a href="#" className="category-card category-large d-block">
              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200&q=85"
                alt="Electronics"
              />
              <div className="category-content">
                <span>EXPLORE</span>
                <h3>Electronics</h3>
                <p>Latest Technology</p>
                <i className="bi bi-arrow-up-right" />
              </div>
            </a>
          </div>
          {/* 4 Categories fore of Electronis */}
          <div className="col-lg-6  ">
            <div className="row g-3">
              {/* =================================
           SMALL CATEGORY 1 — BEAUTY
      ================================== */}
              <div className="col-12 col-lg-6">
                <a href="#" className="category-card d-block">
                  <img
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=85"
                    alt="Beauty"
                  />
                  <div className="category-content">
                    <span>EXPLORE</span>
                    <h3>Beauty</h3>
                    <p>Personal Care</p>
                    <i className="bi bi-arrow-up-right" />
                  </div>
                </a>
              </div>
              {/* =================================
           SMALL CATEGORY 2 — GROCERIES
      ================================== */}
              <div className="col-12 col-lg-6">
                <a href="#" className="category-card d-block">
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=85"
                    alt="Groceries"
                  />
                  <div className="category-content">
                    <span>EXPLORE</span>
                    <h3>Groceries</h3>
                    <p>Fresh Essentials</p>
                    <i className="bi bi-arrow-up-right" />
                  </div>
                </a>
              </div>
              {/* =================================
           SMALL CATEGORY 7 — HEALTH
      ================================== */}
              <div className="col-12 col-lg-6">
                <a href="#" className="category-card d-block">
                  <img
                    src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=85"
                    alt="Health and Wellness"
                  />
                  <div className="category-content">
                    <span>EXPLORE</span>
                    <h3>Health</h3>
                    <p>Health &amp; Wellness</p>
                    <i className="bi bi-arrow-up-right" />
                  </div>
                </a>
              </div>
              {/* =================================
           SMALL CATEGORY 8 — BABY & KIDS
      ================================== */}
              <div className="col-12 col-lg-6">
                <a href="#" className="category-card d-block">
                  <img
                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=85"
                    alt="Baby and Kids"
                  />
                  <div className="category-content">
                    <span>EXPLORE</span>
                    <h3>Baby &amp; Kids</h3>
                    <p>Everything for Kids</p>
                    <i className="bi bi-arrow-up-right" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* =================================
           LARGE CATEGORY 2 — HOME & LIVING
      ================================== */}
          <h2>House Equipments</h2>
          <div className="col-lg-6">
            <a href="#" className="category-card category-large d-block">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
                alt="Home and Living"
              />
              <div className="category-content">
                <span>EXPLORE</span>
                <h3>Home &amp; Living</h3>
                <p>Make Your Space Better</p>
                <i className="bi bi-arrow-up-right" />
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              {/* =================================
           SMALL CATEGORY 3 — SPORTS
      ================================== */}
              <div className="col-12 col-lg-6">
                <a href="#" className="category-card d-block">
                  <img
                    src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=85"
                    alt="Sports"
                  />
                  <div className="category-content">
                    <span>EXPLORE</span>
                    <h3>Sports</h3>
                    <p>Fitness &amp; Sports</p>
                    <i className="bi bi-arrow-up-right" />
                  </div>
                </a>
              </div>
              {/* =================================
           SMALL CATEGORY 4 — AUTOMOTIVE
      ================================== */}
              <div className="col-12 col-lg-6">
                <a href="#" className="category-card d-block">
                  <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=85"
                    alt="Automotive"
                  />
                  <div className="category-content">
                    <span>EXPLORE</span>
                    <h3>Automotive</h3>
                    <p>Cars &amp; Accessories</p>
                    <i className="bi bi-arrow-up-right" />
                  </div>
                </a>
              </div>
              {/* =================================
           SMALL CATEGORY 5 — GAMING
      ================================== */}
              <div className="col-12  col-lg-6">
                <a href="#" className="category-card d-block">
                  <img
                    src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=85"
                    alt="Gaming"
                  />
                  <div className="category-content">
                    <span>EXPLORE</span>
                    <h3>Gaming</h3>
                    <p>Games &amp; Accessories</p>
                    <i className="bi bi-arrow-up-right" />
                  </div>
                </a>
              </div>
              {/* =================================
           SMALL CATEGORY 6 — BOOKS
      ================================== */}
              <div className="col-12 col-lg-6">
                <a href="#" className="category-card d-block">
                  <img
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=85"
                    alt="Books"
                  />
                  <div className="category-content">
                    <span>EXPLORE</span>
                    <h3>Books</h3>
                    <p>Books &amp; Learning</p>
                    <i className="bi bi-arrow-up-right" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*Single Category Row*/}
        <div className="row mt-3 text-center">
          <h3>Gaming World</h3>
          {/* =================================
           SMALL CATEGORY 2 — GROCERIES
      ================================== */}
          <div className="col-6  col-lg-3 ">
            <a href="#" className="category-card d-block">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=85"
                alt="Groceries"
              />
              <div className="category-content">
                <span>EXPLORE</span>
                <h3>Groceries</h3>
                <p>Fresh Essentials</p>
                <i className="bi bi-arrow-up-right" />
              </div>
            </a>
          </div>
          {/* =================================
           SMALL CATEGORY 1 — BEAUTY
      ================================== */}
          <div className="col-6  col-lg-3 ">
            <a href="#" className="category-card d-block">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=85"
                alt="Beauty"
              />
              <div className="category-content">
                <span>EXPLORE</span>
                <h3>Beauty</h3>
                <p>Personal Care</p>
                <i className="bi bi-arrow-up-right" />
              </div>
            </a>
          </div>
          {/* =================================
           SMALL CATEGORY 2 — GROCERIES
      ================================== */}
          <div className="col-6  col-lg-3 ">
            <a href="#" className="category-card d-block">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=85"
                alt="Groceries"
              />
              <div className="category-content">
                <span>EXPLORE</span>
                <h3>Groceries</h3>
                <p>Fresh Essentials</p>
                <i className="bi bi-arrow-up-right" />
              </div>
            </a>
          </div>
          {/* =================================
           SMALL CATEGORY 7 — HEALTH
      ================================== */}
          <div className="col-6  col-lg-3 ">
            <a href="#" className="category-card d-block">
              <img
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=85"
                alt="Health and Wellness"
              />
              <div className="category-content">
                <span>EXPLORE</span>
                <h3>Health</h3>
                <p>Health &amp; Wellness</p>
                <i className="bi bi-arrow-up-right" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <aside className="container">
      <section className="row">
        <div id="vid1" className="col-xxl-6 col-lg-6 col-md-12 col-sm-12">
          <video
            src={video1}
             autoPlay
            muted
            loop
            width="95%"
            height="420px"
            controls=""
          
          />
        </div>
        <div id="vid2" className="col-xxl-6 col-lg-6 col-md-12 col-sm-12">
          <video
            src={video2}
             autoPlay
            muted
            loop
            width="95%"
            height="420px"
            controls=""
            
          />
        </div>
      </section>
      <section className="row">
        <div id="asid1" className="col-xxl-6 col-lg-6 col-md-12 col-sm-12">
          {" "}
          <video
            src={video3}
             autoPlay
            muted
            loop
            width="95%"
            height="420px"
            controls=""
            
          />
        </div>
        <div id="asid2" className="col-xxl-6 col-lg-6 col-md-12 col-sm-12">
          <video
            src={video4}
             autoPlay
            muted
            loop
            width="95%"
            height="420px"
            controls=""
           
          />
        </div>
      </section>
    </aside>
  </main>
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
export default App;
