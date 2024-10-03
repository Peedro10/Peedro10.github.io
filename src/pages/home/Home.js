import React from 'react';
import { FaCog, FaInfoCircle } from 'react-icons/fa'; // Import des autres icônes
import { IoIosContacts } from 'react-icons/io'; // Import de l'icône Contact
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo">BrowserMania</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hero-section">
        <h1>START SECURE BROWSING</h1>
        <button className="cta-button">Start Browsing</button>
      </div>
      <div className="features-section">
        <div className="feature-item">
          <FaCog className="icon" />
          <p>FEATURES</p>
        </div>
        <div className="feature-item">
          <FaInfoCircle className="icon" />
          <p>ABOUT</p>
        </div>
        <div className="feature-item">
          <IoIosContacts className="icon" /> {/* Utilisation de l'icône Contacts */}
          <p>CONTACT</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
