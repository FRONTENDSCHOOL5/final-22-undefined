import styled from 'styled-components';
import uploadIcon from '../../../assets/icon/icon-upload.png';

export const Label = styled.label`
  width: 110px;
  height: 110px;
  position: relative;
  display: block;
  margin: 0 auto 30px;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: ${({ theme }) => `${theme.colors.primary} url(${uploadIcon}) no-repeat center`};
  }
`;

export const ProfileImg = styled.img`
  object-fit: cover;
  height: 100%;
  border-radius: 50%;
`;

export const UploadInput = styled.input``;
