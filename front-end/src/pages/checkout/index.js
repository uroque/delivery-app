import React from 'react';
import NavBar from '../../components/navBar';
import Orders from '../../components/CartOrders';
import Address from '../../components/address';

function Checkout() {
  return (
    <>
      <NavBar />
      <Orders />
      <Address />
    </>
  );
}

export default Checkout;
