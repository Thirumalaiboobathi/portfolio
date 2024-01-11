import React from 'react';
import Navbar from '../../navBar/navbar';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './ContactScreen.css';

const ContactScreen = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Contact</h2>
          <div className="contact-details">
            <p>
            Thank you for exploring my portfolio! Whether you're intrigued by my projects, seeking collaboration opportunities, or simply want to exchange ideas, don't hesitate to get in touch. 
            As a proactive and passionate software engineer, I'm not just here to create exceptional solutions; I'm also eager to foster meaningful connections within the tech community. 
            Your curiosity, feedback, or a simple 'hello' is an opportunity for us to embark on a journey of innovation together. Let's turn ideas into reality and navigate the ever-evolving tech landscape hand-in-hand. 
            Feel empowered to reach out—I'm excited to hear from you and explore the boundless possibilities that lie ahead!</p>
            <p>Feel free to slide into my DMs on Instagram or LinkedIn for any inquiries, collaboration opportunities, or even just to say 'Hi'! 😊 Your messages are more than welcome—I'm here to engage, connect, and explore new possibilities together in the exciting world of technology.
            </p>
            <p>Email: thiru260402@gmail.com</p>
            <p>Address: Madurai, Tamil Nadu, India</p>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/Thirumalaiboobathi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
              <span className="icon-text">GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/thirumalaiboobathi/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram />
              <span className="icon-text">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/thirumalaiboobathi-b-902a51233/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
              <span className="icon-text">LinkedIn</span>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactScreen;
