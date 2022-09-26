import React, { useContext, useEffect } from 'react';
import ProductsContext from '../context/productsContext/context';

function Card() {
  const {
    productList,
    setProducts,
    setProductsCart,
    productsCart = [],
  } = useContext(ProductsContext);

  function addProducToCart(id) {
    const copyProductsCart = [...productsCart];
    const item = copyProductsCart.find((product) => product.id === id);
    const { price, name } = productList[id - 1];
    const unitValue = Number(price);
    const subTotal = Number(price);
    if (!item) {
      copyProductsCart.push({ id, name, qtd: 1, unitValue, subTotal });
      console.log(copyProductsCart);
    } else {
      item.qtd += 1;
      item.subTotal += item.unitValue;
      console.log(copyProductsCart);
    }

    setProductsCart(copyProductsCart);
  }

  function removeProductToCart(id) {
    const copyProductsCart = [...productsCart];
    const item = copyProductsCart.find((product) => product.id === id);
    const { price } = productList[id - 1];
    const unitValue = Number(price);
    if (item && item.qtd > 1) {
      item.qtd -= 1;
      item.subTotal -= unitValue;
      setProductsCart(copyProductsCart);
      console.log(copyProductsCart);
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product.id !== id,
      );
      setProductsCart(arrayFiltered);
    }
  }

  function inputUserValue(event, id) {
    const copyProductsCart = [...productsCart];
    const item = copyProductsCart.find((product) => product.id === id);
    const { price, name } = productList[id - 1];
    const unitValue = Number(price);
    const inputValue = Math.max(Number(event.target.value), 0);

    if (!item) {
      copyProductsCart.push({
        id,
        name,
        qtd: inputValue,
        unitValue,
        subTotal: Number((unitValue * inputValue).toFixed(2)),
      });
      setProductsCart(copyProductsCart);
      console.log(copyProductsCart);
    } else if (item.qtd >= 1) {
      item.qtd = inputValue;
      item.subTotal = Number((unitValue * item.qtd).toFixed(2));
      setProductsCart(copyProductsCart);
      console.log(copyProductsCart);
    } else if (event.target.value === 0) {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product.id !== id,
      );
      setProductsCart(arrayFiltered);
      console.log(productsCart);
    }
  }

  useEffect(() => {
    async function getAllProducts() {
      const request = await fetch('http://localhost:3001/customer/products', {
        method: 'GET',
      });
      const response = await request.json();
      setProducts(response);
    }
    getAllProducts();
  }, [productList, setProducts]);

  return (
    <>
      { productList.map((item) => (
        <div key={ item.id }>
          <h3 data-testid={ `customer_products__element-card-price-${item.id}` }>
            {item.price.replace('.', ',')}
          </h3>
          <img
            src={ item.urlImage }
            alt={ item.name }
            data-testid={ `customer_products__img-card-bg-image-${item.id}` }
          />
          <p data-testid={ `customer_products__element-card-title-${item.id}` }>
            {item.name}
          </p>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${item.id}` }
            onClick={ () => removeProductToCart(item.id) }
            value="-"
          >
            -
          </button>

          <input
            data-testid={ `customer_products__input-card-quantity-${item.id}` }
            type="number"
            value={ productsCart.find((product) => product.id === item.id)?.qtd
              ? productsCart.find((product) => product.id === item.id)?.qtd
              : 0 }
            onChange={ (event) => inputUserValue(event, item.id) }
          />

          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${item.id}` }
            onClick={ () => addProducToCart(item.id) }
            value="+"
          >
            +
          </button>
        </div>
      )) }
    </>
  );
}

export default Card;
