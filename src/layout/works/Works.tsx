import React, {FC} from 'react';
import {Button, Container, StyledTitle, Work} from "../../components";
import {adaptiveValue, theme} from "../../styles";
import {S} from './Works_Style'

type WorkType = {
    alt: string
    srcSet: string
    src: string
    title: string
    text: string
    codeHref: string
    previewHref: string
    tools: string
}

const works: WorkType[] = [
    {
        alt: 'Social network',
        srcSet: './assets/images/works/social.webp',
        src: './assets/images/works/social.jpg',
        title: 'Social network on React',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        codeHref: 'https://github.com/Anna-Bekreneva/social-network',
        previewHref: '#',
        tools: 'JS, TS, React, Redux, Formik, axios',
    },
    {
        alt: 'Counter',
        srcSet: './assets/images/works/counter.webp',
        src: './assets/images/works/counter.jpg',
        title: 'Counter on React',
        text: 'Краткое описание и очень краткое описание. Краткое и очень краткое описание',
        codeHref: 'https://github.com/Anna-Bekreneva/counter',
        previewHref: '#',
        tools: 'JS, TS, React, Redux, Formik, axios',
    }
]
export const Works: FC = () => {
    return (
        <S.Works backgroundColor={theme.colors.orange50}>
            <Container>
                <StyledTitle textAlign={'center'} display={'block'} marginBottom={`${adaptiveValue(56, 28)}`}>
                    My <StyledTitle marginBottom={'0'} as={'span'}
                                    color={theme.colors.orange500}>portfolio</StyledTitle>
                </StyledTitle>
                <S.Items>

                    {works.map((work) => {
                        return (
                            <S.Item key={work.title}>
                                <Work alt={work.alt}
                                      srcSet={work.srcSet}
                                      src={work.src}
                                      title={work.title}
                                      text={work.text}
                                      codeHref={work.codeHref}
                                      previewHref={work.previewHref}
                                      tools={work.tools}/>
                            </S.Item>
                        )
                    })}
                </S.Items>
                <Button type={'button'}>
                    Cooperate!
                </Button>
            </Container>
        </S.Works>
    );
};
