import './Dashboard.css'
let Dashboard=()=>{
    return(
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin Dashboard | plazaGrid</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
  />
  <link rel="stylesheet" href="dashboard.css" />
  <div className="admin-layout">
    {/* Sidebar */}
    <aside className="sidebar" id="sidebar">
      <div className="sidebar-brand">
        <a href="../index.html">
          plaza<span>Grid</span>
        </a>
        <p>ADMIN PANEL</p>
      </div>
      <div className="sidebar-menu">
       
        <a href="admin-dashboard.html" className="menu-link active">
        
          <span>Dashboard</span>
        </a>
        <a href="admin-products.html" className="menu-link">
         
          <span>Products</span>
        </a>
        <a href="admin-categories.html" className="menu-link">
         
          <span>Categories</span>
        </a>
        <a href="admin-orders.html" className="menu-link">
        
          <span>Orders</span>
        </a>
        <a href="admin-customers.html" className="menu-link">
         
          <span>Customers</span>
        </a>
      
        <a href="admin-inventory.html" className="menu-link">
         
          <span>Inventory</span>
        </a>
        <a href="admin-messages.html" className="menu-link">
        
          <span>Messages</span>
        </a>
      
        <a href="admin-profile.html" className="menu-link">
        
          <span>Admin Profile</span>
        </a>
        <a href="admin-settings.html" className="menu-link">
         
          <span>Settings</span>
        </a>
      </div>
      <div className="sidebar-bottom">
        <a href="admin-login.html" className="logout-link">
        
          <span>Logout</span>
        </a>
      </div>
    </aside>
    {/* Main Content */}
    <main className="main-content">
      {/* Topbar */}
      <header className="topbar">
        <div className="topbar-left">
          <button className="sidebar-toggle" id="sidebarToggle">
           Toggle
          </button>
          <div>
            <h5>Dashboard</h5>
            <p>Welcome back, Admin!</p>
          </div>
        </div>
        <div className="admin-info">
         
          <div className="admin-details">
            <strong>Administrator</strong>
            <small>Store Admin</small>
          </div>
        </div>
      </header>
      {/* Dashboard Content */}
      <section className="dashboard-content">
        <div className="page-heading">
          <div>
            <h2>Dashboard Overview</h2>
            <p>Here's what's happening with your store today.</p>
          </div>
          <span className="today-date" id="todayDate" />
        </div>
        {/* Statistics Cards */}
        <div className="row g-4 stats-row">
          <div className="col-xl-3 col-md-6">
            <div className="stat-card">
             
              <div className="stat-info">
                <p>Total Products</p>
                <h3 id="totalProducts">8</h3>
                <small>Sample store products</small>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="stat-card">
             
              <div className="stat-info">
                <p>Total Orders</p>
                <h3 id="totalOrders">0</h3>
                <small>All placed orders</small>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="stat-card">
             
              <div className="stat-info">
                <p>Total Customers</p>
                <h3 id="totalCustomers">0</h3>
                <small>Unique order customers</small>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="stat-card">
             
              <div className="stat-info">
                <p>Total Revenue</p>
                <h3 id="totalRevenue">Rs. 0</h3>
                <small>Based on saved orders</small>
              </div>
            </div>
          </div>
        </div>
        {/* Orders Overview and Quick Actions */}
        <div className="row g-4 mt-2">
          <div className="col-lg-7">
            <div className="dashboard-card">
              <div className="card-heading">
                <div>
                  <h5>Orders Overview</h5>
                  <p>Current order status summary</p>
                </div>
              
              </div>
              <div className="order-status-list">
                <div className="status-item">
                  <div className="status-label">
                   
                    Pending Orders
                  </div>
                  <strong id="pendingOrders">0</strong>
                </div>
                <div className="progress">
                  <div className="progress-bar pending-bar" id="pendingBar" />
                </div>
                <div className="status-item">
                  <div className="status-label">
                   
                    Confirmed Orders
                  </div>
                  <strong id="confirmedOrders">0</strong>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar confirmed-bar"
                    id="confirmedBar"
                  />
                </div>
                <div className="status-item">
                  <div className="status-label">
                   
                    Cancelled Orders
                  </div>
                  <strong id="cancelledOrders">0</strong>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar cancelled-bar"
                    id="cancelledBar"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="dashboard-card">
              <div className="card-heading">
                <div>
                  <h5>Quick Actions</h5>
                  <p>Manage your store quickly</p>
                </div>
               
              </div>
              <div className="quick-actions">
                <a href="admin-products.html" className="action-link">
                  <span className="action-icon orange">
                   
                  </span>
                  <span>Add New Product</span>
                 
                </a>
                <a href="admin-orders.html" className="action-link">
                
                  <span>Manage Orders</span>
                  
                </a>
                <a href="admin-categories.html" className="action-link">
                  
                  <span>Manage Categories</span>
                
                </a>
                <a href="admin-messages.html" className="action-link">
                 
                  <span>View Messages</span>
                 
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Orders */}
        <div className="dashboard-card recent-orders-card">
          <div className="card-heading">
            <div>
              <h5>Recent Orders</h5>
              <p>Latest customer orders</p>
            </div>
            <a href="admin-orders.html" className="view-all">
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
              <tbody id="recentOrdersTable">
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