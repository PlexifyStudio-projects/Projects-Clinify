import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    message: '',
    interests: []
  });

  const [showNotification, setShowNotification] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const roles = [
    'Physical Therapist',
    'Occupational Therapist',
    'Speech Therapist',
    'Clinic Owner/Director',
    'Practice Manager',
    'IT Administrator',
    'Other'
  ];

  
  const interestOptions = [
    { id: 'demo', label: 'Schedule a Demo', icon: 'calendar' },
    { id: 'pricing', label: 'Pricing Information', icon: 'dollar' },
    { id: 'partnership', label: 'Partnership Inquiry', icon: 'partnership' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (id) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter(i => i !== id)
        : [...prev.interests, id]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowNotification(true);

    // Auto-hide notification after 8 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 8000);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  const contactMethods = [
    {
      icon: 'phone',
      title: 'Talk to Sales',
      description: 'Speak directly with our therapy EMR specialists',
      action: '+1 (800) 555-0123',
      actionLabel: 'Call Now'
    },
    {
      icon: 'email',
      title: 'Email Us',
      description: 'Get a response within 24 hours',
      action: 'hello@neurofysy.com',
      actionLabel: 'Send Email'
    },
    {
      icon: 'chat',
      title: 'Live Chat',
      description: 'Chat with our team in real-time',
      action: 'Start Chat',
      actionLabel: 'Available 9am-6pm EST'
    }
  ];

  const renderIcon = (type) => {
    switch (type) {
      case 'phone':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        );
      case 'email':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        );
      case 'chat':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        );
      case 'calendar':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        );
      case 'dollar':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        );
      case 'features':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        );
      case 'migration':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 16 12 12 8 16"/>
            <line x1="12" y1="12" x2="12" y2="21"/>
            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
          </svg>
        );
      case 'integration':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        );
      case 'support':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        );
      case 'partnership':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Success Notification */}
      {showNotification && (
        <div className="notification-overlay">
          <div className="notification-toast">
            <button className="notification-close" onClick={closeNotification}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="notification-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3>Thank you, {formData.firstName}!</h3>
            <p>
              Your demo request has been received successfully.
              Our team will reach out to you shortly at <strong>{formData.email}</strong>
              {formData.phone && <> or <strong>{formData.phone}</strong></>}.
            </p>
            <span className="notification-note">Please check your inbox within 24 hours</span>
            <div className="notification-progress"></div>
          </div>
        </div>
      )}

    <section className="contact" id="contact">
      {/* Background */}
      <div className="contact__bg">
        <div className="bg-gradient"></div>
        <div className="bg-mesh"></div>
        <div className="bg-glow bg-glow--1"></div>
        <div className="bg-glow bg-glow--2"></div>
        <div className="bg-lines">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="line" style={{ '--delay': `${i * 0.5}s` }}></div>
          ))}
        </div>
      </div>

      <div className="contact__container">
        {/* Header */}
        <div className="contact__header">
          <span className="header-badge">
            <span className="badge-dot"></span>
            Get Started Today
          </span>
          <h1 className="header-title">
            Transform Your Practice with
            <span className="highlight"> Intelligent EMR</span>
          </h1>
          <p className="header-subtitle">
            Join 500+ therapy clinics already saving 10+ hours per week.
            Schedule a personalized demo and see how NeuroFys Y fits your workflow.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="contact__methods">
          {contactMethods.map((method, index) => (
            <div key={index} className="method-card">
              <div className="method-icon">
                {renderIcon(method.icon)}
              </div>
              <h3 className="method-title">{method.title}</h3>
              <p className="method-desc">{method.description}</p>
              <a href="#" className="method-action">
                <span>{method.action}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="contact__main">
          {/* Info Side */}
          <div className="contact__info">
            <div className="info-header">
              <h2>Why Choose NeuroFys Y?</h2>
              <p>Built specifically for PT, OT, and SLP professionals</p>
            </div>

            <div className="info-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>AI-Powered Documentation</h4>
                  <p>Generate SOAP notes in under 60 seconds with clinical accuracy</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>HIPAA Compliant</h4>
                  <p>Enterprise-grade security with SOC 2 certification</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Cloud-Based Access</h4>
                  <p>Work from anywhere - clinic, home, or on the go</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Multi-Location Support</h4>
                  <p>Manage multiple clinics from a single dashboard</p>
                </div>
              </div>
            </div>

            <div className="info-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Hours Saved Weekly</span>
              </div>
              <div className="stat">
                <span className="stat-number">99%</span>
                <span className="stat-label">Client Retention</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support Available</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact__form-wrapper">
            <div className="form-header">
              <h3>Request Your Free Demo</h3>
              <p>Fill out the form and we'll reach out within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="contact__form">
              {/* Interest Selection */}
              <div className="form-interests">
                <label className="form-label">I'm interested in:</label>
                <div className="interests-grid">
                  {interestOptions.map(option => (
                    <button
                      key={option.id}
                      type="button"
                      className={`interest-btn ${formData.interests.includes(option.id) ? 'active' : ''}`}
                      onClick={() => handleInterestToggle(option.id)}
                    >
                      {renderIcon(option.icon)}
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Fields */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@clinic.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Company & Role */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Clinic/Company Name *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Clinic Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Your Role *</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your role</option>
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
              </div>

{/* Message */}
              <div className="form-group">
                <label htmlFor="message">How can we help you?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your current challenges or what you're looking for in an EMR system..."
                  rows="4"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Request Demo
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </>
                )}
              </button>

              <p className="form-disclaimer">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
                We'll never share your information with third parties.
              </p>
            </form>
          </div>
        </div>

        {/* Trust Section */}
        <div className="contact__trust">
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
            <span>256-bit SSL Encryption</span>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span>SOC 2 Type II Certified</span>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>99.9% Uptime SLA</span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
