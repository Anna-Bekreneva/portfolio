import styled from "styled-components";
import {adaptive, theme} from "../../styles";

const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 24px;

  ${adaptive(theme.breakpoints.sm, "max", "width", theme.breakpoints.sm)} {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
`

const Item = styled.li<{blurColor?: string}>`
  width: 100%;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 124px;
    height: 124px;
    border-radius: 10px;
    background-color: ${props => props.blurColor};
    filter: blur(50px);
    z-index: 0;
    ${adaptive(theme.breakpoints.lg, "max", "width", theme.breakpoints.lg)} {
      width: 68px;
      height: 68px;
    }
  }

  &:first-child {
    justify-content: center;
    display: flex;
    align-items: center;
    
    &::before {
      opacity: 0;
    }
  }
`

export const S = { Items, Item }