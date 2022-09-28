import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductsContext from '../context/productsContext/context';

function ShowCartItem() {
  const {
    productsCart,
    total,
    setTotal,
  } = useContext(ProductsContext);

  const navigate = useNavigate();

  const goToCart = () => {
    localStorage.setItem('cart', JSON.stringify(productsCart));

    return navigate('/customer/checkout');
  };

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
      data-testid="customer_products__button-cart"
      onClick={ goToCart }
      disabled={ productsCart.length === 0 }
    >
      <p data-testid="customer_products__checkout-bottom-value">
        { `${total}`.replace('.', ',') }
      </p>
    </button>
  );
}

export default ShowCartItem;
