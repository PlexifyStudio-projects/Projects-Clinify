import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.scss';
import video1 from '../../assets/Terapeuta_Subiendo_Notas_en_Clinify_AI.mp4';
import video2 from '../../assets/PTenlaentrada.mp4';
import video3 from '../../assets/Terapeuta_Explica_Resultados_a_Paciente.mp4';
import video4 from '../../assets/Terapeuta_Ayuda_Ejercicios_Hombro.mp4';
import video5 from '../../assets/Agradecimiento_a_Terapeuta_Eficaz.mp4';
import mockupImage from '../../assets/Homepage.png';

const Hero = () => {
  const videos = [video1, video2, video3, video4, video5];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoKey, setVideoKey] = useState(0);
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate('/contact');
  };

  const handleLearnMoreClick = () => {
    const whyChooseSection = document.getElementById('why-choose');
    if (whyChooseSection) {
      whyChooseSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % videos.length;
        setVideoKey(prev => prev + 1);
        return nextIndex;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [videos.length]);

  const handleVideoLoad = (e) => {
    const video = e.target;
    video.playbackRate = 0.85;
  };

  return (
    <section className="hero">
      {/* Video Background */}
      <div className="hero__video-container">
        <video
          key={videoKey}
          className="hero__video"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoLoad}
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>
        <div className="hero__overlay"></div>
      </div>

      {/* Content */}
      <div className="hero__content">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="hero__tagline">EMR + AI for Therapy Clinics</p>

            <h1 className="hero__title">
              Clinical notes in minutes,
              <br />
              <span className="hero__title--accent">not hours.</span>
            </h1>

            <p className="hero__description">
              AI-powered EMR that automates your clinical notes, billing,
              and scheduling. Spend less time on paperwork, more time
              with your patients.
            </p>

            <div className="hero__actions">
              <button className="hero__btn hero__btn--primary" onClick={handleDemoClick}>
                Request a Demo
              </button>
              <button className="hero__btn hero__btn--secondary" onClick={handleLearnMoreClick}>
                Learn More
              </button>
            </div>

            <div className="hero__badges">
              <span className="hero__badge">
                <svg className="hero__badge-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                HIPAA Compliant
              </span>
              <span className="hero__badge">
                <svg className="hero__badge-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Secure Cloud
              </span>
              <span className="hero__badge">
                <svg className="hero__badge-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                24/7 Support
              </span>
            </div>

            <p className="hero__trusted">
              Built for Physical Therapists, Occupational Therapists & Speech Therapists
            </p>
          </div>

          <div className="hero__visual">
            <div className="hero__mockup">
              <img src={mockupImage} alt="NeuroFys Y Clinical Workflow" className="hero__mockup-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
