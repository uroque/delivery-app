import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/navBar';

function OrdersDetail() {
  const [sales, setSales] = useState([]);
  const { id } = useParams();
  const userData = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    async function getSaleById() {
      const request = await fetch(`http://localhost:3001/customer/orders/${id}`, {
        method: 'GET',
        headers: {
          authorization: `${userData.token}`,
        },
      });
      const response = await request.json();
      setSales(response[0]);
    }
    getSaleById();
  }, [id, sales, userData.token]);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('pt-br');
  };

  return (
    <>
      <NavBar />
      <h1>Detalhes do Pedido</h1>
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { ` Pedido: ${sales?.id}`}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {`Vendedor: ${sales?.userSeller?.name}`}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {`Data: ${formatDate(sales?.saleDate)}`}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {`${sales?.status}`}
      </span>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled
      >
        Marcar como entregue

      </button>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {sales?.products?.map((product, index) => (
            <tr key={ product.id }>
              <td
                data-testid={
                  `customer_order_details__element-order-table-item-number${index}`
                }
              >
                {product.id}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-name-${index}`
                }
              >
                {product.name}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-quantity-${index}`
                }
              >
                {product.salesProducts.quantity}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-unit-price-${index}`
                }
              >
                {product.price}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-sub-total-${index}`
                }
              >
                {+product.price * product.salesProducts.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 data-testid="data-testid='customer_order_details__element-order-total-price">
        {sales?.totalPrice.replace('.', ',')}
        {' '}
      </h2>
    </>

  );
}

export default OrdersDetail;
