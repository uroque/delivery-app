import React, { useState } from 'react';
import propTypes from 'prop-types';
import registerContext from './context';

function RegisterProvider({ children }) {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    senha: '',
  });

  const context = useMemo(() => ({
    register,
    setRegister,
  }), [register, setRegister]);

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
