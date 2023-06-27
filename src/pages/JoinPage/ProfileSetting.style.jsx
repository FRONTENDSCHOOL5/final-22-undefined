import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import Button from '../../components/common/Button/Button';

export const Main = styled.main``;

export const LayoutWrapper = styled(Wrapper)`
  padding: 0 34px;
`;

export const Form = styled.form``;

export const Title = styled.h1`
  margin: 30px 0 12px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

export const Desc = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.txtColor};
  margin-bottom: 30px;
`;

export const StartBtn = styled(Button)`
  margin-top: 30px;
`;
