import React from 'react';
import logo from '../../assets/img/Logo_Beyond_Header.png';

const Logo = () => {
  return (
    <div className="logo">
      <img
        src={logo}
        alt="Beyond Dash"
        style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
      />
    </div>
  );
};

export default Logo;