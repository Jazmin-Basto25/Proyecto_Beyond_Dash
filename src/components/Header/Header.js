import React from 'react';
import SearchBar from './SearchBar';
import Notification from './Notification';
import './Header.css';

const Header = ({ 
  onSearch, 
  onNotificationClick,
  userName = "Francisco",
  userRole = "Administrator"
}) => {
  return (
    <div className="header">
      <SearchBar onSearch={onSearch} />
      
      <div className="header-actions">
        <Notification 
          type="bell"
          count={3}
          onClick={onNotificationClick}
          icon="fa-bell"
        />
        
        <Notification 
          type="envelope"
          count={5}
          onClick={onNotificationClick}
          icon="fa-envelope"
        />
        
        <div className="user-profile">
          <div className="profile-img">JD</div>
          <div className="user-info">
            <div className="user-name">{userName}</div>
            <div className="user-role">{userRole}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;