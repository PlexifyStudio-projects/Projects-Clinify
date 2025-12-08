import React, { useState } from 'react';
import './HowItWorks.scss';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      phase: 'SETUP',
      title: 'Configure Your Practice',
      description: 'Set up your clinic profile, connect with healthcare agencies, and customize your workflow. Define certification periods, configure billing preferences, and establish your practice settings.',
      features: ['Multi-agency support', 'Custom workflows', 'Billing integration'],
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="step-icon-svg">
          <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 20h16M16 28h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="34" cy="28" r="3" fill="currentColor" opacity="0.3"/>
          <path d="M8 16h32" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: '#3B82F6'
    },
    {
      id: 2,
      phase: 'TEAM',
      title: 'Build Your Clinical Team',
      description: 'Add your therapy team with role-based access control. Support for Physical Therapists, Occupational Therapists, Speech Therapists, and their assistants. Administrators manage everything from a central dashboard.',
      features: ['PT, OT, ST & Assistants', 'Role-based permissions', 'Performance tracking'],
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="step-icon-svg">
          <circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="20" r="4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="36" cy="20" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M18 32c0-4 3-6 6-6s6 2 6 6v4H18v-4z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 34c0-3 2-4 4-4s4 1 4 4v2H8v-2z" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
          <path d="M32 34c0-3 2-4 4-4s4 1 4 4v2h-8v-2z" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
        </svg>
      ),
      color: '#10B981'
    },
    {
      id: 3,
      phase: 'PATIENTS',
      title: 'Manage Patient Referrals',
      description: 'Create and manage patient referrals with complete medical information. Track certification periods, assign therapists, schedule visits, and maintain comprehensive patient records with HIPAA-compliant security.',
      features: ['Referral management', 'Certification tracking', 'Visit scheduling'],
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="step-icon-svg">
          <rect x="10" y="6" width="28" height="36" rx="3" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="18" r="5" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 30h16M16 36h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M32 4v6M16 4v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: '#F59E0B'
    },
    {
      id: 4,
      phase: 'DOCUMENT',
      title: 'AI-Powered Documentation',
      description: 'Generate clinical notes with AI assistance. From Initial Evaluations to Progress Notes and Discharges - complete SOAP documentation, standardized tests (Berg, Braden, Barthel), and OASIS assessments in minutes.',
      features: ['AI note generation', 'Standardized tests', 'OASIS support'],
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="step-icon-svg">
          <path d="M24 4L8 12v8c0 12 7 22 16 26 9-4 16-14 16-26v-8L24 4z" stroke="currentColor" strokeWidth="2"/>
          <path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
        </svg>
      ),
      color: '#8B5CF6'
    }
  ];

  return (
    <section className="how-it-works-new">
      <div className="how-it-works-new__container">
        {/* Header */}
        <div className="how-it-works-new__header">
          <span className="header-badge">How It Works</span>
          <h2 className="header-title">
            Your Complete <span className="highlight">EMR Journey</span>
          </h2>
          <p className="header-subtitle">
            From setup to your first AI-generated clinical note - a seamless workflow
            designed for therapy professionals
          </p>
        </div>

        {/* Timeline */}
        <div className="how-it-works-new__timeline">
          <div className="timeline-track">
            <div
              className="timeline-progress"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
            {steps.map((step, index) => (
              <button
                key={step.id}
                className={`timeline-node ${activeStep >= index ? 'active' : ''} ${activeStep === index ? 'current' : ''}`}
                onClick={() => setActiveStep(index)}
                style={{ '--step-color': step.color }}
              >
                <span className="node-number">{step.id}</span>
                <span className="node-label">{step.phase}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Cards */}
        <div className="how-it-works-new__content">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`content-card ${activeStep === index ? 'active' : ''}`}
              style={{ '--card-color': step.color }}
            >
              <div className="content-card__icon">
                {step.icon}
              </div>

              <div className="content-card__info">
                <span className="info-phase">{step.phase}</span>
                <h3 className="info-title">{step.title}</h3>
                <p className="info-description">{step.description}</p>

                <div className="info-features">
                  {step.features.map((feature, i) => (
                    <span key={i} className="feature-tag">
                      <svg viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.78 5.28l-4.5 5.5a.75.75 0 0 1-1.12.02l-2-2a.75.75 0 1 1 1.06-1.06l1.42 1.42 3.96-4.85a.75.75 0 1 1 1.18.93z"/>
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="how-it-works-new__dots">
          {steps.map((step, index) => (
            <button
              key={step.id}
              className={`dot ${activeStep === index ? 'active' : ''}`}
              onClick={() => setActiveStep(index)}
              style={{ '--dot-color': step.color }}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="how-it-works-new__cta">
          <button className="cta-primary">
            <span>Start Your Free Trial</span>
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <p className="cta-note">No credit card required • HIPAA compliant • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
