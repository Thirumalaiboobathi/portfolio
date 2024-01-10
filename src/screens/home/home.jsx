import React from 'react';
import './Homepage.css';
import logo from './img.jpeg' ;
import Navbar from '../../navBar/navbar';
import { FaInstagram } from 'react-icons/fa';

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
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React" />
          <img src="https://w7.pngwing.com/pngs/172/554/png-transparent-javascript-html-computer-software-web-browser-watermark-angle-text-rectangle.png" alt="javascript" />
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png" alt="Java" />
          <img src="https://freepiker-storage.s3.amazonaws.com/preview/preview_6ee9fc53c2778d84530fd5768adb0a60.jpg" alt="htmlcss" />
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png" alt="Bootstrap" />
         
          
        </div>
      </div>
    </div>
    {/* Footer section */}
    <footer className="footer">
  
    <div className="footer-content">
          <div className="lets-connect">
          <p>Thirumalaiboobathi | Full Stack Developer</p>
         
            <div className="social-links" style={{marginLeft:'1090px'}}>
              {/* Instagram link with Instagram icon */}
              <a href="https://www.instagram.com/thirumalaiboobathi/" target="_blank" rel="noopener noreferrer">
                <FaInstagram style={{ fontSize: '30px' }}  className="instagram-icon"  /> {/* Instagram icon */}
              </a>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
    
  );
};

export default Homepage;
