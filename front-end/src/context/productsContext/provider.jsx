import React, { useState, useMemo } from 'react';
import propTypes from 'prop-types';

import ProductsContext from './context';

function ProductsProvider({ children }) {
  const [productList, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState([]);

  function addProducToCart(id) {
    const copyProductsCart = [...productsCart];
    const item = copyProductsCart.find((product) => product.id === id);
    if (!item) {
      copyProductsCart.push({ id, qtd: 1 });
    } else {
      item.qtd += 1;
    }
    setProductsCart(copyProductsCart);
  }

  function removeProductToCart(id) {
    const copyProductsCart = [...productsCart];
    const item = copyProductsCart.find((product) => product.id === id);
    if (item && item.qtd > 1) {
      item.qtd -= 1;
      setProductsCart(copyProductsCart);
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product.id !== id,
      );
      setProductsCart(arrayFiltered);
    }
  }

  const memo = useMemo(
    () => ({
      productList,
      productsCart,
      addProducToCart,
      removeProductToCart,
      setProducts,
    }),
    [productList, productsCart, setProducts],
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
