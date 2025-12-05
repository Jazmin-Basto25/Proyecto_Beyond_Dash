import React, { useState } from "react";
import "./estilo.css";
import "./global.css";

// Importar componentes
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { StatsCards, RecentOrders } from "./components/Dashboard";
import Icon from "./components/shared/Icon";


function App() {
  // Estados
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [orders, setOrders] = useState([
    { id: 1, orderId: "#ORD-001", customer: "John Smith", date: "15 Mar 2025", amount: "$125.00", status: "active" },
    { id: 2, orderId: "#ORD-002", customer: "Emma Johnson", date: "14 Mar 2025", amount: "$245.99", status: "pending" },
    { id: 3, orderId: "#ORD-003", customer: "Michael Brown", date: "13 Mar 2025", amount: "$79.50", status: "active" },
    { id: 4, orderId: "#ORD-004", customer: "Sarah Davis", date: "12 Mar 2025", amount: "$350.00", status: "cancelled" },
    { id: 5, orderId: "#ORD-005", customer: "David Wilson", date: "11 Mar 2025", amount: "$185.25", status: "active" },
  ]);

  const [stats, setStats] = useState({
    totalUsers: 1504,
    totalRevenue: 12750,
    totalOrders: 324,
    conversionRate: 85
  });

  // Manejadores de eventos
  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    console.log(`Navegando a: ${navItem}`);
  };

  const handleSearch = (searchTerm) => {
    console.log(`Buscando: ${searchTerm}`);
    alert(`Resultados para: "${searchTerm}"`);
  };

  const handleNotificationClick = (type) => {
    alert(`Mostrando ${type === 'bell' ? 'notificaciones' : 'mensajes'}`);
  };

  const handleExport = () => {
    alert("Datos exportados exitosamente");
  };

  const handleAddNew = () => {
    const newOrder = {
      id: orders.length + 1,
      orderId: `#ORD-00${orders.length + 1}`,
      customer: "Nuevo Cliente",
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      amount: "$0.00",
      status: "pending"
    };
    
    setOrders([...orders, newOrder]);
    alert("Nuevo pedido agregado");
  };

  const handleViewAll = () => {
    alert(`Mostrando todos los ${orders.length} pedidos`);
  };

  const handleViewOrder = (orderId, customer) => {
    alert(`Detalles del pedido:\nID: ${orderId}\nCliente: ${customer}`);
  };

  const handleStatClick = (statName) => {
    alert(`Mostrando detalles de: ${statName}`);
  };

  const updateStats = () => {
    setStats({
      totalUsers: stats.totalUsers + Math.floor(Math.random() * 50),
      totalRevenue: stats.totalRevenue + Math.floor(Math.random() * 500),
      totalOrders: stats.totalOrders + Math.floor(Math.random() * 10),
      conversionRate: Math.min(100, stats.conversionRate + Math.floor(Math.random() * 5))
    });
  };

  return (
    <div className="container">
      <Sidebar activeNav={activeNav} onNavClick={handleNavClick} />
      <Header 
        onSearch={handleSearch}
        onNotificationClick={handleNotificationClick}
      />

      <div className="main-content">
        <div className="page-title">
          <div className="title">
            <Icon name="ai-dashboard" size={24} color="#667eea" />
            <span>Dashboard</span>
          </div>

          <div className="action-buttons">
            <button className="btn btn-outline" onClick={handleExport}>
              <Icon name="fa-download" size={16} />
              <span>Export</span>
            </button>

            <button className="btn btn-primary" onClick={handleAddNew}>
              <Icon name="fa-plus" size={16} />
              <span>Add New</span>
            </button>
          </div>
        </div>

        <StatsCards stats={stats} onStatClick={handleStatClick} />

        <div className="quick-actions">
          <button className="quick-action-btn" onClick={updateStats}>
            <Icon name="fa-sync-alt" size={20} />
            <span>Actualizar Estadísticas</span>
          </button>
          
          <button className="quick-action-btn" onClick={() => handleNavClick('Reporte')}>
            <Icon name="bi-bar-chart" size={20} />
            <span>Generar Reporte</span>
          </button>
          
          <button className="quick-action-btn" onClick={() => handleNavClick('Monitoreo')}>
            <Icon name="bs-graph-up" size={20} />
            <span>Monitoreo en Tiempo Real</span>
          </button>
        </div>

        <RecentOrders 
          orders={orders}
          onViewAll={handleViewAll}
          onViewOrder={handleViewOrder}
        />

        <div className="dashboard-info">
          <div className="info-card">
            <div className="info-icon">
              <Icon name="fa-cube" size={24} color="#667eea" />
            </div>
            <div className="info-content">
              <h4>Sistema por Componentes</h4>
              <p>Navegación activa: <strong>{activeNav}</strong></p>
            </div>
          </div>
          
          <div className="stats-overview">
            <div className="stat-overview-item">
              <Icon name="fa-shopping-cart" size={18} />
              <span>Pedidos: {orders.length}</span>
            </div>
            <div className="stat-overview-item">
              <Icon name="fa-users" size={18} />
              <span>Usuarios: {stats.totalUsers}</span>
            </div>
            <div className="stat-overview-item">
              <Icon name="fa-dollar-sign" size={18} />
              <span>Ingresos: ${stats.totalRevenue}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;