import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/button";

import { GlobalStyle } from "./utils";

const App = () => (
  <div>
    <PrimaryButton>Hello one</PrimaryButton>
    <SecondaryButton>Hello two</SecondaryButton>
    <TertiaryButton>Hello three</TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
