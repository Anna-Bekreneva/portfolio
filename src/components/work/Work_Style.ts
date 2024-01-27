import styled from "styled-components";
import {adaptive, adaptiveValue, focusVisible, theme} from "../../styles";
import {IconWrapper, StyledPicture, StyledTitle} from "../common";

const WrapperPicture = styled.div`
  border-radius: 12px;
  width: 100%;
  position: relative;
  display: block;
  z-index: 2;
  padding-bottom: 60%;

  ${StyledPicture} {
    border-radius: inherit;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      border-radius: inherit;
      height: 100%;
      width: 100%;
    }
  }

  &::before {
    border-radius: inherit;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.dark900};
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 2;
  }
`

const Content = styled.div`
  padding: 24px;
  background-color: ${theme.colors.white};
  border-radius: 0 0 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  box-shadow: 0 -5px 35px 0 rgba(255, 189, 148, 0.25);
  
  @media screen and (any-hover: hover) and (min-width: ${theme.breakpoints.xl}) {
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 3;
    transform: translate(-50%, -50%);
    transition: top 0.5s, width 0.3s, height 0.4s, border-radius 0.4s;
    width: max-content;
    padding: 12px 24px;
    border-radius: 2px 24px;
    height: auto;
  }

  ${adaptive(theme.breakpoints.lg, "max", "width", theme.breakpoints.lg)} {
    padding: 20px 16px 20px;
    border-radius: 0 0 12px 12px;
  }

  @media screen and (any-hover: none) {
    ${StyledTitle} {
      margin-bottom: 12px;
    }
  }
  
  ${StyledTitle} {
    ${adaptive(theme.breakpoints.xl, "max", "width", theme.breakpoints.xl)} {
      font-size: ${adaptiveValue(24, 18)};
      margin-bottom: 12px;
    }
  }
`

const Box = styled.div`
  @media screen and (any-hover: none) {
    margin-bottom: 20px;
  }

  ${adaptive(theme.breakpoints.lg, "max", "width", theme.breakpoints.lg)} {
    margin-bottom: 16px;
  }
`

const Text = styled.p`
  margin-bottom: 12px;
  
  @media screen and (any-hover: hover) and (min-width: ${theme.breakpoints.xl}){
    display: none;
  }
`

const Tools = styled.div`
  @media screen and (any-hover: hover) and (min-width: ${theme.breakpoints.xl}) {
    display: none;
  }
  
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  color: ${theme.colors.blue500};
  
  p {
    font-weight: 500;
  }
`

const Links = styled.div`
  align-items: center;
  gap: 14px 28px;
  padding-top: 12px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    content: "";
    background-color: ${theme.colors.brown400};
    opacity: 0.2;
  }

  @media screen and (any-hover: hover) and (min-width: ${theme.breakpoints.xl}) {
    display: none;
  }
`

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${theme.colors.blue500};
  transition: color 0.3s, box-shadow 0.3s;
  ${focusVisible()};
  
  &:hover {
    color: ${theme.colors.orange500};
  }
  
  &:first-child {
    &:hover {
      
      ${IconWrapper} {
        background-color: ${theme.colors.orange500};
      }
    }
  }

  &:last-child {
    &:hover {
      svg {
        fill: ${theme.colors.orange500};
      }
    }
  }

  ${IconWrapper} {
    transition: background-color 0.3s;
  }
  
  svg {
    transition: fill 0.3s;
  }

  ${adaptive(theme.breakpoints.sm, "max", "width", theme.breakpoints.sm)} {
    gap: 6px;
  }
`

const Work = styled.article`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.white};
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  border-radius: 24px;

  ${IconWrapper} {
    border-radius: 50%;
    background-color: ${theme.colors.brown400};
  }
  
  @media screen and (any-hover: hover) and (min-width: ${theme.breakpoints.xl}) {
    &:hover {
      ${Content} {
        padding: 30px;
        width: 84%;
        min-height: 20%;
        top: 50%;
        border-radius: 4px 60px;
      }
      
      ${Tools} {
        display: flex;
      }

      ${StyledTitle} {
        font-size: ${adaptiveValue(24, 18)};
        margin-bottom: 12px;
      }

      ${Text} {
        display: block;
      }

      ${WrapperPicture} {
        &::before {
          opacity: 0.7;
        }
      }
      
      ${Box} {
        margin-bottom: 20px;
      }
      
      ${Links} {
        display: flex;
      }
    }
  }
`

export const S = {
    WrapperPicture, Content, Box, Text, Tools, Links, Link, Work
}
