import React from 'react';
import Icon from '../shared/Icon';

const NavItem = ({ 
  label, 
  icon, 
  isActive = false, 
  onClick,
  hasBadge = false,
  badgeCount = 0 
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(label);
    }
  };

  const iconMap = {
    'Inicio': 'fa-home',
    'Dashboard': 'ai-dashboard',
    'Monitoreo': 'bs-graph-up',
    'Conf. de llamadas': 'ri-phone',
    'Centro de Contacto': 'ri-contacts',
    'Lista Negra': 'fa-phone-slash',
    'Reporte': 'bi-bar-chart',
    'Tiempo Real': 'fa-tachometer-alt',
    'Settings': 'ai-settings',
    'Notifications': 'fa-bell',
    'Security': 'hi-shield-check'
  };

  return (
    <div 
      className={`nav-item ${isActive ? 'active' : ''}`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="nav-item-icon">
        <Icon 
          name={iconMap[label] || icon} 
          size={18} 
          color={isActive ? '#667eea' : '#718096'}
        />
      </div>
      <span>{label}</span>
      {hasBadge && badgeCount > 0 && (
        <div className="nav-badge">{badgeCount}</div>
      )}
    </div>
  );
};

export default NavItem;