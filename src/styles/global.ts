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
    font-family: 'Open Sans', sans-serif;
  }

  body, input, button, table {
    font: 14px 'Open Sans', sans-serif;
  }

  #root {
    margin: 0 auto;
    padding: 40px 20px;
    max-width: 960px;
  }

  button {
    cursor: pointer;
  }

`;
