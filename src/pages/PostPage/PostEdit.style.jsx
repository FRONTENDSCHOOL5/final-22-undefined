import styled from 'styled-components';
import uploadIcon from '../../assets/icon/icon-upload.png';
<<<<<<< HEAD
import removeIcon from '../../assets/icon/icon-remove.svg';
=======
import removeIcon from '../../assets/icon/icon-delete.svg';
>>>>>>> 92424a5 (move: style 파일 전체 분리)

export const Title = styled.h2``;

export const PostMain = styled.main`
  margin-top: 48px;
  padding: 20px 16px;
  display: flex;
`;

export const PostArticle = styled.article`
  flex-grow: 1;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const Form = styled.form`
  padding-top: 8px;
`;

export const Section = styled.section``;

export const Textarea = styled.textarea`
  width: 100%;
  margin-bottom: 8px;
  border: none;
  resize: none;
  overflow: hidden;
  line-height: 20px;
  word-break: break-all;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 10px;
<<<<<<< HEAD
<<<<<<< HEAD
  max-width: 800px;
=======
>>>>>>> 92424a5 (move: style 파일 전체 분리)
=======
  max-width: 800px;
>>>>>>> eb7dc72 (style: 게시글 수정 페이지 디자인 변경)
`;

export const Li = styled.li`
  border-radius: 10px;
<<<<<<< HEAD
<<<<<<< HEAD
  flex-shrink: 1;
  flex-basis: 302px;
  max-height: 228px;
=======
  flex-shrink: 0;
  width: 304px;
  height: 228px;
>>>>>>> 92424a5 (move: style 파일 전체 분리)
=======
  flex-shrink: 1;
  flex-basis: 302px;
  max-height: 228px;
>>>>>>> eb7dc72 (style: 게시글 수정 페이지 디자인 변경)
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  overflow: hidden;
`;

export const UploadImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UploadImgBtn = styled.label`
  position: absolute;
  right: 16px;
  bottom: 25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ theme }) => `${theme.colors.primary} url(${uploadIcon}) no-repeat center`};
`;

export const UploadImgInp = styled.input``;

export const DeleteBtn = styled.button`
  width: 22px;
  height: 22px;
  top: 6px;
  right: 6px;
  background: url(${removeIcon}) no-repeat center / contain;
  position: absolute;
  cursor: pointer;
`;
