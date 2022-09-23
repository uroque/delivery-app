import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../utils/renderWithRouter';
import App from '../../App';

describe('Register page', () => {
  it('Have text input with data-test-id="common_register__input-name"', () => {
    renderWithRouter(<App />, { route: '/register' });

    const nameInput = screen.getByTestId(('common_register__input-name'));

    expect(nameInput).toBeInTheDocument();
  });

  it('Have password input with data-test-id="common_register__input-email"', () => {
    renderWithRouter(<App />, { route: '/register' });

    const mailInput = screen.getByTestId(('common_register__input-email'));

    expect(mailInput).toBeInTheDocument();
  });

  it('Have a button with data-test-id="common_register__input-password"', () => {
    renderWithRouter(<App />, { route: '/register' });

    const passwordInput = screen.getByTestId(('common_register__input-password'));

    expect(passwordInput).toBeInTheDocument();
  });

  it('Have a button with data-test-id="common_register__button-register"', () => {
    renderWithRouter(<App />, { route: '/register' });

    const registerButton = screen.getByTestId(('common_register__button-register'));

    expect(registerButton).toBeInTheDocument();
  });

  // it(`Click on common_register__button-register redirects the user to
  // /customer/products`, () => {
  //   renderWithRouter(<App />, { route: '/register' });

  //   const registerButton = screen.getByTestId('common_register__button-register');
  //   fireEvent.click(registerButton);

  //   expect(history.location.pathname).toBe('/customer/products');
  // });

  it(`Have a hidden element with 
  data-test-id="common_register__element-invalid_register"`, () => {
    renderWithRouter(<App />, { route: '/register' });

    const invalidRegister = screen
      .getByTestId(('common_register__element-invalid_register'));

    expect(invalidRegister).not.toBeInTheDocument();
  });
});
