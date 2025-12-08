import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoDemo.scss';

const VideoDemo = () => {
  const navigate = useNavigate();

  return (
    <section className="vdemo-section">
      <div className="vdemo-container">
        <div className="vdemo-content">
          <div className="vdemo-text">
            <p className="vdemo-label">See It In Action</p>
            <h2 className="vdemo-title">Watch How NeuroFys Y Transforms Your Practice</h2>
            <p className="vdemo-subtitle">
              See how therapists save hours every day with AI-powered documentation
              and streamlined workflows.
            </p>
            <ul className="vdemo-features">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Generate SOAP notes in under 60 seconds
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                One-click insurance-ready documentation
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Real-time compliance verification
              </li>
            </ul>
            <button className="vdemo-btn" onClick={() => navigate('/contact')}>
              Request Full Demo
            </button>
          </div>

          <div className="vdemo-video">
            <div className="vdemo-video-wrapper">
              <div className="vdemo-placeholder">
                <div className="vdemo-play-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
                <p className="vdemo-placeholder-text">Product Demo</p>
                <span className="vdemo-duration">2:30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
