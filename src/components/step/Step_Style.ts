import {FlexWrapper, StyledTitle} from "../common";
import styled from "styled-components";
import {adaptive, theme} from "styles";

const Step = styled.article`
  ${FlexWrapper} {
    ${adaptive(theme.breakpoints.lg, "max", "width", theme.breakpoints.lg)} {
      flex-direction: column;
      gap: 12px;
    }

    ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
      flex-direction: column-reverse;
    }
  }
`

const Year = styled(StyledTitle)`
  font-size: 16px;
  margin-bottom: 0;
  line-height: 1;
  padding: 12px;
  width: 100px;
  text-align: center;
  margin-top: -8px;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.orange300};
  border-radius: 2px 24px;
  align-self: self-start;
  flex-shrink: 0;
  transition: background-color 0.3s;
  z-index: 1;

  ${adaptive(theme.breakpoints.lg, "max", "width", theme.breakpoints.lg)} {
    font-size: 15px;
    padding: 8px;
    width: 80px;
    margin-top: 0;
  }
`

export const S = {Step, Year}