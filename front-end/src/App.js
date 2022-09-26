import React from 'react';
import LoginProvider from './context/loginContext/provider';
import RegisterProvider from './context/registerContext/provider';
import ProductsProvider from './context/productsContext/provider';
import AppRoutes from './routes/routes';

function App() {
  return (
    <LoginProvider>
      <RegisterProvider>
        <ProductsProvider>
          <AppRoutes />
        </ProductsProvider>
      </RegisterProvider>
    </LoginProvider>
  );
}

export default App;
