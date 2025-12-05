import React from 'react';
import Icon from '../shared/Icon';

const Notification = ({ 
  type = 'bell', 
  count = 0, 
  onClick,
  icon = 'fa-bell'
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(type);
    }
  };

  const iconMap = {
    'bell': 'fa-bell',
    'envelope': 'fa-envelope',
    'alert': 'io-stats-chart'
  };

  return (
    <div 
      className="notification" 
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="notification-icon-wrapper">
        <Icon 
          name={iconMap[type] || icon} 
          size={18}
        />
      </div>
      {count > 0 && (
        <div className={`badge ${type}`}>
          {count > 99 ? '99+' : count}
        </div>
      )}
    </div>
  );
};

export default Notification;