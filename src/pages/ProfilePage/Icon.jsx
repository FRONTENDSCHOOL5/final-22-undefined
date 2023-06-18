import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import IconHeader from './../../components/common/Header/IconHeader';

const LayoutWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colors.white};
`;

const Icon = () => {
  return (
    <LayoutWrapper>
      <IconHeader type='post' />
      <IconHeader type='product' />
    </LayoutWrapper>
  );
};

export default Icon;
