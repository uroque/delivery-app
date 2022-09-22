import React from 'react';
import propTypes from 'prop-types';

import ProductsContext from './context';

function ProductsProvider({ children }) {
  return (
    <ProductsContext.Provider>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: propTypes.node,
}.isRequired;

export default ProductsProvider;
