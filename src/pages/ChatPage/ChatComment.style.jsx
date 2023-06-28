import styled from 'styled-components';
import imgBtn from '../../assets/img-button.png';
import uploadImgBtn from '../../assets/upload-file.png';

export const Footer = styled.footer`
  /* max-width: 390px; */
  padding: 13px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border-top: 0.5px solid ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.input`
  flex-grow: 1;
  margin-right: 12px;
  outline: none;
  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const PostBtn = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: ${({ theme, isActivated }) => (isActivated ? theme.colors.primary : theme.colors.gray)};
`;

export const UploadForm = styled.form`
  label {
    display: inline-block;
    background: url(${imgBtn}) no-repeat center / 36px 36px;
    width: 36px;
    height: 36px;
    margin-right: 18px;
    cursor: pointer;
  }
  label:hover {
    transition: 0.3s;
    background: url(${uploadImgBtn}) no-repeat center / 36px 36px;
    width: 36px;
    height: 36px;
  }
`;

export const SendForm = styled.form`
  display: flex;
  flex-grow: 1;
`;
