import React from 'react';
import Icon from '../shared/Icon';

const StatCard = ({ 
  title, 
  value, 
  icon, 
  change = { value: 0, isPositive: true },
  color = 'purple',
  onClick 
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(title);
    }
  };

  const iconMap = {
    'Total Users': 'fa-users',
    'Total Revenue': 'fa-dollar-sign',
    'Total Orders': 'fa-shopping-cart',
    'Conversion Rate': 'fa-chart-line'
  };

  const formatValue = (val) => {
    if (typeof val === 'number') {
      if (title.includes('Revenue')) return `$${val.toLocaleString()}`;
      if (title.includes('Rate')) return `${val}%`;
      return val.toLocaleString();
    }
    return val;
  };

  return (
    <div 
      className="stat-card" 
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="card-header">
        <div>
          <div className="card-value">{formatValue(value)}</div>
          <div className="card-label">{title}</div>
        </div>
        <div className={`card-icon ${color}`}>
          <Icon 
            name={iconMap[title] || icon} 
            size={24}
            color="#fff"
          />
        </div>
      </div>
      
      <div className={`card-change ${change.isPositive ? 'positive' : 'negative'}`}>
        <Icon 
          name={change.isPositive ? 'fa-arrow-up' : 'fa-arrow-down'} 
          size={12}
        />
        <span>{Math.abs(change.value)}% {change.isPositive ? 'increase' : 'decrease'} from last month</span>
      </div>
    </div>
  );
};

export default StatCard;