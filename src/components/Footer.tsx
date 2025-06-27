import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">IEEE Student Branch Baderia Global Institute of Engineering and Management</h3>
            <p className="footer-description">
              IEEE Student Branch BGIEM is committed to advancing technology 
              and fostering innovation among students. Join us in creating the 
              next iconic logo that will represent our organization's values 
              and vision for the future.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Competition</a></li>
              <li><a href="#rules">Rules & Guidelines</a></li>
              <li><a href="#timeline">Timeline</a></li>
              <li><a href="#prizes">Prizes</a></li>
              <li><a href="#register">Register</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Resources</h4>
            <ul className="footer-links">
              <li>
                <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer">
                  IEEE Official Website
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="https://forms.gle/EmkxniACUR3qQpQh6" target="_blank" rel="noopener noreferrer">
                  Registration Form
                  <ExternalLink size={14} />
                </a>
              </li>
              <li><a href="#rules">Design Guidelines</a></li>
              <li><a href="#rules">Submission Requirements</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Information</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>mamata.cs@global.org.in</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>Contact via Registration Form</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Baderia Global Institute of Engineering and Management</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 IEEE Student Branch BGIEM. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;