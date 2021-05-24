import { createGlobalStyle } from "styled-components";

const dark = "#1a2236";
const light = "white";
const primary = "#0a80ff";

const success = "#0abb87";
const warning = "#ffc107";
const error = "red";

const baseColors = {
  dark,
  light,
  primary,
  success,
  warning,
  error,
};

const lightColors = {
  background: light,
};

const darkColors = {
  background: dark,
};

const lightThemeColors = Object.assign({}, baseColors, lightColors);
const darkThemeColors = Object.assign({}, baseColors, darkColors);

const theme = {
  isDark: false,
};

export const lightTheme = Object.assign(
  {},
  theme,
  { isDark: false },
  { colors: lightThemeColors }
);
export const darkTheme = Object.assign(
  {},
  theme,
  { isDark: true },
  { colors: darkThemeColors }
);

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%:
  }
  body {
    margin:0;
    padding: 0;
    height: 100%;
  }
`;
