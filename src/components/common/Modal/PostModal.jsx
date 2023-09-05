import React, { useRef, useState, useContext, useEffect } from 'react';
import * as S from './Modal.style';
import AlertModal from './AlertModal';
import { useNavigate } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';
import { deletePost, reportPost } from '../../../api/post';

const PostModal = ({ onClose, postId, posts, setPosts, postAuthor, author, pathname }) => {
  const modalRef = useRef();
  const navigate = useNavigate();
  const [isLoginUser, setIsLoginUser] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const { userToken, userAccountname } = useContext(AuthContextStore);

  useEffect(() => {
    // 게시글 작성자와 현재 사용자의 계정명 비교하여 isLoginUser 값을 설정
    setIsLoginUser(userAccountname === postAuthor);
  }, [userAccountname, postAuthor]);

  // console.log(postAuthor);

  const isAuthor = author?.accountname === userAccountname;

  const options = [
    {
      label: '삭제',
      action: () => setSelectedOption('삭제'),
      showCondition: isLoginUser || isAuthor,
    },
    {
      label: '수정',
      action: () => {
        for (let i = 0; i < posts.length; i++) {
          if (posts[i].id === postId) {
            console.log('Navigating to Edit Page');
            navigate('/post/edit/', {
              state: { content: posts[i].content, image: posts[i].image, postId: posts[i].id },
            });
          }
        }
      },
      showCondition: isLoginUser || isAuthor,
    },
    {
      label: '신고하기',
      action: () => setSelectedOption('신고하기'),
      showCondition: !isLoginUser && !isAuthor,
    },
  ];

  // 모달 닫기
  const closeModal = async (option) => {
    if (option === '삭제') {
      await fetchDelete(postId, userToken);
      setPosts(posts.filter((post) => post.id !== postId)); // 삭제된 게시물을 제외한 나머지 게시물 목록 설정
      if (pathname === `/postdetail/${postId}`) {
        navigate(-1); // 이전 페이지로 이동 (-1은 이전 페이지를 의미)
      }
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

  const fetchDelete = async () => {
    try {
      // console.log('Deleting post:', postId);
      await deletePost(postId, userToken);
    } catch (error) {
      // console.error(error);
    }
  };

  const fetchReport = async () => {
    try {
      await reportPost(postId, userToken);
    } catch (error) {
      // console.error(error);
    }
  };

  // 어두운 배경 클릭할 때 모달창 처리
  const clickOutside = (e) => {
    if (modalRef.current && modalRef.current === e.target) {
      onClose();
    }
  };

  const renderAlertModal = () => {
    if (selectedOption === '삭제') {
      return (
        <AlertModal
          message='게시글을 삭제할까요?'
          onClose={closeModal}
          buttons={[
            { text: '취소', color: 'sinherit' },
            { text: '삭제', color: '#Fd7a6E' },
          ]}
        />
      );
    } else if (selectedOption === '신고하기') {
      return (
        <AlertModal
          message='신고가 완료되었습니다!'
          onClose={closeModal}
          buttons={[{ text: '확인', color: '#Fd7a6E' }]}
        />
      );
    }
    return null;
  };

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
      {renderAlertModal()}
    </>
  );
};

export default PostModal;
