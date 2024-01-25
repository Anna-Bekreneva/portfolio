import React, {FC} from 'react';
import {Icon, Picture, StyledTitle} from "../common";
import {theme} from "../../styles";
import {S} from './Work_Style'

type WorkProps = {
    srcSet: string
    src: string
    alt: string
    title: string
    text: string
    codeHref: string
    previewHref: string
    tools: string
}

// todo: all icon do orange or brown?
export const Work: FC<WorkProps> = ({ srcSet, src, alt, title,  text, codeHref, previewHref, tools }) => {
    return (
        <S.Work>
            <S.Content>
                <S.Box>
                    <StyledTitle as={'h3'} marginBottom={'0'} fontSize={'20px'} color={theme.colors.blue500}>{title}</StyledTitle>
                    <S.Text>{text}</S.Text>
                    <S.Tools> Technologies used: <p> {tools}</p> </S.Tools>
                </S.Box>
                <S.Links>
                    <S.Link href={codeHref}>
                        <S.Icon>
                            <Icon width={'12'} height={'12'} idIcon={'stapleIcon'} fill={'transparent'} stroke={theme.colors.white}/>
                        </S.Icon>
                        Watch work
                    </S.Link>
                    <S.Link href={previewHref}>
                        <Icon width={'20'} height={'20'} idIcon={'gitHubIcon'} fill={theme.colors.orange500}/>
                        Watch code
                    </S.Link>
                </S.Links>
            </S.Content>
            <S.WrapperPicture>
                <Picture srcSet={srcSet} src={src} alt={alt} width={610} height={380} loading={'lazy'}></Picture>
            </S.WrapperPicture>
        </S.Work>
    );
};

