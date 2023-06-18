import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from '../pages/LoadingPage/Loading';
import Home from '../pages/HomePage/Home';
import Search from '../pages/SearchPage/Search';
import Join from '../pages/JoinPage/Join';
import ProfileSetting from '../pages/JoinPage/ProfileSetting';
import Login from '../pages/LoginPage/Login';
import ProfileEdit from '../pages/ProfilePage/ProfileEdit';
import MyProfile from '../pages/ProfilePage/MyProfile';
import YourProfile from '../pages/ProfilePage/YourProfile';
import AddProduct from '../pages/ProductPage/AddProduct';

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
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/profile/:accountname' element={<YourProfile />} />
        <Route path='/profile/edit' element={<ProfileEdit />} />
        <Route path='/product' element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
