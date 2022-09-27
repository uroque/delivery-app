import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminNavBar() {
  const admin = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('user');
    return navigate('/login');
  };

  return (
    <nav>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Gerenciar Usuários
      </button>

      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { `${admin.name}` }
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

export default AdminNavBar;
