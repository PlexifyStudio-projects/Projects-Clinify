import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CaseStudy.scss';

const CaseStudy = () => {
  const navigate = useNavigate();

  const metrics = [
    { value: '75%', label: 'Less Documentation Time' },
    { value: '40%', label: 'Increased Patient Capacity' },
    { value: '99%', label: 'Claims Approval Rate' },
    { value: '3hrs', label: 'Saved Per Therapist Daily' }
  ];

  return (
    <section className="cstudy-section">
      <div className="cstudy-container">
        <div className="cstudy-header">
          <p className="cstudy-label">Success Story</p>
          <h2 className="cstudy-title">Real Results from Real Clinics</h2>
        </div>

        <div className="cstudy-card">
          <div className="cstudy-content">
            <div className="cstudy-quote">
              <svg viewBox="0 0 24 24" fill="currentColor" className="cstudy-quote-icon">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <blockquote>
                Before NeuroFys Y, our therapists spent 2-3 hours after each shift completing notes.
                Now they finish documentation during sessions. We've been able to see 8 more patients
                per day without adding staff.
              </blockquote>
            </div>

            <div className="cstudy-author">
              <div className="cstudy-author-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className="cstudy-author-info">
                <p className="cstudy-author-name">Clinic Director</p>
                <p className="cstudy-author-role">Multi-Location PT Practice, Florida</p>
              </div>
            </div>
          </div>

          <div className="cstudy-metrics">
            {metrics.map((metric, index) => (
              <div key={index} className="cstudy-metric">
                <span className="cstudy-metric-value">{metric.value}</span>
                <span className="cstudy-metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cstudy-cta">
          <p className="cstudy-cta-text">
            Ready to achieve similar results?
          </p>
          <button className="cstudy-btn" onClick={() => navigate('/contact')}>
            Get Your Free Analysis
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
