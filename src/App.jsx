import React, { useState } from 'react';
import './styles/App.scss';
import clinifyLogo from './assets/LogoMHC.jpeg';
import heroVideo from './assets/PTenlaentrada.mp4';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
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
      
      <main className="app-main">
        <section className="hero-section">
          <video 
            className="hero-video"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <span className="hero-badge">AI-Powered Healthcare</span>
              <h1 className="hero-title">
                Transform Patient Care with 
                <span className="hero-gradient"> Intelligent Automation</span>
              </h1>
              <p className="hero-description">
                Clinify AI combines cutting-edge artificial intelligence with medical expertise 
                to deliver precise diagnostics, streamlined workflows, and superior patient outcomes.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Accuracy</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">70%</span>
                  <span className="stat-label">Time Saved</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
              <div className="hero-buttons">
                <button className="primary-button">
                  <span>Start Free Trial</span>
                </button>
                <button className="secondary-button">
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="next-section">
          <div className="container">
            <h2>Continue exploring below...</h2>
          </div>
        </section>
      </main>
      
      <footer className="app-footer">
        <div className="container">
          <p>&copy; 2024 Clinify AI - Transforming Healthcare</p>
        </div>
      </footer>
    </div>
  );
}

export default App;