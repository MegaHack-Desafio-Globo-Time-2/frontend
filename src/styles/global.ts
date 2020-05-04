import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #1F1F1F;
    -webkit-font-smoothing: antialiased;
    font: 19px 'Open Sans', sans-serif;
    color: #fff;
  }

  body, input, button, table {
    font: 16px 'Open Sans', sans-serif;
    border: none;
    outline: none;
    cursor: pointer;
  }

  /* #root {
    margin: 0 auto;
    padding: 40px 20px;
    max-width: 960px;
  } */

  button {
    cursor: pointer;
  }

`;
