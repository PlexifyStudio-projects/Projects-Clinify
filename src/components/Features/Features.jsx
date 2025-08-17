import React, { useState, useEffect } from 'react';
import './Features.scss';

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const trustData = [
    {
      id: 1,
      category: 'Innovation',
      title: 'Revolutionary AI Technology',
      description: 'Cutting-edge machine learning that adapts and evolves with medical discoveries.',
      stat: '99.7%',
      statLabel: 'Accuracy Rate',
      icon: '⚡',
      color: '#FF6B35',
      bgColor: 'rgba(255, 107, 53, 0.08)',
      textColor: '#D84315'
    },
    {
      id: 2,
      category: 'Experience',
      title: 'Proven Healthcare Expertise',
      description: 'Built by medical professionals who understand real clinical challenges.',
      stat: '500+',
      statLabel: 'Healthcare Partners',
      icon: '◆',
      color: '#2E7D32',
      bgColor: 'rgba(46, 125, 50, 0.08)',
      textColor: '#1B5E20'
    },
    {
      id: 3,
      category: 'Security',
      title: 'Uncompromising Data Protection',
      description: 'Military-grade security ensuring complete patient confidentiality.',
      stat: '100%',
      statLabel: 'HIPAA Compliant',
      icon: '●',
      color: '#1565C0',
      bgColor: 'rgba(21, 101, 192, 0.08)',
      textColor: '#0D47A1'
    }
  ];

  // Auto-cambio de tabs cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % trustData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [trustData.length]);

  return (
    <section className="features">
      <div className="container">
        <div className="features__header">
          <h2 className="features__title">
            Why Choose
            <span className="features__title--accent"> Clinify AI?</span>
          </h2>
          <p className="features__subtitle">
            Where healthcare meets intelligence. Built for professionals, trusted by institutions.
          </p>
        </div>

        <div className="features__content">
          <div className="features__main">
            <div className="features__tabs">
              {trustData.map((item, index) => (
                <button
                  key={item.id}
                  className={`features__tab ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  style={{ 
                    '--delay': `${index * 0.1}s`, 
                    '--tab-color': item.color,
                    '--tab-bg-color': item.bgColor,
                    '--tab-text-color': item.textColor
                  }}
                >
                  <div className="features__tab-icon">{item.icon}</div>
                  <div className="features__tab-content">
                    <div className="features__tab-category">{item.category}</div>
                    <div className="features__tab-title">{item.title}</div>
                  </div>
                </button>
              ))}
            </div>

            <div 
              className="features__content-panel"
              style={{
                '--panel-color': trustData[activeTab].color,
                '--panel-bg-color': trustData[activeTab].bgColor,
                '--panel-text-color': trustData[activeTab].textColor
              }}
            >
              <div className="features__active-content">
                <div className="features__description">
                  {trustData[activeTab].description}
                </div>
                <div className="features__stat">
                  <div className="features__stat-number">{trustData[activeTab].stat}</div>
                  <div className="features__stat-label">{trustData[activeTab].statLabel}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="features__images">
            <div className="features__image features__image--left">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80" 
                alt="Healthcare professional using technology"
                className="features__img"
              />
              <div className="features__image-overlay">
                <span>Replace with your vertical image</span>
              </div>
            </div>
            
            <div className="features__image features__image--right">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80" 
                alt="Medical data analysis"
                className="features__img"
              />
              <div className="features__image-overlay">
                <span>Replace with your vertical image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;