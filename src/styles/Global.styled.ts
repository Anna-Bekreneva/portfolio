import { createGlobalStyle } from 'styled-components';
import {theme} from "./Theme";
import {adaptive, adaptiveValue} from "./Common";

export function fontFace(fontFamily: string, url: string, weight: number ){
    return `
      @font-face{
          font-family: "${fontFamily}";
        src: url('../assets/fonts/${url}.woff2') format("woff2"),
        url('../assets/fonts/${url}.woff') format("woff");
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

  body {
    color: ${theme.colors.dark800};
    font-weight: 400;
    font-size: 16px;
    // Посмотреть видео про шрифты от Светы и дополнить это свойство
    font-family: 'Inter', 'Roboto', sans-serif;
    line-height: 1.4;
    background-color: ${theme.colors.white};

    ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
      font-size: 15px;
    }
  }
  
  section {
    padding: 120px 0;
    
    &:nth-child(odd) {
      background-color: ${theme.colors.orange50};
      padding: 100px 0;
    }
  }
`