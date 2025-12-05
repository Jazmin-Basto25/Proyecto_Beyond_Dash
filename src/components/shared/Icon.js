import React from 'react';
import * as FaIcons from 'react-icons/fa';

const Icon = ({ name, size = 20, color, className = '', onClick }) => {
  // Mapeo de nombres personalizados a iconos de Font Awesome que SÍ existen
  const iconMap = {
    // Navegación principal
    'home': FaIcons.FaHome,
    'dashboard': FaIcons.FaTachometerAlt,
    'chart-line': FaIcons.FaChartLine,
    'phone-alt': FaIcons.FaPhoneAlt,
    'headset': FaIcons.FaHeadset,
    'phone-slash': FaIcons.FaPhoneSlash,
    'chart-bar': FaIcons.FaChartBar,
    'tachometer-alt': FaIcons.FaTachometerAlt,
    'cog': FaIcons.FaCog,
    'bell': FaIcons.FaBell,
    'shield-alt': FaIcons.FaShieldAlt,
    
    // Submenús de Conf. de Llamadas (iconos que existen)
    'route': FaIcons.FaRoute,
    'clock': FaIcons.FaClock,
    'microphone': FaIcons.FaMicrophone,
    'list-ol': FaIcons.FaListOl,
    'music': FaIcons.FaMusic,
    'exchange-alt': FaIcons.FaExchangeAlt,
    'ban': FaIcons.FaBan,
    'plug': FaIcons.FaPlug,
    'file-alt': FaIcons.FaFileAlt,
    
    // Submenús de Centro de Contacto
    'users': FaIcons.FaUsers,
    'desktop': FaIcons.FaDesktop,
    'random': FaIcons.FaRandom,
    'pause-circle': FaIcons.FaPauseCircle,
    'star': FaIcons.FaStar,
    'comments': FaIcons.FaComments,
    'cogs': FaIcons.FaCogs,
    'user-friends': FaIcons.FaUserFriends,
    'chart-pie': FaIcons.FaChartPie,
    
    // Submenús de Lista Negra
    'robot': FaIcons.FaRobot,
    'history': FaIcons.FaHistory,
    'file-export': FaIcons.FaFileExport,
    'search': FaIcons.FaSearch,
    'exclamation-triangle': FaIcons.FaExclamationTriangle,
    'chart-pie': FaIcons.FaChartPie,
    'code': FaIcons.FaCode,
    'calendar-alt': FaIcons.FaCalendarAlt,
    
    // Submenús de Reportes
    'phone': FaIcons.FaPhone,
    'user-tie': FaIcons.FaUserTie,
    'dollar-sign': FaIcons.FaDollarSign,
    'file-excel': FaIcons.FaFileExcel,
    
    // Submenús de Tiempo Real (iconos que existen)
    'user-check': FaIcons.FaUserCheck,
    'exclamation-circle': FaIcons.FaExclamationCircle,
    'map': FaIcons.FaMap,
    'cubes': FaIcons.FaCubes,
    'target': FaIcons.FaBullseye, // Cambiado de FaTarget a FaBullseye
    'stream': FaIcons.FaStream,
    'chart-area': FaIcons.FaChartArea,
    
    // Submenús de Admin (iconos que existen)
    'user-shield': FaIcons.FaUserShield,
    'database': FaIcons.FaDatabase,
    'key': FaIcons.FaKey,
    'envelope': FaIcons.FaEnvelope,
    'palette': FaIcons.FaPalette,
    'broadcast-tower': FaIcons.FaBroadcastTower,
    'arrow-up': FaIcons.FaArrowUp,
    'user-cog': FaIcons.FaUserCog,
    'fingerprint': FaIcons.FaFingerprint,
    'user-lock': FaIcons.FaUserLock,
    'clipboard-check': FaIcons.FaClipboardCheck,
    'shield-virus': FaIcons.FaShieldVirus,
    'lock': FaIcons.FaLock,
    'certificate': FaIcons.FaCertificate,
    
    // Otros iconos necesarios
    'newspaper': FaIcons.FaNewspaper,
    'project-diagram': FaIcons.FaProjectDiagram,
    'brain': FaIcons.FaBrain,
    'whatsapp': FaIcons.FaWhatsapp,
    'shopping-cart': FaIcons.FaShoppingCart,
    'shopping-bag': FaIcons.FaShoppingBag,
    'check': FaIcons.FaCheck,
    'check-circle': FaIcons.FaCheckCircle,
    'times': FaIcons.FaTimes,
    'times-circle': FaIcons.FaTimesCircle,
    'info': FaIcons.FaInfo,
    'info-circle': FaIcons.FaInfoCircle,
    'question': FaIcons.FaQuestion,
    'cube': FaIcons.FaCube,
    'exclamation': FaIcons.FaExclamation,
    'sync': FaIcons.FaSync,
    'eye': FaIcons.FaEye,
    'download': FaIcons.FaDownload,
    'plus': FaIcons.FaPlus,
    'envelope': FaIcons.FaEnvelope,
    
    // Flechas para dropdown
    'chevron-right': FaIcons.FaChevronRight,
    'chevron-down': FaIcons.FaChevronDown,
    
    // Por defecto
    'default': FaIcons.FaQuestionCircle,
  };

  // Si el nombre empieza con "fa-", remover el prefijo
  const iconName = name.startsWith('fa-') ? name.substring(3) : name;
  
  const IconComponent = iconMap[iconName] || iconMap['default'];

  const style = {
    fontSize: `${size}px`,
    color: color,
    cursor: onClick ? 'pointer' : 'default',
  };

  return (
    <IconComponent 
      style={style} 
      className={className}
      onClick={onClick}
    />
  );
};

export default Icon;