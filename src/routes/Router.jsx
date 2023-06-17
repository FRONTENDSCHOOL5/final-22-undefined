import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from '../pages/Loading/Loading';
import Home from '../pages/Home/Home';
import Join from '../pages/Join/Join';
import ProfileSetting from '../pages/Join/ProfileSetting';
import Login from '../pages/Login/Login';
import YourProfileFeed from './../pages/Profile/YourProfileFeed';
import MyProfileFeed from './../pages/Profile/MyProfileFeed';
import ProfileEdit from '../pages/Profile/ProfileEdit';
import MyProfile from '../pages/Profile/MyProfile';
import YourProfile from '../pages/Profile/YourProfile';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loading />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/join/profile' element={<ProfileSetting />} />
        <Route path='/yourProfile' element={<YourProfileFeed />} />
        <Route path='/myProfile' element={<MyProfileFeed />} />
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/profile/:accountname' element={<YourProfile />} />
        <Route path='/profile/edit' element={<ProfileEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
