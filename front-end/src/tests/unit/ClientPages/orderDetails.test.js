import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../../utils/renderWithRouter';
import App from '../../../App';

const customerOrdersDetailsPath = '/costumer/orders/1';

describe('Customer Order Details page', () => {
  describe('Navigation bar', () => {
    it(`Have a button with 
    data-test-id="customer_products__element-navbar-link-products"`, () => {
      renderWithRouter(<App />, { route: customerOrdersDetailsPath });

      const productsButton = screen.getByTestId((
        'customer_products__element-navbar-link-products'));

      expect(productsButton).toBeInTheDocument();
    });

    it(`Have password input with 
    data-test-id="customer_products__element-navbar-link-orders"`, () => {
      renderWithRouter(<App />, { route: customerOrdersDetailsPath });

      const ordersButton = screen
        .getByTestId(('customer_products__element-navbar-link-orders'));

      expect(ordersButton).toBeInTheDocument();
    });

    it(`Have an element with 
    data-test-id="customer_products__element-navbar-user-full-name"`, () => {
      renderWithRouter(<App />, { route: customerOrdersDetailsPath });

      const passwordInput = screen.getByTestId((
        'customer_products__element-navbar-user-full-name'));

      expect(passwordInput).toBeInTheDocument();
    });

    it(`Have a button with 
    data-test-id="customer_products__element-navbar-link-logout"`, () => {
      renderWithRouter(<App />, { route: customerOrdersDetailsPath });

      const logoutButton = screen
        .getByTestId(('customer_products__element-navbar-link-logout'));

      expect(logoutButton).toBeInTheDocument();
    });

    // it(`Click on customer_products__element-navbar-link-logout redirects the user to
    // /login`, () => {
    //   renderWithRouter(<App />, { route: customerOrdersDetailsPath });

    //   const logoutButton = screen.getByTestId('common_register__button-register');
    //   userEvent.click(logoutButton);

    //   expect(history.location.pathname).toBe('/login');
    // });

    it(`Have an element with 
    data-test-id="customer_products__checkout-bottom-value"`, () => {
      renderWithRouter(<App />, { route: customerOrdersDetailsPath });

      const passwordInput = screen.getByTestId((
        'customer_products__checkout-bottom-value'));

      expect(passwordInput).toBeInTheDocument();
    });
  });
});
