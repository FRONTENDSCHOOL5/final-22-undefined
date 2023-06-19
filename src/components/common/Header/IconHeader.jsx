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
=======
=======
>>>>>>> b9ac2bc (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
>>>>>>> 5165400 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
>>>>>>> 4859fa5 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
>>>>>>> c880721 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
>>>>>>> 39094f2 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
>>>>>>> 63147a8 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
=======
=======
>>>>>>> 802b2d3 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
>>>>>>> 72b2164 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
      {isModalOpen && <PostModal onClose={closeModal} postId={'64901465b2cb2056633c6795'} />}
      {/* {isModalOpen && type === 'product' && <ProductModal onClose={closeModal} />} */}
      {/* product 부분 댓글로 재사용가능하지 않을까? Comment!! */}
=======
=======
>>>>>>> f3c913d (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
<<<<<<< HEAD
=======
>>>>>>> faa93e5 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
>>>>>>> 9421e71 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
>>>>>>> 1849924 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
>>>>>>> 79957ee (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
>>>>>>> 802b2d3 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
<<<<<<< HEAD
=======
>>>>>>> f3c913d (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
<<<<<<< HEAD
>>>>>>> 79957ee (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
=======
>>>>>>> faa93e5 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
>>>>>>> b9ac2bc (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
>>>>>>> 5165400 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
<<<<<<< HEAD
      {isModalOpen && type === 'post' && <PostModal onClose={closeModal} />}
      {isModalOpen && type === 'product' && <ProductModal onClose={closeModal} />}
=======
      {isModalOpen && <PostModal onClose={closeModal} postId={'64901465b2cb2056633c6795'} />}
      {/* {isModalOpen && type === 'product' && <ProductModal onClose={closeModal} />} */}
      {/* product 부분 댓글로 재사용가능하지 않을까? Comment!! */}
>>>>>>> 134d3dd (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      {isModalOpen && type === 'post' && <PostModal onClose={closeModal} />}
      {isModalOpen && type === 'product' && <ProductModal onClose={closeModal} />}
>>>>>>> 4e4a45d (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
      {isModalOpen && type === 'post' && <PostModal onClose={closeModal} postId={'64901465b2cb2056633c6795'} />}
      {isModalOpen && type === 'product' && <ProductModal onClose={closeModal} />}
      {/* product 부분 댓글로 재사용가능하지 않을까? CommentModal!! */}
>>>>>>> e5c8868 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
      {isModalOpen && <PostModal onClose={closeModal} postId={'64901465b2cb2056633c6795'} />}
      {/* {isModalOpen && type === 'product' && <ProductModal onClose={closeModal} />} */}
      {/* product 부분 댓글로 재사용가능하지 않을까? Comment!! */}
=======
<<<<<<< HEAD
      {isModalOpen && type === 'post' && <PostModal onClose={closeModal} />}
      {isModalOpen && type === 'product' && <ProductModal onClose={closeModal} />}
>>>>>>> f7caca9 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
      {isModalOpen && <PostModal onClose={closeModal} postId={'64901465b2cb2056633c6795'} />}
      {/* {isModalOpen && type === 'product' && <ProductModal onClose={closeModal} />} */}
      {/* product 부분 댓글로 재사용가능하지 않을까? Comment!! */}
>>>>>>> 134d3dd (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
<<<<<<< HEAD
=======
=======
>>>>>>> 72b2164 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
>>>>>>> 665c96c (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
>>>>>>> f7caca9 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
<<<<<<< HEAD
>>>>>>> 665c96c (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
>>>>>>> 665c96c (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
>>>>>>> 4859fa5 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
=======
>>>>>>> 802b2d3 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
      {isModalOpen && type === 'post' && <PostModal onClose={closeModal} />}
      {isModalOpen && type === 'product' && <ProductModal onClose={closeModal} />}
>>>>>>> 4e4a45d (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f3c913d (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
<<<<<<< HEAD
>>>>>>> 79957ee (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
=======
>>>>>>> f3c913d (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
>>>>>>> c880721 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
=======
      {isModalOpen && type === 'post' && <PostModal onClose={closeModal} postId={'64901465b2cb2056633c6795'} />}
      {isModalOpen && type === 'product' && <ProductModal onClose={closeModal} />}
      {/* product 부분 댓글로 재사용가능하지 않을까? CommentModal!! */}
>>>>>>> e5c8868 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
<<<<<<< HEAD
>>>>>>> faa93e5 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b9ac2bc (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
=======
>>>>>>> 39094f2 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
      {isModalOpen && <PostModal onClose={closeModal} postId={'64901465b2cb2056633c6795'} />}
      {/* {isModalOpen && type === 'product' && <ProductModal onClose={closeModal} />} */}
      {/* product 부분 댓글로 재사용가능하지 않을까? Comment!! */}
=======
<<<<<<< HEAD
      {isModalOpen && type === 'post' && <PostModal onClose={closeModal} />}
      {isModalOpen && type === 'product' && <ProductModal onClose={closeModal} />}
>>>>>>> f7caca9 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
      {isModalOpen && <PostModal onClose={closeModal} postId={'64901465b2cb2056633c6795'} />}
      {/* {isModalOpen && type === 'product' && <ProductModal onClose={closeModal} />} */}
      {/* product 부분 댓글로 재사용가능하지 않을까? Comment!! */}
>>>>>>> 134d3dd (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 665c96c (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
>>>>>>> 5165400 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
>>>>>>> f3c913d (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
>>>>>>> 4859fa5 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
>>>>>>> c880721 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
>>>>>>> 9421e71 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
>>>>>>> 39094f2 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
>>>>>>> 9421e71 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
<<<<<<< HEAD
=======
>>>>>>> 665c96c (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
>>>>>>> f7caca9 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
<<<<<<< HEAD
>>>>>>> 1849924 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
<<<<<<< HEAD
>>>>>>> 63147a8 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
=======
=======
<<<<<<< HEAD
>>>>>>> 665c96c (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
=======
=======
      {isModalOpen && type === 'post' && <PostModal onClose={closeModal} />}
      {isModalOpen && type === 'product' && <ProductModal onClose={closeModal} />}
>>>>>>> 4e4a45d (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
>>>>>>> f3c913d (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
>>>>>>> 79957ee (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
>>>>>>> 802b2d3 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
>>>>>>> 72b2164 (style: 모달 아이콘 사용 및 추후에 삭제될 파일)
    </>
  );
};

export default IconHeader;

const ButtonIcon = styled.button`
  width: 18px;
  height: 18px;
`;
