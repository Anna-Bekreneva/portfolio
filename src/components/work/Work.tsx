import React, {FC} from 'react';
import styled from "styled-components";
import {Picture} from "../common/picture";
import {FlexWrapper, StyledTitle} from "../common";

type WorkProps = {
    srcSet: string
    src: string
    alt: string
    title: string
    text: string
    codeHref: string
    previewHref: string
}
export const Work: FC<WorkProps> = ({ srcSet, src, alt, title,  text, codeHref, previewHref }) => {
    return (
        <StyledWork>
            <Picture srcSet={srcSet} src={src} alt={alt} width={640} height={400} loading={'lazy'}/>
            <StyledTitle as={'h3'}>{title}</StyledTitle>
            <StyledText>{text}</StyledText>
            <FlexWrapper>
                <StyledLink href={codeHref}>Посмотреть работу</StyledLink>
                <StyledLink href={previewHref}>Посмотреть код</StyledLink>
            </FlexWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.article``
const StyledText = styled.p``
const StyledLink = styled.a``

