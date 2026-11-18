import style from './Dashboard.module.css'
let Dashboard=()=>{
    return(
        <>
  
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
  />

  <div className={style['admin-layout']}>
    {/* Sidebar */}
    <aside className={style.sidebar} id={style.sidebar} >
      <div className={style['sidebar-brand']}>
        <a href="../index.html">
          plaza<span>Grid</span>
        </a>
        <p>ADMIN PANEL</p>
      </div>
      <div className={ style['sidebar-menu']}>
       
        <a href="admin-dashboard.html" className={`${style['menu-link']} ${style.active}`}>
        
          <span>Dashboard</span>
        </a>
        <a href="admin-products.html" className={style['menu-link']}>
         
          <span>Products</span>
        </a>
        <a href="admin-categories.html" className={style['menu-link']}>
         
          <span>Categories</span>
        </a>
        <a href="admin-orders.html" className={style['menu-link']}>
        
          <span>Orders</span>
        </a>
        <a href="admin-customers.html" className={style['menu-link']}>
         
          <span>Customers</span>
        </a>
      
        <a href="admin-inventory.html" className={style['menu-link']}>
         
          <span>Inventory</span>
        </a>
        <a href="admin-messages.html" className={style['menu-link']}>
        
          <span>Messages</span>
        </a>
      
        <a href="admin-profile.html" className={style['menu-link']}>
        
          <span>Admin Profile</span>
        </a>
        <a href="admin-settings.html" className={style['menu-link']}>
         
          <span>Settings</span>
        </a>
      </div>
      <div className={style['sidebar-bottom']}>
        <a href="admin-login.html" className={style['logout-link']}>
        
          <span>Logout</span>
        </a>
      </div>
    </aside>
    {/* Main Content */}
    <main className={style['main-content']}>
      {/* Topbar */}
      <header className={style.topbar}>
        <div className={style['topbar-left']}>
          <button className={style['sidebar-toggle']} id={style.sidebarToggle}>
           Toggle
          </button>
          <div>
            <h5>Dashboard</h5>
            <p>Welcome back, Admin!</p>
          </div>
        </div>
        <div className={style['admin-info']}>
         
          <div className={style['admin-details']}>
            <strong>Administrator</strong>
            <small>Store Admin</small>
          </div>
        </div>
      </header>
      {/* Dashboard Content */}
      <section className={style['dashboard-content']}>
        <div className={style['page-heading']}>
          <div>
            <h2>Dashboard Overview</h2>
            <p>Here's what's happening with your store today.</p>
          </div>
          <span className={style['today-date']} id={style.todayDate} />
        </div>
        {/* Statistics Cards */}
        <div className={`row g-4 ${style['stats-row']}`}>
          <div className="col-xl-3 col-md-6">
            <div className={style['stat-card']}>
             
              <div className={style['stat-info']}>
                <p>Total Products</p>
                <h3 id={style.totalProducts}>8</h3>
                <small>Sample store products</small>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className={style['stat-card']}>
             
              <div className={style['stat-info']}>
                <p>Total Orders</p>
                <h3 id={style.totalOrders}>0</h3>
                <small>All placed orders</small>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className={style['stat-card']}>
             
              <div className={style['stat-info']}>
                <p>Total Customers</p>
                <h3 id={style.totalCustomers}>0</h3>
                <small>Unique order customers</small>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className={style['stat-card']}>
             
              <div className={style['stat-info']}>
                <p>Total Revenue</p>
                <h3 id={style.totalRevenue}>Rs. 0</h3>
                <small>Based on saved orders</small>
              </div>
            </div>
          </div>
        </div>
        {/* Orders Overview and Quick Actions */}
        <div className="row g-4 mt-2">
          <div className="col-lg-7">
            <div className={style['dashboard-card']}>
              <div className={style['card-heading']}>
                <div>
                  <h5>Orders Overview</h5>
                  <p>Current order status summary</p>
                </div>
              
              </div>
              <div className={style['order-status-list']}>
                <div className={style['status-item']}>
                  <div className={style['status-label']}>
                   
                    Pending Orders
                  </div>
                  <strong id={style.pendingOrders}>0</strong>
                </div>
                <div className="progress">
                  <div className={`progress-bar ${style['pending-bar']}`} id={style.pendingBar} />
                </div>
                <div className={style['status-item']}>
                  <div className={style['status-label']}>
                   
                    Confirmed Orders
                  </div>
                  <strong id={style.confirmedOrders}>0</strong>
                </div>
                <div className="progress">
                  <div
                    className={`progress-bar ${style['confirmed-bar']}`}
                    id={style.confirmedBar}
                  />
                </div>
                <div className={style['status-item']}>
                  <div className={style['status-label']}>
                   
                    Cancelled Orders
                  </div>
                  <strong id={style.cancelledOrders}>0</strong>
                </div>
                <div className="progress">
                  <div
                    className={` progress-bar ${style['cancelled-bar']}`}
                    id={style.cancelledBar}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className={style['dashboard-card']}>
              <div className={style['card-heading']}>
                <div>
                  <h5>Quick Actions</h5>
                  <p>Manage your store quickly</p>
                </div>
               
              </div>
              <div className={style['quick-actions']}>
                <a href="admin-products.html" className={style['action-link']}>
                  <span className={`${style['action-icon']}  ${style.orange}`}>
                   
                  </span>
                  <span>Add New Product</span>
                 
                </a>
                <a href="admin-orders.html" className={style['action-link']}>
                
                  <span>Manage Orders</span>
                  
                </a>
                <a href="admin-categories.html" className={style['action-link']}>
                  
                  <span>Manage Categories</span>
                
                </a>
                <a href="admin-messages.html"  className={style['action-link']}>
                 
                  <span>View Messages</span>
                 
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Orders */}
        <div className={`${style['dashboard-card']} ${style['recent-orders-card']}`}>
          <div className={style['card-heading']}>
            <div>
              <h5>Recent Orders</h5>
              <p>Latest customer orders</p>
            </div>
            <a href="admin-orders.html" className={style['view-all']}>
              View All 
            </a>
          </div>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Payment</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody id={style.recentOrdersTable}>
                <tr>
                  <td colSpan={6} className="text-center py-4">
                    No orders found.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
       
      </section>
    </main>
  </div>
</>

    )
}
export default Dashboard;