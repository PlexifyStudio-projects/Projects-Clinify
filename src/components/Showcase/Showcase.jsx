import React from 'react';
import './Showcase.scss';
import LoginImg from '../../assets/Login.png';
import PatientsImg from '../../assets/PatientsLists.png';
import VisitsImg from '../../assets/TypeOFVISITS.png';
import HubImg from '../../assets/Hub.png';
import StaffImg from '../../assets/addstaff.png';

const Showcase = () => {
  return (
    <section className="showcase" id="solutions">
      {/* Section 1 - Secure Access */}
      <div className="showcase__section">
        <div className="showcase__content">
          <div className="showcase__text">
            <h3 className="showcase__title">Secure Clinical Access</h3>
            <p className="showcase__description">
              Access your practice securely from anywhere with our HIPAA-compliant login portal.
              Your credentials are protected with enterprise-grade encryption, and every session
              is secured with industry-standard protocols.
            </p>
            <ul className="showcase__features">
              <li>HIPAA-compliant authentication</li>
              <li>Encrypted data transmission</li>
              <li>Terms of Service & Privacy Policy compliance</li>
            </ul>
          </div>
          <div className="showcase__visual">
            <img src={LoginImg} alt="Secure Login Portal" className="showcase__image" />
          </div>
        </div>
      </div>

      {/* Section 2 - Patient Management */}
      <div className="showcase__section showcase__section--reversed">
        <div className="showcase__content">
          <div className="showcase__text">
            <h3 className="showcase__title">Patient Management Center</h3>
            <p className="showcase__description">
              Your complete patient dashboard at a glance. Track total, active, and inactive patients
              with real-time statistics. Advanced filters let you search by healthcare agency, patient
              status, or name.
            </p>
            <ul className="showcase__features">
              <li>Real-time patient statistics dashboard</li>
              <li>Multi-agency filtering & search</li>
              <li>Quick actions: View, Activate, Deactivate</li>
            </ul>
          </div>
          <div className="showcase__visual">
            <img src={PatientsImg} alt="Patient Management Center" className="showcase__image" />
          </div>
        </div>
      </div>

      {/* Section 3 - Visit Scheduling */}
      <div className="showcase__section">
        <div className="showcase__content">
          <div className="showcase__text">
            <h3 className="showcase__title">Smart Visit Scheduling</h3>
            <p className="showcase__description">
              Schedule any type of visit with intelligent templates. From Initial Evaluations to
              Follow-ups, Recertification Evaluations, Discharges, and OASIS documentation -
              each visit type automatically loads the right templates.
            </p>
            <ul className="showcase__features">
              <li>7 visit types: Initial Eval, Follow Up, Recert, Discharge & more</li>
              <li>Automatic certification period tracking</li>
              <li>OASIS documentation support (SOC & DC)</li>
            </ul>
          </div>
          <div className="showcase__visual">
            <img src={VisitsImg} alt="Visit Scheduling" className="showcase__image" />
          </div>
        </div>
      </div>

      {/* Section 4 - Management Hub */}
      <div className="showcase__section showcase__section--reversed">
        <div className="showcase__content">
          <div className="showcase__text">
            <h3 className="showcase__title">Clinical Management Hub</h3>
            <p className="showcase__description">
              Your command center for clinical excellence. Quick access to all your clinical tools
              and patient management features in one organized hub. Manage patients, schedule
              therapy sessions, browse exercise library, and handle documentation.
            </p>
            <ul className="showcase__features">
              <li>My Patients & My Visits quick access</li>
              <li>Exercise Library with therapeutic exercises</li>
              <li>Treatment Plans & Notes Documentation</li>
            </ul>
          </div>
          <div className="showcase__visual">
            <img src={HubImg} alt="Management Hub" className="showcase__image" />
          </div>
        </div>
      </div>

      {/* Section 5 - Staffing Management */}
      <div className="showcase__section">
        <div className="showcase__content">
          <div className="showcase__text">
            <h3 className="showcase__title">Staffing Management Center</h3>
            <p className="showcase__description">
              Manage your entire therapy team from one powerful dashboard. Track therapists by discipline -
              PT, PTA, OT, COTA, ST, and STA - with real-time staffing overview. Monitor active agencies
              and easily onboard new team members.
            </p>
            <ul className="showcase__features">
              <li>Full discipline support: PT, PTA, OT, COTA, ST, STA</li>
              <li>Role-based access: Admin, Clinical Lead, Clinical Support</li>
              <li>Agency management & performance tracking</li>
            </ul>
          </div>
          <div className="showcase__visual">
            <img src={StaffImg} alt="Staffing Management Center" className="showcase__image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
