import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from '../pages/Loading/Loading';
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import Join from '../pages/Join/Join';
import ProfileSetting from '../pages/Join/ProfileSetting';
import Login from '../pages/Login/Login';
import ProfileEdit from '../pages/Profile/ProfileEdit';
import MyProfile from '../pages/Profile/MyProfile';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loading />} />
        <Route path='/home' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/join/profile' element={<ProfileSetting />} />
        <Route path='/profile/edit' element={<ProfileEdit />} />
        <Route path='/profile' element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
