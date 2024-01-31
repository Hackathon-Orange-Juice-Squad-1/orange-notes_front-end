import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globals';
import theme from './styles/theme';
import { Routes } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}

export default App
