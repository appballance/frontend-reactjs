import React from "react";
import { render, } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import "@testing-library/jest-dom";

import theme from "views/styles/defaultTheme";

export const renderCustom = (Element) => {
  render(<ThemeProvider theme={theme}>{Element}</ThemeProvider>);
};
