import React, { useState, useEffect, useRef } from 'react';
import './Stats.scss';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 1,
      value: '30',
      suffix: 'sec',
      label: 'Average note creation time',
      description: 'With AI-powered documentation',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      )
    },
    {
      id: 2,
      value: '3',
      suffix: '',
      label: 'Disciplines supported',
      description: 'PT, OT, and Speech Therapy',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      id: 3,
      value: '100',
      suffix: '%',
      label: 'Cloud-based access',
      description: 'Work from anywhere, anytime',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      )
    },
    {
      id: 4,
      value: '24/7',
      suffix: '',
      label: 'Support available',
      description: 'We are here when you need us',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="stats__bg">
        <div className="stats__gradient"></div>
      </div>

      <div className="stats__container">
        <div className="stats__header">
          <h2 className="stats__title">Built for efficiency</h2>
          <p className="stats__subtitle">
            Every feature designed to save you time and simplify your workflow
          </p>
        </div>

        <div className="stats__grid">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`stat-card ${isVisible ? 'animate' : ''}`}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="stat-card__icon">
                {stat.icon}
              </div>
              <div className="stat-card__value">
                <span className="value-number">{stat.value}</span>
                {stat.suffix && <span className="value-suffix">{stat.suffix}</span>}
              </div>
              <div className="stat-card__label">{stat.label}</div>
              <div className="stat-card__description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
