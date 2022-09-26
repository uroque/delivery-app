import React, { useContext, useEffect } from 'react';
import ProductsContext from '../context/productsContext/context';

function ShowCartItem() {
  const {
    productsCart,
    total,
    setTotal,
  } = useContext(ProductsContext);

  useEffect(() => {
    async function getTotal() {
      const totalPrice = productsCart.reduce((acc, item) => {
        acc += item.subTotal;
        return acc;
      }, 0);
      setTotal(totalPrice.toFixed(2));
    }
    getTotal();
  }, [setTotal, productsCart]);

  return (
    <button
      type="button"
      data-testid="customer_products__checkout-bottom-value"
    >
      { `${total}`.replace('.', ',') }
    </button>
  );
}

export default ShowCartItem;
