import React, { useState, useMemo } from 'react';
import propTypes from 'prop-types';

import loginContext from './context';

function LoginProvider({ children }) {
  const [userName, setUserName] = useState([]);
  const [userPassword, setUserPassword] = useState([]);
  const [userEmail, setUserEmail] = useState([]);

  const memo = useMemo(
    () => ({
      userName,
      userPassword,
      userEmail,
      setUserName,
      setUserPassword,
      setUserEmail,
    }),
    [userEmail, userName, userPassword],
  );

  return (
    <loginContext.Provider value={ memo }>
      {children}
    </loginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: propTypes.node,
}.isRequired;

export default LoginProvider;
