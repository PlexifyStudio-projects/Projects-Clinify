import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HowItWorks.scss';

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      title: 'Set Up Your Clinic',
      description: 'Configure your practice settings, workflows, and compliance requirements in minutes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Invite Your Team',
      description: 'Add therapists and staff with role-based permissions. PT, OT, ST, and assistants.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Add Patients',
      description: 'Import or create patient records. Manage referrals, certifications, and schedules.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
          <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Document with AI',
      description: 'Generate compliant clinical notes instantly. SOAP notes, evaluations, and progress reports.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="hiw-section">
      <div className="hiw-container">
        <div className="hiw-header">
          <p className="hiw-label">How It Works</p>
          <h2 className="hiw-title">Get Started in Four Simple Steps</h2>
          <p className="hiw-subtitle">
            From setup to documentation, we've streamlined every step of your workflow.
          </p>
        </div>

        <div className="hiw-grid">
          {steps.map((step, index) => (
            <div key={step.id} className="hiw-card">
              <div className="hiw-card__number">{step.id}</div>
              <div className="hiw-card__icon">{step.icon}</div>
              <h3 className="hiw-card__title">{step.title}</h3>
              <p className="hiw-card__desc">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="hiw-cta">
          <button className="hiw-btn" onClick={() => navigate('/contact')}>
            Schedule a Demo
          </button>
          <p className="hiw-note">Free 30-day trial. No credit card required.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
