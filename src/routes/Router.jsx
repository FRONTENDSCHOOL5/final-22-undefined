import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import { AuthContextStore } from '../context/AuthContext';
import AuthRoute from './AuthRoute';
import NonAuthRoute from './NonAuthRoute';
import PostDetail from '../pages/PostPage/PostDetail';
import Splash from '../pages/SplashPage/Splash';
import PostEdit from '../pages/PostPage/PostEdit';
import LoginEamil from '../pages/LoginPage/LoginEamil';
import Error404 from '../pages/ErrorPage/Error404';
import Map from '../pages/MapPage/Map';

const Router = () => {
  const { userToken } = useContext(AuthContextStore);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route path='/notfound' element={<Error404 />} />

        <Route element={<NonAuthRoute authenticated={userToken} />}>
          <Route path='/' element={<Splash />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login/email' element={<LoginEamil />} />
          <Route path='/join' element={<Join />} />
          <Route path='/join/profile' element={<ProfileSetting />} />
        </Route>
        <Route element={<AuthRoute authenticated={userToken} />}>
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/chat' element={<ChatLists />} />
          <Route path='/chat/room' element={<ChatRoom />} />
          <Route path='/post/upload' element={<PostUpload />} />
          <Route path='/post/edit' element={<PostEdit />} />
          <Route path='/postdetail/:post_id' element={<PostDetail />} />
          <Route path='/map' element={<Map />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/profile/:accountname' element={<ProfilePage />} />
          <Route path='/profile/edit' element={<ProfileEdit />} />
          <Route path='/product' element={<AddProduct />} />
          <Route path='/product/:productId/edit' element={<EditProduct />} />
          <Route path='/follow/:accountname/:type' element={<FollowList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
