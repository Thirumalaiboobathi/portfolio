import React from 'react';
import Navbar from '../../navBar/navbar';
import './ProjectScreen.css'; 
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';

const ProjectScreen = () => {
  return (
    <div>
      <Navbar />

      <div className="project-screen">
        <div className="project-details">
          <h1 style={{textAlign:'center'}}>Project 1</h1>
          <h1>Google Product Page</h1>
          <p>
            Google Product Page is an e-commerce platform offering a range of products including phones, headphones, and accessories.
            Users can browse and purchase items, while administrators have access to order details.
          </p>
          
          <h2>Key Features</h2>
          <ul>
            <li>User Authentication: Separate logins for users and admin.</li>
            <li>Product Catalog: Display of phones, headphones, and accessories.</li>
            <li>Admin Privileges: Admin can view customer orders.</li>
          </ul>

          <h2>Technologies Used</h2>
          <ul>
            <li>React js</li>
            {/* Add more technologies if applicable */}
          </ul>

          <div className="project-links">
            <a href="https://luxury-toffee-e2fd3b.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="https://github.com/Thirumalaiboobathi/Simple-Google-Product-Page" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      <h3 style={{marginLeft:"20px"}}>Screenshots</h3>
      <div className="project-screenshots">
        
        <img src={img1} alt="Screenshot 1" />
        <img src={img2} alt="Screenshot 2" />
        <img src={img3} alt="Screenshot 3" />
      </div>
    </div>
  );
};

export default ProjectScreen;
