import React, { useState, useMemo } from 'react';
import propTypes from 'prop-types';

import ProductsContext from './context';

function ProductsProvider({ children }) {
  const [productList, setProducts] = useState([]);

  const memo = useMemo(
    () => ({
      productList,
      setProducts,
    }),
    [productList, setProducts],
  );

  return (
    <ProductsContext.Provider value={ memo }>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: propTypes.node,
}.isRequired;

export default ProductsProvider;
