import React, { useEffect, useState, useContext } from 'react';
import AdminNavBar from '../../components/adminNavBar';
import registerContext from '../../context/registerContext/context';

function Manager() {
  const { name, email, password, setName, setEmail,
    setPassword } = useContext(registerContext);
  const [userlist, setUserList] = useState([]);
  const [role, setRole] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      const request = await fetch('http://localhost:3001/users', {
        method: 'GET',
      });
      const response = await request.json();
      setUserList(response);
    }
    getAllProducts();
  }, [userlist, setUserList]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const request = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, role }),
    });
    const response = await request.json();
    setUserList(response);
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

      <button
        type="button"
        data-testid="admin_manage__button-register"
        onClick={ handleSubmit }
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
          {userlist && userlist.map((user, index) => (
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
