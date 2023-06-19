import React, { useRef, useState, useContext } from 'react';
import * as S from './Modal.style';
import AlertModal from './AlertModal';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
=======
>>>>>>> ca494a3 (feat: 사용자 식별 및 신고 기능 추가 #50)
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';
=======
=======
>>>>>>> 48de2f6 (feat: 사용자 식별 및 신고 기능 추가 #50)
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
>>>>>>> a894544 (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> d11d5e0 (feat: 사용자 식별 및 신고 기능 추가 #50)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 699f2ea (style: 코드 오류 수정)
const PostModal = ({ onClose, postId, accountname, setPosts }) => {
  const modalRef = useRef(); // 모달 외부 클릭할 때 모달 닫기
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();
  const postModalOptions = ['삭제', '수정'];
=======
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> 7ea2eef (feat: 사용자 식별 및 신고 기능 추가 #50)

const PostModal = ({ onClose }) => {
=======
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';

<<<<<<< HEAD
const PostModal = ({ onClose, postId, accountName }) => {
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
const PostModal = ({ onClose, postId, accountname, setPosts }) => {
>>>>>>> e00e158 (style: 코드 오류 수정)
  const modalRef = useRef(); // 모달 외부 클릭할 때 모달 닫기
=======
=======
=======
const PostModal = ({ onClose, postId }) => {
=======
const PostModal = ({ onClose, postId, accountName }) => {
>>>>>>> 4bc7d06 (feat: 사용자 식별 및 신고 기능 추가 #50)
  const modalRef = useRef(); // 모달 외부 클릭할 때 모달 닫기
<<<<<<< HEAD
>>>>>>> 0b99f89 (style: 코드 오류 수정)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const [selectedOption, setSelectedOption] = useState('');
>>>>>>> e2251c3 (feat: 모달 props 전달 #50)
>>>>>>> ee01cc4 (feat: 모달 props 전달 #50)
  const navigate = useNavigate();
<<<<<<< HEAD
  const [selectedOption, setSelectedOption] = useState('');
<<<<<<< HEAD
<<<<<<< HEAD
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const myPostModalOptions = ['삭제', '수정'];
  const otherPostModalOptions = ['신고하기'];
<<<<<<< HEAD
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
  const userId = accountname ? accountname : JSON.parse(userAccountname);
  const isLoginUser = userId === JSON.parse(userAccountname);
>>>>>>> 18a3e51 (feat: 모달 props 전달 #50)
=======
  const navigate = useNavigate();
=======
  const { username } = useParams(); // 현재 사용자 계정
=======
  const { accountname } = useParams(); // 현재 사용자 계정
>>>>>>> 56553de (style: 코드 오류 수정)
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const { userToken } = useContext(AuthContextStore);
<<<<<<< HEAD
>>>>>>> 543d5ab (feat: 모달 props 전달 #50)
  const postModalOptions = ['삭제', '수정'];
>>>>>>> 7ea2eef (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
  const navigate = useNavigate();
=======
>>>>>>> 9a5a8f2 (style: 코드 오류 수정)
  const [selectedOption, setSelectedOption] = useState('');
  const { userToken } = useContext(AuthContextStore);
  const myPostModalOptions = ['삭제', '수정'];
  const otherPostModalOptions = ['신고하기'];
>>>>>>> fa74fb8 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
  const myPostModalOptions = ['삭제', '수정'];
  const otherPostModalOptions = ['신고하기'];
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const myPostModalOptions = ['삭제', '수정'];
  const otherPostModalOptions = ['신고하기'];
  const userId = accountname ? accountname : JSON.parse(userAccountname);
  const isLoginUser = userId === JSON.parse(userAccountname);
>>>>>>> 18a3e51 (feat: 모달 props 전달 #50)

=======
  const postModalOptions = ['삭제', '수정'];
=======
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> 7ea2eef (feat: 사용자 식별 및 신고 기능 추가 #50)

const PostModal = ({ onClose }) => {
  const modalRef = useRef(); // 모달 외부 클릭할 때 모달 닫기
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
<<<<<<< HEAD
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const myPostModalOptions = ['삭제', '수정'];
  const otherPostModalOptions = ['신고하기'];
<<<<<<< HEAD
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
  const userId = accountname ? accountname : JSON.parse(userAccountname);
  const isLoginUser = userId === JSON.parse(userAccountname);
>>>>>>> 18a3e51 (feat: 모달 props 전달 #50)
=======
  const navigate = useNavigate();
=======
  const { username } = useParams(); // 현재 사용자 계정
=======
  const { accountname } = useParams(); // 현재 사용자 계정
>>>>>>> 56553de (style: 코드 오류 수정)
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const { userToken } = useContext(AuthContextStore);
>>>>>>> 543d5ab (feat: 모달 props 전달 #50)
  const postModalOptions = ['삭제', '수정'];
>>>>>>> 7ea2eef (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
  const navigate = useNavigate();
=======
>>>>>>> 9a5a8f2 (style: 코드 오류 수정)
  const [selectedOption, setSelectedOption] = useState('');
  const { userToken } = useContext(AuthContextStore);
  const myPostModalOptions = ['삭제', '수정'];
  const otherPostModalOptions = ['신고하기'];
>>>>>>> fa74fb8 (feat: 사용자 식별 및 신고 기능 추가 #50)

>>>>>>> a894544 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
=======
>>>>>>> c0faa09 (feat: 사용자 식별 및 신고 기능 추가 #50)
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';
=======
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
>>>>>>> a894544 (feat: 사용자 식별 및 신고 기능 추가 #50)

const PostModal = ({ onClose, postId, accountname, setPosts }) => {
  const modalRef = useRef(); // 모달 외부 클릭할 때 모달 닫기
  const navigate = useNavigate();
<<<<<<< HEAD
  const [selectedOption, setSelectedOption] = useState('');
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const myPostModalOptions = ['삭제', '수정'];
  const otherPostModalOptions = ['신고하기'];
  const userId = accountname ? accountname : JSON.parse(userAccountname);
  const isLoginUser = userId === JSON.parse(userAccountname);

<<<<<<< HEAD
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
=======
  const postModalOptions = ['삭제', '수정'];
=======
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';

const PostModal = ({ onClose, postId, accountName }) => {
  const modalRef = useRef(); // 모달 외부 클릭할 때 모달 닫기
  const { username } = useParams(); // 현재 사용자 계정
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const { userToken } = useContext(AuthContextStore);
  const myPostModalOptions = ['삭제', '수정'];
  const otherPostModalOptions = ['신고하기'];
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)

>>>>>>> a894544 (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> c0faa09 (feat: 사용자 식별 및 신고 기능 추가 #50)
  // 모달 옵션을 클릭했을 때
  const optionClick = (option) => {
    if (option === '삭제') {
      setSelectedOption(option);
    } else if (option === '수정') {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      navigate('/profile'); // 일단 프로필로 설정, 후에 게시글 수정 페이지로 경로 설정
=======
      navigate('/post'); // 일단 post로 설정, 후에 post 수정? 페이지로 경로 설정
    } else if (option === '신고하기') {
      reportPost(postId);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
      navigate('/profile'); // 일단 프로필로 설정, 후에 게시글 수정 페이지로 경로 설정
>>>>>>> 7ea2eef (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
=======
>>>>>>> ca494a3 (feat: 사용자 식별 및 신고 기능 추가 #50)
      navigate('/post'); // 일단 post로 설정, 후에 post 수정? 페이지로 경로 설정
    } else if (option === '신고하기') {
      reportPost(postId);
=======
=======
>>>>>>> 48de2f6 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
      navigate('/post'); // 일단 post로 설정, 후에 post 수정? 페이지로 경로 설정
    } else if (option === '신고하기') {
      reportPost(postId);
=======
>>>>>>> c0faa09 (feat: 사용자 식별 및 신고 기능 추가 #50)
<<<<<<< HEAD
      navigate('/profile'); // 일단 프로필로 설정, 후에 게시글 수정 페이지로 경로 설정
=======
      navigate('/post'); // 일단 post로 설정, 후에 post 수정? 페이지로 경로 설정
    } else if (option === '신고하기') {
      reportPost(postId);
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a894544 (feat: 사용자 식별 및 신고 기능 추가 #50)
<<<<<<< HEAD
>>>>>>> d11d5e0 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
=======
=======
      navigate('/profile'); // 일단 프로필로 설정, 후에 게시글 수정 페이지로 경로 설정
>>>>>>> 7ea2eef (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> 48de2f6 (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> ca494a3 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
>>>>>>> a894544 (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> c0faa09 (feat: 사용자 식별 및 신고 기능 추가 #50)
    }
  };

  // 모달 닫기
  const closeModal = (option) => {
    console.log(postId);
    if (option === '삭제') {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      deletePost()
=======
      deletePost(postId) // 게시글 삭제 호출
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
      deletePost()
>>>>>>> 7ea2eef (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
      deletePost(postId) // 게시글 삭제 호출
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
=======
>>>>>>> ca494a3 (feat: 사용자 식별 및 신고 기능 추가 #50)
      deletePost(postId) // 게시글 삭제 호출
=======
=======
>>>>>>> 48de2f6 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
      deletePost(postId) // 게시글 삭제 호출
=======
>>>>>>> c0faa09 (feat: 사용자 식별 및 신고 기능 추가 #50)
<<<<<<< HEAD
      deletePost()
=======
      deletePost(postId) // 게시글 삭제 호출
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a894544 (feat: 사용자 식별 및 신고 기능 추가 #50)
<<<<<<< HEAD
>>>>>>> d11d5e0 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
=======
=======
      deletePost()
>>>>>>> 7ea2eef (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> 48de2f6 (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> ca494a3 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
      deletePost(postId) // 게시글 삭제 호출
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
>>>>>>> a894544 (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> c0faa09 (feat: 사용자 식별 및 신고 기능 추가 #50)
        .then((response) => {
          if (response.success) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            changePage(); // 삭제 성공 시 페이지 재랜더링
=======
=======
=======
>>>>>>> 403c34a (style: 코드 오류 수정)
=======
>>>>>>> 6d91338 (style: 코드 오류 수정)
=======
=======
>>>>>>> 0b99f89 (style: 코드 오류 수정)
=======
>>>>>>> 699f2ea (style: 코드 오류 수정)
<<<<<<< HEAD
            changePage(); // 삭제 성공 시 페이지 재랜더링
=======
>>>>>>> 6c1e3b9 (style: 코드 오류 수정)
>>>>>>> 6ce78d2 (style: 코드 오류 수정)
            // console.log('삭제 완료');
            // window.location.replace('/profile');
            onClose();
            navigate('/profile');
<<<<<<< HEAD
>>>>>>> e00e158 (style: 코드 오류 수정)
=======
            changePage(); // 삭제 성공 시 페이지 재랜더링
>>>>>>> 56553de (style: 코드 오류 수정)
=======
            console.log('삭제 완료');
=======
            // console.log('삭제 완료');
            // window.location.replace('/profile');
            onClose();
>>>>>>> e00e158 (style: 코드 오류 수정)
            navigate('/profile');
>>>>>>> 9a5a8f2 (style: 코드 오류 수정)
=======
<<<<<<< HEAD
=======
>>>>>>> e00e158 (style: 코드 오류 수정)
<<<<<<< HEAD
>>>>>>> 6c1e3b9 (style: 코드 오류 수정)
<<<<<<< HEAD
>>>>>>> 6ce78d2 (style: 코드 오류 수정)
=======
=======
=======
            changePage(); // 삭제 성공 시 페이지 재랜더링
>>>>>>> 56553de (style: 코드 오류 수정)
<<<<<<< HEAD
>>>>>>> 0b99f89 (style: 코드 오류 수정)
<<<<<<< HEAD
>>>>>>> 403c34a (style: 코드 오류 수정)
=======
=======
=======
            console.log('삭제 완료');
=======
            // console.log('삭제 완료');
            // window.location.replace('/profile');
            onClose();
>>>>>>> e00e158 (style: 코드 오류 수정)
            navigate('/profile');
>>>>>>> 9a5a8f2 (style: 코드 오류 수정)
>>>>>>> 699f2ea (style: 코드 오류 수정)
>>>>>>> 6d91338 (style: 코드 오류 수정)
          } else {
            deleteError(response.error); // 삭제 실패 시 에러 처리
          }
        })
        .catch((error) => {
          deleteError('서버 오류'); // 서버 통신 실패 시 에러 처리
        });

      setSelectedOption(option);
    } else if (option === '취소') {
      setSelectedOption('');
      onClose(); // onClose 콜백 호출
    }
  };

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
>>>>>>> 7ea2eef (feat: 사용자 식별 및 신고 기능 추가 #50)
  const deletePost = () => {
    // 게시글 삭제 요청을 처리하는 비동기 함수
    return new Promise((resolve, reject) => {
      // 게시글 삭제 요청 처리 로직
<<<<<<< HEAD
=======
  // 게시글 삭제 및 삭제 오류 처리
  const deletePost = async () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  // 게시글 삭제 및 삭제 오류 처리
>>>>>>> fa74fb8 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
  // 게시글 삭제 및 삭제 오류 처리
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
  // 게시글 삭제 및 삭제 오류 처리
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
  const deletePost = async (postId) => {
>>>>>>> 543d5ab (feat: 모달 props 전달 #50)
=======
>>>>>>> 9a5a8f2 (style: 코드 오류 수정)
=======
>>>>>>> 18a3e51 (feat: 모달 props 전달 #50)
=======
=======
>>>>>>> ca494a3 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
>>>>>>> ee01cc4 (feat: 모달 props 전달 #50)
=======
>>>>>>> 7201fda (feat: 사용자 식별 및 신고 기능 추가 #50)
  // 게시글 삭제 및 삭제 오류 처리
  const deletePost = async () => {
=======
<<<<<<< HEAD
=======
=======
>>>>>>> e2251c3 (feat: 모달 props 전달 #50)
=======
>>>>>>> 4bc7d06 (feat: 사용자 식별 및 신고 기능 추가 #50)
<<<<<<< HEAD
=======
>>>>>>> 7ea2eef (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> 48de2f6 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
  // 게시글 삭제 및 삭제 오류 처리
  const deletePost = async () => {
=======
<<<<<<< HEAD
>>>>>>> c0faa09 (feat: 사용자 식별 및 신고 기능 추가 #50)
  const deletePost = () => {
    // 게시글 삭제 요청을 처리하는 비동기 함수
    return new Promise((resolve, reject) => {
      // 게시글 삭제 요청 처리 로직
<<<<<<< HEAD
<<<<<<< HEAD
=======
  // 게시글 삭제 및 삭제 오류 처리
<<<<<<< HEAD
  const deletePost = async (postId) => {
>>>>>>> a894544 (feat: 사용자 식별 및 신고 기능 추가 #50)
<<<<<<< HEAD
>>>>>>> d11d5e0 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
=======
  const deletePost = async () => {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 448785a (feat: 모달 props 전달 #50)
<<<<<<< HEAD
>>>>>>> c721b3a (feat: 모달 props 전달 #50)
=======
=======
=======
>>>>>>> 699f2ea (style: 코드 오류 수정)
=======
=======
  // 게시글 삭제 및 삭제 오류 처리
>>>>>>> fa74fb8 (feat: 사용자 식별 및 신고 기능 추가 #50)
  const deletePost = async (postId) => {
>>>>>>> 543d5ab (feat: 모달 props 전달 #50)
<<<<<<< HEAD
>>>>>>> e2251c3 (feat: 모달 props 전달 #50)
<<<<<<< HEAD
>>>>>>> ee01cc4 (feat: 모달 props 전달 #50)
=======
=======
=======
>>>>>>> 9a5a8f2 (style: 코드 오류 수정)
>>>>>>> 699f2ea (style: 코드 오류 수정)
>>>>>>> 6d91338 (style: 코드 오류 수정)
=======
>>>>>>> 18a3e51 (feat: 모달 props 전달 #50)
=======
=======
  // 게시글 삭제 및 삭제 오류 처리
  const deletePost = async (postId) => {
>>>>>>> a894544 (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> c0faa09 (feat: 사용자 식별 및 신고 기능 추가 #50)
    console.log('postId 값:', postId);
    try {
      const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${postId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${JSON.parse(userToken)}`,
          'Content-Type': 'application/json',
        },
      });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)

<<<<<<< HEAD
=======

>>>>>>> 7ea2eef (feat: 사용자 식별 및 신고 기능 추가 #50)
      // 성공 시
      resolve({ success: true });

      // 실패 시
      // reject({ success: false, error: '에러 메시지' });
    });
<<<<<<< HEAD
=======
      if (response.ok) {
=======
=======
=======
>>>>>>> ee01cc4 (feat: 모달 props 전달 #50)
=======
=======
>>>>>>> e2251c3 (feat: 모달 props 전달 #50)
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> a894544 (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> d11d5e0 (feat: 사용자 식별 및 신고 기능 추가 #50)

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 7ea2eef (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> 48de2f6 (feat: 사용자 식별 및 신고 기능 추가 #50)
      // 성공 시
      resolve({ success: true });

      // 실패 시
      // reject({ success: false, error: '에러 메시지' });
    });
<<<<<<< HEAD
=======
>>>>>>> 6c1e3b9 (style: 코드 오류 수정)
      if (response.ok) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        // 성공할 경우
>>>>>>> 543d5ab (feat: 모달 props 전달 #50)
=======
>>>>>>> 56553de (style: 코드 오류 수정)
=======
>>>>>>> e00e158 (style: 코드 오류 수정)
=======
=======
=======
=======
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> a894544 (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> c0faa09 (feat: 사용자 식별 및 신고 기능 추가 #50)

      if (response.ok) {
<<<<<<< HEAD
<<<<<<< HEAD
        // 성공할 경우
>>>>>>> 543d5ab (feat: 모달 props 전달 #50)
<<<<<<< HEAD
>>>>>>> ee01cc4 (feat: 모달 props 전달 #50)
=======
=======
>>>>>>> 56553de (style: 코드 오류 수정)
>>>>>>> 403c34a (style: 코드 오류 수정)
=======
>>>>>>> e00e158 (style: 코드 오류 수정)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e00e158 (style: 코드 오류 수정)
=======
>>>>>>> 7ea2eef (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
>>>>>>> 543d5ab (feat: 모달 props 전달 #50)
=======
=======
>>>>>>> ee01cc4 (feat: 모달 props 전달 #50)
=======
=======
>>>>>>> e2251c3 (feat: 모달 props 전달 #50)
>>>>>>> e00e158 (style: 코드 오류 수정)
<<<<<<< HEAD
>>>>>>> 6c1e3b9 (style: 코드 오류 수정)
<<<<<<< HEAD
>>>>>>> 6ce78d2 (style: 코드 오류 수정)
=======
=======
=======
>>>>>>> 7ea2eef (feat: 사용자 식별 및 신고 기능 추가 #50)
<<<<<<< HEAD
>>>>>>> 48de2f6 (feat: 사용자 식별 및 신고 기능 추가 #50)
<<<<<<< HEAD
>>>>>>> ca494a3 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
=======
=======
>>>>>>> 543d5ab (feat: 모달 props 전달 #50)
>>>>>>> e2251c3 (feat: 모달 props 전달 #50)
>>>>>>> ee01cc4 (feat: 모달 props 전달 #50)
  };

  // 게시글 삭제 에러
  const deleteError = (error) => {
    // 삭제 실패 에러 처리 로직
    console.log(error);
  };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const changePage = () => {
    // 페이지 재랜더링을 위한 로직
    // changePage 함수의 구현은 해당 페이지 컴포넌트에서 진행
  };

=======
=======
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
>>>>>>> d11d5e0 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
>>>>>>> ca494a3 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
>>>>>>> c0faa09 (feat: 사용자 식별 및 신고 기능 추가 #50)
  // 게시글 신고
  const reportPost = async (postId) => {
    try {
      const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${postId}/report`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${JSON.parse(userToken)}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          report: {
            post: '포스트 id',
          },
        }),
      });

      if (response.ok) {
        // 성공할 경우
        console.log('게시글 신고 완료');
      } else {
        // 실패할 경우
        throw new Error('게시글 신고 실패');
      }
    } catch (error) {
      // 실패할 경우
      console.log(error);
    }
  };

  // AlertModal 컴포넌트 확인 메시지 렌더링
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
=======
=======
=======
>>>>>>> 48de2f6 (feat: 사용자 식별 및 신고 기능 추가 #50)
<<<<<<< HEAD
>>>>>>> d11d5e0 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
=======
<<<<<<< HEAD
>>>>>>> c0faa09 (feat: 사용자 식별 및 신고 기능 추가 #50)
  const changePage = () => {
    // 페이지 재랜더링을 위한 로직
    // changePage 함수의 구현은 해당 페이지 컴포넌트에서 진행
  };

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7ea2eef (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
=======
>>>>>>> c0faa09 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
  // 게시글 신고
  const reportPost = async (postId) => {
    try {
      const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${postId}/report`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${JSON.parse(userToken)}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          report: {
            post: '포스트 id',
          },
        }),
      });

      if (response.ok) {
        // 성공할 경우
        console.log('게시글 신고 완료');
      } else {
        // 실패할 경우
        throw new Error('게시글 신고 실패');
      }
    } catch (error) {
      // 실패할 경우
      console.log(error);
    }
  };

  // AlertModal 컴포넌트 확인 메시지 렌더링
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a894544 (feat: 사용자 식별 및 신고 기능 추가 #50)
<<<<<<< HEAD
>>>>>>> d11d5e0 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
=======
=======
  const changePage = () => {
    // 페이지 재랜더링을 위한 로직
    // changePage 함수의 구현은 해당 페이지 컴포넌트에서 진행
  };

>>>>>>> 7ea2eef (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> 48de2f6 (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> ca494a3 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
>>>>>>> a894544 (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> c0faa09 (feat: 사용자 식별 및 신고 기능 추가 #50)
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
    }

    return null;
  };

  // 어두운 배경 클릭할 때 모달창 처리
  const clickOutside = (e) => {
    if (modalRef.current && modalRef.current === e.target) {
      onClose(); // onClose 콜백 호출
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  // 사용자 계정에 따라 모달에 표시할 옵션 요소 생성 및 렌더링
  let optionElements = null;
  // 현재 사용자의 계정과 모달을 호출한 게시글 작성자 계정이 일치하는지 확인
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  if (isLoginUser) {
=======
  if (username === accountName) {
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
  if (isLoginUser) {
>>>>>>> 18a3e51 (feat: 모달 props 전달 #50)
=======
=======
>>>>>>> c721b3a (feat: 모달 props 전달 #50)
  if (isLoginUser) {
=======
  if (username === accountName) {
>>>>>>> a894544 (feat: 사용자 식별 및 신고 기능 추가 #50)
<<<<<<< HEAD
>>>>>>> d11d5e0 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
=======
  if (isLoginUser) {
>>>>>>> 448785a (feat: 모달 props 전달 #50)
<<<<<<< HEAD
>>>>>>> c721b3a (feat: 모달 props 전달 #50)
=======
=======
  // 사용자 계정에 따라 모달에 표시할 옵션 요소 생성 및 렌더링
  let optionElements = null;
  // 현재 사용자의 계정과 모달을 호출한 게시글 작성자 계정이 일치하는지 확인
<<<<<<< HEAD
  if (username === accountName) {
>>>>>>> e2251c3 (feat: 모달 props 전달 #50)
<<<<<<< HEAD
>>>>>>> ee01cc4 (feat: 모달 props 전달 #50)
=======
=======
  if (isLoginUser) {
>>>>>>> 4bc7d06 (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> 7201fda (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
  // 사용자 계정에 따라 모달에 표시할 옵션 요소 생성 및 렌더링
  let optionElements = null;
  // 현재 사용자의 계정과 모달을 호출한 게시글 작성자 계정이 일치하는지 확인
<<<<<<< HEAD
  if (username === accountName) {
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
  if (isLoginUser) {
>>>>>>> 18a3e51 (feat: 모달 props 전달 #50)
=======
  if (isLoginUser) {
=======
  if (username === accountName) {
>>>>>>> a894544 (feat: 사용자 식별 및 신고 기능 추가 #50)
>>>>>>> c0faa09 (feat: 사용자 식별 및 신고 기능 추가 #50)
    optionElements = myPostModalOptions.map((option, index) => (
      <S.Li key={index}>
        <button onClick={() => optionClick(option)}>{option}</button>
      </S.Li>
    ));
  } else {
    optionElements = otherPostModalOptions.map((option, index) => (
      <S.Li key={index}>
        <button onClick={() => optionClick(option)}>{option}</button>
      </S.Li>
    ));
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const optionElements = postModalOptions.map((option, index) => (
    <S.Li key={index}>
      <button onClick={() => optionClick(option)}>{option}</button>
    </S.Li>
  ));
>>>>>>> 48de2f6 (feat: 사용자 식별 및 신고 기능 추가 #50)
=======
>>>>>>> e2251c3 (feat: 모달 props 전달 #50)
=======
>>>>>>> 0a7ddaf (feat: 사용자 식별 및 신고 기능 추가 #50)

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
