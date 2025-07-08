import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: background 0.3s linear, color 0.3s linear;
  }
`;

export default GlobalStyle;
