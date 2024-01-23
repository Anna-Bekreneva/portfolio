import React from 'react';
import styled from "styled-components";
import {Button, Container, FlexWrapper, StyledTitle, Work} from "../../components";
import social from '../../assets/images/works/social.jpg'
import socialWebp from '../../assets/images/works/social.webp'
import counter from '../../assets/images/works/counter.jpg'
import counterWebp from '../../assets/images/works/counter.webp'
import {adaptive, adaptiveValue, theme} from "../../styles";

export const Works = () => {
    return (
        <section>
            <Container>
                <StyledWrapperTitle marginBottom={'48px'} textAlign={'center'}>
                    My <StyledTitle marginBottom={'0'} as={'span'} color={theme.colors.orange500}>portfolio</StyledTitle>
                </StyledWrapperTitle>
                <StyledItems>
                    <StyledItem>
                        <Work alt={'Social network'}
                              srcSet={socialWebp}
                              src={social}
                              title={'Social network on React'}
                              text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                              codeHref={'#'} previewHref={'#'}
                              tools={'JS, TS, React, Redux, Formik, axios'}/>
                    </StyledItem>
                    <StyledItem>
                        <Work alt={'Counter'}
                              srcSet={counterWebp}
                              src={counter}
                              title={'Counter on React'}
                              text={'Краткое описание и очень краткое описание. Краткое и очень краткое описание'}
                              codeHref={'#'} previewHref={'#'}
                              tools={'JS, TS, React, Redux, Formik, axios'}/>
                    </StyledItem>
                </StyledItems>
                <StyledButton type={'button'}>
                    Cooperate!
                </StyledButton>
            </Container>
        </section>
    );
};

const StyledWrapperTitle = styled(StyledTitle)`
  display: block;
  margin-bottom: ${adaptiveValue(48, 32)};
  text-align: center;
`

const StyledItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${adaptiveValue(36, 20)};
  margin-bottom: ${adaptiveValue(32, 26)};

  ${adaptive(theme.breakpoints.sm, "max", "width", theme.breakpoints.sm)} {
    grid-template-columns: 1fr;
  }
`

const StyledItem = styled.li`
  width: 100%;
`
const StyledButton = styled(Button)`
  margin: 0 auto;
  justify-content: center;
`