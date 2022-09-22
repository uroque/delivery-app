import React, { useContext, useEffect } from 'react';
import ProductsContext from '../context/productsContext/context';

function Card() {
  const { productList, setProducts } = useContext(ProductsContext);

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
          >
            -
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${item.id}` }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${item.id}` }
          >
            +
          </button>
        </div>
      )) }
    </>
  );
}

export default Card;
