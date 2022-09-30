import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Orders() {
  const [orders, setOrders] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));
  const prefix = userData.role === 'seller' ? 'seller' : 'customer';

  useEffect(() => {
    async function getOrders() {
      const request = await fetch(`http://localhost:3001/${prefix}/orders`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: `${userData.token}`,
        },
        mode: 'cors',
      });
      const response = await request.json();

      setOrders(response);
    }
    getOrders();
  }, [prefix, userData.token]);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('pt-br');
  };

  return (
    <div>
      { orders.length > 0 && orders.map((item) => (
        <Link key={ item.id } to={ `/${prefix}/orders/${item.id}` }>
          <div>
            <p data-testid={ `${prefix}_orders__element-order-id-${item.id}` }>
              { `Pedido: ${item.id}` }
            </p>
            <p data-testid={ `${prefix}_orders__element-delivery-status-${item.id}` }>
              { item.status }
            </p>
            <p data-testid={ `${prefix}_orders__element-order-date-${item.id}` }>
              { formatDate(item.saleDate) }
            </p>
            <p data-testid={ `${prefix}_orders__element-card-price-${item.id}` }>
              { `R$ ${item.totalPrice.replace('.', ',')}` }
            </p>
            <div>
              { prefix === 'seller' && (
                <p data-testid={ `seller_orders__element-card-address-${item.id}` }>
                  {item.deliveryAddress}
                </p>
              )}
            </div>
          </div>
        </Link>
      )) }

    </div>
  );
}

export default Orders;
