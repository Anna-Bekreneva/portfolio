import React from 'react';
import styled from "styled-components";
import {StyledTitle, Skill, Container, SrOnly} from "../../components";
import {adaptive, theme} from "../../styles";

export const Skills = () => {
    return (
        <section>
            <SrOnly hidden>My skills</SrOnly>
            <Container>
                    <StyledItems>
                        <StyledItem aria-hidden>
                            <StyledTitle marginBottom={'0'}>My
                                <StyledTitle marginBottom={'0'} as={'span'} color={theme.colors.orange500}>skills</StyledTitle>
                            </StyledTitle>
                        </StyledItem>
                        {/* todo: use map */}
                        <StyledItem>
                            <Skill backColor={'#f5fcff'} borderColor={'#ddf5ff'} blurColor={'#cef2ff'} title={'React'} id={'reactIcon'}/>
                        </StyledItem>
                        <StyledItem>
                            <Skill backColor={'#faf6ff'} borderColor={'#ede7ff'} blurColor={'#e4d7ff'} title={'Redux'} id={'reduxIcon'} />
                        </StyledItem>
                        <StyledItem>
                            <Skill backColor={'#fffbf2'} borderColor={'#ffeec9'} blurColor={'#ffe9bc'} title={'Javascript'} id={'jsIcon'}/>
                        </StyledItem>
                        <StyledItem>
                            <Skill backColor={'#f6f7ff'} borderColor={'#e7e9ff'} blurColor={'#d7dbff'} title={'Typescript'} id={'tsIcon'} />
                        </StyledItem>
                        <StyledItem>
                            <Skill backColor={'#fffbf2'} borderColor={'#ffeec9'} blurColor={'#ffe9bc'} title={'Git / GitHub'} id={'gitIcon'} />
                        </StyledItem>
                        <StyledItem>
                            <Skill backColor={'#fff6fa'} borderColor={'#ffe7f0'} blurColor={'#ffd7e9'} title={'Styled components'} id={'styledIcon'} />
                        </StyledItem>
                        <StyledItem>
                            <Skill backColor={'#f5fcff'} borderColor={'#ddf5ff'} blurColor={'#cef2ff'} title={'Ant design'} id={'antIcon'} />
                        </StyledItem>
                        <StyledItem>
                            <Skill backColor={'#f6f7ff'} borderColor={'#e7e9ff'} blurColor={'#d7dbff'} title={'Material ui'} id={'materialIcon'} />
                        </StyledItem>
                        <StyledItem>
                            <Skill backColor={'#fff6fa'} borderColor={'#ffe7f0'} blurColor={'#ffd7e9'} title={'css / scss / sass'} id={'scssIcon'}/>
                        </StyledItem>
                    </StyledItems>
            </Container>
        </section>
    );
}

const StyledItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 24px;

  ${adaptive(theme.breakpoints.sm, "max", "width", theme.breakpoints.sm)} {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
`

const StyledItem = styled.li`
  width: 100%;

  &:first-child {
    justify-content: center;
    display: flex;
    align-items: center;
  }
`
