import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../../utils/renderWithRouter';
import App from '../../../App';

const customerCheckoutPath = '/costumer/checkout';

describe('Customer Order page', () => {
  describe('Navigation bar', () => {
    it(`Have a button with 
    data-test-id="customer_products__element-navbar-link-products"`, () => {
      renderWithRouter(<App />, { route: 'customerCheckoutPath' });

      const productsButton = screen.getByTestId((
        'customer_products__element-navbar-link-products'));

      expect(productsButton).toBeInTheDocument();
    });

    it(`Have password input with 
    data-test-id="customer_products__element-navbar-link-orders"`, () => {
      renderWithRouter(<App />, { route: 'customerCheckoutPath' });

      const ordersButton = screen
        .getByTestId(('customer_products__element-navbar-link-orders'));

      expect(ordersButton).toBeInTheDocument();
    });

    it(`Have an element with 
    data-test-id="customer_products__element-navbar-user-full-name"`, () => {
      renderWithRouter(<App />, { route: customerCheckoutPath });

      const passwordInput = screen.getByTestId((
        'customer_products__element-navbar-user-full-name'));

      expect(passwordInput).toBeInTheDocument();
    });

    it(`Have a button with 
    data-test-id="customer_products__element-navbar-link-logout"`, () => {
      renderWithRouter(<App />, { route: customerCheckoutPath });

      const logoutButton = screen
        .getByTestId(('customer_products__element-navbar-link-logout'));

      expect(logoutButton).toBeInTheDocument();
    });

    // it(`Click on customer_products__element-navbar-link-logout redirects the user to
    // /login`, () => {
    //   renderWithRouter(<App />, { route: customerCheckoutPath });

    //   const logoutButton = getByTestId('common_register__button-register');
    //   userEvent.click(logoutButton);

    //   expect(history.location.pathname).toBe('/login');
    // });

    it(`Have an element with 
    data-test-id="customer_products__checkout-bottom-value"`, () => {
      renderWithRouter(<App />, { route: customerCheckoutPath });

      const bottomValue = screen.getByTestId((
        'customer_products__checkout-bottom-value'));

      expect(bottomValue).toBeInTheDocument();
    });
  });

  describe('Details and delivery address', () => {
    it('Have a select input with data-test-id="customer_checkout__select-seller"', () => {
      renderWithRouter(<App />, { route: customerCheckoutPath });

      const sellerInput = screen.getByTestId('customer_checkout__select-seller');

      expect(sellerInput).toBeInTheDocument();
    });

    it('Have a text input with data-test-id="customer_checkout__input-address"', () => {
      renderWithRouter(<App />, { route: customerCheckoutPath });

      const addressInput = screen.getByTestId('customer_checkout__input-address');

      expect(addressInput).toBeInTheDocument();
    });

    it(`Have a text input with 
    data-test-id="customer_checkout__input-address-number"`, () => {
      renderWithRouter(<App />, { route: customerCheckoutPath });

      const addressNumberInput = screen
        .getByTestId('customer_checkout__input-address-number');

      expect(addressNumberInput).toBeInTheDocument();
    });
  });

  describre('Submit Order button', () => {
    it('Have a button with data-test-id="customer_checkout__button-submit-order"', () => {
      renderWithRouter(<App />, { route: customerCheckoutPath });

      const submitOrderButton = screen
        .getByTestId('customer_checkout__button-submit-order');

      expect(submitOrderButton).toBeInTheDocument();
    });
  });
});
