import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 390px;
  min-height: 820px;
  margin: 40px auto;
  position: relative;
  box-shadow: ${({ theme }) => `0px 0px 5px ${theme.colors.gray}`};
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
`;

export default Wrapper;
