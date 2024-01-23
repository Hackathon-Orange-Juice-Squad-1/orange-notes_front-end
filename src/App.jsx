import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globals';
import theme from './styles/theme';

import { Home } from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
