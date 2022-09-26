import React from 'react';
import NavBar from '../../components/navBar';
import Orders from '../../components/Orders';
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
