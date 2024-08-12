import React from 'react';
import "./contact.css";

const Contact = () => {
    return (<footer className="footer">
      <section id="contact">
         
        <div className="contact-info">
          <div className='border-Contact'></div>
          <h2>Contact Me</h2>
          <p>Feel free to reach out to me on my social media, through my GitHub profile or LinkedIn.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/tayfunn.deniz/?igsh=b293aXJlN2ppZzdq&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://github.com/Falconul" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/tayfun-deniz-32796b29b/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            
          </div>
        </div>
       
          <p>&copy; {new Date().getFullYear()} Tayfun Deniz. All rights reserved.</p>
        
        
      </section>
      </footer>
    );
};

export default Contact;

