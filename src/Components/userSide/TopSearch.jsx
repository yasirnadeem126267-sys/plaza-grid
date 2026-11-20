import React, { useState, useContext } from 'react';
import style from './TopSearch.module.css';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext'; 

function TopSearch() {
  const [table, setTable] = useState(false);
  const { sharedData } = useContext(DataContext);
  const { cartItems = [], quantities = [], increaseQty, decreaseQty } = sharedData || {};

  return (
    <>
      {/*Topbar start*/}
      <div className={`${style['top-bar']} `}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span>
                <i className="bi bi-truck" />
                Free Delivery on Orders Over Rs. 3000
              </span>
            </div>
            <div className={`${style['top-links']}`}>
              <a href="#">Track Order</a>
              <a href="#">Help &amp; Support</a>
            </div>
          </div>
        </div>
      </div>
      {/*Topbar end*/}

      {/*Navbar start*/}
      <nav>
        <div className={`navbar navbar-expand-lg ${style['main-navbar']}`}>
          <div className="container">
            {/* LOGO */}
            <a className={`${style['navbar-brand']} ${style.logo} navbar-brand`} href="#">
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
              <button className={`${style['category-btn']} ms-lg-4`}>
                <i className="bi bi-grid" />
                Categories
              </button>

              {/* SEARCH */}
              <form className={`${style['search-box']} mx-lg-4 my-3 my-lg-0`}>
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
              <div className={`${style['nav-actions']} ms-lg-auto d-flex `}>
                <div>
                  <Link to="/signIn" className="btn btn-success">
                    Sign In
                  </Link>
                </div>

                {/* CART BUTTON */}
                <button
                  type="button"
                  className={`${style['nav-action']} cart-link d-flex btn`}
                  id="cart"
                  onClick={() => setTable(!table)}
                >
                  <div>
                    <small>Your</small>
                    <strong>Cart</strong>
                  </div>
                  <i className="bi bi-cart3" />
                  <span className={`${style['cart-count']}`} id="cartCount">
                    {cartItems.length}
                  </span>
                </button>

                {/* CART TABLE */}
                {table && (
                  <table className="table bg-white position-absolute end-0 mt-5 shadow" style={{ zIndex: 1000, width: '400px' }}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Remove</th>
                        <th>Quantity</th>
                        <th>Add</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="text-center">Cart is empty</td>
                        </tr>
                      ) : (
                        cartItems.map((item, index) => (
                          <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                              <img src={item.img} alt={item.name} style={{ width: '40px' }} />
                            </td>
                            <td>{item.price}</td>
                            <td>
                              <button className="btn btn-sm btn-danger" onClick={() => decreaseQty(index, item.id)}>
                                -
                              </button>
                            </td>
                            <td>{quantities[index]}</td>
                            <td>
                              <button className="btn btn-sm btn-success" onClick={() => increaseQty(index)}>
                                +
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopSearch;
