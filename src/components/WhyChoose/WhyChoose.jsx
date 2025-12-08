import React, { useState, useEffect } from 'react';
import './WhyChoose.scss';

const WhyChoose = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M16 24h16M24 16v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'AI-Powered Notes',
      subtitle: 'Documentation in seconds',
      description: 'Our AI listens, understands, and generates compliant clinical notes instantly. Just talk naturally with your patient.',
      statValue: '< 30 sec',
      statLabel: 'per note',
      color: '#F59E0B'
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="8" y="12" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M8 20h32" stroke="currentColor" strokeWidth="2"/>
          <circle cx="16" cy="28" r="3" fill="currentColor" opacity="0.3"/>
          <circle cx="24" cy="28" r="3" fill="currentColor" opacity="0.5"/>
          <circle cx="32" cy="28" r="3" fill="currentColor" opacity="0.7"/>
        </svg>
      ),
      title: 'All-in-One Platform',
      subtitle: 'Everything you need',
      description: 'Scheduling, clinical notes, billing, and patient management unified in one intuitive platform.',
      statValue: '4-in-1',
      statLabel: 'integrated tools',
      color: '#3B82F6'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M24 6l18 10v16l-18 10-18-10V16l18-10z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="26" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M24 30v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'HIPAA Secure',
      subtitle: 'Built for healthcare',
      description: 'Designed with healthcare compliance in mind. Encrypted data, secure cloud storage, and privacy controls.',
      statValue: '100%',
      statLabel: 'HIPAA compliant',
      color: '#10B981'
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="16" cy="20" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="32" cy="20" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="32" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M20 23l4 5M28 23l-4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Multi-Discipline',
      subtitle: 'PT, OT, ST in one place',
      description: 'Purpose-built for Physical Therapy, Occupational Therapy, and Speech Therapy. Templates for each discipline.',
      statValue: 'PT OT ST',
      statLabel: 'all disciplines',
      color: '#8B5CF6'
    }
  ];

  return (
    <section className="why-choose" id="why-choose">
      <div className="why-choose__bg">
        <div className="why-choose__gradient"></div>
        <div className="why-choose__pattern"></div>
      </div>

      <div className="why-choose__container">
        <div className="why-choose__header">
          <h2 className="why-choose__title">
            <span className="title-why">Why Choose</span>
            <span className="title-brand">
              <span className="brand-name">NeuroFys</span>
              <span className="brand-y">Y</span>
            </span>
            <span className="title-question">?</span>
          </h2>
          <p className="why-choose__subtitle">
            Empowering rehabilitation professionals and clinics to deliver exceptional patient care with less administrative burden.
          </p>
        </div>

        <div className="why-choose__grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`why-card ${activeFeature === index ? 'active' : ''}`}
              style={{ '--card-color': feature.color }}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="why-card__icon">
                {feature.icon}
              </div>
              <div className="why-card__content">
                <h3 className="why-card__title">{feature.title}</h3>
                <p className="why-card__subtitle">{feature.subtitle}</p>
                <p className="why-card__description">{feature.description}</p>
              </div>
              <div className="why-card__stat">
                <span className="why-card__stat-value">{feature.statValue}</span>
                <span className="why-card__stat-label">{feature.statLabel}</span>
              </div>
              <div className="why-card__bar">
                <div className="why-card__bar-fill"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
