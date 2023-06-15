import React, { useState } from 'react';
import styled from 'styled-components';
import backButtonImg from './../../assets/icon/icon-arrow-left.png';
import ModalButtonImg from './../../assets/icon/icon-more-vertical.png';
import { useNavigate } from 'react-router-dom';

export const Header = styled.div`
  /* position: relative;
  top: 0;
  left: 0; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 390px;
  height: 48px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
`;

export const ButtonIcon = styled.button`
  width: 22px;
  height: 22px;
  margin: 0 12px;
`;

const FeedHeader = () => {
  const navigate = useNavigate;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const backHandle = (e) => {
    e.preventDefault();
    navigate(-1); // 이전 페이지 이동
  };

  const ModalHandleOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <Header>
      <ButtonIcon onClick={backHandle}>
        <img src={backButtonImg} alt='뒤로가기 버튼' />
      </ButtonIcon>
      <ButtonIcon onClick={ModalHandleOpen}>
        <img src={ModalButtonImg} alt='뒤로가기 버튼' />
      </ButtonIcon>
      {isModalOpen && (
        <div>
          <ul>
            <li>
              <button>설정 및 개인정보</button>
            </li>
            <li>
              <button>로그아웃</button>
            </li>
          </ul>
        </div>
      )}
    </Header>
  );
};

export default FeedHeader;
