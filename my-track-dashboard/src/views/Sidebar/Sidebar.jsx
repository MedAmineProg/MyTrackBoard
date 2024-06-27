import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>  {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <Link to="/" className="brand-link">
    <img src={process.env.PUBLIC_URL+ '/dist/img/output-onlinepngtools.png'} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">MyTrackBoard</span>
  </Link>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src={process.env.PUBLIC_URL+ '/dist/img/user2-160x160.jpg'} className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <Link to='/' className="d-block">Mohamed Amine Abid</Link>
      </div>
    </div>
    {/* SidebarSearch Form */}

    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
        <li className="nav-item">
          <Link to="/" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Home
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/employe" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Employees
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Requests
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to="/conge" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Leave</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/paiement" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Payment</p>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/getalldoc" className="nav-link">
            <i className="nav-icon fas fa-book" />
            <p>
              Documents
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-envelope" />
            <p>
              Messages
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to="/inbox" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Inbox</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/compose" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Send</p>
              </Link>
            </li>
            {/* <li className="nav-item">
              <a href="pages/mailbox/read-mail.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Read</p>
              </a>
            </li> */}
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/horaire" className="nav-link">
            <i className="nav-icon fas fa-calendar-alt" />
            <p>
              Calendar
            </p>
          </Link>
        </li>

      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>
</div>
  )
}

export default Sidebar