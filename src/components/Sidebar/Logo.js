import React from 'react';
import Icon from '../shared/Icon';

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo-icon">
        <Icon name="ai-dashboard" size={28} color="#667eea" />
      </div>
      <div className="logo-text">
        <h1>Beyond<span>Experience</span></h1>
        <p className="logo-subtitle">Dashboard Pro</p>
      </div>
    </div>
  );
};

export default Logo;