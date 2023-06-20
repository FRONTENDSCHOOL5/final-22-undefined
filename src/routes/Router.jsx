import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from '../pages/LoadingPage/Loading';
import Home from '../pages/HomePage/Home';
import Search from '../pages/SearchPage/Search';
import Join from '../pages/JoinPage/Join';
import ChatLists from '../pages/ChatPage/ChatLists';
import ChatRoom from '../pages/ChatPage/ChatRoom';
import ProfileSetting from '../pages/JoinPage/ProfileSetting';
import Login from '../pages/LoginPage/Login';
import ProfileEdit from '../pages/ProfilePage/ProfileEdit';
<<<<<<< HEAD
import MyProfile from '../pages/ProfilePage/MyProfile';
import YourProfile from '../pages/ProfilePage/YourProfile';
=======
import AddProduct from '../pages/ProductPage/AddProduct';
import FollowList from '../pages/FollowListPage/FollowList';
import PostUpload from '../pages/PostPage/PostUpload';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import EditProduct from './../pages/ProductPage/EditProduct';
>>>>>>> 8747cf8 (fix: product/edit 경로 추가)

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loading />} />
        <Route path='/home' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/chat' element={<ChatLists />} />
        <Route path='/chat/room' element={<ChatRoom />} />
        <Route path='/join/profile' element={<ProfileSetting />} />
        <Route path='/post' element={<PostUpload />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/profile/:accountname' element={<ProfilePage />} />
        <Route path='/profile/edit' element={<ProfileEdit />} />
<<<<<<< HEAD
=======
        <Route path='/product' element={<AddProduct />} />
        <Route path='/product/edit' element={<EditProduct />} />
        <Route path='/follow/:accountname/:type' element={<FollowList />} />
>>>>>>> 8747cf8 (fix: product/edit 경로 추가)
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
