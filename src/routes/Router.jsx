import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Join from '../pages/Join/Join';
import ProfileSetting from '../pages/Join/ProfileSetting';
import Home from '../pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/join/profile" element={<ProfileSetting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
