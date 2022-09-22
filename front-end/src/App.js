import React from 'react';
import LoginProvider from './context/loginContext/provider';
import RegisterProvider from './context/registerContext/provider';
import AppRoutes from './routes/routes';

function App() {
  return (
    <LoginProvider>
      <RegisterProvider>
        <AppRoutes />
      </RegisterProvider>
    </LoginProvider>
  );
}

export default App;
