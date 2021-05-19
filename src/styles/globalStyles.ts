import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
  body {
    
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  .app {
    min-height: 100vh;
    width: 100vw;
    background-color: rgba(168, 173, 182, 1);
    display: grid;
    place-items: center;
  }
`;

export default GlobalStyle;
