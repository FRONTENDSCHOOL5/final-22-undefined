import React, { useRef, useState, useContext } from 'react';
import * as S from './Modal.style';
import AlertModal from './AlertModal';
import ReportModal from './ReportModal';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';
import { reportPost } from '../../../api/post';

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
    // console.log(postId);
    if (option === '삭제') {
      deletePost(postId) // 게시글 삭제 호출
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
  const deletePost = async () => {
    // console.log('postId 값:', postId);
    try {
      const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${postId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        return { success: true };
      } else if (response.status === 404) {
        // 게시글이 존재하지 않을 경우
        throw new Error('존재하지 않는 게시글입니다.');
      } else if (response.status === 401) {
        // 다른 사용자가 해당 게시글을 수정할 경우
        throw new Error('잘못된 요청입니다. 로그인 정보를 확인하세요.');
      } else {
        // 기타 실패할 경우
        throw new Error('게시글 삭제 실패');
      }
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
      // const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${postId}/report`, {
      //   method: 'POST',
      //   headers: {
      //     Authorization: `Bearer ${userToken}`,
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     report: {
      //       post: postId,
      //     },
      //   }),
      // });
    } catch (error) {
      // 실패할 경우
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
        <S.Ul>
          {optionElements}
          {/* {options.map((option, index) => 이 부분을 위에 분기처리로 변경
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

export default PostModal;
