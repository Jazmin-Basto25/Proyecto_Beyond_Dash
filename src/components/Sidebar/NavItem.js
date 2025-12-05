// NavItem.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faTachometerAlt, faChartLine, faChartPie, faHistory,
  faPhoneAlt, faCog, faRoute, faClock, faMicrophone, faListOl,
  faMusic, faExchangeAlt, faBan, faPlug, faFileAlt, faHeadset,
  faUsers, faDesktop, faChartBar, faRandom, faPauseCircle, faStar,
  faComments, faCogs, faPhoneSlash, faRobot, faSearch, faExclamationTriangle,
  faBell, faFileExport, faCode, faDollarSign, faFileExcel, faCalendarAlt,
  faMap, faCubes, faBullseye, faStream, faDatabase, faKey, faEnvelope,
  faPalette, faBroadcastTower, faArrowUp, faUserCog, faShieldAlt,
  faFingerprint, faUserLock, faClipboardCheck, faShieldVirus, faLock,
  faCertificate, faUserTie, faUserCheck, faExclamationCircle
  , faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  // Main
  home: faHome,
  dashboard: faTachometerAlt,
  'chart-line': faChartLine,
  'chart-pie': faChartPie,
  history: faHistory,
  'phone-alt': faPhoneAlt,
  cog: faCog,
  route: faRoute,
  clock: faClock,
  microphone: faMicrophone,
  'list-ol': faListOl,
  music: faMusic,
  'exchange-alt': faExchangeAlt,
  ban: faBan,
  plug: faPlug,
  'file-alt': faFileAlt,
  headset: faHeadset,
  users: faUsers,
  desktop: faDesktop,
  'chart-bar': faChartBar,
  random: faRandom,
  'pause-circle': faPauseCircle,
  star: faStar,
  comments: faComments,
  cogs: faCogs,
  'phone-slash': faPhoneSlash,
  robot: faRobot,
  search: faSearch,
  'exclamation-triangle': faExclamationTriangle,
  bell: faBell,
  'file-export': faFileExport,
  code: faCode,

  // Reportes
  'dollar-sign': faDollarSign,
  'file-excel': faFileExcel,
  'calendar-alt': faCalendarAlt,
  map: faMap,
  cubes: faCubes,
  bullseye: faBullseye,
  stream: faStream,

  // Admin
  database: faDatabase,
  key: faKey,
  envelope: faEnvelope,
  palette: faPalette,
  'broadcast-tower': faBroadcastTower,
  'arrow-up': faArrowUp,
  'user-cog': faUserCog,
  'shield-alt': faShieldAlt,
  fingerprint: faFingerprint,
  'user-lock': faUserLock,
  'clipboard-check': faClipboardCheck,
  'shield-virus': faShieldVirus,
  lock: faLock,
  certificate: faCertificate,
  'user-tie': faUserTie,
  'user-check': faUserCheck,
  'exclamation-circle': faExclamationCircle,
};

const NavItem = ({ label, icon, type, subItems, isActive, onClick, collapsed, activeNav }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    if (type === 'dropdown') {
      setOpen((prev) => !prev);
    } else {
      onClick(label);
    }
  };

  const renderIcon = (iconName) => {
    const faIcon = iconMap[iconName] || faCog;
    return <FontAwesomeIcon icon={faIcon} />;
  };

  // close dropdowns when sidebar signals mouseleave
  React.useEffect(() => {
    const handler = () => setOpen(false);
    document.addEventListener('sidebar-mouseleave', handler);
    return () => document.removeEventListener('sidebar-mouseleave', handler);
  }, []);

  return (
    <div>
      <div
        className={`nav-item ${isActive ? 'active' : ''} ${collapsed ? 'collapsed' : ''} ${open ? 'open' : ''}`}
        onClick={handleClick}
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          color: isActive ? '#3b82f6' : '#f1f5f9',
          background: isActive ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
          borderLeft: isActive ? '3px solid #3b82f6' : 'none',
          transition: 'background 0.25s ease, color 0.25s ease',
        }}
      >
        <span className="nav-icon" style={{ fontSize: '1.1rem' }}>{renderIcon(icon)}</span>
        <span className="nav-label">{label}</span>
        {type === 'dropdown' && (
          <span className={`dropdown-caret ${open ? 'open' : ''}`} style={{ marginLeft: 'auto' }}>
            <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
          </span>
        )}
      </div>

      {type === 'dropdown' && (
        <div className={`nav-submenu ${open ? 'open' : ''}`}>
          <div style={{ paddingLeft: '32px', background: 'rgba(0,0,0,0.05)' }}>
            {subItems && subItems.map((sub, i) => (
              <div
                key={i}
                className={`nav-subitem ${activeNav === sub.label ? 'active' : ''}`}
                onClick={() => onClick(sub.label)}
                style={{
                  padding: '8px 0',
                  cursor: 'pointer',
                  color: activeNav === sub.label ? '#3b82f6' : '#cbd5e1',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ fontSize: '0.9rem' }}>{renderIcon(sub.icon)}</span>
                <span className="nav-subitem-label">{sub.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItem;