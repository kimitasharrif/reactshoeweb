import React from 'react';
import './footer.css'; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are a leading provider of tech solutions, delivering top-notch
            services and products to our clients. Our mission is to innovate and
            help businesses thrive in the digital age.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <p><strong>Email:</strong> info@yourwebsite.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} YourWebsite | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
