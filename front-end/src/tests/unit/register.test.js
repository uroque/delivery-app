import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../../../pages/RegisterPage';


describe('Login page', () => {
  it('Have text input with data-test-id="common_register__input-name"', () => {
    const { getByTestId, history } = renderWithRouter(<App />);

    history.push('/register');
    const nameInput = getByTestId(('common_register__input-name'));

    expect(nameInput).toBeInTheDocument();
  });

  it('Have password input with data-test-id="common_register__input-email"', () => {
    const { getByTestId, history } = renderWithRouter(<App />);

    history.push('/register');
    const mailInput = getByTestId(('common_register__input-email'));

    expect(mailInput).toBeInTheDocument();
  });

  it('Have a button with data-test-id="common_register__input-password"', () => {
    const { getByTestId, history } = renderWithRouter(<App />);

    history.push('/register');
    const passwordInput = getByTestId(('common_register__input-password'));

    expect(passwordInput).toBeInTheDocument();
  });

  it('Have a button with data-test-id="common_register__button-register"', () => {
    const { getByTestId, history } = renderWithRouter(<App />);

    history.push('/register');
    const registerButton = getByTestId(('common_register__button-register'));

    expect(registerButton).toBeInTheDocument();
  });

  it('Click on common_register__button-register redirects the user to /customer/products', () => {
    const { getByTestId, history } = renderWithRouter(
      <App />,
    );

    history.push('/register');
    const registerButton = getByTestId('common_register__button-register');
    fireEvent.click(registerButton);

    expect(history.location.pathname).toBe('/customer/products');
  });

  it('Have a hidden element with data-test-id="common_register__element-invalid_register"', () => {
    const { getByTestId, history } = renderWithRouter(<App />);

    history.push('/register');
    const invalidRegister = getByTestId(('common_register__element-invalid_register'));

    expect(invalidRegister).not.toBeInTheDocument();
  });
})
