import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../utils/renderWithRouter';
import App from '../../App';

describe('Login page', () => {
  it('Have e-mail input with data-test-id="common_login__input-email"', () => {
    const { getByTestId, history } = renderWithRouter(<App />);

    history.push('/login');
    const mailInput = getByTestId(('common_login__input-email'));

    expect(mailInput).toBeInTheDocument();
  });

  it('Have password input with data-test-id="common_login__input-password"', () => {
    const { getByTestId, history } = renderWithRouter(<App />);

    history.push('/login');
    const passwordInput = getByTestId(('common_login__input-password'));

    expect(passwordInput).toBeInTheDocument();
  });

  it('Have a button with data-test-id="common_login__button-login"', () => {
    const { getByTestId, history } = renderWithRouter(<App />);

    history.push('/login');
    const loginButton = getByTestId(('common_login__button-login'));

    expect(loginButton).toBeInTheDocument();
  });

  it('Click on common_login__button-register redirects the user to /customer/products', () => {
    const { getByTestId, history } = renderWithRouter(
      <App />,
    );

    history.push('/login');
    const registerButton = getByTestId('common_login__button-register');
    fireEvent.click(registerButton);

    expect(history.location.pathname).toBe('/customer/products');
  });

  it('Have a button with data-test-id="common_login__button-register"', () => {
    const { getByTestId, history } = renderWithRouter(<App />);

    history.push('/login');
    const registerButton = getByTestId(('common_login__button-register'));

    expect(registerButton).toBeInTheDocument();
  });

  it('Click on common_login__button-register redirects the user to /register', () => {
      const { getByTestId, history } = renderWithRouter(
        <App />,
      );

      history.push('/login');
      const registerButton = getByTestId('common_login__button-register');
      fireEvent.click(registerButton);

      expect(history.location.pathname).toBe('/register');
    });

  it('Have a hidden element with data-test-id="common_login__element-invalid-email"', () => {
    const { getByTestId, history } = renderWithRouter(<App />);

    history.push('/login');
    const invalidEmail = getByTestId(('common_login__element-invalid-email'));

    expect(invalidEmail).not.toBeInTheDocument();
  });
})
