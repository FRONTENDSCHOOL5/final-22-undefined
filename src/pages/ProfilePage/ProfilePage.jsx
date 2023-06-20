import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import ProfileDisplay from '../../components/Profile/ProfileDisplay';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import SellingProduct from '../../components/Product/SellingProduct';
import PostSection from '../../components/Post/PostSection';
import { useParams } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';
import productList from '../../components/Product/dummyProducts';
import FeedHeader from '../../components/common/Header/FeedHeader';
import ProductModal from '../../components/common/Modal/ProductModal';
import PostModal from '../../components/common/Modal/PostModal';

const Section = styled.section``;

const Title = styled.h1``;

const Main = styled.main`
  margin-top: 48px;
  background-color: ${({ theme }) => theme.colors.bgGray};
`;

const ProfilePage = () => {
  const { accountname } = useParams();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const [postId, setPostId] = useState(''); // postId 상태 추가
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 506c3a9 (style: 코드 오류 수정)
  const [productId, setProductId] = useState(''); // productId 상태 추가
=======
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
=======
  const [productId, setProductId] = useState(''); // productId 상태 추가
>>>>>>> 6c1e3b9 (style: 코드 오류 수정)
<<<<<<< HEAD
=======
  const [postId, setPostId] = useState(''); // postId 상태 추가
>>>>>>> 0b99f89 (style: 코드 오류 수정)
=======
  const [productId, setProductId] = useState(''); // productId 상태 추가
>>>>>>> 5b505c9 (fix: 머지 오류 충돌 해결)
=======
  const [postId, setPostId] = useState(''); // postId 상태 추가
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
  const [productId, setProductId] = useState(''); // productId 상태 추가
>>>>>>> e00e158 (style: 코드 오류 수정)
=======
  const [productId, setProductId] = useState(''); // productId 상태 추가
=======
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 506c3a9 (style: 코드 오류 수정)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModalTWo = () => {
    setIsModalOpenTwo(true);
  };

  const closeModalTwo = () => {
    setIsModalOpenTwo(false);
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 0b99f89 (style: 코드 오류 수정)
=======
>>>>>>> 699f2ea (style: 코드 오류 수정)
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)

  // 현재 프로필의 accountname
  const userId = accountname ? accountname : JSON.parse(userAccountname);
  // 현재 프로필에 해당하는 사람이 로그인된 유저랑 같은 사람인지 여부
  const isLoginUser = userId === JSON.parse(userAccountname);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        setIsLoading(false);
        const response = await fetch(`https://api.mandarin.weniv.co.kr/profile/${userId}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(userToken)}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        setUserInfo(data.profile);
        setIsLoading(true);
      } catch (err) {
        console.log(err.message);
        setIsLoading(true);
      }
    };

    getUserInfo();
  }, [userId]);

  return (
    <>
      <Title className='a11y-hidden'>{isLoginUser ? '나의 프로필 페이지' : 'OO의 프로필 페이지'}</Title>
      <FeedHeader />
      <Main>
        <ProfileDisplay userInfo={userInfo} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <SellingProduct />
<<<<<<< HEAD
        <PostSection userInfo={userInfo} />
=======
        <SellingProduct onClick={openModal} />
        {isModalOpen && <ProductModal onClose={closeModal} />}
        <PostSection onClick={openModalTWo} setPostId={setPostId} />
=======
=======
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 6ce78d2 (style: 코드 오류 수정)
=======
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 6d91338 (style: 코드 오류 수정)
=======
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 506c3a9 (style: 코드 오류 수정)
        <SellingProduct onClick={openModal} setProductId={setProductId} />
        {isModalOpen && <ProductModal onClose={closeModal} productId={productId} />}
        <PostSection userInfo={userInfo} onClick={openModalTWo} setPostId={setPostId} />
>>>>>>> e00e158 (style: 코드 오류 수정)
        {isModalOpenTwo && <PostModal onClose={closeModalTwo} postId={postId} />}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
        <SellingProduct />
        <PostSection userInfo={userInfo} />
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
=======
        <PostSection />
>>>>>>> 56553de (style: 코드 오류 수정)
=======
        <SellingProduct onClick={openModal} />
        {isModalOpen && <ProductModal onClose={closeModal} />}
=======
        <SellingProduct onClick={openModal} setProductId={setProductId} />
        {isModalOpen && <ProductModal onClose={closeModal} productId={productId} />}
>>>>>>> 9a5a8f2 (style: 코드 오류 수정)
=======
        <SellingProduct onClick={openModal} setProductId={setProductId} />
        {isModalOpen && <ProductModal onClose={closeModal} productId={productId} />}
>>>>>>> e00e158 (style: 코드 오류 수정)
=======
        <SellingProduct onClick={openModal} setProductId={setProductId} />
        {isModalOpen && <ProductModal onClose={closeModal} productId={productId} />}
>>>>>>> e00e158 (style: 코드 오류 수정)
        <PostSection userInfo={userInfo} onClick={openModalTWo} setPostId={setPostId} />
        {isModalOpenTwo && <PostModal onClose={closeModalTwo} postId={postId} />}
>>>>>>> a11ca1a (fix: 머지 오류 충돌 해결)
=======
=======
=======
>>>>>>> 6c1e3b9 (style: 코드 오류 수정)
=======
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 5b505c9 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 699f2ea (style: 코드 오류 수정)
<<<<<<< HEAD
        <SellingProduct />
<<<<<<< HEAD
        <PostSection userInfo={userInfo} />
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
        <SellingProduct onClick={openModal} />
        {isModalOpen && <ProductModal onClose={closeModal} />}
        <PostSection onClick={openModalTWo} setPostId={setPostId} />
=======
        <SellingProduct onClick={openModal} setProductId={setProductId} />
        {isModalOpen && <ProductModal onClose={closeModal} productId={productId} />}
        <PostSection userInfo={userInfo} onClick={openModalTWo} setPostId={setPostId} />
>>>>>>> e00e158 (style: 코드 오류 수정)
        {isModalOpenTwo && <PostModal onClose={closeModalTwo} postId={postId} />}
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
=======
=======
        <SellingProduct />
        <PostSection userInfo={userInfo} />
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
=======
=======
=======
        <PostSection />
>>>>>>> 56553de (style: 코드 오류 수정)
<<<<<<< HEAD
>>>>>>> 0b99f89 (style: 코드 오류 수정)
<<<<<<< HEAD
>>>>>>> 403c34a (style: 코드 오류 수정)
=======
=======
=======
        <SellingProduct onClick={openModal} />
        {isModalOpen && <ProductModal onClose={closeModal} />}
=======
        <SellingProduct onClick={openModal} setProductId={setProductId} />
        {isModalOpen && <ProductModal onClose={closeModal} productId={productId} />}
>>>>>>> 9a5a8f2 (style: 코드 오류 수정)
        <PostSection userInfo={userInfo} onClick={openModalTWo} setPostId={setPostId} />
        {isModalOpenTwo && <PostModal onClose={closeModalTwo} postId={postId} />}
>>>>>>> a11ca1a (fix: 머지 오류 충돌 해결)
>>>>>>> 5b505c9 (fix: 머지 오류 충돌 해결)
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
=======
=======
=======
>>>>>>> 6c1e3b9 (style: 코드 오류 수정)
<<<<<<< HEAD
        <SellingProduct />
        <PostSection userInfo={userInfo} />
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
        <SellingProduct onClick={openModal} />
        {isModalOpen && <ProductModal onClose={closeModal} />}
        <PostSection onClick={openModalTWo} setPostId={setPostId} />
=======
        <SellingProduct onClick={openModal} setProductId={setProductId} />
        {isModalOpen && <ProductModal onClose={closeModal} productId={productId} />}
        <PostSection userInfo={userInfo} onClick={openModalTWo} setPostId={setPostId} />
>>>>>>> e00e158 (style: 코드 오류 수정)
        {isModalOpenTwo && <PostModal onClose={closeModalTwo} postId={postId} />}
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
=======
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
      </Main>
      <TabMenu active={isLoginUser ? '3' : '0'} />
    </>
  );
};

export default ProfilePage;
