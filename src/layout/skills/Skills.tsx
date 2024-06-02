import React, {FC} from 'react';
import {StyledTitle, Container, SrOnly, Section} from "components";
import {theme} from "styles";
import {S} from './Skills_Styles'
import {Skill} from "components/skill";
import {skills} from "layout/skills/skills-data";

export const Skills: FC = () => {
    return (
        <Section id={'skills'} padding={'120px 0'} mobilePadding={'50px 0'}>
            <SrOnly hidden>Мои навыки</SrOnly>
            <Container>
                    <S.Items>
                        <S.Item aria-hidden>
                            <StyledTitle marginBottom={'0'}>Мои {' '}
                                <StyledTitle marginBottom={'0'} as={'span'} color={theme.colors.orange500}> навыки</StyledTitle>
                            </StyledTitle>
                        </S.Item>

                            { skills.map((skill) => {
                                return (
                                    <S.Item key={skill.idIcon} blurColor={skill.blurColor}>
                                        <Skill title={skill.title}
                                               idIcon={skill.idIcon}
                                               backgroundColor={skill.backgroundColor}
                                               borderColor={skill.borderColor}/>
                                    </S.Item>
                                )
                            })}

                    </S.Items>
            </Container>
        </Section>
    );
}
