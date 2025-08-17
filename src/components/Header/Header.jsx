import React, { useState } from 'react';
import '../../styles/header/header.scss';
import clinifyLogo from '../../assets/LogoMHC.jpeg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="app-header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <img src={clinifyLogo} alt="Clinify AI" className="logo" />
          </div>
          
          <button 
            className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
          
          <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
            <a href="#features" className="nav-link">
              <span className="nav-icon">○</span>
              <span className="nav-text">Features</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="#about" className="nav-link">
              <span className="nav-icon">◈</span>
              <span className="nav-text">About</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="#solutions" className="nav-link">
              <span className="nav-icon">◆</span>
              <span className="nav-text">Solutions</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="#contact" className="nav-link">
              <span className="nav-icon">◉</span>
              <span className="nav-text">Contact</span>
              <span className="nav-arrow">→</span>
            </a>
            <button className="demo-button professional">
              <span className="button-text">Request Demo</span>
            </button>
            <button className="cta-button professional">
              <span className="button-text">Get Started</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;