import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    overflow: hidden;
  }

  body {
    -webkit-font-smoothing: antialiased;

    overflow: hidden;

    background-color: #f4f3ef;

    button {
      outline: none;

      background: transparent;
      border: none;

      cursor: pointer;
    }
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
`;
