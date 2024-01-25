import React, {FC} from 'react';
import {IconWrapper, Icon, IconProps} from "../common";
import {StyledSkillProps, S} from "./Skill_Style";
export type SkillType = {
    title: string
} & IconProps & StyledSkillProps
export const Skill: FC<SkillType> = ({ title, backgroundColor, borderColor, blurColor, ...props }) => {
    return (
        <S.Skill backgroundColor={backgroundColor} borderColor={borderColor} blurColor={blurColor}>
                <IconWrapper>
                    <Icon width={'54'} height={'54'} {...props}/>
                </IconWrapper>
                <S.Title>{title}</S.Title>
        </S.Skill>
    );
};