import {CreateGlobalStyle, createGlobalStyle} from "styled-components"
import {primaryFont} from "./typography.js"
import {normalised} from "polished"

export const myGlobalStyle = createGlobalStyle`
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
  }

  main {
      width: 90%;
      margin: 
  }
`