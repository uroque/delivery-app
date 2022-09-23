import React, { useContext, useEffect } from 'react';
import ProductsContext from '../context/productsContext/context';

function Card() {
  const {
    productList,
    setProducts,
    productsCart = [],
    addProducToCart,
    removeProductToCart,
  } = useContext(ProductsContext);

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
            {item.price}
          </h3>
          <img
            src={ item.url_image }
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
          {/* <input
            data-testid={ `customer_products__input-card-quantity-${item.id}` }
            type="number"
            value={ itensQuantity }
            onChange={ (event) => { setItensQuantity(event.target.value); } }
          /> */}
          <h3>
            {productsCart.find((product) => product.id === item.id)?.qtd
              ? productsCart.find((product) => product.id === item.id)?.qtd
              : 0}
          </h3>
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
