import React, { useState } from 'react';
import './Pricing.scss';

const Pricing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const roles = [
    'Physical Therapist',
    'Occupational Therapist',
    'Speech-Language Pathologist',
    'Agency Director',
    'Clinic Owner',
    'Practice Administrator',
    'Insurance Representative',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 8000);
  };

  const valueProps = [
    {
      icon: 'shield',
      title: 'Enterprise Security',
      desc: 'HIPAA compliant with SOC 2 Type II certification'
    },
    {
      icon: 'clock',
      title: '30-Day Free Trial',
      desc: 'Full access, no credit card required'
    },
    {
      icon: 'support',
      title: 'Dedicated Support',
      desc: 'Personal onboarding and ongoing assistance'
    },
    {
      icon: 'scale',
      title: 'Flexible Plans',
      desc: 'Pricing that scales with your practice'
    }
  ];

  const audiences = [
    {
      title: 'Individual Therapists',
      desc: 'Solo practitioners looking to streamline documentation',
      icon: 'user'
    },
    {
      title: 'Therapy Clinics',
      desc: 'Multi-provider practices seeking unified workflows',
      icon: 'clinic'
    },
    {
      title: 'Home Health Agencies',
      desc: 'Field-based teams requiring mobile documentation',
      icon: 'home'
    },
    {
      title: 'Healthcare Systems',
      desc: 'Large organizations with complex compliance needs',
      icon: 'enterprise'
    }
  ];

  const features = [
    'AI-powered SOAP note generation',
    'PT, OT, and SLP specialty templates',
    'Integrated scheduling with reminders',
    'Billing and claims management',
    'Real-time analytics dashboard',
    'Unlimited patient records',
    'Multi-location support',
    'Custom reporting tools',
    'Secure messaging',
    'Mobile access'
  ];

  const faqs = [
    {
      q: "What's included in the 30-day trial?",
      a: "Complete access to all features with no limitations. Experience our full platform including AI documentation, scheduling, billing integration, and dedicated support—no credit card required."
    },
    {
      q: "How is pricing structured?",
      a: "We offer transparent, customized pricing based on your practice size and specific needs. Schedule a consultation and we'll provide a detailed quote with no hidden fees or surprise charges."
    },
    {
      q: "When does billing start?",
      a: "Billing begins after your 30-day free trial ends. You'll receive a reminder before your trial expires, and you can choose the plan that best fits your practice needs."
    },
    {
      q: "Are there long-term contracts?",
      a: "No. We offer month-to-month flexibility because we believe in earning your business every day. Cancel anytime with no penalties."
    },
    {
      q: "What kind of support is provided?",
      a: "Every client receives dedicated onboarding, training sessions, and ongoing support from real healthcare technology specialists—not chatbots. We're here when you need us."
    }
  ];

  const stats = [
    { value: '500+', label: 'Healthcare Organizations' },
    { value: '50,000+', label: 'Notes Generated Monthly' },
    { value: '99.9%', label: 'Platform Uptime' },
    { value: '4.9/5', label: 'Client Satisfaction' }
  ];

  return (
    <>
      {/* Notification */}
      {showNotification && (
        <div className="notification-overlay" onClick={() => setShowNotification(false)}>
          <div className="notification-modal" onClick={e => e.stopPropagation()}>
            <button className="notification-close" onClick={() => setShowNotification(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <div className="notification-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <path d="M22 4L12 14.01l-3-3"/>
              </svg>
            </div>
            <h3>Thank you, {formData.name.split(' ')[0] || 'there'}</h3>
            <p>Your consultation request has been received. A member of our team will contact you at <strong>{formData.email}</strong> within one business day.</p>
            <div className="notification-bar"></div>
          </div>
        </div>
      )}

      <section className="pricing">
        {/* Hero */}
        <div className="pricing__hero">
          <div className="hero-container">
            <div className="hero-badge">Transparent Pricing</div>
            <h1>
              Experience <span className="text-gradient">NeuroFys</span><span className="text-gradient-dark">Y</span>
              <br />Free for 30 Days
            </h1>
            <p className="hero-lead">
              The intelligent EMR platform trusted by therapy professionals nationwide.
              <br />
              No credit card required. No hidden fees. No commitment.
            </p>
            <div className="hero-actions">
              <a href="#consultation" className="btn-primary">
                Schedule Consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#features" className="btn-secondary">
                View All Features
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="pricing__trust">
          <div className="trust-container">
            {valueProps.map((item, i) => (
              <div key={i} className="trust-item">
                <div className="trust-icon">
                  {item.icon === 'shield' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>}
                  {item.icon === 'clock' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>}
                  {item.icon === 'support' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>}
                  {item.icon === 'scale' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>}
                </div>
                <div className="trust-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="pricing__stats">
          <div className="stats-container">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Serve */}
        <div className="pricing__audiences">
          <div className="section-container">
            <div className="section-header">
              <h2>Solutions for Every Practice</h2>
              <p>Tailored pricing and features for your specific needs</p>
            </div>
            <div className="audiences-grid">
              {audiences.map((audience, i) => (
                <div key={i} className="audience-card">
                  <div className="audience-icon">
                    {audience.icon === 'user' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
                    {audience.icon === 'clinic' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01"/></svg>}
                    {audience.icon === 'home' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>}
                    {audience.icon === 'enterprise' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 6h.01M15 6h.01M9 10h.01M15 10h.01M9 14h.01M15 14h.01M9 18h6"/></svg>}
                  </div>
                  <h3>{audience.title}</h3>
                  <p>{audience.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="pricing__features" id="features">
          <div className="section-container">
            <div className="features-content">
              <div className="features-info">
                <h2>Everything You Need,<br />All Included</h2>
                <p>
                  One comprehensive platform designed specifically for physical therapy,
                  occupational therapy, and speech-language pathology professionals.
                </p>
                <a href="#consultation" className="btn-outline">
                  Get Custom Quote
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
              <div className="features-list">
                {features.map((feature, i) => (
                  <div key={i} className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Form */}
        <div className="pricing__consultation" id="consultation">
          <div className="section-container">
            <div className="consultation-wrapper">
              <div className="consultation-info">
                <h2>Schedule Your<br />Pricing Consultation</h2>
                <p>
                  Speak directly with a healthcare technology specialist who understands
                  therapy workflows. We'll discuss your needs and provide transparent,
                  customized pricing—no sales pressure.
                </p>

                <div className="consultation-benefits">
                  <div className="benefit-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>Personalized pricing for your practice size</span>
                  </div>
                  <div className="benefit-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>Volume discounts for agencies and groups</span>
                  </div>
                  <div className="benefit-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>Dedicated onboarding and training included</span>
                  </div>
                  <div className="benefit-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>No obligation or commitment required</span>
                  </div>
                </div>

                <div className="guarantee-box">
                  <div className="guarantee-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div className="guarantee-content">
                    <strong>30 Days Free, No Strings Attached</strong>
                    <p>Try NeuroFys Y completely free for 30 days. Full access, no credit card required. Billing only starts after your trial ends.</p>
                  </div>
                </div>
              </div>

              <div className="consultation-form">
                <div className="form-card">
                  <div className="form-card-header">
                    <div className="form-card-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                    </div>
                    <div>
                      <h3>Schedule a Consultation</h3>
                      <p>We'll respond within one business day</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="input-group">
                      <div className="input-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                      />
                    </div>

                    <div className="input-row">
                      <div className="input-group">
                        <div className="input-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                          </svg>
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Work Email"
                          required
                        />
                      </div>
                      <div className="input-group">
                        <div className="input-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                          </svg>
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone (optional)"
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <div className="input-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 21h18"/>
                          <path d="M5 21V7l8-4v18"/>
                          <path d="M19 21V11l-6-4"/>
                          <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01"/>
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Organization Name"
                        required
                      />
                    </div>

                    <div className="select-group">
                      <div className="select-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                          <circle cx="8.5" cy="7" r="4"/>
                          <path d="M20 8v6M23 11h-6"/>
                        </svg>
                      </div>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className={formData.role ? 'has-value' : ''}
                      >
                        <option value="">Select your role</option>
                        {roles.map(role => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>

                    <div className="textarea-group">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your practice and what you're looking for... (optional)"
                        rows="3"
                      />
                    </div>

                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span className="spinner"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <span>Request Consultation</span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </form>

                  <div className="form-footer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                    <span>Your information is encrypted and secure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="pricing__faqs">
          <div className="section-container">
            <div className="section-header">
              <h2>Frequently Asked Questions</h2>
              <p>Everything you need to know about our pricing and platform</p>
            </div>
            <div className="faqs-list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`faq-item ${openFaq === i ? 'open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="faq-header">
                    <h4>{faq.q}</h4>
                    <div className="faq-toggle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </div>
                  </div>
                  <div className="faq-body">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="pricing__cta">
          <div className="cta-container">
            <h2>Ready to Transform Your Practice?</h2>
            <p>Join 500+ therapy organizations already using NeuroFys Y</p>
            <a href="#consultation" className="btn-cta">
              Start Your Free Trial
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
