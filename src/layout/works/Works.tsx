import React, {FC} from 'react';
import {Button, Container, PictureProps, StyledTitle, Work} from "../../components";
import {adaptiveValue, theme} from "../../styles";
import {S} from './Works_Style'
import {Link} from "react-scroll";
import styled from "styled-components";

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
        srcSet: '/assets/images/works/social.jpg 1x, /assets/images/works/social@2x.jpg 2x',
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
    },
    // {
    //     alt: 'Todolist',
    //     srcWebp: `${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist.webp 1x, ${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist@2x.webp 2x`,
    //     srcAvif: `${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist.avif 1x, ${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist@2x.avif 2x`,
    //     src: `${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist.jpg`,
    //     srcSet: `${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist@2x.jpg 2x`,
    //     title: 'Todolist on React',
    //     text: 'This project is implemented on redux-toolkit. All components are tested with storybook. Material ui is connected for beautiful design',
    //     codeHref: 'https://github.com/Anna-Bekreneva/todolist',
    //     previewHref: 'https://anna-bekreneva.github.io/todolist',
    //     tools: 'TS, React, Redux Toolkit, Redux-Thunk, Storybook, Material Ui, Formik, Axios',
    // }
]

// const works: WorkType[] = [
//     {
//         alt: 'Social network',
//         srcWebp: `${process.env.PUBLIC_URL}/assets/images/works/social/social.webp 1x, ${process.env.PUBLIC_URL}/assets/images/works/social/social@2x.webp 2x`,
//         srcAvif: `${process.env.PUBLIC_URL}/assets/images/works/social/social.avif 1x, ${process.env.PUBLIC_URL}/assets/images/works/social/social@2x.avif 2x`,
//         src: `${process.env.PUBLIC_URL}/assets/images/works/social/social.jpg`,
//         srcSet: `${process.env.PUBLIC_URL}/assets/images/works/social/social@2x.jpg 2x`,
//         title: 'Social network on React',
//         text: 'The project is implemented partially on class components. All the CRUD operations exist there',
//         codeHref: 'https://github.com/Anna-Bekreneva/social-network',
//         previewHref: 'https://anna-bekreneva.github.io/social-network',
//         tools: 'TS, React, Redux, Formik, Axios',
//     },
//     {
//         alt: 'Counter',
//         srcWebp: `${process.env.PUBLIC_URL}/assets/images/works/counter/counter.webp 1x, ${process.env.PUBLIC_URL}/assets/images/works/counter/counter@2x.webp 2x`,
//         srcAvif: `${process.env.PUBLIC_URL}/assets/images/works/counter/counter.avif 1x, ${process.env.PUBLIC_URL}/assets/images/works/counter/counter@2x.avif 2x`,
//         src: `${process.env.PUBLIC_URL}/assets/images/works/counter/counter.jpg`,
//         srcSet: `${process.env.PUBLIC_URL}/assets/images/works/counter/counter@2x.jpg 2x`,
//         title: 'Counter on React',
//         text: 'Small pet project on functional components. Popular and custom hooks are used. Work with localstorage is implemented. App is optimised with reactive capabilities ',
//         codeHref: 'https://github.com/Anna-Bekreneva/counter',
//         previewHref: 'https://anna-bekreneva.github.io/counter/',
//         tools: 'TS, React, Redux, LocalStorage',
//     },
//     {
//         alt: 'Todolist',
//         srcWebp: `${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist.webp 1x, ${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist@2x.webp 2x`,
//         srcAvif: `${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist.avif 1x, ${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist@2x.avif 2x`,
//         src: `${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist.jpg`,
//         srcSet: `${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist@2x.jpg 2x`,
//         title: 'Todolist on React',
//         text: 'This project is implemented on redux-toolkit. All components are tested with storybook. Material ui is connected for beautiful design',
//         codeHref: 'https://github.com/Anna-Bekreneva/todolist',
//         previewHref: 'https://anna-bekreneva.github.io/todolist',
//         tools: 'TS, React, Redux Toolkit, Redux-Thunk, Storybook, Material Ui, Formik, Axios',
//     }
// ]
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
                <Button as={'div'}>
                    <Link to={'contacts'} smooth>
                        Cooperate!
                    </Link>
                </Button>
            </Container>
        </S.Works>
    );
};


const styledWorkerButton = styled(Button)`

`