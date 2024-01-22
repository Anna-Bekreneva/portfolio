import React, {FC} from 'react';
import styled from "styled-components";
import {Icon, IconProps} from "../common";
import {adaptive, theme} from "../../styles";
export const Skill: FC<SkillType> = ({ title, backColor, borderColor, blurColor, ...props }) => {
    return (
        <StyledSkill backColor={backColor} borderColor={borderColor} blurColor={blurColor}>
                <StyledWrapperIcon>
                    <Icon width={'54'} height={'54'} {...props}/>
                </StyledWrapperIcon>
                <StyledTitle>{title}</StyledTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.article<StyledSkillProps>`
  border-radius: 4px 40px;
  padding: 30px;
  position: relative;
  background-color: ${props => props.backColor};
  border: 1px solid ${props => props.borderColor};
  width: 100%;
  height: 100%;
  gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
    border-radius: 4px 28px;
    padding: 24px 20px 20px;
    gap: 10px;
  }
  
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
    z-index: -2;
  }
`
const StyledWrapperIcon = styled.div`
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
    width: 36px;
    height: 36px;
  }
`

const StyledTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: ${theme.colors.dark800};
  text-align: center;

  ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
    font-size: 16px;
    line-height: 1.2;
  }
`

type SkillType = {
    title: string
} & IconProps & StyledSkillProps

type StyledSkillProps = {
    backColor: string
    borderColor: string;
    blurColor: string;
}