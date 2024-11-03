import React from "react";
import { FaUsers, FaBox, FaChartLine, FaCog, FaTag, FaFileAlt } from "react-icons/fa";

const Admin = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li>
              <FaChartLine /> <a href="/Admin">Dashboard</a>
            </li>
            <li>
              <FaBox /> <a href="/productsPage">Products</a>
            </li>
            <li>
              <FaUsers /> <a href="/categoriesPage">Categories</a>
            </li>
            <li>
              <FaTag /> <a href="/usersPage">Users</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1>Admin Dashboard</h1>
          <p>Welcome, Admin! Here's what's happening today.</p>
        </header>

        {/* Stats Overview */}
        <section className="stats-overview">
          <div className="stat-box">
            <h3>Total Sales</h3>
            <p>$12,450</p>
          </div>
          <div className="stat-box">
            <h3>New Orders</h3>
            <p>58</p>
          </div>
          <div className="stat-box">
            <h3>Total Customers</h3>
            <p>8,200</p>
          </div>
        </section>

        {/* Charts (Placeholder) */}
        <section className="charts">
          <div className="chart-box">
            <h3>Sales Chart</h3>
            <div className="chart-placeholder">Orders Sale Data will be shown here.</div>
          </div>
        </section>

        {/* Latest Activity */}
        <section className="recent-activity">
          <div className="activity-box">
            <h3>Recent Activity</h3>
            <ul>
              <li>User JohnDoe placed a new order.</li>
              <li>New product added: "Pineapple and Banana"</li>
              <li>Discount applied to the order #3456</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;
