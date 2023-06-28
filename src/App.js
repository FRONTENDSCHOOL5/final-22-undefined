import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Router from './routes/Router';
import AuthContext from './context/AuthContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContext>
        <GlobalStyle />
        <Router />
      </AuthContext>
    </ThemeProvider>
  );
}
export default App;
