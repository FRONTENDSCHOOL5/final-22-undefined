import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Router from './routes/Router';
import AuthContext from './context/AuthContext';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Happy Paw</title>
      </Helmet>
      <AuthContext>
        <GlobalStyle />
        <Router />
      </AuthContext>
    </ThemeProvider>
  );
}
export default App;
