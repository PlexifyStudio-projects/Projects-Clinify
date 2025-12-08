import React, { useState, useEffect, useRef } from 'react';
import './Journey.scss';
import LoginImg from '../../assets/Login.png';

const Journey = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const journeySteps = [
    {
      id: 1,
      phase: 'START',
      title: 'Sign Up & Setup',
      time: '5 minutes',
      description: 'Create your account. Add your clinic info. That\'s it. No IT team, no consultants, no headaches.',
      features: ['Instant account creation', 'Import patient data', 'Invite your team'],
      visual: 'signup',
      color: '#F59E0B'
    },
    {
      id: 2,
      phase: 'CONFIGURE',
      title: 'Customize Your Workflow',
      time: '10 minutes',
      description: 'Choose templates for your discipline. Set your preferences. The system learns how you work.',
      features: ['PT, OT, ST templates', 'Custom evaluation forms', 'Billing preferences'],
      visual: 'configure',
      color: '#3B82F6'
    },
    {
      id: 3,
      phase: 'TRANSFORM',
      title: 'Start Your First Session',
      time: 'Real-time',
      description: 'See a patient. Talk naturally. Watch as AI captures everything and generates compliant notes instantly.',
      features: ['Voice-to-note AI', 'Auto-generated SOAP notes', 'One-click approval'],
      visual: 'session',
      color: '#10B981'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isInView, journeySteps.length]);

  useEffect(() => {
    if (!isInView) return;

    setScrollProgress(0);
    const duration = 5000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setScrollProgress(progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [activeStep, isInView]);

  return (
    <section className="journey" ref={sectionRef}>
      <div className="journey__ambient">
        <div className="ambient-orb ambient-orb--1"></div>
        <div className="ambient-orb ambient-orb--2"></div>
        <div className="ambient-orb ambient-orb--3"></div>
      </div>

      <div className="journey__container">
        {/* Header */}
        <div className="journey__header">
          <div className="header-eyebrow">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">Your Journey</span>
            <span className="eyebrow-line"></span>
          </div>
          <h2 className="journey__title">
            From signup to your first AI note
            <span className="title-highlight"> in under 15 minutes</span>
          </h2>
        </div>

        {/* Main Content - Bento Grid Style */}
        <div className="journey__grid">
          {/* Left Column - Steps Navigator */}
          <div className="journey__navigator">
            <div className="navigator__timeline">
              <div
                className="timeline__progress"
                style={{
                  height: `${((activeStep + scrollProgress) / journeySteps.length) * 100}%`
                }}
              ></div>
            </div>

            {journeySteps.map((step, index) => (
              <div
                key={step.id}
                className={`navigator__step ${activeStep === index ? 'active' : ''} ${activeStep > index ? 'completed' : ''}`}
                onClick={() => setActiveStep(index)}
                style={{ '--step-color': step.color }}
              >
                <div className="step__marker">
                  <div className="marker__outer">
                    <div className="marker__inner">
                      {activeStep > index ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      ) : (
                        <span>{step.id}</span>
                      )}
                    </div>
                  </div>
                  {activeStep === index && <div className="marker__pulse"></div>}
                </div>

                <div className="step__content">
                  <span className="step__phase">{step.phase}</span>
                  <h3 className="step__title">{step.title}</h3>
                  <span className="step__time">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    {step.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Center - Main Visual */}
          <div className="journey__showcase">
            <div className="showcase__card">
              <div className="card__header">
                <div className="header__dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="header__title">NeuroFys Y Platform</span>
              </div>

              <div className="card__content">
                <div className="content__visual">
                  {activeStep === 0 && (
                    <div className="visual--signup">
                      <div className="signup-form">
                        <div className="form-field">
                          <span className="field-label">Clinic Name</span>
                          <div className="field-input typing">Recovery Plus Clinic</div>
                        </div>
                        <div className="form-field">
                          <span className="field-label">Your Email</span>
                          <div className="field-input">dr.smith@recov...</div>
                        </div>
                        <div className="form-field">
                          <span className="field-label">Discipline</span>
                          <div className="field-select">
                            <span className="select-chip active">PT</span>
                            <span className="select-chip">OT</span>
                            <span className="select-chip">ST</span>
                          </div>
                        </div>
                        <button className="form-submit">
                          <span>Create Account</span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="visual--configure">
                      <div className="config-dashboard">
                        <div className="dashboard-sidebar">
                          <div className="sidebar-item active">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            </svg>
                          </div>
                          <div className="sidebar-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                            </svg>
                          </div>
                          <div className="sidebar-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                            </svg>
                          </div>
                        </div>
                        <div className="dashboard-main">
                          <div className="main-header">
                            <span>Templates</span>
                            <div className="template-tabs">
                              <span className="tab active">Evaluations</span>
                              <span className="tab">Progress</span>
                              <span className="tab">Discharge</span>
                            </div>
                          </div>
                          <div className="template-grid">
                            <div className="template-card selected">
                              <div className="template-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <span>PT Initial Eval</span>
                            </div>
                            <div className="template-card">
                              <span>PT Progress Note</span>
                            </div>
                            <div className="template-card">
                              <span>PT Discharge</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="visual--session">
                      <div className="session-interface">
                        <div className="session-header">
                          <div className="patient-info">
                            <div className="patient-avatar">JD</div>
                            <div className="patient-details">
                              <span className="patient-name">John Doe</span>
                              <span className="patient-visit">Visit #4 - Shoulder Rehab</span>
                            </div>
                          </div>
                          <div className="session-status recording">
                            <span className="status-dot"></span>
                            <span>Recording</span>
                          </div>
                        </div>
                        <div className="session-content">
                          <div className="ai-transcription">
                            <div className="transcription-wave">
                              <span></span><span></span><span></span><span></span><span></span>
                            </div>
                            <p className="transcription-text">
                              "Patient reports 60% improvement in shoulder mobility since last visit..."
                            </p>
                          </div>
                          <div className="ai-output">
                            <div className="output-header">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                              </svg>
                              <span>AI Generated Note</span>
                            </div>
                            <div className="output-preview">
                              <div className="preview-section">
                                <span className="section-label">Subjective</span>
                                <div className="section-bar"></div>
                              </div>
                              <div className="preview-section">
                                <span className="section-label">Objective</span>
                                <div className="section-bar"></div>
                              </div>
                              <div className="preview-section generating">
                                <span className="section-label">Assessment</span>
                                <div className="section-bar"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features & Info */}
          <div className="journey__details">
            <div className="details__card">
              <div
                className="card__accent"
                style={{ background: journeySteps[activeStep].color }}
              ></div>

              <p className="details__description">
                {journeySteps[activeStep].description}
              </p>

              <div className="details__features">
                {journeySteps[activeStep].features.map((feature, index) => (
                  <div
                    key={index}
                    className="feature-item"
                    style={{ '--delay': `${index * 0.1}s` }}
                  >
                    <div
                      className="feature-icon"
                      style={{ background: `${journeySteps[activeStep].color}20` }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={journeySteps[activeStep].color}
                        strokeWidth="2.5"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="details__cta">
                <button className="cta-primary">
                  <span>Start Your Journey</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <span className="cta-note">Free trial. No credit card required.</span>
              </div>
            </div>

            {/* Stats Mini Cards */}
            <div className="details__stats">
              <div className="stat-card">
                <span className="stat-value">15</span>
                <span className="stat-unit">min</span>
                <span className="stat-label">Total setup</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">30</span>
                <span className="stat-unit">sec</span>
                <span className="stat-label">Per note</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Progress Indicator */}
        <div className="journey__progress">
          {journeySteps.map((step, index) => (
            <button
              key={step.id}
              className={`progress-dot ${activeStep === index ? 'active' : ''}`}
              onClick={() => setActiveStep(index)}
              style={{ '--dot-color': step.color }}
            >
              <span className="dot-inner"></span>
              {activeStep === index && (
                <svg className="dot-progress" viewBox="0 0 36 36">
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke={step.color}
                    strokeWidth="2"
                    strokeDasharray={`${scrollProgress * 100}, 100`}
                    transform="rotate(-90 18 18)"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
