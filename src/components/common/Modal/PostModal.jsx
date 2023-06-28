import React, { useRef, useState, useContext, useMemo } from 'react';
import * as S from './Modal.style';
import AlertModal from './AlertModal';
import ReportModal from './ReportModal';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';
import { deletePost, reportPost } from '../../../api/post';
import { useCallback } from 'react';

const PostModal = ({ onClose, postId, posts, setPosts }) => {
  console.log('렌더 완료');
  const modalRef = useRef();
  const navigate = useNavigate();
  const { accountname } = useParams();
  const { pathname } = useLocation();
  const [selectedOption, setSelectedOption] = useState('');
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const myPostModalOptions = useMemo(() => ['삭제', '수정'], []);
  const otherPostModalOptions = useMemo(() => ['신고하기'], []);
  const userId = useMemo(() => (accountname ? accountname : userAccountname), [accountname, userAccountname]);
  const isLoginUser = useMemo(() => userId === userAccountname, [userId, userAccountname]);
  const isHomeFollowedPosts = useMemo(() => pathname === '/home', [pathname]); // 홈인지 확인하고 isHomeFollowedPosts변수에 할당

  // 모달 옵션을 클릭했을 때
  // useCallback 사용해서 navigate()함수 호출 최적화
  const optionClick = useCallback(
    (option) => {
      if (option === '삭제') {
        setSelectedOption(option);
      } else if (option === '수정') {
        for (let i = 0; i < posts.length; i++) {
          if (posts[i].id === postId) {
            navigate('/post/edit', {
              state: { content: posts[i].content, image: posts[i].image, postId: posts[i].id },
            });
          }
        }
      } else if (option === '신고하기') {
        setSelectedOption(option);
      }
    },
    [navigate, postId, posts],
  );

  // 모달 닫기
  const closeModal = async (option) => {
    if (option === '삭제') {
      await fetchDelete(postId, userToken);
      setPosts(posts.filter((post) => post.id !== postId));
      onClose();
    } else if (option === '취소') {
      setSelectedOption('');
      onClose(); // onClose 콜백 호출
    } else if (option === '확인') {
      fetchReport(postId, userToken);
      console.log('신고하기 완료!');
      onClose();
    }
  };

  const fetchDelete = useCallback(async () => {
    try {
      await deletePost(postId, userToken);
    } catch (error) {
      // console.error(error);
    }
  }, [postId, userToken]);

  const fetchReport = useCallback(async () => {
    try {
      await reportPost(postId, userToken);
    } catch (error) {
      // console.error(error);
    }
  }, [postId, userToken]);

  // 어두운 배경 클릭할 때 모달창 처리
  const clickOutside = useCallback(
    (e) => {
      if (modalRef.current && modalRef.current === e.target) {
        onClose();
      }
    },
    [onClose],
  );

  // 조건부 로직 처리 : 사용자 계정에 따라 모달에 표시할 옵션 요소 생성y
  const optionElements = useMemo(() => {
    if (isHomeFollowedPosts || !isLoginUser) {
      return otherPostModalOptions.map((option, index) => (
        <S.Li key={index}>
          <button onClick={() => optionClick(option)}>{option}</button>
        </S.Li>
      ));
    } else if (isLoginUser) {
      return myPostModalOptions.map((option, index) => (
        <S.Li key={index}>
          <button onClick={() => optionClick(option)}>{option}</button>
        </S.Li>
      ));
    }
    return null;
  }, [isHomeFollowedPosts, isLoginUser, myPostModalOptions, optionClick, otherPostModalOptions]);

  return (
    <>
      <S.ModalBg ref={modalRef} onClick={clickOutside} style={{ pointerEvents: selectedOption ? 'none' : 'auto' }}>
        <S.Ul>{optionElements}</S.Ul>
      </S.ModalBg>
      {selectedOption === '삭제' && (
        <AlertModal
          message='게시글을 삭제할까요?'
          onClose={closeModal}
          buttons={['취소', '삭제']}
          buttonFontColor={['#767676', '#Fd7a6E']}
          buttonBorder={[null, { borderLeft: '0.5px solid #dbdbdb' }]}
        />
      )}
      {selectedOption === '신고하기' && (
        <ReportModal
          message='신고가 완료되었습니다!'
          onClose={closeModal}
          button={'확인'}
          buttonFontColor={'#Fd7a6E'}
        />
      )}
    </>
  );
};

export default PostModal;
