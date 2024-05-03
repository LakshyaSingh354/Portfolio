// src/theme.js
import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  text: "#363537",
  // ... other styles for light mode
};

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  // ... other styles for dark mode
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: all 0.50s linear;
  }
  /* Add other global styles as needed*/
`;
