import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../utils/renderWithRouter';
import App from '../../App';

const loginRegisterButton = 'common_login__button-register';

const EMAIL = 'email@email.com';
const PASSWORD = '1234567';

describe('Login page', () => {
  it('Have e-mail input with data-test-id="common_login__input-email"', async () => {
    renderWithRouter(<App />);

    const mailInput = screen.getByTestId(('common_login__input-email'));

    expect(mailInput).toBeInTheDocument();
  });

  it('Have password input with data-test-id="common_login__input-password"', () => {
    renderWithRouter(<App />);

    const passwordInput = screen.getByTestId(('common_login__input-password'));

    expect(passwordInput).toBeInTheDocument();
  });

  it('Have a disabled button with data-test-id="common_login__button-login"', () => {
    renderWithRouter(<App />);

    const loginButton = screen.getByTestId(('common_login__button-login'));

    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toBeDisabled();
  });

  it('After typing email and password the login button will be enabled"', () => {
    renderWithRouter(<App />);

    const mailInput = screen.getByTestId(('common_login__input-email'));
    const passwordInput = screen.getByTestId(('common_login__input-password'));
    const loginButton = screen.getByTestId(('common_login__button-login'));

    userEvent.type(mailInput, EMAIL);
    userEvent.type(passwordInput, PASSWORD);
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).not.toBeDisabled();
  });

  // it(`Click on common_login__button-register redirects the user to
  // /customer/products`, () => {
  //   renderWithRouter(<App />);

  //   const registerButton = screen.getByTestId(loginRegisterButton);
  //   userEvent.click(registerButton);

  //   expect(history.location.pathname).toBe('/customer/products');
  // });

  it('Have a button with data-test-id="common_login__button-register"', () => {
    renderWithRouter(<App />);

    const registerButton = screen.getByTestId((loginRegisterButton));

    expect(registerButton).toBeInTheDocument();
  });

  // it('Click on common_login__button-register redirects the user to /register', () => {
  //   const { getByTestId, history } = renderWithRouter(
  //     <App />,
  //   );

  //   history.push('/login');
  //   const registerButton = getByTestId('loginRegisterButton');
  //   fireEvent.click(registerButton);

  //   expect(history.location.pathname).toBe('/register');
  // });

  // it(`Have a hidden element with
  // data-test-id="common_login__element-invalid-email"`, () => {
  //   renderWithRouter(<App />);

  //   expect(screen.getByTestId(('common_login__element-invalid-email')))
  //     .not.toBeInTheDocument();
  // });
});
