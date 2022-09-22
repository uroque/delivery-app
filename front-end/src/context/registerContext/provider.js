import React, { useState, useMemo } from 'react';
import propTypes from 'prop-types';
import registerContext from './context';

function RegisterProvider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = useMemo(() => ({
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
  }), [name, email, password]);

  return (
    <registerContext.Provider value={ context }>
      {children}
    </registerContext.Provider>
  );
}

RegisterProvider.propTypes = {
  children: propTypes.node,
}.isRequired;

export default RegisterProvider;
