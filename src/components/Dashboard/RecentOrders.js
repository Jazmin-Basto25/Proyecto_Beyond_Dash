import React from 'react';

const RecentOrders = ({ 
  orders, 
  onViewAll, 
  onViewOrder,
  title = "Recent Orders" 
}) => {
  const getStatusIcon = (status) => {
    switch(status) {
      case 'active': return 'fa-check-circle';
      case 'pending': return 'fa-clock';
      case 'cancelled': return 'fa-times-circle';
      default: return 'fa-question-circle';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'active': return 'Completed';
      case 'pending': return 'Pending';
      case 'cancelled': return 'Cancelled';
      default: return 'Unknown';
    }
  };

  return (
    <div className="table-card">
      <div className="card-title">
        <h3><i className="fas fa-shopping-bag"></i> {title}</h3>
        <button 
          className="btn btn-outline btn-sm"
          onClick={onViewAll}
        >
          <i className="fas fa-eye"></i> View All
        </button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.orderId}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>{order.amount}</td>
              <td>
                <span className={`status ${order.status}`}>
                  <i className={`fas ${getStatusIcon(order.status)}`}></i> 
                  {getStatusText(order.status)}
                </span>
              </td>
              <td>
                <button 
                  className="btn btn-outline btn-sm"
                  onClick={() => onViewOrder(order.orderId, order.customer)}
                >
                  <i className="fas fa-eye"></i> View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;