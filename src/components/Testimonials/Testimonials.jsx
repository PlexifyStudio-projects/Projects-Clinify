import React, { useState } from 'react';
import './Testimonials.scss';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stats = [
    { value: '90%', label: 'Time Saved' },
    { value: '5 min', label: 'Avg. Note Time' },
    { value: '100%', label: 'HIPAA Compliant' },
    { value: '24/7', label: 'Support' }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "The AI documentation cut my note time from 45 minutes to under 5. I finally get to spend more time with patients and less on paperwork.",
      name: "Dr. Sarah Mitchell, PT, DPT",
      role: "Physical Therapist",
      clinic: "Recovery Plus Clinic, Boston",
      avatar: "SM"
    },
    {
      id: 2,
      quote: "Managing 15 therapists across 3 locations was chaos. Now I have real-time visibility into productivity, billing, and compliance from one dashboard.",
      name: "Michael Torres, MBA",
      role: "Agency Director",
      clinic: "Wellness Therapy Group, Miami",
      avatar: "MT"
    },
    {
      id: 3,
      quote: "The billing integration alone saved us 10 hours a week. Claims go out faster, denials are down 40%, and our revenue cycle has never been smoother.",
      name: "Jennifer Adams",
      role: "Clinic Administrator",
      clinic: "Hand & Upper Rehab, Chicago",
      avatar: "JA"
    },
    {
      id: 4,
      quote: "As an OT, I need specific templates for ADL assessments, fine motor evaluations, and sensory processing. NeuroFys Y has everything built-in.",
      name: "David Chen, OTR/L",
      role: "Occupational Therapist",
      clinic: "Pediatric OT Associates, Seattle",
      avatar: "DC"
    },
    {
      id: 5,
      quote: "Speech therapy templates that actually make clinical sense. Progress notes, evaluations, FEES reports - all compliant and ready to go.",
      name: "Amanda Foster, MS, CCC-SLP",
      role: "Speech-Language Pathologist",
      clinic: "Voice & Language Center, Denver",
      avatar: "AF"
    },
    {
      id: 6,
      quote: "Implementation took 2 weeks, not months. Our staff was documenting efficiently from day one. The ROI was immediate.",
      name: "Robert Williams, PT",
      role: "Rehab Director",
      clinic: "HealthFirst Rehabilitation, Austin",
      avatar: "RW"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-pro">
      <div className="testimonials-pro__container">
        {/* Header */}
        <div className="testimonials-pro__header">
          <p className="header-label">Trusted by Healthcare Professionals</p>
          <h2 className="header-title">
            What Therapists Are Saying
          </h2>
        </div>

        {/* Stats Row */}
        <div className="testimonials-pro__stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="testimonials-pro__carousel">
          <button className="carousel-arrow carousel-arrow--prev" onClick={prevTestimonial}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="carousel-content">
            <div className="testimonial-card testimonial-card--carousel">
              <div className="card-quote-mark">"</div>
              <blockquote className="card-quote">
                {testimonials[currentIndex].quote}
              </blockquote>
              <div className="card-author">
                <div className="author-avatar">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="author-info">
                  <span className="author-name">{testimonials[currentIndex].name}</span>
                  <span className="author-role">{testimonials[currentIndex].role}</span>
                  <span className="author-clinic">{testimonials[currentIndex].clinic}</span>
                </div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>

          <button className="carousel-arrow carousel-arrow--next" onClick={nextTestimonial}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="testimonials-pro__trust">
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
            <span>HIPAA Compliant</span>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>256-bit Encryption</span>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            <span>99.9% Uptime SLA</span>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <path d="M22 4L12 14.01l-3-3"/>
            </svg>
            <span>SOC 2 Type II</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
