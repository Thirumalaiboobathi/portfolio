import React from 'react';
import './Homepage.css';
import logo from './imga1.jpg';
import Navbar from '../../navBar/navbar';
import { FaInstagram } from 'react-icons/fa';
import icons from './icons.jpeg';


const Homepage = () => {
  return (
    <div>
      <Navbar />

      <div className="homepage">
        <div className="left-section">
          <img src={logo} alt="Your Name" className="profile-image" />
        </div>
        <div className="right-section">
          <div className="icon-list">
            <img src={icons} alt="Your Name" style={{width:'400px',height:'auto',marginRight:'70px',marginBottom:'20px'}}/>
          </div>
          <div className="professional-info">
          <h2>Professional Skills</h2>
          <ul>
            <li>
              <strong>Web Development:</strong> HTML, CSS, JavaScript, Bootstrap, TailwindCSS, ReactJS, Git
            </li>
            <li>
              <strong>Programming:</strong> C/C++, Python, Java
            </li>
            <li>
              <strong>Database:</strong> MySQL,MongoDB
            </li>
            <li>
              <strong>API Development & Integration:</strong> MockAPI (Simulated API Integration), RESTful API Design,Spring Boot
            </li>
            <li>
              <strong>Development Tools:</strong> Figma, Adobe XD,Postman, Spring Tool Suite
            </li>
            <li>
              <strong>Design:</strong> User research, Wireframing, Usability Study, Prototyping
            </li>
          </ul>


          </div>
           {/* Add a download link for your resume */}
           <a
                href="https://drive.google.com/file/d/1yOAQJYcpkpyZR7vg31Aay-umscyxlPz0/view?usp=sharing" 
                download="Thirumalaiboobathi_Resume.pdf" 
                style={{ marginLeft: '10px', fontSize: '30px' }}
              >
                Download Resume
              </a>
        </div>
      </div>
      {/* Footer section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="lets-connect">
            <p>Thirumalaiboobathi | Full Stack Developer</p>

            <div className="social-links" style={{ marginLeft: '1090px' }}>
            
              <a
                href="https://www.instagram.com/thirumalaiboobathi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram style={{ fontSize: '30px' }} className="instagram-icon" />
                
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
