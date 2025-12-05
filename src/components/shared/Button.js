import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  icon,
  disabled = false,
  type = 'button',
  className = ''
}) => {
  const buttonClasses = `btn btn-${variant} ${size ? `btn-${size}` : ''} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <i className={`fas ${icon}`}></i>}
      {children}
    </button>
  );
};

export default Button;