import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Legal.scss';

const Legal = () => {
  const [activeSection, setActiveSection] = useState('privacy');
  const location = useLocation();
  const lastUpdated = 'December 7, 2025';

  useEffect(() => {
    if (location.hash === '#terms') {
      setActiveSection('terms');
    } else if (location.hash === '#privacy') {
      setActiveSection('privacy');
    }
    window.scrollTo(0, 0);
  }, [location]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="legal">
      <div className="legal__header">
        <div className="header-container">
          <div className="header-badge">Legal</div>
          <h1>Privacy & Terms</h1>
          <p>Simple, transparent policies that protect you and your patients</p>
          <div className="header-meta">
            <span className="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Last Updated: {lastUpdated}
            </span>
          </div>
        </div>
      </div>

      <div className="legal__tabs">
        <div className="tabs-container">
          <button
            className={`tab ${activeSection === 'privacy' ? 'active' : ''}`}
            onClick={() => setActiveSection('privacy')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Privacy Policy
          </button>
          <button
            className={`tab ${activeSection === 'terms' ? 'active' : ''}`}
            onClick={() => setActiveSection('terms')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            Terms of Service
          </button>
        </div>
      </div>

      <div className="legal__content">
        <div className="content-container">
          <aside className="legal__toc">
            <div className="toc-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6"/>
                <line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/>
                <line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
              <h3>Sections</h3>
            </div>
            <nav>
              {activeSection === 'privacy' ? (
                <>
                  <button onClick={() => scrollToSection('pp-intro')} className="toc-item">Introduction</button>
                  <button onClick={() => scrollToSection('pp-what-we-collect')} className="toc-item">What We Collect</button>
                  <button onClick={() => scrollToSection('pp-how-we-use')} className="toc-item">How We Use It</button>
                  <button onClick={() => scrollToSection('pp-sharing')} className="toc-item">Sharing & Disclosure</button>
                  <button onClick={() => scrollToSection('pp-signatures')} className="toc-item">Electronic Signatures</button>
                  <button onClick={() => scrollToSection('pp-ai')} className="toc-item">AI Features</button>
                  <button onClick={() => scrollToSection('pp-security')} className="toc-item">Security & HIPAA</button>
                  <button onClick={() => scrollToSection('pp-rights')} className="toc-item">Your Rights</button>
                  <button onClick={() => scrollToSection('pp-contact')} className="toc-item">Contact Us</button>
                </>
              ) : (
                <>
                  <button onClick={() => scrollToSection('tos-agreement')} className="toc-item">Agreement</button>
                  <button onClick={() => scrollToSection('tos-service')} className="toc-item">Our Service</button>
                  <button onClick={() => scrollToSection('tos-accounts')} className="toc-item">Your Account</button>
                  <button onClick={() => scrollToSection('tos-acceptable-use')} className="toc-item">Acceptable Use</button>
                  <button onClick={() => scrollToSection('tos-documentation')} className="toc-item">Documentation</button>
                  <button onClick={() => scrollToSection('tos-signatures')} className="toc-item">Signatures</button>
                  <button onClick={() => scrollToSection('tos-ai')} className="toc-item">AI Tools</button>
                  <button onClick={() => scrollToSection('tos-trial')} className="toc-item">Free Trial & Billing</button>
                  <button onClick={() => scrollToSection('tos-ip')} className="toc-item">Ownership</button>
                  <button onClick={() => scrollToSection('tos-liability')} className="toc-item">Disclaimers & Liability</button>
                  <button onClick={() => scrollToSection('tos-general')} className="toc-item">General Terms</button>
                </>
              )}
            </nav>
          </aside>

          <main className="legal__main">
            {activeSection === 'privacy' ? <PrivacyPolicy /> : <TermsOfService />}
          </main>
        </div>
      </div>
    </section>
  );
};

const PrivacyPolicy = () => (
  <div className="policy-content">
    <div className="policy-intro-card">
      <div className="intro-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </div>
      <div className="intro-content">
        <h2>Your Privacy Matters</h2>
        <p>
          We built NeuroFys Y for therapists, by people who understand healthcare.
          Your patients' data deserves the same care you give them. This policy explains
          how we protect that information in plain, simple terms.
        </p>
      </div>
    </div>

    <section id="pp-intro">
      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy explains how NeuroFys Y collects, uses, and protects information
        when you use our platform. We're an EMR built specifically for Physical Therapy,
        Occupational Therapy, and Speech-Language Pathology professionals.
      </p>
      <p>
        By using NeuroFys Y, you agree to the practices described here. If you have questions,
        our team is always happy to help.
      </p>
    </section>

    <section id="pp-what-we-collect">
      <h2>2. What We Collect</h2>

      <h3>Your Account Information</h3>
      <p>When you sign up, we collect basic information to set up your account:</p>
      <ul>
        <li>Your name, email, and contact information</li>
        <li>Professional credentials and license information</li>
        <li>Your clinic or organization details</li>
        <li>Payment information for billing purposes</li>
      </ul>

      <h3>Patient Information</h3>
      <p>
        Through normal use of our EMR, healthcare providers enter patient data including:
      </p>
      <ul>
        <li>Patient demographics and contact information</li>
        <li>Medical history and diagnoses</li>
        <li>Treatment plans, visit notes, and progress reports</li>
        <li>Insurance and billing information</li>
        <li>Electronic signatures</li>
      </ul>

      <h3>Usage Information</h3>
      <p>
        We automatically collect some technical information to keep the platform running smoothly:
      </p>
      <ul>
        <li>Login times and general usage patterns</li>
        <li>Device and browser information</li>
        <li>Error reports to help us fix issues</li>
      </ul>
    </section>

    <section id="pp-how-we-use">
      <h2>3. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li><strong>Provide our service</strong> — Store and manage clinical documentation, process signatures, and support your daily workflow</li>
        <li><strong>Keep things secure</strong> — Verify your identity, protect against unauthorized access, and maintain required audit trails</li>
        <li><strong>Improve the platform</strong> — Understand how features are used so we can make NeuroFys Y better</li>
        <li><strong>Communicate with you</strong> — Send important updates, respond to support requests, and provide helpful resources</li>
      </ul>
    </section>

    <section id="pp-sharing">
      <h2>4. Sharing & Disclosure</h2>

      <div className="callout-box callout-info">
        <div className="callout-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        </div>
        <div className="callout-content">
          <strong>We Never Sell Your Data</strong>
          <p>
            Period. Your information and your patients' information is never sold,
            rented, or shared for marketing purposes.
          </p>
        </div>
      </div>

      <p>We only share information when:</p>
      <ul>
        <li><strong>Service providers require it</strong> — Our hosting and payment partners who help run the platform (all bound by strict confidentiality)</li>
        <li><strong>The law requires it</strong> — Valid court orders or regulatory requirements</li>
        <li><strong>It's necessary to protect safety</strong> — Rare emergency situations as permitted by law</li>
      </ul>
      <p>
        We don't offer integrations or data exports to third-party systems. Your data stays within NeuroFys Y.
      </p>
    </section>

    <section id="pp-signatures">
      <h2>5. Electronic Signatures</h2>
      <p>
        Our platform captures electronic signatures for clinical documentation. When someone
        signs, we record the signature along with the date, time, and the document being signed.
        This creates a reliable record that meets legal requirements for electronic signatures.
      </p>
      <p>
        Signatures are securely stored and protected. Once a document is signed, we maintain
        the integrity of that record.
      </p>
    </section>

    <section id="pp-ai">
      <h2>6. AI-Assisted Features</h2>
      <p>
        NeuroFys Y includes AI tools to help with documentation. These features suggest text
        and help streamline your workflow.
      </p>

      <div className="callout-box callout-warning">
        <div className="callout-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <div className="callout-content">
          <strong>AI is a Tool, Not a Replacement</strong>
          <p>
            AI suggestions are just that — suggestions. You should always review and approve
            any AI-generated content before it becomes part of a patient's record. The clinical
            judgment is always yours.
          </p>
        </div>
      </div>

      <p>
        We don't use your patient data to train AI models. AI features process information
        to help you work more efficiently, nothing more.
      </p>
    </section>

    <section id="pp-security">
      <h2>7. Security & HIPAA</h2>
      <p>
        Protecting health information isn't optional — it's the law, and it's the right thing to do.
        NeuroFys Y is built from the ground up to comply with HIPAA requirements.
      </p>

      <h3>What This Means for You</h3>
      <ul>
        <li>All data is encrypted, both when stored and when transmitted</li>
        <li>Access is controlled based on user roles — people only see what they need to see</li>
        <li>We maintain audit logs as required for compliance</li>
        <li>We execute Business Associate Agreements (BAAs) with our healthcare provider clients</li>
      </ul>

      <p>
        We take reasonable measures to protect your information, but no system is 100% secure.
        We're committed to promptly addressing any security concerns and notifying affected
        parties if required.
      </p>
    </section>

    <section id="pp-rights">
      <h2>8. Your Rights</h2>

      <h3>For Healthcare Providers</h3>
      <p>You can:</p>
      <ul>
        <li>Access your data within the platform at any time</li>
        <li>Update your account information</li>
        <li>Request deletion of your account (subject to legal retention requirements for medical records)</li>
        <li>Contact us with any privacy concerns</li>
      </ul>

      <h3>For Patients</h3>
      <p>
        Patients have rights under HIPAA to access their medical records. These requests should
        be directed to the healthcare provider who treated them. As a technology platform, we
        support providers in fulfilling these obligations.
      </p>
    </section>

    <section id="pp-contact">
      <h2>9. Contact Us</h2>
      <p>Questions about privacy? We're here to help.</p>
      <div className="contact-card">
        <div className="contact-item">
          <h4>Privacy Questions</h4>
          <p>privacy@neurofysy.com</p>
        </div>
        <div className="contact-item">
          <h4>General Support</h4>
          <p>support@neurofysy.com</p>
        </div>
      </div>
      <p>
        We may update this Privacy Policy from time to time. When we make significant changes,
        we'll let you know through the platform or via email.
      </p>
    </section>
  </div>
);

const TermsOfService = () => (
  <div className="policy-content">
    <div className="policy-intro-card">
      <div className="intro-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      </div>
      <div className="intro-content">
        <h2>Terms of Service</h2>
        <p>
          These terms govern your use of NeuroFys Y. We've tried to keep them clear
          and fair. By using our platform, you agree to these terms.
        </p>
      </div>
    </div>

    <section id="tos-agreement">
      <h2>1. Agreement</h2>
      <p>
        By creating an account or using NeuroFys Y, you agree to these Terms of Service
        and our Privacy Policy. If you're signing up on behalf of an organization, you
        confirm you have authority to accept these terms for that organization.
      </p>
      <p>
        If you don't agree to these terms, please don't use the platform.
      </p>
    </section>

    <section id="tos-service">
      <h2>2. Our Service</h2>
      <p>
        NeuroFys Y is an electronic medical records platform designed for rehabilitation
        therapy professionals:
      </p>
      <ul>
        <li><strong>Physical Therapy (PT)</strong> — PTs and PTAs</li>
        <li><strong>Occupational Therapy (OT)</strong> — OTs and COTAs</li>
        <li><strong>Speech-Language Pathology (SLP)</strong> — SLPs and SLPAs</li>
      </ul>

      <h3>What We Provide</h3>
      <ul>
        <li>Patient management and demographic tracking</li>
        <li>Clinical documentation (evaluations, daily notes, progress reports)</li>
        <li>Electronic signature capture</li>
        <li>Scheduling and workflow tools</li>
        <li>AI-assisted documentation features</li>
        <li>Reporting and compliance support</li>
      </ul>

      <p>
        We're always working to improve NeuroFys Y. Features may be added, modified,
        or occasionally removed as we evolve the platform.
      </p>
    </section>

    <section id="tos-accounts">
      <h2>3. Your Account</h2>

      <h3>Who Can Use NeuroFys Y</h3>
      <p>To use our platform, you must:</p>
      <ul>
        <li>Be at least 18 years old</li>
        <li>Be a healthcare professional or authorized staff member</li>
        <li>Provide accurate registration information</li>
        <li>Keep your login credentials secure</li>
      </ul>

      <h3>Account Security</h3>
      <p>
        Your account is personal to you. Don't share your login credentials with anyone.
        You're responsible for all activity under your account, so please log out when
        using shared devices and let us know immediately if you suspect unauthorized access.
      </p>
    </section>

    <section id="tos-acceptable-use">
      <h2>4. Acceptable Use</h2>
      <p>
        When using NeuroFys Y, you agree NOT to:
      </p>
      <ul>
        <li>Share your login credentials or allow unauthorized access to your account</li>
        <li>Use the platform for any illegal purpose or in violation of healthcare regulations</li>
        <li>Attempt to access data belonging to other users or organizations</li>
        <li>Interfere with the platform's security, performance, or functionality</li>
        <li>Use automated tools to scrape, copy, or extract data from the platform</li>
        <li>Misrepresent your identity, credentials, or authorization level</li>
        <li>Use the platform to store non-clinical or personal data unrelated to patient care</li>
      </ul>
      <p>
        Violation of these rules may result in immediate account suspension or termination.
      </p>
    </section>

    <section id="tos-documentation">
      <h2>5. Clinical Documentation</h2>
      <p>
        NeuroFys Y provides the tools for documentation — but the clinical content is yours.
        You're responsible for:
      </p>
      <ul>
        <li>The accuracy and completeness of all documentation you create</li>
        <li>Obtaining necessary patient consents</li>
        <li>Following your professional standards and regulatory requirements</li>
        <li>Supervising and co-signing assistant documentation as required</li>
        <li>Maintaining your professional licenses and certifications</li>
        <li>Complying with HIPAA and applicable state regulations on your end</li>
      </ul>
      <p>
        We provide the technology; you provide the clinical expertise and compliance.
      </p>
    </section>

    <section id="tos-signatures">
      <h2>6. Electronic Signatures</h2>
      <p>
        When you sign documentation electronically through NeuroFys Y:
      </p>
      <ul>
        <li>Your signature has the same legal effect as a handwritten signature</li>
        <li>You're confirming you've reviewed and approve the content</li>
        <li>The signature is linked to your authenticated account</li>
      </ul>
      <p>
        When obtaining patient signatures, make sure they understand what they're signing
        and verify their identity as appropriate.
      </p>
    </section>

    <section id="tos-ai">
      <h2>7. AI Tools</h2>
      <p>
        Our AI features are designed to help you work more efficiently. But there are
        important things to understand:
      </p>

      <div className="callout-box callout-warning">
        <div className="callout-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <div className="callout-content">
          <strong>AI Doesn't Replace Your Judgment</strong>
          <p>
            AI suggestions may be helpful, but they can also be wrong. Always review
            AI-generated content before accepting it. You're responsible for everything
            in your patients' records.
          </p>
        </div>
      </div>

      <p>
        AI features don't provide medical advice or clinical recommendations. They're
        productivity tools, nothing more.
      </p>
    </section>

    <section id="tos-trial">
      <h2>8. Free Trial & Billing</h2>

      <h3>30-Day Free Trial</h3>
      <p>New customers get a 30-day free trial with full access to all features.</p>
      <ul>
        <li>No credit card required to start</li>
        <li>One trial per organization</li>
        <li>Data you enter during the trial is preserved if you subscribe</li>
      </ul>

      <div className="callout-box callout-info">
        <div className="callout-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        </div>
        <div className="callout-content">
          <strong>No Surprise Charges</strong>
          <p>
            We'll never automatically charge you when your trial ends. You only pay if
            you actively choose to subscribe.
          </p>
        </div>
      </div>

      <h3>Subscription & Payment</h3>
      <ul>
        <li>Pricing is customized based on your organization's needs</li>
        <li>Subscriptions are billed in advance</li>
        <li>Payments are non-refundable — please use the free trial to evaluate the platform</li>
        <li>If payment fails, we'll reach out before any service interruption</li>
      </ul>
    </section>

    <section id="tos-ip">
      <h2>9. Ownership</h2>

      <h3>Your Data</h3>
      <p>
        Your clinical data belongs to you. We provide the platform; you own your content.
      </p>

      <h3>Our Platform</h3>
      <p>
        NeuroFys Y — including our software, design, templates, and documentation — is
        our intellectual property. You get a license to use it while you're a subscriber,
        but you can't copy, modify, reverse engineer, or resell any part of it.
      </p>

      <h3>Data Retention</h3>
      <p>
        Your clinical records are retained as required by law. If you cancel your
        subscription, we'll maintain required records per legal retention periods
        and securely delete non-essential data.
      </p>
    </section>

    <section id="tos-liability">
      <h2>10. Disclaimers & Liability</h2>

      <h3>Service "As Is"</h3>
      <p>
        NeuroFys Y is provided "as is" and "as available" without warranties of any kind,
        whether express or implied. We don't guarantee that the platform will be error-free,
        uninterrupted, or meet your specific requirements. You use the platform at your own risk.
      </p>

      <h3>Our Role</h3>
      <p>
        NeuroFys Y is a technology platform. We provide tools for documentation and
        practice management. We don't provide medical advice, and we're not responsible
        for clinical decisions you make.
      </p>

      <h3>Platform Availability</h3>
      <p>
        We work hard to keep NeuroFys Y available and reliable, but we can't guarantee
        100% uptime. Sometimes maintenance or unexpected issues happen. We're not liable
        for interruptions, though we'll always work to resolve them quickly.
      </p>

      <h3>Limitation of Liability</h3>
      <p>
        To the extent permitted by law, NeuroFys Y's liability is limited to the amount
        you've paid us in the six months before any claim. We're not liable for indirect
        damages like lost profits or business opportunities.
      </p>

      <p>
        By using NeuroFys Y, you agree to indemnify us from claims arising from your
        use of the platform, your clinical decisions, or your violation of these terms.
      </p>
    </section>

    <section id="tos-general">
      <h2>11. General Terms</h2>

      <h3>Termination</h3>
      <p>
        You can cancel anytime. We can suspend or terminate accounts for violations of
        these terms, non-payment, or with 30 days' notice for any reason. Upon termination,
        your right to use the platform ends immediately.
      </p>

      <h3>Changes to Terms</h3>
      <p>
        We may update these terms. For significant changes, we'll give you advance notice
        through the platform or email. Continued use after changes means you accept them.
        If you don't agree to changes, your only option is to stop using the platform.
      </p>

      <h3>Force Majeure</h3>
      <p>
        We're not liable for delays or failures caused by circumstances beyond our reasonable
        control, including natural disasters, power outages, internet disruptions, government
        actions, pandemics, or other events that we cannot foresee or prevent.
      </p>

      <h3>Disputes & Arbitration</h3>
      <p>
        If we have a dispute, let's try to work it out first — contact us at
        legal@neurofysy.com. If that doesn't work, disputes will be resolved through
        binding arbitration under the rules of the American Arbitration Association.
        You agree to resolve disputes individually, not as part of a class action.
        You waive any right to participate in class action lawsuits against NeuroFys Y.
      </p>

      <h3>Governing Law</h3>
      <p>
        These terms are governed by the laws of the State of Florida, USA, without
        regard to conflict of law principles.
      </p>

      <h3>Severability</h3>
      <p>
        If any provision of these terms is found to be invalid or unenforceable, that
        provision will be limited or eliminated to the minimum extent necessary, and the
        remaining provisions will continue in full force and effect.
      </p>

      <h3>Entire Agreement</h3>
      <p>
        These Terms of Service and our Privacy Policy constitute the entire agreement
        between you and NeuroFys Y regarding your use of the platform. They supersede
        any prior agreements, communications, or understandings, whether written or oral.
      </p>

      <h3>No Waiver</h3>
      <p>
        Our failure to enforce any right or provision of these terms doesn't constitute
        a waiver of that right or provision. Any waiver must be in writing and signed by us.
      </p>

      <h3>Contact</h3>
      <div className="contact-card">
        <div className="contact-item">
          <h4>Legal Questions</h4>
          <p>legal@neurofysy.com</p>
        </div>
        <div className="contact-item">
          <h4>Support</h4>
          <p>support@neurofysy.com</p>
        </div>
      </div>
    </section>
  </div>
);

export default Legal;
