import React from 'react';
import {
    Container,
    FlexWrapper,
    Step,
    StepProps,
    StyledPictureWithDecor,
    StyledTitle,
    StyledWrapperPictureWithDecor
} from "../../components";
import {theme} from "../../styles";
import {S} from './Education_Style'
import Tilt from "react-parallax-tilt";

const steps: Omit<StepProps, 'delay'>[] = [
    {
        year: '2020',
        place: 'Layout course by «From 0 to 1»',
        text: 'I have systematized my knowledge of HTML, CSS, and SCSS. I studied the BEM methodology, pixel-perfect coding, and the Gulp build system. There was a lot of practice and i received code reviews from my mentor.'
    },
    {
        year: '2021',
        place: 'Web Design Course by Alexey Bychkov',
        text: 'I learned how to create interactive prototypes and flexible design. I studied the fundamental patterns and principles in design.'
    },
    {
        year: '2022',
        place: '«Academy of Advertising and Sales» by Alexander Korovkin',
        text: 'I learned how to analyze competitors and target audiences. I studied the basics of marketing. I got a better understanding of the business and customer\'s needs.'
    },
    {
        year: '2023',
        place: 'Frontend developer by It-incubator',
        text: 'I studied Javascript, Typescript, React, state managers and Styled Components. I familiarized with the main principles of programming and frontend development. I gained experience working in teams on serious projects.'
    }
]

export const Education = () => {
    return (
        <S.Education id={'education'}>
            <Container>
                <S.WrapperTitle>
                    My <StyledTitle marginBottom={'0'} as={'span'} color={theme.colors.orange500}>
                    education
                </StyledTitle>
                </S.WrapperTitle>
                <FlexWrapper gap={'0'} justify={'space-between'}>
                    <Tilt tiltReverse={true}>
                        <StyledWrapperPictureWithDecor>
                            <StyledPictureWithDecor
                                srcAvif={`${process.env.PUBLIC_URL}/assets/images/education/education.avif 1x, ${process.env.PUBLIC_URL}/assets/images/education/education@2x.avif 2x`}
                                srcWebp={`${process.env.PUBLIC_URL}/assets/images/education/education.webp 1x, ${process.env.PUBLIC_URL}/assets/images/education/education@2x.webp 2`}
                                src={`${process.env.PUBLIC_URL}/assets/images/education/education.jpg`}
                                srcSet={`${process.env.PUBLIC_URL}/assets/images/education/education.jpg 1x, ${process.env.PUBLIC_URL}/assets/images/education/education@2x.jpg, 2x`}
                                loading={'lazy'}
                                width={410}
                                height={460}
                                alt={'Bekreneva Anna'}/>
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
