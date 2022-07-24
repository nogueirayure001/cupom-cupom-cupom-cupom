import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    min-height: 100%;
  }

  body {
    height: 100%;
    font: 100%/1.2 "Poppins", sans-serif;
  }

  div#root {
    height: 100%;
    width: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  button {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
