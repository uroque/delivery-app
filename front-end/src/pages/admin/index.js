import React, { useEffect, useState, useContext } from 'react';
import AdminNavBar from '../../components/adminNavBar';
import registerContext from '../../context/registerContext/context';

function Manager() {
  const { name, email, password, setName, setEmail,
    setPassword } = useContext(registerContext);
  const [userlist, setUserList] = useState([]);
  const [role, setRole] = useState('seller');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isEmailInValid, setIsEmailInValid] = useState(false);

  const userData = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    const validateCredentials = () => {
      const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
      const MIN_PASSWORD_LEN = 5;
      const MIN_NAME_LEN = 12;
      if (emailRegex.test(email)
      && password.length > MIN_PASSWORD_LEN
      && name.length >= MIN_NAME_LEN) {
        setIsEmailInValid(false);
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    validateCredentials();
  }, [email, name, password]);

  useEffect(() => {
    async function getAllProducts() {
      const request = await fetch('http://localhost:3001/admin/users', {
        method: 'GET',
        headers: {
          authorization: `${userData.token}`,
        },
      });
      const response = await request.json();
      setUserList(response);
    }
    getAllProducts();
  }, [userlist, setUserList, userData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const request = await fetch('http://localhost:3001/admin/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `${userData.token}`,
      },
      body: JSON.stringify({ name, email, password, role }),
    });
    const response = await request.json();

    if (response.message === 'O usuário já existe') {
      return setIsEmailInValid(true);
    }
  };

  return (
    <>
      <AdminNavBar />
      <p>Cadastrar novo usuário</p>
      <label htmlFor="name-input">
        <input
          data-testid="admin_manage__input-name"
          type="text"
          name="name"
          placeholder="Nome e Sobrenome"
          value={ name }
          onChange={ (event) => { setName(event.target.value); } }
        />
      </label>
      <label htmlFor="email-input">
        <input
          data-testid="admin_manage__input-email"
          type="text"
          name="email"
          placeholder="Email"
          value={ email }
          onChange={ (event) => { setEmail(event.target.value); } }
        />
      </label>
      <label htmlFor="password-input">
        <input
          data-testid="admin_manage__input-password"
          type="password"
          name="password"
          placeholder="Senha"
          value={ password }
          onChange={ (event) => { setPassword(event.target.value); } }
        />
      </label>
      <select
        data-testid="admin_manage__select-role"
        onChange={ (event) => { setRole(event.target.value); } }
      >
        <option value="seller">Vendedor</option>
        <option value="administrator">Admnistrador</option>
        <option value="customer">Cliente</option>
      </select>

      {
        isEmailInValid
        && (
          <p
            data-testid="admin_manage__element-invalid-register"
          >
            O usuário já existe!

          </p>
        )
      }

      <button
        type="button"
        data-testid="admin_manage__button-register"
        onClick={ handleSubmit }
        disabled={ isDisabled }
      >
        Cadastrar
      </button>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {userlist.map((user, index) => (
            <tr key={ index }>
              <td
                data-testid={ `admin_manage__element-user-table-item-number-${index}` }
              >
                {index}
              </td>
              <td data-testid={ `admin_manage__element-user-table-name-${index} ` }>
                {user.name}
              </td>
              <td data-testid={ `admin_manage__element-user-table-email-${index}` }>
                {user.email}
              </td>
              <td data-testid={ `admin_manage__element-user-table-role-${index}` }>
                {user.role}
              </td>
              <td data-testid={ `admin_manage__element-user-table-remove-${index}` }>
                <button
                  type="button"
                >
                  Excluir

                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    </>
  );
}

export default Manager;
