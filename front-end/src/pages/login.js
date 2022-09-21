import React, { useContext, useState, useEffect } from 'react';
import loginContext from '../context/loginContext/context';

function Login() {
  const { userEmail, userPassword, setUserPassword,
    setUserEmail } = useContext(loginContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isEmailInValid, setIsEmailInValid] = useState(false);

  // const handleInput = ({ target: { name, value }})

  useEffect(() => {
    const validateCredentials = () => {
      const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
      const MIN_PASSWORD_LEN = 5;
      if (emailRegex.test(userEmail) && userPassword.length > MIN_PASSWORD_LEN) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    validateCredentials();
  }, [userEmail, userPassword]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const request = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail, password: userPassword }),
      });
      const response = await request.json();

      if (response.message === 'Not found') {
        return setIsEmailInValid(true);
      }
      localStorage.setItem('user', JSON.stringify(response));
      setIsEmailInValid(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form>
      <label htmlFor="email-input">
        <input
          data-testid="common_login__input-email"
          type="text"
          name="email"
          placeholder="Email"
          value={ userEmail }
          onChange={ (event) => { setUserEmail(event.target.value); } }
        />
      </label>

      <label htmlFor="password-input">
        <input
          data-testid="common_login__input-password"
          type="password"
          name="password"
          placeholder="Senha"
          value={ userPassword }
          onChange={ (event) => { setUserPassword(event.target.value); } }
        />
      </label>
      { isEmailInValid
      && <p data-testid="common_login__element-invalid-email">Dados inválidos</p> }

      <button
        data-testid="common_login__button-login"
        type="submit"
        disabled={ isDisabled }
        onClick={ handleSubmit }
      >
        Login
      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
        onClick={ () => {} }
      >
        Ainda não tenho conta
      </button>
    </form>
  );
}

export default Login;
