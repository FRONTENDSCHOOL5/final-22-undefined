import React, { useState } from 'react';
import ModalButtonImg from '../../../assets/icon/icon-more-vertical.png';
import PostModal from './../Modal/PostModal';
import ProductModal from '../Modal/ProductModal';
import styled from 'styled-components';

const IconHeader = ({ type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ButtonIcon onClick={openModal}>
        <img src={ModalButtonImg} alt='숨겨진 모달창 나타내기' />
      </ButtonIcon>
      {isModalOpen && type === 'post' && <PostModal onClose={closeModal} />}
      {isModalOpen && type === 'product' && <ProductModal onClose={closeModal} />}
    </>
  );
};

export default IconHeader;

const ButtonIcon = styled.button`
  width: 18px;
  height: 18px;
`;
