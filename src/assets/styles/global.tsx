import { createGlobalStyle } from 'styled-components';

// import colors from './schema/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font-family: 'Poppins', sans-serif;

    color-scheme: light dark;
    color: #ecf0f1;
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    width: 100vw;
    height: 100vh;
  }
  
  *:focus {
    outline: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .MuiDialog-paper {
    background: transparent !important;
  }

  .MuiFormLabel-root, .Mui-focused{
    color: #ecf0f1 !important;
  }

  .MuiInputBase-input{
    color: #e0e0e0dc !important;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: #383838 !important;
  }
`;
