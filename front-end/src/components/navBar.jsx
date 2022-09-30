import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const user = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('user');
    return navigate('/login');
  };

  const userRole = JSON.parse(localStorage.getItem('user')).role;

  return (
    <nav>
      {userRole === 'seller' ? (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => navigate('/seller/orders') }
        >
          Pedidos
        </button>
      )
        : (
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-products"
            onClick={ () => navigate('/customer/products') }
          >
            Produtos
          </button>
        )}

      {userRole !== 'seller' && (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => navigate('/customer/orders') }
        >
          Meus Pedidos
        </button>
      )}
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
