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
                <strong>Database:</strong> MySQL
              </li>
              <li>
                <strong>API Development & Integration:</strong> MockAPI (Simulated API Integration), RESTful API Design
              </li>
              <li>
                <strong>Development Tools:</strong> Figma, Adobe XD
              </li>
              <li>
                <strong>Design:</strong> User research, Wireframing, Usability Study, Prototyping
              </li>
            </ul>
          </div>
           {/* Add a download link for your resume */}
           <a
                href="https://drive.google.com/file/d/1d2rFzWx56eYYx0q9mlf7RUPXWVv5r-bi/view?usp=sharing" // Replace with the actual path to your resume file
                download="Thirumalaiboobathi_Resume.pdf" // Specify the filename for the downloaded file
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
              {/* Instagram link with Instagram icon */}
              <a
                href="https://www.instagram.com/thirumalaiboobathi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram style={{ fontSize: '30px' }} className="instagram-icon" />
                {/* Instagram icon */}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
