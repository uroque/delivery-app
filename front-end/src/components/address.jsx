import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
 
import checkoutContext from '../context/checkoutContext/context';

function Address() {
  const [users, setUsers] = useState([]);
  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  const { total, orders } = useContext(checkoutContext);

  const userData = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();
  useEffect(() => {
    const request = async () => {
      const response = await fetch('http://localhost:3001/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setUsers(data.filter((user) => user.role === 'seller'));
      setSeller(data.filter((user) => user.role === 'seller')[0]?.id);
    };
    request();
  }, []);

  const handleForm = async (event) => {
    event.preventDefault();
    const request = await fetch('http://localhost:3001/customer/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `${userData.token}`,
      },
      mode: 'cors',
      body: JSON.stringify({
        seller,
        total,
        address,
        number,
        orders,
      }),
    });
    const data = await request.json();
    console.log(data);
    navigate(`/customer/orders/${data[0].saleId}`);
  };

  return (
    <div>
      P. Vendedora responsável:
      <select
        data-testid="customer_checkout__select-seller"
        id="select-name-seller"
        onChange={ (event) => { setSeller(event.target.value); } }
      >
        {users.map((user, index) => (
          <option key={ index } value={ user.id }>{user.name}</option>
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
        type="submit"
        data-testid="customer_checkout__button-submit-order"
        onClick={ handleForm }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}

export default Address;
