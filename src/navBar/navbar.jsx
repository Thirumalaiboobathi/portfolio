import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


import './navbar.css';
import { AllRoutes } from '../router/router';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="row w-100 align-items-start">
          <div className="col-12 col-md-6 left-corner">
            <p style={{alignItems:'center'}}>Thirumalaiboobathi | Full Stack Developer</p>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-md-end">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
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
            </div>

            {/* Add GitHub and LinkedIn icons */}
            <div className="social-icons ml-md-auto">
              <a href="https://github.com/Thirumalaiboobathi" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/thirumalaiboobathi-b-902a51233/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
