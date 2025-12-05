// Sidebar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavItem from './NavItem';
import Logo from './Logo';
import './Sidebar.css';

const Sidebar = ({ activeNav, onNavClick }) => {
  const [collapsed, setCollapsed] = useState(false);

  // Toggle collapsed state
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuSections = [
    {
      heading: 'Main',
      items: [
        { label: 'Inicio', icon: 'home', type: 'simple' },
        { label: 'Dashboard', icon: 'tachometer-alt', type: 'simple' },
        {
          label: 'Monitoreo',
          icon: 'chart-line',
          type: 'dropdown',
          subItems: [
            { label: 'Tablero de RT', icon: 'chart-pie' },
            { label: 'Métricas', icon: 'chart-line' },
            { label: 'Métricas Personalizadas', icon: 'sliders-h' },
            { label: 'Grabaciones', icon: 'microphone' },
            { label: 'CDR', icon: 'file-alt' },
          ],
        },
        {
          label: 'Configuración de llamadas',
          icon: 'cog',
          type: 'dropdown',
          subItems: [
            { label: 'Grabaciones del sistema', icon: 'microphone' },
            { label: 'Anuncios', icon: 'music' },
            { label: 'Rutas entrantes', icon: 'route' },
            { label: 'Condición del tiempo', icon: 'clock' },
            { label: 'Flujo de llamadas (IVR)', icon: 'sitemap' },
          ],
        },
        {
          label: 'Centro de contacto',
          icon: 'headset',
          type: 'dropdown',
          subItems: [
            {
              label: 'Voz',
              icon: 'phone',
              type: 'dropdown',
              subItems: [
                { label: 'Colas de llamadas', icon: 'list-ol' },
              ],
            },
            {
              label: 'Chat',
              icon: 'comments',
              type: 'dropdown',
              subItems: [
                { label: 'Colas de chat', icon: 'list-ol' },
              ],
            },
            { label: 'Grupos de monitoreo', icon: 'users' },
          ],
        },
        {
          label: "Whatsapp",
          icon: "comments",
          type: "dropdown",
          subItems:[
            { label: "Nuestro WhatsApp" },
          ]
        },
        {
          label: "Plataforma de Chat-Bot",
          icon: "robot",
          type: "dropdown",
          subItems:[
            { label: "Chat-Bot", icon: "robot" },
          ]
        },
        {
          label: "Opciones Avanzadas",
          icon: "cogs",
          type: "dropdown",
          subItems:[
            { label: "Archivos", icon: "" },
            { label: "Tareas Programadas", icon: "" },
            { label: "Grupos de Horarios", icon: "" },
          ]
        },
        {
          label: "Notificaciones",
          icon: "bell",
          type: "simple",
        },
      ],
    },
  ];

  // Agregar el botón de toggle al Logo
  const LogoWithToggle = () => (
    <div className="logo">
      <Logo />
      <button 
        onClick={toggleSidebar}
        className="toggle-btn"
        style={{
          background: 'none',
          border: 'none',
          color: '#f1f5f9',
          cursor: 'pointer',
          padding: '4px',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
        }}
        aria-label={collapsed ? "Expandir menú" : "Contraer menú"}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <LogoWithToggle />
      <div className="nav-menu">
        {menuSections.map((section, sectionIndex) => (
          <React.Fragment key={sectionIndex}>
            {!collapsed && (
              <div className="menu-heading">
                <span>{section.heading}</span>
              </div>
            )}
            {section.items.map((item, itemIndex) => (
              <NavItem
                key={`${sectionIndex}-${itemIndex}`}
                label={item.label}
                icon={item.icon}
                type={item.type}
                subItems={item.subItems}
                isActive={activeNav === item.label}
                onClick={onNavClick}
                collapsed={collapsed}
                activeNav={activeNav}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
      
      <div className="sidebar-footer">
        <div className="user-status">
          <div className="status-indicator online"></div>
          {!collapsed && <span>Sistema Online</span>}
        </div>
        {!collapsed && <div className="version">v2.5.1</div>}
      </div>
    </div>
  );
};

export default Sidebar;