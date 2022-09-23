import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registerContext from '../../context/registerContext/context';

function Register() {
  const { email, name, password,
    setPassword, setName, setEmail } = useContext(registerContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isEmailInValid, setIsEmailInValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const validateCredentials = () => {
      const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
      const MIN_PASSWORD_LEN = 5;
      const MIN_NAME_LEN = 12;
      if (emailRegex.test(email)
      && password.length > MIN_PASSWORD_LEN
      && name.length >= MIN_NAME_LEN) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    validateCredentials();
  }, [email, name, password]);

  const handleSubmit = async () => {
    try {
      const request = await fetch('http://localhost:3003/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const response = await request.json();
      if (response.message === 'O usuário já existe') {
        return setIsEmailInValid(true);
      }
      localStorage.setItem('user', JSON.stringify(response));
      navigate('/customer/products');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <label htmlFor="common_register__input-name">
        <input
          data-testid="common_register__input-name"
          type="text"
          name="name"
          placeholder="Nome Completo"
          value={ name }
          onChange={ (event) => { setName(event.target.value); } }
        />
      </label>

      <label htmlFor="common_register__input-email">
        <input
          data-testid="common_register__input-email"
          type="text"
          name="email"
          placeholder="Email"
          value={ email }
          onChange={ (event) => { setEmail(event.target.value); } }
        />
      </label>

      <label htmlFor="common_register__input-password">
        <input
          data-testid="common_register__input-password"
          type="password"
          name="password"
          placeholder="Senha"
          value={ password }
          onChange={ (event) => { setPassword(event.target.value); } }
        />
      </label>
      {
        isEmailInValid
        && (
          <p
            data-testid="common_register__element-invalid_register"
          >
            O usuário já existe!

          </p>
        )
      }

      <button
        data-testid="common_register__button-register"
        type="button"
        disabled={ isDisabled }
        onClick={ handleSubmit }
      >
        Cadastrar
      </button>
    </form>
  );
}

export default Register;
