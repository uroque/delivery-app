import React from 'react';
import LoginProvider from './context/loginContext/provider';
import ProductsProvider from './context/productsContext/provider'
import AppRoutes from './routes/routes';

function App() {
  return (
    <LoginProvider>
      <ProductsProvider >
      <AppRoutes />
      </ProductsProvider>
    </LoginProvider>
  );
}

export default App;
