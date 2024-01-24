import React from 'react';
import styled from "styled-components";
import {
    Container,
    FlexWrapper,
    Step,
    StyledPictureWithDecor, StyledTitle,
    StyledWrapperPictureWithDecor
} from "../../components";
import myPhotoWebp from "../../assets/images/education/education.webp";
import myPhoto from "../../assets/images/education/education.jpg";
import {adaptive, adaptiveValue, theme} from "../../styles";

export const Education = () => {
    return (
        <StyledEducation>
            <Container>
                <StyledWrapperTitle marginBottom={`${adaptiveValue(48, 24)}`}>
                    My <StyledTitle marginBottom={'0'} as={'span'}
                                    color={theme.colors.orange500}>education</StyledTitle>
                </StyledWrapperTitle>
                <FlexWrapper gap={'28px'} justify={'space-between'} align={'center'}>
                    <StyledWrapperPictureWithDecor>
                        <StyledPictureWithDecor src={myPhotoWebp} srcSet={myPhoto} loading={'lazy'} width={410}
                                                height={460} alt={'Бекренева Анна'}/>
                    </StyledWrapperPictureWithDecor>
                    <StyledItems as={'ul'}>
                        <StyledStep>
                            <Step year={'2020'}
                                  place={"Layout course by «From 0 to 1»"}
                                  text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                            />
                        </StyledStep>
                        <StyledStep>
                            <Step year={'2021'}
                                  place={"Web design by Alexey Bychkov"}
                                  text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                            />
                        </StyledStep>
                        <StyledStep>
                            <Step year={'2022'}
                                  place={"Academy of Advertising and Sales by Alexander Korovkin"}
                                  text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                            />
                        </StyledStep>
                        <StyledStep>
                            <Step year={'2023'}
                                  place={"Frontend developer by It-incubator"}
                                  text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                            />
                        </StyledStep>
                    </StyledItems>
                </FlexWrapper>
            </Container>
        </StyledEducation>
    );
};

const StyledWrapperTitle = styled(StyledTitle)`
  ${adaptive(theme.breakpoints.md, "min", "width", theme.breakpoints.md)} {
    visibility: hidden;
  }
`

const StyledEducation = styled.section`

  ${StyledWrapperPictureWithDecor} {
    align-self: flex-start;
    margin-left:20px;

    ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
      display: none;
    }
  }
`

const StyledItems = styled(FlexWrapper)`
  flex-direction: column;
  gap: ${adaptiveValue(48, 24)};
  width: 100%;

  ${adaptive(theme.breakpoints.md, "min", "width", theme.breakpoints.md)} {
    max-width: 600px;
  }
`

const StyledStep = styled.li`
  position: relative;

  &::before {

    ${adaptive(theme.breakpoints.lg, "min", "width", theme.breakpoints.lg)} {
      position: absolute;
      content: "";
      width: 1px;
      background-color: ${theme.colors.brown400};
      opacity: 0.2;
      left: 50px;
      top: 0;
      z-index: 0;
      height: calc(100% + 28px);
    }
  }

  &:last-child {
    &::before {
      opacity: 0;
    }
  }
`
