import React, {FC} from 'react';
import {IconWrapper, Icon, IconProps} from "../common";
import {StyledSkillProps, S} from "./Skill_Style";
import {Bounce, Slide} from "react-awesome-reveal";
export type SkillType = {
    title: string
    blurColor: string
} & IconProps & StyledSkillProps
export const Skill: FC<Omit<SkillType, 'blurColor'>> = ({ title, backgroundColor, borderColor, ...props }) => {
    return (
        <S.Skill backgroundColor={backgroundColor} borderColor={borderColor}>
                <Bounce>
                    <IconWrapper>
                        <Icon width={'54'} height={'54'} {...props}/>
                    </IconWrapper>
                </Bounce>
                <S.Title>{title}</S.Title>
        </S.Skill>
    );
};