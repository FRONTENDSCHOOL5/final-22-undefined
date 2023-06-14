import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Join from '../pages/Join/Join';
import Profile from '../pages/Join/Profile';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/join" element={<Join />} />
        <Route path="/join/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
