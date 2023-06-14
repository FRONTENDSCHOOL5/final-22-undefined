import { RecoilRoot } from "recoil";
import GlobalStyle from "./styles/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";

const Span1 = styled.span`
  font-weight: 200;
  color: ${({ theme }) => theme.colors.primary};
`;
const Span2 = styled.span`
  font-weight: 400;
`;
const Span3 = styled.span`
  font-weight: 700;
`;

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        hello world! I love weniv feature
        <Span1>안녕</Span1>
        <Span2>안녕</Span2>
        <Span3>안녕</Span3>
      </ThemeProvider>
    </RecoilRoot>
  );
}
export default App;
