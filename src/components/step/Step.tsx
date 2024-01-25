import React, {FC} from 'react';
import {FlexWrapper, StyledTitle} from "../common";
import {adaptiveValue, theme} from "../../styles";
import {S} from './Step_Style'

export type StepProps = {
    year: string
    place: string
    text: string
}
export const Step: FC<StepProps> = ({year, place, text}) => {
    return (
        <S.Step>
            <FlexWrapper>
                <S.Year as={'span'} marginBottom={'0'}>{year}</S.Year>
                <div>
                    <StyledTitle fontSize={`${adaptiveValue(22, 18)}`} marginBottom={'10px'} color={theme.colors.blue500} as={'h3'}>{place}</StyledTitle>
                    <p>{text}</p>
                </div>
            </FlexWrapper>
        </S.Step>
    );
};

