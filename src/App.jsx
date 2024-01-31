import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globals";
import theme from "./styles/theme";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Register />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
