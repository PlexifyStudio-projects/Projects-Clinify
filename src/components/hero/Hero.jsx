import React from 'react';
import './Hero.scss';
import heroVideo from '../../assets/PTenlaentrada.mp4';

const Hero = () => {
  return (
    <section className="hero">
      {/* Video Background */}
      <div className="hero__video-container">
        <video 
          className="hero__video"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero__overlay"></div>
      </div>

      {/* Content */}
      <div className="hero__content">
        <div className="container">
          <div className="hero__inner">
            
            {/* Badge */}
            <div className="hero__badge">
              <span>AI-Powered Healthcare Platform</span>
            </div>

            {/* Main Title */}
            <h1 className="hero__title">
              Revolutionary Healthcare Intelligence
              <span className="hero__title--accent"> Transforming Patient Care</span>
            </h1>

            {/* Simple Description */}
            <p className="hero__description">
              Advanced AI diagnostics and workflow automation for modern healthcare professionals.
            </p>

            {/* Buttons */}
            <div className="hero__actions">
              <button className="btn btn--primary">
                Schedule Consultation
              </button>
              <button className="btn btn--secondary">
                View Clinical Studies
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;