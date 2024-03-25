import { createGlobalStyle } from 'styled-components';
import {theme} from "./Theme";
import {adaptive} from "./Common";

export function fontFace(fontFamily: string, url: string, weight: number ){
    return `
      @font-face{
          font-family: "${fontFamily}";
        src: url('${process.env.PUBLIC_URL}/assets/fonts/${url}.woff2') format("woff2"),
        url('${process.env.PUBLIC_URL}/assets/fonts/${url}.woff') format("woff");
        font-weight: ${weight};
        font-display: swap;
        font-style: normal;
      }
  `;
}

export const GlobalStyles = createGlobalStyle`
  ${fontFace('Inter', 'Inter-Regular', 400)}
  ${fontFace('Inter', 'Inter-Medium', 500)}
  ${fontFace('Inter', 'Inter-SemiBold', 600)}
  ${fontFace('Inter', 'Inter-Bold', 700)}
  
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  ul,
  ol {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font: inherit;
  }

  img {
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    color: inherit;
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  address {
    font-style: normal;
  }

  button,
  input,
  textarea {
    display: inline-block;
    padding: 0;
    background-color: transparent;
    border: 0;
  }

  button {
    cursor: pointer;
    appearance: none;
  }

  input {
    margin: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
  }

  legend {
    padding: 0;
  }

  picture {
    line-height: 0;
  }

  label {
    cursor: pointer;
  }

  input,
  textarea {
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus
    &:-webkit-autofill {
      -webkit-text-fill-color: #1f1f20;
      -webkit-box-shadow: 0 0 0 1000px transparent inset;
      transition: background-color 5000s ease-in-out 0s;
      background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(0, 174, 255, 0.04) 50%, rgba(255, 255, 255, 0) 51%, rgba(0, 174, 255, 0.03) 100%);
    }
  }

  body {
    color: ${theme.colors.dark800};
    font-weight: 400;
    font-size: 16px;
    font-family: 'Inter', 'Roboto', sans-serif;
    line-height: 1.4;
    background-color: ${theme.colors.white};

    ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
      font-size: 15px;
    }
  }
`