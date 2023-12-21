import styled from "styled-components";
import {theme} from "../../../styles";

export const Button = styled.button`
  color: ${theme.colors.white};
  padding: 12px 36px;
  background-color: ${theme.colors.orange500};
  border-radius: 2px 24px;
  position: relative;
  text-align: center;
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 500;
`