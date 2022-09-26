import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Products from '../../pages/products';
import Login from '../../pages/login';
import Register from '../../pages/register';
import Checkout from '../../pages/checkout';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" replace /> } />
        <Route path="/login" exact element={ <Login /> } />
        <Route path="/register" exact element={ <Register /> } />
        <Route path="/customer/products" exact element={ <Products /> } />
        <Route path="/customer/checkout" exact element={ <Checkout /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
