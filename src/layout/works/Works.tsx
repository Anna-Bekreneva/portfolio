import React, {FC} from 'react';
import {Button, Container, PictureProps, StyledTitle, Work} from "../../components";
import {adaptiveValue, theme} from "../../styles";
import {S} from './Works_Style'

type WorkType = {
    title: string
    text: string
    codeHref: string
    previewHref: string
    tools: string
} & PictureProps

const works: WorkType[] = [
    {
        alt: 'Social network',
        srcWebp: '/assets/images/works/social.webp 1x, /assets/images/works/social@2x.webp 2x',
        srcAvif: '/assets/images/works/social.avif 1x, /assets/images/works/social@2x.avif 2x',
        src: '/assets/images/works/social.jpg',
        srcSet: '/assets/images/works/social@2x.jpg 2x',
        title: 'Social network on React',
        text: 'The project is implemented partially on class components. All the CRUD operations exist there',
        codeHref: 'https://github.com/Anna-Bekreneva/social-network',
        previewHref: '#',
        tools: 'TS, React, Redux, Formik, Axios',
    },
    {
        alt: 'Counter',
        srcWebp: '/assets/images/works/counter.webp 1x, /assets/images/works/counter@2x.webp 2x',
        srcAvif: '/assets/images/works/counter.avif 1x, /assets/images/works/counter@2x.avif 2x',
        src: '/assets/images/works/counter.jpg',
        srcSet: '/assets/images/works/counter@2x.jpg 2x',
        title: 'Counter on React',
        text: 'Small pet project on functional components. Popular and custom hooks are used. Work with localstorage is implemented. App is optimised with reactive capabilities ',
        codeHref: 'https://github.com/Anna-Bekreneva/counter',
        previewHref: 'https://anna-bekreneva.github.io/counter/',
        tools: 'TS, React, Redux, LocalStorage',
    }
]
export const Works: FC = () => {
    return (
        <S.Works id={'works'} backgroundColor={theme.colors.orange50}>
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
                                      srcWebp={work.srcWebp}
                                      srcAvif={work.srcAvif}
                                      src={work.src}
                                      srcSet={work.srcSet}
                                      title={work.title}
                                      text={work.text}
                                      codeHref={work.codeHref}
                                      previewHref={work.previewHref}
                                      tools={work.tools}/>
                            </S.Item>
                        )
                    })}
                </S.Items>
                <Button as={'a'} href={'#contacts'}>
                    Cooperate!
                </Button>
            </Container>
        </S.Works>
    );
};
