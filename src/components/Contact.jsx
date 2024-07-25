import React from 'react';
import '../styles.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>You can reach me at:</p>
      <ul>
        <li>Email: karthikballi0001@gmail.com</li>
        <li>Phone: +91 7995339487</li>
      </ul>
      <div className="social-media">
        <a href="https://github.com/Karthik-Balli" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/karthik-balli/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}

export default Contact;
