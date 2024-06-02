import styled from "styled-components";
import {adaptive, theme} from "styles";
import {IconWrapper} from "../common";

const Skill = styled.article<StyledSkillProps>`
  border-radius: 4px 40px;
  padding: 30px;
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.borderColor};
  width: 100%;
  height: 100%;
  gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 5;
  
  ${IconWrapper} {
    ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
      width: 36px;
      height: 36px;
    }
  }
  
  ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
    border-radius: 4px 28px;
    padding: 24px 20px 20px;
    gap: 10px;
  }
`

const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.dark800};
  text-align: center;

  ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
    font-size: 16px;
    line-height: 1.2;
  }
`
export type StyledSkillProps = {
    backgroundColor: string
    borderColor: string;
}

export const S = {
    Skill, Title
}