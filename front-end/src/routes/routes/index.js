import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Products from '../../pages/products';
import Login from '../../pages/login';
import Register from '../../pages/register';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" replace /> } />
        <Route path="/login" exact element={ <Login /> } />
        <Route path="/customer/products" exact element={ <Products /> } />
        <Route path="/register" exact element={ <Register /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
