import {adaptive, theme} from "../../styles";
import styled, {css} from "styled-components";
import {FlexWrapper} from "../../components";

const Header = styled.header`
  background-color: ${theme.colors.orange50};
  color: ${theme.colors.blue500};
  padding-top: 16px;
  padding-bottom: 16px;
`

const HeaderWrapper = styled(FlexWrapper)<{isOpen: boolean}>`
  justify-content: space-between;
  align-items: center;

  ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 270px;
    margin-right: 0;
    padding: 40px 24px;
    overflow: hidden;
    background-color: ${theme.colors.orange200};
    transform: translateX(100%);
    visibility: hidden;
    transition: transform 0.5s;
    flex-direction: column;
    align-items: flex-start;
    
    ${props => {
        if (props.isOpen) {
            return css`
              ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
                right: 0;
                z-index: 50;
                height: 100vh;
                overflow-y: auto;
                transform: translateX(0);
                visibility: visible;
                opacity: 1;
                transition: transform 0.3s ease-in-out;
              }
            `
        }
    }
  }
`

const MenuWrapper = styled(FlexWrapper)`
  ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
    flex-direction: column;
  }
`

const Burger = styled.button<{isOpen?: boolean}>`
  position: absolute;
  z-index: 51;
  width: 30px;
  height: 30px;
  right: 15px;

  &::before,
  &::after {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transition: transform 0.3s ease-in-out, top 0.3s ease-in-out;
    content: '';
  }

  &::before {
    top: 0;
  }

  &::after {
    top: calc(100% - 2px);
  }

  ${props => {
    if (props.isOpen) {
      return css`
        position: fixed;
        
        &::before,
        &::after {
          top: 50%;
          transition: transform 0.3s ease-in-out, top 0.3s ease-in-out;
        }

        &::before {
          transform: rotate(45deg);
        }

        &::after {
          transform: rotate(-45deg);
        }
          `
    }
  }}
  
  ${adaptive(theme.breakpoints.md, "min", "width", theme.breakpoints.md)} {
    display: none;
  }
`

const BurgerLine = styled.span<{isOpen?: boolean}>`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  transform: translateY(-50%);
  transition: transform 0.3s ease-in-out;

  ${props => {
    if (props.isOpen) {
        return css `
          transform: scale(0);
          transition: transform 0.3s ease-in-out;
        `
    }
  }}
`


export const S = {Header, HeaderWrapper, MenuWrapper, Burger, BurgerLine}