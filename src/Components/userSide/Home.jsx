
import './Home.css'
import hero from '../../assets/Hero-Image.avif'
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import video3 from '../../assets/video3.mp4'
import video4 from '../../assets/video4.mp4'
function Home() {
  return (
    <>
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
    </>
  )
}

export default Home