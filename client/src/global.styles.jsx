import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    min-height: 100%;
  }

  body {
    height: 100%;
    ${({ theme }) => theme?.fonts.neutral("100%", "400", "1.2")};
  }

  div#root {
    height: 100%;
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
