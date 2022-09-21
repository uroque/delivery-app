import React from 'react';
import LoginProvider from './context/loginContext/provider';
import AppRoutes from './routes/routes';

function App() {
  return (
    <LoginProvider>
      <AppRoutes />
    </LoginProvider>
  );
}

export default App;
