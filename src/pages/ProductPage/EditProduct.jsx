import React from 'react';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import styled from 'styled-components';
import SaveHeader from '../../components/common/Header/SaveHeader';

const LayoutWrapper = styled(Wrapper)`
  padding: 34px;
`;

const EditProduct = () => {
  return (
    <LayoutWrapper>
      <SaveHeader name='저장'></SaveHeader>
    </LayoutWrapper>
  );
};

export default EditProduct;
