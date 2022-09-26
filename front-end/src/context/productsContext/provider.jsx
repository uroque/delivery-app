import React, { useState, useMemo } from 'react';
import propTypes from 'prop-types';

import ProductsContext from './context';

function ProductsProvider({ children }) {
  const [productList, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [total, setTotal] = useState();

  const memo = useMemo(
    () => ({
      productList,
      productsCart,
      quantity,
      total,
      setQuantity,
      setProducts,
      setProductsCart,
      setTotal,
    }),
    [productList, productsCart, quantity, total],
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
