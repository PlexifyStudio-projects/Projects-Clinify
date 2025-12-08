import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../../styles/header/header.scss';
import neuroFysLogo from '../../assets/LogoMHC.jpeg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDemoClick = () => {
    navigate('/contact');
    setMenuOpen(false);
  };

  return (
    <header className={`nfy-header ${scrolled ? 'nfy-header--scrolled' : ''}`}>
      <div className="nfy-header__container">
        {/* Logo Section */}
        <Link to="/" className="nfy-header__logo">
          <div className="nfy-header__logo-wrapper">
            <img src={neuroFysLogo} alt="NeuroFys Y" />
          </div>
          <span className="nfy-header__brand">NeuroFys Y</span>
        </Link>

        {/* Navigation */}
        <nav className={`nfy-header__nav ${menuOpen ? 'nfy-header__nav--active' : ''}`}>
          <div className="nfy-header__links">
            <Link to="/" className={`nfy-header__link ${location.pathname === '/' ? 'nfy-header__link--active' : ''}`} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/features" className={`nfy-header__link ${location.pathname === '/features' ? 'nfy-header__link--active' : ''}`} onClick={() => setMenuOpen(false)}>Features</Link>
            <Link to="/pricing" className={`nfy-header__link ${location.pathname === '/pricing' ? 'nfy-header__link--active' : ''}`} onClick={() => setMenuOpen(false)}>Pricing</Link>
            <Link to="/contact" className={`nfy-header__link ${location.pathname === '/contact' ? 'nfy-header__link--active' : ''}`} onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>

          <div className="nfy-header__actions">
            <button className="nfy-header__demo-btn" onClick={handleDemoClick}>
              Request Demo
            </button>
            <button className="nfy-header__login-btn">
              Login
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`nfy-header__toggle ${menuOpen ? 'nfy-header__toggle--active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
