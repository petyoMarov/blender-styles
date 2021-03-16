import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    font-family: 'Ubuntu', 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #111111;
    color: #333333;
    font-size: 16px;
  }
`;

export default GlobalStyles;
