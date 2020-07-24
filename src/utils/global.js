import {createGlobalStyle} from "styled-components"
import {primaryFont} from "./typography.js"
import {normalize} from "polished"

export const GlobalStyle = createGlobalStyle `
  ${normalize()}
  html {
      font-size: 16px;
      boarder-sizing:  boarder-box;
  }

  *, *:before, *:after {

    box-sizing: inherit;
  }

  body {
      margin: 0;
      font-famils: ${primaryFont};
      padding: 150px;

  }

  main {
      width: 90%;
      margin: 
  }
`