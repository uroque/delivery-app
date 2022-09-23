import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const user = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('user');
    return navigate('/login');
  };

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
        { `${user.name}` }
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => logOut() }
      >
        Sair
      </button>
    </nav>
  );
}

export default NavBar;
