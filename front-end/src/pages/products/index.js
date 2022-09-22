import React from 'react';
import Card from '../../components/Card';
import NavBar from '../../components/navBar';

function Products() {
  return (
    <>
      <NavBar />
      <Card />
      <button type="button" data-testid="customer_products__checkout-bottom-value">
        Ver Carrinho
      </button>
    </>
  );
}

export default Products;
