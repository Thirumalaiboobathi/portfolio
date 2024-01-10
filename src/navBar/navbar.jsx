import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons
import 'bootstrap/dist/css/bootstrap.min.css';

import './navbar.css';
import { AllRoutes } from '../router/router';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className={`nav-link${location.pathname === '/' ? ' active' : ''}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={AllRoutes.products}
                className={`nav-link${location.pathname === AllRoutes.products ? ' active' : ''}`}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={AllRoutes.contact}
                className={`nav-link${location.pathname === AllRoutes.contact ? ' active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Add GitHub and LinkedIn icons */}
        <div className="social-icons">
          <a href="https://github.com/Thirumalaiboobathi" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/thirumalaiboobathi-b-902a51233/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
