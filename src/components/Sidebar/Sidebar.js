import React from 'react';
import NavItem from './NavItem';
import Logo from './Logo';

const Sidebar = ({ activeNav, onNavClick }) => {
  const menuSections = [
    {
      heading: "Main",
      items: [
        { 
          label: "Inicio", 
          icon: "home",
          type: "simple"
        },
        { 
          label: "Dashboard", 
          icon: "dashboard",
          type: "simple"
        },
        { 
          label: "Monitoreo", 
          icon: "chart-line",
          type: "simple"
        },
        { 
          label: "Conf. de Llamadas", 
          icon: "phone-alt",
          type: "dropdown",
          subItems: [
            { label: "Configuración General", icon: "cog" },
            { label: "Rutas de Llamada", icon: "route" },
            { label: "Horarios Laborales", icon: "clock" },
            { label: "IVR (Menú de Voz)", icon: "microphone" },
            { label: "Colas de Llamadas", icon: "list-ol" },
            { label: "Music on Hold", icon: "music" },
            { label: "Reglas de Desvío", icon: "exchange-alt" },
            { label: "Límites y Restricciones", icon: "ban" },
            { label: "Integración SIP", icon: "plug" },
            { label: "Plantillas de Llamada", icon: "file-alt" }
          ]
        },
        { 
          label: "Centro de Contacto", 
          icon: "headset",
          type: "dropdown",
          subItems: [
            { label: "Panel de Agentes", icon: "users" },
            { label: "Gestión de Colas", icon: "list-ol" },
            { label: "Monitor en Tiempo Real", icon: "desktop" },
            { label: "Estadísticas de Agentes", icon: "chart-bar" },
            { label: "Asignación de Llamadas", icon: "random" },
            { label: "Pausas y Estados", icon: "pause-circle" },
            { label: "Calidad de Servicio", icon: "star" },
            { label: "Chat Interno", icon: "comments" },
            { label: "Reportes de Actividad", icon: "file-alt" },
            { label: "Configuración de Skills", icon: "cogs" }
          ]
        },
        { 
          label: "Lista Negra", 
          icon: "phone-slash",
          type: "dropdown",
          subItems: [
            { label: "Lista de Números Bloqueados", icon: "ban" },
            { label: "Reglas Automáticas", icon: "robot" },
            { label: "Historial de Bloqueos", icon: "history" },
            { label: "Excepciones", icon: "star" },
            { label: "Importar/Exportar", icon: "file-export" },
            { label: "Patrones de Números", icon: "search" },
            { label: "Motivos de Bloqueo", icon: "exclamation-triangle" },
            { label: "Notificaciones", icon: "bell" },
            { label: "Reportes de Bloqueos", icon: "chart-pie" },
            { label: "API de Bloqueo", icon: "code" }
          ]
        }
      ]
    },
    {
      heading: "Reportes",
      items: [
        { 
          label: "Reporte", 
          icon: "chart-line",
          type: "dropdown",
          subItems: [
            { label: "Reporte de Llamadas", icon: "phone" },
            { label: "Reporte de Agentes", icon: "user-tie" },
            { label: "Reporte de Colas", icon: "list-ol" },
            { label: "Reporte de Calidad", icon: "star" },
            { label: "Reporte de Tiempos", icon: "clock" },
            { label: "Reporte Financiero", icon: "dollar-sign" },
            { label: "Reporte de Conversión", icon: "chart-pie" },
            { label: "Reporte Personalizado", icon: "cogs" },
            { label: "Exportar a Excel", icon: "file-excel" },
            { label: "Reportes Programados", icon: "calendar-alt" }
          ]
        },
        { 
          label: "Tiempo Real", 
          icon: "tachometer-alt",
          type: "dropdown",
          subItems: [
            { label: "Dashboard en Vivo", icon: "desktop" },
            { label: "Monitor de Llamadas", icon: "phone" },
            { label: "Estado de Agentes", icon: "user-check" },
            { label: "Métricas en Vivo", icon: "chart-line" },
            { label: "Alertas", icon: "exclamation-circle" },
            { label: "Mapa de Calor", icon: "map" },
            { label: "Widgets Personalizados", icon: "cubes" },
            { label: "KPIs en Tiempo Real", icon: "target" }, // Usa bullseye
            { label: "Stream de Eventos", icon: "stream" },
            { label: "Comparativa Histórica", icon: "chart-bar" }
          ]
        }
      ]
    },
    {
      heading: "Admin",
      items: [
        { 
          label: "Settings", 
          icon: "cog",
          type: "dropdown",
          subItems: [
            { label: "Configuración General", icon: "cogs" },
            { label: "Usuarios y Permisos", icon: "user-shield" },
            { label: "Integraciones", icon: "plug" },
            { label: "Backup y Restauración", icon: "database" },
            { label: "Logs del Sistema", icon: "file-alt" },
            { label: "API Keys", icon: "key" },
            { label: "Plantillas de Email", icon: "envelope" },
            { label: "Personalización", icon: "palette" }
          ]
        },
        { 
          label: "Notifications", 
          icon: "bell",
          type: "dropdown",
          subItems: [
            { label: "Configuración de Alertas", icon: "cog" },
            { label: "Historial de Notificaciones", icon: "history" },
            { label: "Canales de Notificación", icon: "broadcast-tower" },
            { label: "Plantillas de Mensajes", icon: "envelope" },
            { label: "Reglas de Escalación", icon: "arrow-up" },
            { label: "Preferencias de Usuario", icon: "user-cog" }
          ]
        },
        { 
          label: "Security", 
          icon: "shield-alt",
          type: "dropdown",
          subItems: [
            { label: "Autenticación", icon: "fingerprint" },
            { label: "Control de Acceso", icon: "user-lock" },
            { label: "Registro de Auditoría", icon: "clipboard-check" },
            { label: "Firewall", icon: "shield-virus" },
            { label: "Encriptación", icon: "lock" },
            { label: "Compliance", icon: "certificate" }
          ]
        }
      ]
    }
  ];

  return (
    <div className="sidebar">
      <Logo />
      
      {/* Perfil del usuario */}
      <div className="user-profile-sidebar">
        <div className="profile-img-sidebar">HF</div>
        <div className="user-info-sidebar">
          <div className="user-name-sidebar">Hersson Fernandez</div>
          <div className="user-role-sidebar">Administrador</div>
        </div>
      </div>
      
      <div className="nav-menu">
        {menuSections.map((section, sectionIndex) => (
          <React.Fragment key={sectionIndex}>
            <div className="menu-heading">
              <span>{section.heading}</span>
            </div>
            {section.items.map((item, itemIndex) => (
              <NavItem
                key={`${sectionIndex}-${itemIndex}`}
                label={item.label}
                icon={item.icon}
                type={item.type}
                subItems={item.subItems}
                isActive={activeNav === item.label}
                onClick={onNavClick}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
      
      <div className="sidebar-footer">
        <div className="user-status">
          <div className="status-indicator online"></div>
          <span>Sistema Online</span>
        </div>
        <div className="version">v2.5.1</div>
      </div>
    </div>
  );
};

export default Sidebar;