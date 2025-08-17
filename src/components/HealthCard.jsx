import React from 'react';
import './HealthCard.scss';

const HealthCard = ({ title, value, unit, icon, color = 'primary' }) => {
  return (
    <div className={`health-card health-card--${color}`}>
      <div className="health-card__icon">
        {icon && <span className="health-card__icon-symbol">{icon}</span>}
      </div>
      <div className="health-card__content">
        <h3 className="health-card__title">{title}</h3>
        <div className="health-card__value">
          <span className="health-card__number">{value}</span>
          {unit && <span className="health-card__unit">{unit}</span>}
        </div>
      </div>
    </div>
  );
};

export default HealthCard;