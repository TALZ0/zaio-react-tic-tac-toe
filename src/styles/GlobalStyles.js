import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
    overflow: hidden;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    min-height: 100dvh;
    transition: background-color 0.3s ease, color 0.3s ease;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    min-height: 100dvh;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    html,
    body {
      height: auto;
      min-height: 100dvh;
      overflow-x: hidden;
      overflow-y: auto;
    }

    #root {
      height: auto;
      min-height: 100dvh;
      overflow: visible;
    }
  }

  button {
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    border: none;
    outline: none;
  }
`;

export default GlobalStyles;
