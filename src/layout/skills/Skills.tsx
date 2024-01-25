import React, {FC} from 'react';
import {StyledTitle, Container, SrOnly, Section} from "../../components";
import {theme} from "../../styles";
import {S} from './Skills_Styles'
import {Skill, SkillType} from "../../components/skill";


const skills: SkillType[] = [
    {
        title: 'React',
        idIcon: 'reactIcon',
        backgroundColor: '#f5fcff',
        borderColor: '#ddf5ff',
        blurColor: '#cef2ff',
    },
    {
        title: 'Redux',
        idIcon: 'reduxIcon',
        backgroundColor: '#faf6ff',
        borderColor: '#ede7ff',
        blurColor: '#e4d7ff',
    },
    {
        title: 'Javascript',
        idIcon: 'jsIcon',
        backgroundColor: '#faf6ff',
        borderColor: '#ede7ff',
        blurColor: '#ffe9bc',
    },
    {
        title: 'Typescript',
        idIcon: 'tsIcon',
        backgroundColor: '#f6f7ff',
        borderColor: '#e7e9ff',
        blurColor: '#d7dbff',
    },
    {
        title: 'Git / GitHub',
        idIcon: 'gitIcon',
        backgroundColor: '#fffbf2',
        borderColor: '#ffeec9',
        blurColor: '#ffe9bc',
    },
    {
        title: 'Styled components',
        idIcon: 'styledIcon',
        backgroundColor: '#fff6fa',
        borderColor: '#ffe7f0',
        blurColor: '#ffd7e9',
    },
    {
        title: 'Ant design',
        idIcon: 'antIcon',
        backgroundColor: '#f5fcff',
        borderColor: '#ddf5ff',
        blurColor: '#cef2ff',
    },
    {
        title: 'Material ui',
        idIcon: 'materialIcon',
        backgroundColor: '#f6f7ff',
        borderColor: '#e7e9ff',
        blurColor: '#d7dbff',
    },
    {
        title: 'css / scss / sass',
        idIcon: 'scssIcon',
        backgroundColor: '#fff6fa',
        borderColor: '#ffe7f0',
        blurColor: '#ffd7e9',
    }
]

export const Skills: FC = () => {
    return (
        <Section padding={'120px 0'} mobilePadding={'50px 0'}>
            <SrOnly hidden>My skills</SrOnly>
            <Container>
                    <S.Items>
                        <S.Item aria-hidden>
                            <StyledTitle marginBottom={'0'}>My {' '}
                                <StyledTitle marginBottom={'0'} as={'span'} color={theme.colors.orange500}> skills</StyledTitle>
                            </StyledTitle>
                        </S.Item>

                        { skills.map((skill) => {
                            return (
                                <S.Item>
                                    <Skill title={skill.title}
                                           idIcon={skill.idIcon}
                                           backgroundColor={skill.backgroundColor}
                                           borderColor={skill.borderColor}
                                           blurColor={skill.blurColor}/>
                                </S.Item>
                            )
                        })}

                    </S.Items>
            </Container>
        </Section>
    );
}
