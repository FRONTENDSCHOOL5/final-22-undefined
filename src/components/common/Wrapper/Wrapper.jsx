import styled from 'styled-components';

const StyledWrapper = styled.div`
  max-width: 390px;
  min-height: 80vh;
  margin: 40px auto;
  padding: 0 34px;
  box-shadow: ${({ theme }) => `0px 0px 5px ${theme.colors.gray}`};
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
`;

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
