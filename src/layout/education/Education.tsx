import React from 'react';
import {
    Container,
    FlexWrapper,
    Step,
    StyledPictureWithDecor,
    StyledTitle,
    StyledWrapperPictureWithDecor
} from "components";
import {theme} from "styles";
import {S} from './Education_Style'
import Tilt from "react-parallax-tilt";
import {steps} from "./education-data";

export const Education = () => {
    return (
        <S.Education id={'education'}>
            <Container>
                <S.WrapperTitle>
                    Мое <StyledTitle marginBottom={'0'} as={'span'} color={theme.colors.orange500}>
                    Образование
                </StyledTitle>
                </S.WrapperTitle>
                <FlexWrapper gap={'0'} justify={'space-between'}>
                    <Tilt tiltReverse>
                        <StyledWrapperPictureWithDecor>
                            <StyledPictureWithDecor
                                srcAvif={`${process.env.PUBLIC_URL}/assets/images/education/education.avif 1x, ${process.env.PUBLIC_URL}/assets/images/education/education@2x.avif 2x`}
                                srcWebp={`${process.env.PUBLIC_URL}/assets/images/education/education.webp 1x, ${process.env.PUBLIC_URL}/assets/images/education/education@2x.webp 2`}
                                src={`${process.env.PUBLIC_URL}/assets/images/education/education.jpg`}
                                srcSet={`${process.env.PUBLIC_URL}/assets/images/education/education.jpg 1x, ${process.env.PUBLIC_URL}/assets/images/education/education@2x.jpg, 2x`}
                                loading={'lazy'}
                                width={410}
                                height={460}
                                alt={'Бекренева Анна'}/>
                        </StyledWrapperPictureWithDecor>
                    </Tilt>
                    <S.Items as={'ul'}>
                        {steps.map((step, index) => {
                            return (
                                <S.Step key={step.place}>
                                    <Step delay={index + 1.5} year={step.year} place={step.place} text={step.text}/>
                                </S.Step>
                            )
                        })}
                    </S.Items>
                </FlexWrapper>
            </Container>
        </S.Education>
    );
};
