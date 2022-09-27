import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

function Address() {
  const [users, setUsers] = useState([]);
  const [seller, setSeller] = useState();
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  // const navigate = useNavigate();
  useEffect(() => {
    const request = async () => {
      const response = await fetch('http://localhost:3001/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setUsers(data.filter((user) => user.role === 'seller').map((user) => user.name));
    };
    request();
  }, []);

  // const handleForm = () => {
  //   navigate('/customer/orders/<id>');
  // };

  return (
    <div>
      P. Vendedora responsável:
      <select
        data-testid="customer_checkout__select-seller"
        id="select-name-seller"
        onChange={ (event) => { setSeller(event.target.value); } }
      >
        {users.map((user, index) => (
          <option key={ index } value={ user }>{user}</option>
        ))}
      </select>
      Endereço:
      <input
        data-testid="customer_checkout__input-address"
        type="text"
        id="input-address"
        value={ address }
        onChange={ (event) => { setAddress(event.target.value); } }
      />
      Número
      <input
        data-testid="customer_checkout__input-address-number"
        type="number"
        id="input-address"
        value={ number }
        onChange={ (event) => { setNumber(event.target.value); } }
      />
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ () => ({
          seller,
        }) }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}

export default Address;
