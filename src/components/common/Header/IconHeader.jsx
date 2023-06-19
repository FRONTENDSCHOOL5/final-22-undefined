import React, { useState } from 'react';
import ModalButtonImg from '../../../assets/icon/icon-more-vertical.png';
import PostModal from './../Modal/PostModal';
import ProductModal from '../Modal/ProductModal';
import styled from 'styled-components';

const IconHeader = () => {
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
      {isModalOpen && <PostModal onClose={closeModal} postId={'64901465b2cb2056633c6795'} />}
      {/* {isModalOpen && type === 'product' && <ProductModal onClose={closeModal} />} */}
      {/* product 부분 댓글로 재사용가능하지 않을까? Comment!! */}
    </>
  );
};

export default IconHeader;

const ButtonIcon = styled.button`
  width: 18px;
  height: 18px;
`;
