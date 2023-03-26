import React from "react";
import { FormikProvider } from "formik";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "views/styles/fonts.css";

import Routes from "./routes";

import { GlobalStyles } from "views/styles/globalStyles";
import DefaultTheme from "views/styles/defaultTheme";

import { AppProvider, UserProvider } from "application/context";

const App = () => (
  <ThemeProvider theme={DefaultTheme}>
    <UserProvider>
      <AppProvider>
        <FormikProvider>
          <GlobalStyles />
          <ToastContainer />
          <Routes />
        </FormikProvider>
      </AppProvider>
    </UserProvider>
  </ThemeProvider>
);

export default App;
