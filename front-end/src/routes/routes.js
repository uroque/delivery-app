import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login';
import Products from '../pages/products';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" replace /> } />
        <Route path="/login" exact element={ <Login /> } />
        <Route path="/customer/products" exact element={ <Products /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
