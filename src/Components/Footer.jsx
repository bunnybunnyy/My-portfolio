import React from 'react';
import { FaLinkedin, FaGithub, FaBehance, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-content">
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/muhammad-umar-b62810255/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/bunnybunnyy" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.behance.net/hunnybunnyy" target="_blank" rel="noopener noreferrer" aria-label="Behance"><FaBehance /></a>
        <a href="https://www.instagram.com/i_umar_0/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Muhammad Umar. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer; 