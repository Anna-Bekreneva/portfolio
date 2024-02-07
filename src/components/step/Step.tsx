import React, {FC} from 'react';
import {FlexWrapper, StyledTitle} from "../common";
import {adaptiveValue, theme} from "../../styles";
import {S} from './Step_Style'
import {Fade} from "react-awesome-reveal";

export type StepProps = {
    year: string
    place: string
    text: string
    delay: number
}
export const Step: FC<StepProps> = ({year, place, text, delay}) => {
    return (
        <S.Step>
            <FlexWrapper>
                <S.Year as={'span'} marginBottom={'0'}>{year}</S.Year>
                <Fade direction={'right'} delay={delay} className={'animation-off-mobile'} triggerOnce>
                    <div>
                        <StyledTitle fontSize={`${adaptiveValue(22, 18)}`} marginBottom={'10px'} color={theme.colors.blue500} as={'h3'}>{place}</StyledTitle>
                        <p>{text}</p>
                    </div>
                </Fade>
            </FlexWrapper>
        </S.Step>
    );
};

