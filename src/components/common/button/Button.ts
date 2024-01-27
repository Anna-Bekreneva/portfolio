import styled from "styled-components";
import {adaptive, theme} from "../../../styles";
export const Button = styled.button`
  color: ${theme.colors.white};
  padding: 12px 36px;
  background-color: ${theme.colors.orange500};
  border-radius: 2px 24px;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: border-radius 0.3s, background-color 0.3s, color 0.3s, border-color 0.3s;
  outline: 0;
  border: 1px solid transparent;
  
  &:focus-visible {
    background-color: transparent;
    color: ${theme.colors.orange500};
    border-color: ${theme.colors.orange500};
  }
  
  &:hover {
    border-radius: 6px;
  }
  
  &:active {
    background-color: ${theme.colors.orange300};
  }
`
