import React, { useRef, useState, useContext } from 'react';
import * as S from './Modal.style';
import AlertModal from './AlertModal';
import ReportModal from './ReportModal';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';
import { deletePost, reportPost } from '../../../api/post';

const PostModal = ({ onClose, postId, posts, setPosts }) => {
  const modalRef = useRef(); // 모달 외부 클릭할 때 모달 닫기
  const navigate = useNavigate();
  const { accountname } = useParams();
  const { pathname } = useLocation(); // pathname변수를 useLocation 훅을 사용하여 현재 경로 가져오기
  const [selectedOption, setSelectedOption] = useState('');
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const myPostModalOptions = ['삭제', '수정'];
  const otherPostModalOptions = ['신고하기'];
  const userId = accountname ? accountname : userAccountname;
  const isLoginUser = userId === userAccountname;
  const isHomeFollowedPosts = pathname === '/home'; // 홈인지 확인하고 isHomeFollowedPosts변수에 할당

  // 모달 옵션을 클릭했을 때
  const optionClick = (option) => {
    if (option === '삭제') {
      setSelectedOption(option);
    } else if (option === '수정') {
      for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === postId) {
          navigate('/post/edit', { state: { content: posts[i].content, image: posts[i].image, postId: posts[i].id } });
        }
      }
    } else if (option === '신고하기') {
      setSelectedOption(option);
    }
  };

  // 모달 닫기
  const closeModal = (option) => {
    console.log(postId);
    if (option === '삭제') {
<<<<<<< HEAD
<<<<<<< HEAD
      fetchDelete(postId, userToken);
      setPosts(posts.filter((post) => post.id !== postId));
      onClose();
=======
      fetchDelete(postId) // 게시글 삭제 호출
        .then((response) => {
          if (response.success) {
            // console.log('삭제 완료');
            onClose();
            setPosts(posts.filter((post) => post.id !== postId));
          } else {
            onClose();
            deleteError(response.error); // 삭제 실패 시 에러 처리
          }
        })
        .catch((error) => {
          deleteError('서버 오류'); // 서버 통신 실패 시 에러 처리
        });
>>>>>>> 92424a5 (move: style 파일 전체 분리)
=======
      fetchDelete(postId, userToken);
      setPosts(posts.filter((post) => post.id !== postId));
      onClose();
>>>>>>> 7a1d469 (fix: 게시물 삭제 오류 해결 #50)
    } else if (option === '취소') {
      setSelectedOption('');
      onClose(); // onClose 콜백 호출
    } else if (option === '확인') {
      fetchReport(postId, userToken);
      console.log('신고하기 완료!');
      onClose();
    }
  };

  // 게시글 삭제 및 삭제 오류 처리
  const fetchDelete = async () => {
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(postId);
=======
>>>>>>> 92424a5 (move: style 파일 전체 분리)
=======
    console.log(postId);
>>>>>>> 7a1d469 (fix: 게시물 삭제 오류 해결 #50)
    try {
      await deletePost(postId, userToken);
    } catch (error) {
      // 실패할 경우
      return { success: false, error: error.message };
    }
  };

  // 게시글 삭제 에러
  const deleteError = (error) => {
    console.log(error);
  };

  // 게시글 신고
  const fetchReport = async () => {
    try {
      await reportPost(postId, userToken);
    } catch (error) {
      console.log(error);
    }
  };

  // AlertModal, ReportModal 컴포넌트 삭제 및 신고 확인 메시지 렌더링
  const renderAlertModal = () => {
    if (selectedOption === '삭제') {
      return (
        <AlertModal
          message='게시글을 삭제할까요?'
          onClose={closeModal}
          buttons={['취소', '삭제']}
          buttonFontColor={['#767676', '#F26E22']}
          buttonBorder={[null, { borderLeft: '0.5px solid #dbdbdb' }]}
        />
      );
    } else if (selectedOption === '신고하기') {
      return (
        <ReportModal
          message='신고가 완료되었습니다!'
          onClose={closeModal}
          button={'확인'}
          buttonFontColor={'#F26E22'}
        />
      );
    }

    return null;
  };

  // 어두운 배경 클릭할 때 모달창 처리
  const clickOutside = (e) => {
    if (modalRef.current && modalRef.current === e.target) {
      onClose(); // onClose 콜백 호출
    }
  };

  // 조건부 로직 처리 : 사용자 계정에 따라 모달에 표시할 옵션 요소 생성
  let optionElements = [];
  if (isHomeFollowedPosts || !isLoginUser) {
    optionElements = otherPostModalOptions.map((option, index) => (
      <S.Li key={index}>
        <button onClick={() => optionClick(option)}>{option}</button>
      </S.Li>
    ));
  } else {
    if (isLoginUser) {
      optionElements = myPostModalOptions.map((option, index) => (
        <S.Li key={index}>
          <button onClick={() => optionClick(option)}>{option}</button>
        </S.Li>
      ));
    }
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

export default PostModal;
