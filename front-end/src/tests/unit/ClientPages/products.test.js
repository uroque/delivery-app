import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../../utils/renderWithRouter';
import App from '../../../App';

const customerProductsPath = '/costumer/products';

describe('Customer Products page', () => {
  describe('Navigation bar', () => {
    it(`Have a button with 
    data-test-id="customer_products__element-navbar-link-products"`, () => {
      const { getByTestId, history } = renderWithRouter(<App />);

      history.push(customerProductsPath);
      const productsButton = getByTestId((
        'customer_products__element-navbar-link-products'));

      expect(productsButton).toBeInTheDocument();
    });

    it(`Have password input with 
    data-test-id="customer_products__element-navbar-link-orders"`, () => {
      const { getByTestId, history } = renderWithRouter(<App />);

      history.push(customerProductsPath);
      const ordersButton = getByTestId(('customer_products__element-navbar-link-orders'));

      expect(ordersButton).toBeInTheDocument();
    });

    it(`Have an element with 
    data-test-id="customer_products__element-navbar-user-full-name"`, () => {
      const { getByTestId, history } = renderWithRouter(<App />);

      history.push(customerProductsPath);
      const passwordInput = getByTestId((
        'customer_products__element-navbar-user-full-name'));

      expect(passwordInput).toBeInTheDocument();
    });

    it(`Have a button with 
    data-test-id="customer_products__element-navbar-link-logout"`, () => {
      const { getByTestId, history } = renderWithRouter(<App />);

      history.push(customerProductsPath);
      const logoutButton = getByTestId(('customer_products__element-navbar-link-logout'));

      expect(logoutButton).toBeInTheDocument();
    });

    it(`Click on customer_products__element-navbar-link-logout redirects the user to 
    /login`, () => {
      const { getByTestId, history } = renderWithRouter(
        <App />,
      );

      history.push('/costumer/products');
      const logoutButton = getByTestId('common_register__button-register');
      fireEvent.click(logoutButton);

      expect(history.location.pathname).toBe('/login');
    });

    it(`Have an element with 
    data-test-id="customer_products__checkout-bottom-value"`, () => {
      const { getByTestId, history } = renderWithRouter(<App />);

      history.push(customerProductsPath);
      const passwordInput = getByTestId((
        'customer_products__checkout-bottom-value'));

      expect(passwordInput).toBeInTheDocument();
    });
  });
});
