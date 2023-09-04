import React, { useRef, useState, useContext, useMemo, useCallback } from 'react';
import * as S from './Modal.style';
import AlertModal from './AlertModal';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';
import { deleteProduct } from '../../../api/product';

const ProductModal = ({ onClose, productId, products, setProducts, formData }) => {
  const modalRef = useRef();
  const { accountname } = useParams();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const userId = useMemo(() => (accountname ? accountname : userAccountname), [accountname, userAccountname]);
  const isLoginUser = useMemo(() => userId === userAccountname, [userId, userAccountname]);

  const options = useMemo(
    () => [
      {
        label: '삭제',
        action: () => setSelectedOption('삭제'),
        showCondition: isLoginUser,
      },
      {
        label: '수정',
        action: () => navigate(`/product/${productId}/edit`),
        showCondition: isLoginUser,
      },
      {
        label: '웹사이트에서 상품 보기',
        action: () => {
          if (formData && formData.link) {
            const decodedLink = decodeURIComponent(formData.link);
            window.open(decodedLink);
          }
        },
        showCondition: true,
      },
    ],
    [isLoginUser, navigate, productId, formData],
  );

  // 모달 닫기
  const closeModal = useCallback(
    async (option) => {
      // console.log(productId);
      if (option === '삭제') {
        await fetchDelete(productId);
        setProducts(products.filter((product) => product.id !== productId));
        console.log('삭제 완료');
        onClose();
      } else if (option === '취소') {
        setSelectedOption('');
        onClose(); // onClose 콜백 호출
      }
    },
    [onClose, productId, setProducts],
  );

  // 상품 및 삭제 오류 처리
  const fetchDelete = useCallback(async () => {
    // console.log('productId 값:', productId);
    try {
      await deleteProduct(productId, userToken);
    } catch (error) {
      // 실패할 경우
      console.error('상품 삭제 오류:', error);
    }
  }, [productId, userToken]);

  // 어두운 배경 클릭시 하단 모달창 닫기
  const clickOutside = useCallback(
    (e) => {
      if (modalRef.current && modalRef.current === e.target) {
        onClose();
      }
    },
    [onClose],
  );

  // AlertModal 컴포넌트 확인 메시지 렌더링
  const renderAlertModal = useMemo(() => {
    if (selectedOption === '삭제') {
      return (
        <AlertModal
          message='상품을 삭제할까요?'
          onClose={closeModal}
          buttons={[
            { text: '취소', color: 'inherit' },
            { text: '삭제', color: '#Fd7a6E' },
          ]}
        />
      );
    }
    return null;
  }, [selectedOption, closeModal]);

  return (
    <>
      <S.ModalBg ref={modalRef} onClick={clickOutside} style={{ pointerEvents: selectedOption ? 'none' : 'auto' }}>
        <S.Ul>
          {options.map(
            (option, index) =>
              option.showCondition && (
                <S.Li key={index}>
                  <button onClick={option.action}>{option.label}</button>
                </S.Li>
              ),
          )}
        </S.Ul>
      </S.ModalBg>
      {renderAlertModal}
    </>
  );
};

export default ProductModal;
