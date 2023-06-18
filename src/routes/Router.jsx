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
import PostUpload from '../pages/PostPage/PostUpload';
import PostContent from '../components/Post/PostContent';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/post/:accountname/userpost' element={<PostContent />} />
        <Route path='/' element={<Loading />} />
        <Route path='/home' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/join/profile' element={<ProfileSetting />} />
        <Route path='/post' element={<PostUpload />} />
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/profile/:accountname' element={<YourProfile />} />
        <Route path='/profile/edit' element={<ProfileEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
