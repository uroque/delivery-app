import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function getOrders() {
      const userData = JSON.parse(localStorage.getItem('user'));
      const request = await fetch('http://localhost:3001/customer/orders', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: `${userData.token}`,
        },
        mode: 'cors',
      });
      const response = await request.json();
      console.log(response);
      setOrders(response);
    }
    getOrders();
  }, []);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('pt-br');
  };

  return (
    <div>
      { orders.length > 0 && orders.map((item) => (
        <Link key={ item.id } to={ `/customer/orders/${item.id}` }>
          <div>
            <p data-testid={ `customer_orders__element-order-id-${item.id}` }>
              { `Pedido: ${item.id}` }
            </p>
            <p data-testid={ `customer_orders__element-delivery-status-${item.id}` }>
              { item.status }
            </p>
            <p data-testid={ `customer_orders__element-order-date-${item.id}` }>
              { formatDate(item.saleDate) }
            </p>
            <p data-testid={ `customer_orders__element-card-price-${item.id}` }>
              { `R$ ${item.totalPrice.replace('.', ',')}` }
            </p>
          </div>
        </Link>
      )) }
    </div>
  );
}

export default Orders;
