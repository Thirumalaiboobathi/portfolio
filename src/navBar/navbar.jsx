import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

import './navbar.css';
import { AllRoutes } from '../router/router';

function Navbar() {
  const location = useLocation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavCollapsed ? 'side-navbar' : 'show'}`} id="navbarNav">
          <div className="row w-100 align-items-start">
            <div className="col-12 col-md-6 left-corner">
              <p style={{ alignItems: 'center' }}>Thirumalaiboobathi | Full Stack Developer</p>
            </div>

            {/* Adjusted the classes for larger views */}
            <div className={`col-12 col-md-6 d-md-flex justify-content-md-end ${isNavCollapsed ? 'sidebar' : ''}`}>
              <ul className={`navbar-nav ${isNavCollapsed ? 'mr-auto' : ''}`}>
                <li className="nav-item">
                  <Link to="/" className={`nav-link${location.pathname === '/' ? ' active' : ''}`}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={AllRoutes.project}
                    className={`nav-link${location.pathname === AllRoutes.project ? ' active' : ''}`}
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

              {/* Add GitHub and LinkedIn icons */}
              <div className="social-icons ml-md-auto">
                <a href="https://github.com/Thirumalaiboobathi" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/thirumalaiboobathi-b-902a51233/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
