import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/globalStyles";
import DefaultTheme from "./styles/defaultTheme";

import Routes from "./router";

const App = () => (
  <ThemeProvider theme={DefaultTheme}>
    <GlobalStyles />
    <Routes /> 
  </ThemeProvider>
);

export default App;