import styled from 'styled-components';
import Button from '../../components/common/Button/Button';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import { Link } from 'react-router-dom';

export const Main = styled.main``;

export const Form = styled.form``;

export const LayoutWrapper = styled(Wrapper)`
  padding: 0 34px;
`;

export const Section = styled.section``;

export const Heading = styled.h1`
  margin: 30px 0 40px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

export const LoginBtn = styled(Button)`
  margin: 30px 0 20px;
`;

export const JoinBtn = styled(Link)`
  display: block;
  text-align: center;
  margin: 0 auto;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.txtColor};
`;
