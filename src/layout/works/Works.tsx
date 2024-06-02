import React, {FC} from 'react';
import {Container, StyledTitle, Work} from "components";
import {adaptiveValue, theme} from "styles";
import {S} from './Works_Style'
import {works} from "layout/works/works-data";

export const Works: FC = () => {
    return (
        <S.Works id={'works'} backgroundColor={theme.colors.orange50}>
            <Container>
                <StyledTitle textAlign={'center'} display={'block'} marginBottom={`${adaptiveValue(56, 28)}`}>
                    Мое <StyledTitle marginBottom={'0'} as={'span'}
                                    color={theme.colors.orange500}>портфолио</StyledTitle>
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
                    <S.LinkScroll to={'contacts'} smooth>
                        Сотрудничать!
                    </S.LinkScroll>
            </Container>
        </S.Works>
    );
};

