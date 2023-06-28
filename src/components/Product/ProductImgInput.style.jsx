import styled from 'styled-components';
import uploadIcon from '../../assets/icon/icon-upload.png';

export const Label = styled.label`
  width: 322px;
  height: 204px;
  position: relative;
  display: block;
  margin: 0 auto 40px;
  color: ${({ theme }) => theme.colors.txtColor};
  font-size: 12px;

  &::after {
    content: '';
    position: absolute;
    right: 10px;
    bottom: -10px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: ${({ theme }) => `${theme.colors.primary} url(${uploadIcon}) no-repeat center`};
  }
`;

export const ProductImg = styled.img`
  object-fit: cover;
  height: 100%;
  border-radius: 5%;
  margin-top: 10px;
`;

export const UploadInput = styled.input``;
