import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HowItWorks.scss';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  // Auto-play through steps
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const steps = [
    {
      id: 1,
      phase: 'SETUP',
      title: 'Configure Your Practice',
      description: 'Set up your clinic in minutes. Connect agencies, customize workflows, and start documenting.',
      icon: '⚙️',
      color: '#3B82F6'
    },
    {
      id: 2,
      phase: 'TEAM',
      title: 'Add Your Team',
      description: 'Invite PT, OT, ST therapists and assistants with role-based access control.',
      icon: '👥',
      color: '#10B981'
    },
    {
      id: 3,
      phase: 'PATIENTS',
      title: 'Manage Patients',
      description: 'Create referrals, track certifications, and schedule visits - all HIPAA compliant.',
      icon: '📋',
      color: '#F59E0B'
    },
    {
      id: 4,
      phase: 'DOCUMENT',
      title: 'AI Documentation',
      description: 'Generate clinical notes with AI. SOAP notes, evaluations, and OASIS in seconds.',
      icon: '✨',
      color: '#8B5CF6'
    }
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
    setIsPaused(true);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section className="journey-section">
      <div className="journey-container">
        {/* Header */}
        <div className="journey-header">
          <span className="journey-badge">4 Simple Steps</span>
          <h2 className="journey-title">
            Start Documenting in <span className="highlight">Minutes</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="journey-steps">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`journey-step ${activeStep === index ? 'active' : ''} ${activeStep > index ? 'completed' : ''}`}
              style={{ '--step-color': step.color }}
              onClick={() => handleStepClick(index)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Progress bar for active step */}
              {activeStep === index && !isPaused && (
                <div className="step-progress">
                  <div className="step-progress-bar"></div>
                </div>
              )}

              <div className="step-number">{step.id}</div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <span className="step-phase">{step.phase}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className={`step-connector ${activeStep > index ? 'active' : ''}`}></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="journey-cta">
          <button className="journey-cta-btn" onClick={() => navigate('/contact')}>
            Start Free Trial
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <span className="journey-cta-note">No credit card required</span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
