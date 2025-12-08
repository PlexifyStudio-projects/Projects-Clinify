import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingCTA.scss';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 600px
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div className={`floating-cta ${isVisible ? 'visible' : ''}`}>
      <button className="floating-cta__btn" onClick={handleClick}>
        <span className="floating-cta__text">Start Free Trial</span>
        <span className="floating-cta__icon">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
      <span className="floating-cta__note">No credit card required</span>
    </div>
  );
};

export default FloatingCTA;
