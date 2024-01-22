import React from 'react';
import styled from "styled-components";
import {
    Container,
    FlexWrapper, SrOnly,
    Step,
    StyledPictureWithDecor,
    StyledWrapperPictureWithDecor
} from "../../components";
import myPhotoWebp from "../../assets/images/education/education.webp";
import myPhoto from "../../assets/images/education/education.jpg";
import {theme} from "../../styles";
export const Education = () => {
    return (
        <section>
            <SrOnly>My education</SrOnly>
            <Container>
                <FlexWrapper gap={'28px'} justify={'space-between'} align={'center'}>
                    <StyledWrapperPictureWithDecor>
                        <StyledPictureWithDecor src={myPhotoWebp} srcSet={myPhoto} loading={'lazy'} width={410} height={460} alt={'Бекренева Анна'}/>
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
        </section>
    );
};

const StyledItems = styled(FlexWrapper)`
  flex-direction: column;
  gap: 48px;
  max-width: 680px;
  width: 100%;
`

const StyledStep = styled.li`
  position: relative;

  &::before {
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

  &:last-child {
    &::before {
      opacity: 0;
    }
  }
`
