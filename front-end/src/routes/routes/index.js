import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Products from '../../pages/products';
import Login from '../../pages/login';
import Register from '../../pages/register';
import Checkout from '../../pages/checkout';
import Manager from '../../pages/admin/index';
import Orders from '../../pages/orders';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" replace /> } />
        <Route path="/login" exact element={ <Login /> } />
        <Route path="/register" exact element={ <Register /> } />
        <Route path="/customer/products" exact element={ <Products /> } />
        <Route path="/customer/checkout" exact element={ <Checkout /> } />
        <Route path="/admin/manage" exact element={ <Manager /> } />
        <Route path="/customer/orders" exact element={ <Orders /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
