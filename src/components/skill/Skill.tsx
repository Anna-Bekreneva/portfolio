import React, {FC} from 'react';
import styled from "styled-components";
import {Icon, IconProps, StyledTitle} from "../common";

type SkillType = {
    title: string
} & IconProps
export const Skill: FC<SkillType> = ({ title, ...props }) => {
    return (
        <StyledSkill>
            <Icon {...props}/>
            <StyledTitle as={'h3'}>{title}</StyledTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.article``
