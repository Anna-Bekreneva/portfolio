import styled from "styled-components";
import {theme} from "../../../styles";

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
  font-size: 16px;
  font-weight: 500;
`