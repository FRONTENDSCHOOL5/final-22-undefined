import React, { useContext } from 'react';
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
import AddProduct from '../pages/ProductPage/AddProduct';
import FollowList from '../pages/FollowListPage/FollowList';
import PostUpload from '../pages/PostPage/PostUpload';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import EditProduct from './../pages/ProductPage/EditProduct';
<<<<<<< HEAD
import { AuthContextStore } from '../context/AuthContext';
import AuthRoute from './AuthRoute';
import NonAuthRoute from './NonAuthRoute';
=======
import PostDetail from '../pages/PostPage/PostDetail';
>>>>>>> 4082c574f9e9a668021eeabdac6b4f0339a5db5f

const Router = () => {
  const { userToken } = useContext(AuthContextStore);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NonAuthRoute authenticated={userToken} />}>
          <Route path='/' element={<Loading />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join' element={<Join />} />
          <Route path='/join/profile' element={<ProfileSetting />} />
        </Route>
        <Route element={<AuthRoute authenticated={userToken} />}>
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/chat' element={<ChatLists />} />
          <Route path='/chat/room' element={<ChatRoom />} />
          <Route path='/post' element={<PostUpload />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/profile/:accountname' element={<ProfilePage />} />
          <Route path='/profile/edit' element={<ProfileEdit />} />
          <Route path='/product' element={<AddProduct />} />
          <Route path='/product/edit' element={<EditProduct />} />
          <Route path='/follow/:accountname/:type' element={<FollowList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
