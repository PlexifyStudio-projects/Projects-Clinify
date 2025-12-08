import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Features.scss';

// Import images
import loginImg from '../../assets/Login.png';
import clinicalImg from '../../assets/Clinical-Workflow.png';
import hipaaImg from '../../assets/HIPAA.png';
import patientsImg from '../../assets/PatientsLists.png';
import hubImg from '../../assets/Hub.png';
import visitsImg from '../../assets/TypeOFVISITS.png';

const Features = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = [];

    Object.keys(sectionRefs.current).forEach(key => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.15 }
      );

      if (sectionRefs.current[key]) {
        observer.observe(sectionRefs.current[key]);
        observers.push(observer);
      }
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const painPoints = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
      title: 'Hours Lost to Paperwork',
      description: 'Complex documentation requirements pull therapists away from patient care, leading to burnout and reduced treatment time.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: 'Revenue Left on the Table',
      description: 'Incomplete documentation and missed billing codes result in denied claims and lost revenue for your practice.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      title: 'Fragmented Patient Care',
      description: 'Disconnected systems make it difficult to coordinate between PT, OT, and ST disciplines, compromising continuity of care.'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Document During Treatment',
      description: 'Capture clinical notes in real-time using our intuitive interface. Voice-to-text and smart templates make documentation seamless during patient sessions.',
      features: ['Voice-to-text input', 'Pre-built templates', 'Auto-save functionality'],
      image: patientsImg
    },
    {
      number: '2',
      title: 'Review and Refine',
      description: 'Our AI assistant helps ensure completeness and compliance. Quick review workflows let you verify accuracy before finalizing documentation.',
      features: ['AI-powered suggestions', 'Compliance checking', 'One-click corrections'],
      image: hubImg
    },
    {
      number: '3',
      title: 'Submit and Bill',
      description: 'Seamlessly transition from clinical documentation to billing. All codes are automatically captured, ensuring maximum reimbursement.',
      features: ['Auto-populated billing', 'Digital signatures', 'Instant submission'],
      image: visitsImg
    }
  ];

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
      title: 'AI-Powered Documentation',
      description: 'Smart templates and voice-to-text streamline note creation. AI suggestions ensure thorough, compliant documentation every time.',
      highlight: 'Save 2+ hours daily',
      color: '#F59E0B'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      title: 'Multi-Discipline Support',
      description: 'Purpose-built for PT, OT, ST, and assistants. Discipline-specific templates, assessments, and workflows for each specialty.',
      highlight: 'PT, OT, ST + Assistants',
      color: '#3B82F6'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
        </svg>
      ),
      title: '90+ Clinical Assessments',
      description: 'Comprehensive library including Berg Balance, Tinetti, TUG, Katz ADL, Barthel Index, Braden Scale, SLUMS, and more.',
      highlight: 'Validated tools',
      color: '#10B981'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
      ),
      title: 'OASIS Integration',
      description: 'Built-in SOC and DC OASIS documentation for home health. Automated quality measure compliance and Medicare reporting.',
      highlight: 'CMS compliant',
      color: '#8B5CF6'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      title: 'HIPAA Secure',
      description: 'Enterprise-grade security with real-time audit logging, role-based access, session monitoring, and compliance reporting.',
      highlight: '100% HIPAA compliant',
      color: '#EF4444'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
        </svg>
      ),
      title: 'Exercise Library',
      description: 'Discipline-specific exercise prescriptions with sets, reps, and frequencies. Generate home programs instantly for patient handouts.',
      highlight: 'Home program ready',
      color: '#06B6D4'
    }
  ];

  const faqs = [
    {
      question: 'Which therapy disciplines does NeuroFys Y support?',
      answer: 'NeuroFys Y is purpose-built for Physical Therapy (PT), Occupational Therapy (OT), Speech Therapy (ST), and their assistants (PTA, COTA, STA). Each discipline has specialized templates, assessments, and workflows tailored to their specific documentation needs.'
    },
    {
      question: 'Is NeuroFys Y HIPAA compliant?',
      answer: 'Yes, absolutely. NeuroFys Y implements comprehensive HIPAA security controls including real-time audit logging with IP tracking, role-based access permissions, session monitoring, failed login detection, and encrypted data storage. We provide complete compliance reporting for regulatory requirements.'
    },
    {
      question: 'What types of clinical notes can I create?',
      answer: 'Our platform supports all standard note types: Initial Evaluation (IE), Follow Up (FU), Recertification (RC), Discharge (DC), Reassessment, and OASIS documentation (SOC and DC OASIS) for home health. Each note type has pre-built templates optimized for rehabilitation workflows.'
    },
    {
      question: 'How does the digital signature system work?',
      answer: 'Our vector-based signature capture system includes 72-hour deadline tracking and automatic compliance alerts. Therapists can sign notes directly on any device, and the system tracks signature status to ensure timely completion for billing and compliance.'
    },
    {
      question: 'Can I manage multiple agencies or locations?',
      answer: 'Yes, NeuroFys Y supports multi-agency operations with separate billing, accounting, staff assignments, and patient management for each location. Administrators can oversee all agencies from a single dashboard while maintaining proper data separation.'
    },
    {
      question: 'What clinical assessments are included?',
      answer: 'We include 90+ validated clinical assessment tools including Berg Balance Scale, Tinetti Assessment, Timed Up and Go (TUG), Katz ADL Index, Barthel Index, Braden Scale, SLUMS Examination, and many more. All assessments integrate directly into your documentation workflow.'
    }
  ];

  return (
    <section className="features-page">
      {/* Hero Section */}
      <header className="features-hero">
        <div className="features-hero__container">
          <div className="features-hero__content">
            <h1 className="features-hero__title">
              Documentation that works
              <span className="title-highlight">as hard as you do.</span>
            </h1>
            <p className="features-hero__subtitle">
              The intelligent EMR platform for rehabilitation professionals.
              Spend less time on paperwork, more time with patients.
            </p>
            <div className="features-hero__cta">
              <Link to="/contact" className="hero-btn hero-btn--primary">
                Start Free Trial
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </Link>
            </div>
            <div className="features-hero__trust">
              <div className="trust-avatars">
                <div className="avatar" style={{ background: '#3B82F6' }}>PT</div>
                <div className="avatar" style={{ background: '#10B981' }}>OT</div>
                <div className="avatar" style={{ background: '#8B5CF6' }}>ST</div>
              </div>
              <span>Trusted by rehabilitation clinics and home health agencies</span>
            </div>
          </div>
          <div className="features-hero__visual">
            <div className="hero-mockup">
              <div className="mockup-browser">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="browser-url">app.neurofysy.com</div>
              </div>
              <div className="mockup-content">
                <img src={loginImg} alt="NeuroFys Y Platform" className="mockup-image" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Disciplines Bar */}
      <div className="disciplines-bar">
        <div className="disciplines-bar__container">
          <span className="disciplines-bar__label">Designed for all rehabilitation disciplines</span>
          <div className="disciplines-bar__items">
            <div className="discipline-badge">
              <span className="badge-abbr" style={{ '--badge-color': '#3B82F6' }}>PT</span>
              <span className="badge-name">Physical Therapy</span>
            </div>
            <div className="discipline-badge">
              <span className="badge-abbr" style={{ '--badge-color': '#10B981' }}>OT</span>
              <span className="badge-name">Occupational Therapy</span>
            </div>
            <div className="discipline-badge">
              <span className="badge-abbr" style={{ '--badge-color': '#8B5CF6' }}>ST</span>
              <span className="badge-name">Speech Therapy</span>
            </div>
            <div className="discipline-badge discipline-badge--assistant">
              <span className="badge-name">+ PTA, COTA, STA Assistants</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pain Points Section */}
      <section
        className={`pain-points ${isVisible.pain ? 'visible' : ''}`}
        ref={el => sectionRefs.current.pain = el}
      >
        <div className="pain-points__container">
          <div className="pain-points__header">
            <h2 className="section-title">
              Therapists spend <span className="text-amber">50% of their time</span> on screens, not patients.
            </h2>
            <p className="section-subtitle">
              Documentation burden is the leading cause of therapist burnout.
              NeuroFys Y helps you reclaim your time and focus on what matters most.
            </p>
          </div>
          <div className="pain-points__grid">
            {painPoints.map((point, index) => (
              <div key={index} className="pain-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="pain-card__icon">
                  {point.icon}
                </div>
                <h3 className="pain-card__title">{point.title}</h3>
                <p className="pain-card__description">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className={`how-it-works ${isVisible.how ? 'visible' : ''}`}
        ref={el => sectionRefs.current.how = el}
      >
        <div className="how-it-works__container">
          <div className="how-it-works__header">
            <h2 className="section-title">
              Transform your documentation<br />
              <span className="text-gradient">in three simple steps</span>
            </h2>
            <p className="section-subtitle">
              Record. Review. Submit. Focus where it matters most.
            </p>
          </div>

          <div className="how-it-works__content">
            <div className="steps-list">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`step-item ${activeStep === index ? 'active' : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="step-item__number">{step.number}</div>
                  <div className="step-item__content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <ul className="step-features">
                      {step.features.map((feature, i) => (
                        <li key={i}>
                          <svg viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="step-item__indicator">
                    <div className="indicator-fill"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="steps-visual">
              <div className="visual-mockup">
                {steps.map((step, index) => (
                  <img
                    key={index}
                    src={step.image}
                    alt={step.title}
                    className={`workflow-image ${activeStep === index ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section
        className={`features-grid ${isVisible.features ? 'visible' : ''}`}
        ref={el => sectionRefs.current.features = el}
      >
        <div className="features-grid__container">
          <div className="features-grid__header">
            <h2 className="section-title">Everything you need to deliver exceptional care</h2>
            <p className="section-subtitle">
              A complete platform designed specifically for rehabilitation professionals.
            </p>
          </div>

          <div className="features-grid__cards">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                style={{ '--feature-color': feature.color, animationDelay: `${index * 0.08}s` }}
              >
                <div className="feature-card__icon">
                  {feature.icon}
                </div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__description">{feature.description}</p>
                <span className="feature-card__highlight">{feature.highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section
        className={`security-section ${isVisible.security ? 'visible' : ''}`}
        ref={el => sectionRefs.current.security = el}
      >
        <div className="security-section__container">
          <div className="security-section__content">
            <div className="security-text">
              <span className="security-badge">HIPAA Compliant</span>
              <h2>Built with privacy in mind</h2>
              <p>
                Healthcare data requires the highest level of protection. Our platform
                implements enterprise-grade security controls with real-time monitoring
                and complete audit capabilities.
              </p>
              <ul className="security-features">
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Real-time audit logging with IP tracking
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Role-based access control for all staff
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Encrypted data at rest and in transit
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Compliance reporting for audits
                </li>
              </ul>
            </div>
            <div className="security-visual">
              <img src={hipaaImg} alt="HIPAA Security" className="security-image" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className={`faq-section ${isVisible.faq ? 'visible' : ''}`}
        ref={el => sectionRefs.current.faq = el}
      >
        <div className="faq-section__container">
          <div className="faq-section__header">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <div className="faq-item__question">
                  <span>{faq.question}</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="faq-chevron">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="faq-item__answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="final-cta__container">
          <div className="final-cta__glow"></div>
          <h2>
            Ready to transform your
            <span className="cta-highlight">documentation workflow?</span>
          </h2>
          <p>
            Join rehabilitation professionals who have streamlined their practice with NeuroFys Y.
            Start your free trial today.
          </p>
          <div className="final-cta__actions">
            <Link to="/contact" className="cta-btn cta-btn--primary">
              Start Free Trial
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </Link>
          </div>
          <div className="final-cta__notes">
            <span>
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              30-day free trial
            </span>
            <span>
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              No credit card required
            </span>
            <span>
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Full platform access
            </span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;
