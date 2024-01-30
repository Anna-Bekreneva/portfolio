import React, {FC} from 'react';
import {Icon, IconWrapper, Picture, PictureProps, StyledTitle} from "../common";
import {theme} from "../../styles";
import {S} from './Work_Style'
export const Work: FC<WorkProps> = ({ srcWebp, srcAvif, src, srcSet, alt, title,  text, codeHref, previewHref, tools }) => {
    return (
        <S.Work>
            <S.Content>
                <S.Box>
                    <StyledTitle as={'h3'} marginBottom={'0'} fontSize={'20px'} color={theme.colors.blue500}>{title}</StyledTitle>
                    <S.Text>{text}</S.Text>
                    <S.Tools> Technologies used: <p> {tools}</p> </S.Tools>
                </S.Box>
                <S.Links>
                    <S.Link href={codeHref} target={'_blank'}>
                        <IconWrapper width={'20px'} height={'20px'}>
                            <Icon width={'12'} height={'12'} idIcon={'stapleIcon'} fill={'transparent'} stroke={theme.colors.white}/>
                        </IconWrapper>
                        Watch work
                    </S.Link>
                    <S.Link href={previewHref} target={'_blank'}>
                        <Icon width={'20'} height={'20'} idIcon={'gitHubIcon'} fill={theme.colors.brown400}/>
                        Watch code
                    </S.Link>
                </S.Links>
            </S.Content>
            <S.WrapperPicture>
                <Picture srcWebp={srcWebp} srcAvif={srcAvif} src={src} srcSet={srcSet} alt={alt} width={610} height={380} loading={'lazy'}/>
            </S.WrapperPicture>
        </S.Work>
    );
};

type WorkProps = {
    title: string
    text: string
    codeHref: string
    previewHref: string
    tools: string
} & PictureProps
