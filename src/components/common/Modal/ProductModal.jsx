import React, { useRef, useState, useContext } from 'react';
import * as S from './Modal.style';
import AlertModal from './AlertModal';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';
import { deleteProduct } from '../../../api/product';

const ProductModal = ({ onClose, productId, products, setProducts, formData }) => {
  const modalRef = useRef(); // 모달 외부 클릭할 때 모달 닫기
  const { accountname } = useParams(); // 현재 사용자 계정
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const productModalOptions = ['삭제', '수정', '웹사이트에서 상품 보기'];
  const otherProductModalOptions = ['웹사이트에서 상품 보기'];
  const userId = accountname ? accountname : userAccountname;
  const isLoginUser = userId === userAccountname;

  // 모달 옵션을 클릭했을 떄
  const optionClick = (option) => {
    if (option === '삭제') {
      // 삭제 로직 수행
      setSelectedOption(option);
    } else if (option === '수정') {
      // 상품 수정 페이지 이동
      navigate(`/product/${productId}/edit`);
    } else if (option === '웹사이트에서 상품 보기' && formData && formData.link) {
      const decodedLink = decodeURIComponent(formData.link);
      window.open(decodedLink);
    }
  };

  // 모달 닫기
  const closeModal = (option) => {
    // console.log(productId);
    if (option === '삭제') {
      fetchDelete(productId) // 게시글 삭제 호출
        .then((response) => {
          if (response.success) {
            onClose();
            setProducts(products.filter((product) => product.id !== productId));
          } else {
            onClose();
            deleteError(response.error); // 삭제 실패 시 에러 처리
          }
        })
        .catch((error) => {
          deleteError('서버 오류'); // 서버 통신 실패 시 에러 처리
        });
    } else if (option === '취소') {
      setSelectedOption('');
      onClose(); // onClose 콜백 호출
    }
  };

  // 상품 및 삭제 오류 처리
  const fetchDelete = async () => {
    // console.log('productId 값:', productId);
    try {
      await deleteProduct(productId, userToken);
    } catch (error) {
      // 실패할 경우
      return { success: false, error: error.message };
    }
  };

  // 상품 삭제 에러
  const deleteError = (error) => {
    console.log(error);
  };

  // AlertModal 컴포넌트 확인 메시지 렌더링
  const renderAlertModal = () => {
    if (selectedOption === '삭제') {
      return (
        <AlertModal
          message='상품을 삭제할까요?'
          onClose={closeModal}
          buttons={['취소', '삭제']}
          buttonFontColor={['#767676', '#F26E22']}
          buttonBorder={[null, { borderLeft: '0.5px solid #dbdbdb' }]}
        />
      );
    }

    return null;
  };

  // 어두운 배경 클릭시 하단 모달창 닫기
  const clickOutside = (e) => {
    if (modalRef.current && modalRef.current === e.target) {
      onClose();
    }
  };

  // 사용자 계정에 따라 모달에 표시할 옵션 요소 생성 및 렌더링
  let optionElements = null;
  // 현재 사용자의 계정과 모달을 호출한 게시글 작성자 계정이 일치하는지 확인
  if (isLoginUser) {
    optionElements = productModalOptions.map((option, index) => (
      <S.Li key={index}>
        <button onClick={() => optionClick(option)}>{option}</button>
      </S.Li>
    ));
  } else {
    optionElements = otherProductModalOptions.map((option, index) => (
      <S.Li key={index}>
        <button onClick={() => optionClick(option)}>{option}</button>
      </S.Li>
    ));
  }

  return (
    <>
      <S.ModalBg ref={modalRef} onClick={clickOutside} style={{ pointerEvents: selectedOption ? 'none' : 'auto' }}>
        <S.Ul>{optionElements}</S.Ul>
      </S.ModalBg>
      {renderAlertModal()}
    </>
  );
};

export default ProductModal;
