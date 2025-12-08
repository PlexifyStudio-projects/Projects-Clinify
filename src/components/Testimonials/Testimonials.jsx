import React, { useState, useEffect } from 'react';
import './Testimonials.scss';

const Testimonials = () => {
  const [activeCard, setActiveCard] = useState(null);

  const stats = [
    { value: '500+', label: 'Clinics Trust Us' },
    { value: '50K+', label: 'Notes Generated' },
    { value: '4.9', label: 'Average Rating', isStar: true },
    { value: '99%', label: 'Client Retention' }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "The AI documentation cut my note time from 45 minutes to under 5. I actually get to go home on time now.",
      name: "Dr. Sarah Mitchell",
      role: "Physical Therapist",
      clinic: "Recovery Plus Clinic",
      initials: "SM",
      color: "#F59E0B",
      rating: 5,
      size: 'large'
    },
    {
      id: 2,
      quote: "Managing 15 therapists across 3 locations was chaos. Now I see everything in one dashboard.",
      name: "Michael Torres",
      role: "Agency Director",
      clinic: "Wellness Therapy Group",
      initials: "MT",
      color: "#3B82F6",
      rating: 5,
      size: 'medium'
    },
    {
      id: 3,
      quote: "The billing integration alone saved us 10 hours a week. Claims go out faster.",
      name: "Jennifer Adams",
      role: "Clinic Administrator",
      clinic: "Hand & Upper Rehab",
      initials: "JA",
      color: "#10B981",
      rating: 5,
      size: 'small'
    },
    {
      id: 4,
      quote: "As an OT, I need specific templates. NeuroFys Y has everything - ADL assessments, fine motor, sensory processing.",
      name: "David Chen",
      role: "Occupational Therapist",
      clinic: "Pediatric OT Associates",
      initials: "DC",
      color: "#8B5CF6",
      rating: 5,
      size: 'medium'
    },
    {
      id: 5,
      quote: "Our PTA staff picked it up in one day. The interface is that intuitive.",
      name: "Robert Williams",
      role: "Rehab Director",
      clinic: "HealthFirst Rehab",
      initials: "RW",
      color: "#EC4899",
      rating: 5,
      size: 'small'
    },
    {
      id: 6,
      quote: "Speech therapy templates that actually make sense. Progress notes, evaluations - all in one place.",
      name: "Amanda Foster",
      role: "Speech Therapist",
      clinic: "Voice & Language Center",
      initials: "AF",
      color: "#0EA5E9",
      rating: 5,
      size: 'medium'
    },
    {
      id: 7,
      quote: "The scheduling feature reduced our no-shows by 30%. Automated reminders actually work.",
      name: "Carlos Rodriguez",
      role: "Office Manager",
      clinic: "Elite Sports Therapy",
      initials: "CR",
      color: "#10B981",
      rating: 5,
      size: 'small'
    },
    {
      id: 8,
      quote: "Cloud access from anywhere was the deciding factor. Our field therapists love it.",
      name: "James Morrison",
      role: "Home Health Director",
      clinic: "CareFirst Home Therapy",
      initials: "JM",
      color: "#EC4899",
      rating: 5,
      size: 'small'
    }
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" className="star">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ));
  };

  return (
    <section className="testimonials-new">
      {/* Background Elements */}
      <div className="testimonials-new__bg">
        <div className="bg-gradient"></div>
        <div className="bg-pattern"></div>
        <div className="bg-glow bg-glow--1"></div>
        <div className="bg-glow bg-glow--2"></div>
      </div>

      <div className="testimonials-new__container">
        {/* Header */}
        <div className="testimonials-new__header">
          <span className="header-eyebrow">What Therapists Say</span>
          <h2 className="header-title">
            Loved by <span className="highlight">500+</span> therapy clinics
          </h2>
          <p className="header-subtitle">
            Join the growing community of healthcare professionals transforming their practice
          </p>
        </div>

        {/* Stats Bar */}
        <div className="testimonials-new__stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-value">
                {stat.value}
                {stat.isStar && (
                  <svg viewBox="0 0 20 20" fill="currentColor" className="stat-star">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                )}
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid - Bento Style */}
        <div className="testimonials-new__grid">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`testimonial-card testimonial-card--${testimonial.size}`}
              onMouseEnter={() => setActiveCard(testimonial.id)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ '--card-color': testimonial.color }}
            >
              <div className="testimonial-card__content">
                <div className="card-rating">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="card-quote">
                  "{testimonial.quote}"
                </blockquote>

                <div className="card-author">
                  <div className="author-avatar" style={{ background: testimonial.color }}>
                    {testimonial.initials}
                  </div>
                  <div className="author-info">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card__glow"></div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="testimonials-new__trust">
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
            <span>HIPAA Compliant</span>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>256-bit Encryption</span>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            <span>99.9% Uptime</span>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <path d="M22 4L12 14.01l-3-3"/>
            </svg>
            <span>SOC 2 Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
