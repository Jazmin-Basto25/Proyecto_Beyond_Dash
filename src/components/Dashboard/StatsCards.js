import React from 'react';
import StatCard from './StatCard';

const StatsCards = ({ stats, onStatClick }) => {
  const statCardsData = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: "fa-users",
      color: "purple",
      change: { value: 12.5, isPositive: true }
    },
    {
      title: "Total Revenue",
      value: stats.totalRevenue,
      icon: "fa-dollar-sign",
      color: "blue",
      change: { value: 8.2, isPositive: true }
    },
    {
      title: "Total Orders",
      value: stats.totalOrders,
      icon: "fa-shopping-cart",
      color: "green",
      change: { value: 3.1, isPositive: false }
    },
    {
      title: "Conversion Rate",
      value: stats.conversionRate,
      icon: "fa-chart-line",
      color: "orange",
      change: { value: 4.6, isPositive: true }
    }
  ];

  return (
    <div className="stats-cards">
      {statCardsData.map((card, index) => (
        <StatCard
          key={index}
          {...card}
          onClick={() => onStatClick(card.title)}
        />
      ))}
    </div>
  );
};

export default StatsCards;