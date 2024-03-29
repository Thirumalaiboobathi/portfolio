import React from 'react';
import Navbar from '../../navBar/navbar';
import './ProjectScreen.css'; 
import img1 from './img1.png';
import img2 from './img2.png';
//import img3 from './img3.png';
import project2Img1 from './prj 2/img1.webp';
import project2Img2 from './prj 2/pr2.1.png';
import proj3img1 from './prj 2/prj-3 scr1.webp';
import proj3img2 from './prj 2/pr3.1.png';
import proj3scr3 from './prj 2/prj-3 scr-4.webp';
import pr1 from './prj 2/pr1.png';
import pr2 from './prj 2/pr2.png'

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
          
          <h2>🌐 Key Features:</h2>
          <ul>
            <li><span><b>Tech-Driven Real-Time Updates:</b> </span>Seamlessly integrated with cutting-edge technologies, 
              our application ensures lightning-fast real-time data updates, delivering accurate and up-to-date product information. 🔄</li>
            <li><span><b>Secure Authentication:</b> </span> With the robust combination of Google Firebase and Springboot, the application offers a dual-login system ensuring secure access for both regular users and administrators. 🔐</li>
            <li><span><b>Dynamic Admin Product Management:</b> </span> Empowering administrators, the application, built on MongoDB, allows them to effortlessly add new products, ensuring a dynamic and ever-expanding product catalog. 📈</li>
          </ul>

          <h2>🔧 Tech Stack:</h2>
          <ul>
            <li>🌐 Frontend: ReactJS</li>
            <li>⚙️ Backend: Springboot</li>
            <li>📊 Database: MongoDB</li>
            <li>🔐 Authentication: Google Firebase</li>

          </ul>
          <h2>💡 What Sets This Project Apart:</h2>
          <ul>
            <li><strong>User-Centric Design:</strong> Prioritizing a seamless user experience to enhance customer satisfaction.</li>
            <li><strong>Tech-Driven Innovation:</strong> Leveraging a powerful tech stack for dynamic and accurate product information.</li>
            <li><strong>Scalability:</strong> Designed with the future in mind, allowing easy scalability and addition of new features.</li>
          </ul>


          <div className="project-links">
            <a href="https://luxury-toffee-e2fd3b.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="https://github.com/Thirumalaiboobathi/Simple-Google-Product-Page" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <br/>
          <h3 >Mockups</h3>
      <div className="project-screenshots">
        
        <img src={img1} alt="Screenshot 1" />
        <img src={img2} alt="Screenshot 2" />
        <img src={pr1} alt="Project 2 Screenshot 2" />
        
      </div>
        </div>
      </div>
      

      {/* Project 2 */}
      <div className="project-screen">
        <div className="project-details">
          <h1 style={{textAlign:'center'}}>Project 2</h1>
          <h1>Cinitime</h1>
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
          
          
          

          <h3 >Mockups</h3>
          <div className="project-screenshots">
            <img src={project2Img1} alt="Project 2 Screenshot 1" />
            <img src={pr2} alt="Project 2 Screenshot 2" />
            <img src={project2Img2} alt="Project 2 Screenshot 2" />

          </div>

          
        </div>
      </div>
      {/* Project 3 details */}
      <div className="project-screen">
        <div className="project-details">
          <h1 style={{ textAlign: 'center' }}>Project 3</h1>
          <h1>Local Politics Awareness Website</h1>
          <p>
            In the one-week-long project, I worked as a designer from conception to delivery to design a responsive website aimed at providing information about local politics to young individuals.
          </p>

          <h2>Overview</h2>
          <p>
            The project focused on addressing the lack of awareness about local politics among the nation's youth, which poses a threat to the democratic process. The goal was to design a responsive website to improve education on the topic of local politics and help young individuals become more informed.
          </p>

          <h2>Timeline</h2>
          <p>February 2023</p>

          <h2>Platform</h2>
          <p>Website</p>

          <h2>Tools</h2>
          <p>Figma</p>

          <h2>My Role</h2>
          <p>UX Designer</p>

          <h2>Problem</h2>
          <p>
            Most youngsters in the nation are not aware of the local politics, leading to a decline in democratic engagement.
          </p>

          <h2>Goal</h2>
          <p>
            Design a responsive website that enhances education on local politics and helps youngsters understand and engage with local political issues.
          </p>

          <h2>Responsibilities</h2>
          <p>
            Conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, iterating on designs, and implementing responsive design.
          </p>

          <h2>User Research</h2>
          <p>
            Utilized Public Affairs data on local politics to develop interview questions. Participants expressed a lack of active interest in local politics, but the feedback highlighted a willingness to increase knowledge if provided with an easy-to-use tool.
          </p>
          <br/>
          <h3 >Mockups</h3>
          <div className="project-screenshots">
            <img src={proj3img1} alt="Project 2 Screenshot 1" />
            
            <img src={proj3img2} alt="Project 2 Screenshot 2" />
            <img src={proj3scr3} alt="Project 2 Screenshot 2" />

          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default ProjectScreen;
