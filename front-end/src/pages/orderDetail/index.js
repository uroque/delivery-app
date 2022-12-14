import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/navBar';

function OrdersDetail() {
  const [sales, setSales] = useState([]);
  const [status, setStatus] = useState('');
  const { id } = useParams();
  const userData = JSON.parse(localStorage.getItem('user'));
  const prefix = userData.role === 'seller' ? 'seller' : 'customer';

  useEffect(() => {
    async function getSaleById() {
      const request = await fetch(`http://localhost:3001/${prefix}/orders/${id}`, {
        method: 'GET',
        headers: {
          authorization: `${userData.token}`,
        },
      });
      const response = await request.json();
      setSales(response[0]);
    }
    getSaleById();
  }, [id, status, prefix, sales, userData.token]);

  useEffect(() => {
    const updateStatus = async () => {
      if (status) {
        await fetch(`http://localhost:3001/status/orders/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            authorization: `${userData.token}`,
          },
          body: JSON.stringify({ status }),
        });
      }
    };
    updateStatus();
  }, [id, status, userData.token]);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('pt-br');
  };

  return (
    <div>
      <NavBar />
      <h1>Detalhe do Pedido</h1>
      <label
        data-testid={ `${prefix}_order_details__element-order-details-label-order-id` }
        htmlFor="order-id"
      >
        <p id="order-id">{ ` Pedido: 00${sales?.id}`}</p>
      </label>
      { userData.role === 'customer' && (
        <label
          htmlFor="seller-name"
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          <p id="seller-name">{`Vendedor: ${sales.userSeller?.name}`}</p>
        </label>
      )}
      <label
        htmlFor="sale-date"
        data-testid={ `${prefix}_order_details__element-order-details-label-order-date` }
      >
        <p id="sale-date">
          {' '}
          {`Data: ${formatDate(sales?.saleDate)}`}
        </p>
      </label>
      <label
        htmlFor="delivery-status"
        data-testid={
          `${prefix}_order_details__element-order-details-label-delivery-status`
        }
      >
        <p id="delivery-status">{`${sales?.status}`}</p>
      </label>
      { prefix === 'seller' ? (
        <>
          <button
            type="button"
            data-testid={ `${prefix}_order_details__button-preparing-check` }
            disabled={ sales?.status !== 'Pendente' }
            onClick={ () => setStatus('Preparando') }
          >
            Preparar pedido

          </button>
          <button
            type="button"
            data-testid={ `${prefix}_order_details__button-dispatch-check` }
            disabled={ sales?.status !== 'Preparando' }
            onClick={ () => setStatus('Em Tr??nsito') }
          >
            Saiu para entrega

          </button>
        </>
      )
        : (
          <button
            type="button"
            data-testid={ `${prefix}_order_details__button-delivery-check` }
            disabled={ sales?.status !== 'Em Tr??nsito' }
            onClick={ () => setStatus('Entregue') }
          >
            Marcar como entregue

          </button>
        )}

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descri????o</th>
            <th>Quantidade</th>
            <th>Valor unit??rio</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {sales.products?.map((product, index) => (
            <tr key={ product.id }>
              <td
                data-testid={
                  `${prefix}_order_details__element-order-table-item-number${index}`
                }
              >
                {product.id}
              </td>
              <td
                data-testid={
                  `${prefix}_order_details__element-order-table-name-${index}`
                }
              >
                {product.name}
              </td>
              <td
                data-testid={
                  `${prefix}_order_details__element-order-table-quantity-${index}`
                }
              >
                {product.salesProducts.quantity}
              </td>
              <td
                data-testid={
                  `${prefix}_order_details__element-order-table-unit-price-${index}`
                }
              >
                {product.price?.replace('.', ',')}
              </td>
              <td
                data-testid={
                  `${prefix}_order_details__element-order-table-sub-total-${index}`
                }
              >
                {(+product.price * product.salesProducts.quantity)
                  .toFixed(2).replace('.', ',')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 data-testid={ `${prefix}_order_details__element-order-total-price` }>
        { sales.totalPrice?.replace('.', ',') }
        {' '}
      </h2>
    </div>

  );
}

export default OrdersDetail;
