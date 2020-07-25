import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

const PrimaryColour = "#E08524";
const SecondaryColour = "#B06617";
const TertiaryColour = "#F2830C";

const Button = styled.button`
  padding: 12px 24px;
  fontsize: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roberto Mono", monospace;
  border: none;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${defaultTheme.disabled};
    border: none;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${PrimaryColour};
`;
export const SecondaryButton = styled(Button)`
  background-color: ${SecondaryColour};
`;

export const TertiaryButton = styled(Button)`
  background-color: ${TertiaryColour};
`;
export default PrimaryButton;
