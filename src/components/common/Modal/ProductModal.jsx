import React, { useRef, useState, useContext } from 'react';
import * as S from './Modal.style';
import AlertModal from './AlertModal';
import { useNavigate } from 'react-router-dom';

const ProductModal = ({ onClose }) => {
  const modalRef = useRef(); // 모달 외부 클릭할 때 모달 닫기
  const [selectedOption, setSelectedOption] = useState('');

  const productModalOptions = ['삭제', '수정', '웹사이트에서 상품 보기'];

  const optionClick = (option) => {
    if (option === '삭제') {
      // 삭제 로직 수행
      setSelectedOption(option);
    } else if (option === '수정') {
      // 게시물 수정 페이지 이동
    } else if (option === '웹사이트에서 상품 보기') {
      // 웹사이트 연결
    }
  };

  const closeModal = (option) => {
    if (option === '삭제') {
      // 삭제 확인 처리
    } else if (option === '취소') {
      setSelectedOption('');
      onClose();
    }
  };

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

  const clickOutside = (e) => {
    // 어두운 배경 클릭시 하단 모달창 닫기
    if (modalRef.current && modalRef.current === e.target) {
      onClose();
    }
  };

  const optionElements = productModalOptions.map((option, index) => (
    <S.Li key={index}>
      <button onClick={() => optionClick(option)}>{option}</button>
    </S.Li>
  ));

  return (
    <>
      <S.ModalBg ref={modalRef} onClick={clickOutside} style={{ pointerEvents: selectedOption ? 'none' : 'auto' }}>
        <S.Ul>
          {optionElements}
          {/* {options.map((option, index) => 이 부분을 함수로 위에 빼주고 props로 받음
            <S.Li key={index}>
              <button onClick={() => optionClick(option)}>{option}</button>
            </S.Li>
          ))} */}
        </S.Ul>
      </S.ModalBg>
      {renderAlertModal()}
    </>
  );
};

export default ProductModal;
