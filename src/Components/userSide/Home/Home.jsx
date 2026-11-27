
import style from './Home.module.css';
import hero from '../../../assets/Hero-Image.avif';
import video1 from '../../../assets/video1.mp4';
import video2 from '../../../assets/video2.mp4';
import video3 from '../../../assets/video3.mp4';
import video4 from '../../../assets/video4.mp4';
import SaleBanner from './SaleBanner';
import { useState, useContext, useEffect } from 'react';
import Cart from '../Cart/Cart';
import CartTable from '../Cart/CartTable';
import { DataContext } from '../DataContext';

function Home() {
  const data = {
    products: [
      {
        id: 1,
        name: "Laptop",
        price: 50000,
        img: "Laptop.jpg",
        rating: {
          start: 4,
          reviews: 50,
        },
        stock: 8,
      },
      {
        id: 2,
        name: "Bag",
        price: 50000,
        img: "bag.jpg",
        rating: {
          start: 4,
          reviews: 50,
        },
        stock: 7,
      },
      {
        id: 3,
        name: "Earbuds",
        price: 50000,
        img: "earbuds.jpg",
        rating: {
          start: 4,
          reviews: 50,
        },
        stock: 12,
      },
      {
        id: 4,
        name: "Mobile",
        price: 50000,
        img: "mobile.jpg",
        rating: {
          start: 4,
          reviews: 50,
        },
        stock: 6,
      },
      {
        id: 5,
        name: "Shirt",
        price: 50000,
        img: "shirt.jpg",
        rating: {
          start: 4,
          reviews: 50,
        },
        stock: 10,
      },
      {
        id: 6,
        name: "Shoes",
        price: 50000,
        img: "shoes.jpg",
        rating: {
          start: 4,
          reviews: 50,
        },
        stock: 14,
      },
      {
        id: 7,
        name: "Glasses",
        price: 50000,
        img: "glasses.jpg",
        rating: {
          start: 4,
          reviews: 50,
        },
        stock: 4,
      },
      {
        id: 8,
        name: "Charger",
        price: 50000,
        img: "charger.jpg",
        rating: {
          start: 4,
          reviews: 50,
        },
        stock: 10,
      },
    ],
  };

  const [value, setValue] = useState([]);
  const [qty, setQty] = useState([]);

  // Increase function
  const qtyInc = (t) => {
    setQty((prevQty) => {
      const updatedQty = [...prevQty];
      updatedQty[t] = (updatedQty[t] || 1) + 1;
      return updatedQty;
    });
  };

  // Decrease function
  const qtyDec = (d, id) => {
    setQty((prevQty) => {
      const currentQty = prevQty[d] || 1;

      if (currentQty === 1) {
        setValue((prevVal) => prevVal.filter((item) => item.id !== id));
        const fnalDec = [...prevQty];
        fnalDec.splice(d, 1);
        return fnalDec;
      } else {
        const fnalDec = [...prevQty];
        fnalDec[d] = currentQty - 1;
        return fnalDec;
      }
    });
  };

  // Add function
  const add = (s) => {
    const indexFind = value.findIndex((item) => item.id === s.id);
    if (indexFind !== -1) {
      qtyInc(indexFind);
    } else {
      setValue([...value, s]);
      setQty([...qty, 1]);
    }
  };

  const { setSharedData } = useContext(DataContext);

  useEffect(() => {
    setSharedData({
      cartItems: value,
      quantities: qty,
      increaseQty: qtyInc,
      decreaseQty: qtyDec,
    });
  }, [value, qty]);


  return (
    <>
     <section className={`${style['hero-section']} container`}>
    <div className="container">
      <div className="row align-items-center">
        {/* LEFT CONTENT */}
        <div className={`col-lg-6 ${style['hero-content']}`}>
          <span className={`${style['hero-badge']}`}>Your Trusted Online Marketplace</span>
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
          <div className={`${style['hero-buttons']}`}>
            <a href="#" className={`${style['hero-btn']} ${style['primary-btn']}`}>
              Shop Now
              <i className="bi bi-arrow-right" />
            </a>
            <a href="#" className={`${style['hero-btn']} ${style['secondary-btn']}`}>
              Explore Categories
            </a>
          </div>
          {/* TRUST POINTS */}
          <div className={`${style['hero-trust']}`}>
            <div className={`${style['trust-item']}`}>
              <i className={`fa-solid fa-cart-arrow-down ${style['hero-icon']}`} />
              <div>
                <strong>Secure Shopping</strong>
                <small>Safe &amp; protected</small>
              </div>
            </div>
            <div className={`${style['trust-item']}`}>
              <i className={`bi bi-truck ${style['hero-icon']}`} />
              <div>
                <strong>Fast Delivery</strong>
                <small>To your doorstep</small>
              </div>
            </div>
            <div className={`${style['trust-item']}`}>
              <i className={`fa-solid fa-house-flood-water ${style['hero-icon']}`} />
              <div>
                <strong>Trusted Sellers</strong>
                <small>Verified stores</small>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <div className={`col-lg-6 ${style['hero-image-wrapper']}`}>
          <div className={`${style['hero-image-box']}`}>
            <img
              src={hero}
              alt="Online Shopping"
              className={`${style['hero-image']}`}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <main>
    {/* ================= CATEGORIES SECTION ================= */}
    <section className={`${style['categories-section']} py-5`}>
      <div className="container">
        {/* SECTION HEADER */}
        <div className={`d-flex justify-content-between align-items-end mb-4 ${style['categories-header']}`}>
          <div>
            <span className="text-uppercase  " id={style['category-heaading']}>
              SHOP BY CATEGORY
            </span>
            <h2 className="fw-bold mt-2 mb-2">Find What You're Looking For</h2>
            <p className="text-secondary mb-0">
              Explore our most popular categories
            </p>
          </div>
          <a href="#" className="text-dark fw-semibold text-decoration-none">
            <span id={style['view-all1']}> View All Categories</span>
            <i className="bi bi-arrow-right ms-1" id={style['view-all2']} />
          </a>
        </div>
          {/* react actions row */}

          {/* first row */}
         <div className=" row">
          
         {/* Card */}
        <Cart add={add} data={data} decrease={qtyDec} increase={qtyInc} quantity={qty} ></Cart>
        
          </div>

          {/* Sale Banner */}
          <SaleBanner></SaleBanner>

          {/* House Equipments row */}
      
          <h2>House Equipments</h2>
           <div className={`d-flex justify-content-between align-items-end mb-4 ${style['categories-header']}`}>
          <div className="col-lg-6">
            <a href="#" className={`${style['category-card']} ${style['category-large']} d-block`}>
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
                alt="Home and Living"
              />
              <div className={`${style['category-content']}`}>
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
                <a href="#" className={`${style['category-card']} d-block`}>
                  <img
                    src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=85"
                    alt="Sports"
                  />
                  <div className={`${style['category-content']}`}>
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
                <a href="#" className={`${style['category-card']} d-block`}>
                  <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=85"
                    alt="Automotive"
                  />
                  <div className={`${style['category-content']}`}>
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
                <a href="#" className={`${style['category-card']} d-block`}>
                  <img
                    src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=85"
                    alt="Gaming"
                  />
                  <div className={`${style['category-content']}`}>
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
                <a href="#" className={`${style['category-card']} d-block`}>
                  <img
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=85"
                    alt="Books"
                  />
                  <div className={`${style['category-content']}`}>
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
       {/* Gaming row */}
        <div className="row mt-3 text-center">
          <h3>Gaming World</h3>
          {/* =================================
           SMALL CATEGORY 2 — GROCERIES
      ================================== */}
          <div className="col-6  col-lg-3 ">
            <a href="#" className={`${style['category-card']} d-block`}>
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=85"
                alt="Groceries"
              />
              <div className={`${style['category-content']}`}>
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
            <a href="#" className={`${style['category-card']} d-block`}>
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=85"
                alt="Beauty"
              />
              <div className={`${style['category-content']}`}>
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
            <a href="#" className={`${style['category-card']} d-block`}>
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=85"
                alt="Groceries"
              />
              <div className={`${style['category-content']}`}>
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
            <a href="#" className={`${style['category-card']} d-block`}>
              <img
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=85"
                alt="Health and Wellness"
              />
              <div className={`${style['category-content']}`}>
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
        <div id={style.asid1} className="col-xxl-6 col-lg-6 col-md-12 col-sm-12">
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
        <div id={style.asid2} className="col-xxl-6 col-lg-6 col-md-12 col-sm-12">
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
export default Home;