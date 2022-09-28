import React, { useState, useMemo } from 'react';
import propTypes from 'prop-types';

import checkoutContext from './context';

function CheckoutProvider({ children }) {
  const [total, setTotal] = useState();
  const [orders, setOrders] = useState([]);

  const memo = useMemo(
    () => ({
      total,
      orders,
      setTotal,
      setOrders,
    }),
    [orders, total],
  );

  return (
    <checkoutContext.Provider value={ memo }>
      {children}
    </checkoutContext.Provider>
  );
}

CheckoutProvider.propTypes = {
  children: propTypes.node,
}.isRequired;

export default CheckoutProvider;
