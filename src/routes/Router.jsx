import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Join from '../pages/Join/Join';
import Profile from '../pages/Join/Profile';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/join/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

