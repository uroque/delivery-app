import React from 'react';

function NavBar() {
  const nome = 'fulano';
  return (
    <nav>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus Pedidos
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { `${nome}` }
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </nav>
  );
}

export default NavBar;
