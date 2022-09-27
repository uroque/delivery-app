import React, { useEffect, useState } from 'react';

function Orders() {
  const [total, setTotal] = useState();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart'));
    setOrders([...items]);
  }, []);

  useEffect(() => {
    async function getTotal() {
      const totalPrice = orders.reduce((acc, item) => {
        acc += item.subTotal;
        return acc;
      }, 0);
      setTotal(totalPrice.toFixed(2));
    }
    getTotal();
  }, [orders]);

  const removeProduct = (id) => {
    const index = orders.findIndex((product) => product.id === id);
    orders.splice(index, 1);
    setOrders([...orders]);
    localStorage.setItem('cart', JSON.stringify(orders));
  };

  return (
    <div>
      {orders.length > 0 ? orders.map((order, index) => (
        <div key={ index }>
          <div>
            <span
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              { index + 1}

            </span>
            <span
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              {order.name}

            </span>
            <span
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              {order.qtd}

            </span>
            <span
              data-testid={
                `customer_checkout__element-order-table-unit-price-${index}`
              }
            >
              {order.unitValue.toFixed(2).replace('.', ',') }

            </span>
            <span
              data-testid={
                `customer_checkout__element-order-table-sub-total-${index}`
              }
            >
              {order.subTotal.toFixed(2).replace('.', ',')}

            </span>
          </div>
          <button
            data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            type="button"
            onClick={ () => removeProduct(order.id) }
          >
            Remover
          </button>
        </div>
      )) : <h1>Não há pedidos</h1>}
      <div>
        <h2
          data-testid="customer_checkout__element-order-total-price"
        >
          {`Total: ${total?.replace('.', ',')} `}
          {' '}
        </h2>
      </div>
    </div>
  );
}

export default Orders;
