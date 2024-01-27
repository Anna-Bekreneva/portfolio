import React from 'react';
import {
    Container,
    FlexWrapper,
    Step, StepProps,
    StyledPictureWithDecor, StyledTitle,
    StyledWrapperPictureWithDecor
} from "../../components";
import {theme} from "../../styles";
import {S} from './Education_Style'
import Tilt from "react-parallax-tilt";

const steps: StepProps[] = [
    {
        year: '2020',
        place: 'Layout course by «From 0 to 1»',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
    },
    {
        year: '2021',
        place: 'Web design by Alexey Bychkov',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
    },
    {
        year: '2022',
        place: 'Academy of Advertising and Sales by Alexander Korovkin',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
    },
    {
        year: '2023',
        place: 'Frontend developer by It-incubator',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
    }
]

export const Education = () => {
    return (
        <S.Education>
            <Container>
                <S.WrapperTitle>
                    My <StyledTitle marginBottom={'0'} as={'span'}
                                    color={theme.colors.orange500}>education</StyledTitle>
                </S.WrapperTitle>
                <FlexWrapper gap={'28px'} justify={'space-between'} align={'center'}>
                    <Tilt tiltReverse={true}>
                        <StyledWrapperPictureWithDecor>
                            <StyledPictureWithDecor src={'./assets/images/education/education.webp'}
                                                    srcSet={'./assets/images/education/education.jpg'}
                                                    loading={'lazy'}
                                                    width={410}
                                                    height={460}
                                                    alt={'Bekreneva Anna'}/>
                        </StyledWrapperPictureWithDecor>
                    </Tilt>
                    <S.Items as={'ul'}>
                        { steps.map((step) => {
                            return (
                                <S.Step key={step.place}>
                                    <Step year={step.year} place={step.place} text={step.text}/>
                                </S.Step>
                            )
                        }) }
                    </S.Items>
                </FlexWrapper>
            </Container>
        </S.Education>
    );
};
