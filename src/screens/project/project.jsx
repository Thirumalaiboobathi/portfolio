import React from 'react';
import Navbar from '../../navBar/navbar';
import './ProjectScreen.css'; 
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import project2Img1 from './prj 2/img1.webp';
import project2Img2 from './prj 2/img2.webp';
import project2img3 from './prj 2/Screenshot (4).webp';

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
      <h3 style={{marginLeft:"20px"}}>Mockups</h3>
      <div className="project-screenshots">
        
        <img src={img1} alt="Screenshot 1" />
        <img src={img2} alt="Screenshot 2" />
        <img src={img3} alt="Screenshot 3" />
      </div>

      {/* Project 2 */}
      <div className="project-screen">
        <div className="project-details">
          <h1 style={{textAlign:'center'}}>Project 2</h1>
          <h1>My Project UX Design</h1>
          <p>
            In the One-week long Project, I worked as a designer from conception to delivery to design a responsive website that allows users to book tickets for movies.
          </p>

          <h2>Overview</h2>
          <p>
            In the one-week-long project, I worked as a designer from conception to delivery to design a responsive website that allows users to book tickets for movies.
          </p>

        

          <h2>Platform</h2>
          <p>Website</p>

          <h2>Tools</h2>
          <p>Adobe XD</p>

          <h2>My Role</h2>
          <p>UX Designer</p>

          <h2>Problem</h2>
          <p>
            Busy workers and commuters lack the time necessary to book the ticket.
          </p>

          <h2>Goal</h2>
          <p>
            To design a responsive website to book movie tickets that allows users to easily book tickets for their favorite movies and able to pre-order snacks.
          </p>

          <h2>Responsibilities</h2>
          <p>
            Conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, iterating on designs, and responsive design.
          </p>

          <h2>User Research</h2>
          <p>
            I conducted interviews and created empathy maps to understand the users I’m designing for and their needs. A primary user group identified through research was working adults who don’t have time to book tickets for the movies. This User group confirmed initial assumptions about customers but research also revealed that time was not the only factor limiting the User by getting tickets at the ticket counter in the theaters. Other user problems include obligation, interest, or challenges that make it difficult to get tickets at the ticket counter.
          </p>

          <h2>User Pain Points</h2>
          <ul>
            <li>Working adults are too busy to spend time in the ticket counter.</li>
            <li>Platforms for booking tickets are not equipped with assistive technology.</li>
            <li>Older people feel the environment is hard to use, and older feel hard to stand in line to get snacks and tickets in the theater.</li>
            <li>Text-heavy menus on websites are often difficult to read and book tickets.</li>
          </ul>
          
          <h3 style={{marginLeft:"20px"}}>Usability Study Findings</h3>
          
            <img src={project2img3} alt="Project 2 Screenshot 2" />
          

          <h3 style={{marginLeft:"20px"}}>Mockups</h3>
          <div className="project-screenshots">
            <img src={project2Img1} alt="Project 2 Screenshot 1" />
            <img src={project2Img2} alt="Project 2 Screenshot 2" />

          </div>

          {/* ... (Project 2 links) */}
        </div>
      </div>
    </div>
  );
};

export default ProjectScreen;
