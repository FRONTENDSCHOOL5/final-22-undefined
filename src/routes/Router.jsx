import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "../pages/Loading/Loading";
import Login from "../pages/Login/Login";
import Join from "../pages/Join/Join";
import Profile from "../pages/Join/Profile";
import Home from "../pages/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/join/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
