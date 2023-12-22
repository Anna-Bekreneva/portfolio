import React, {FC} from 'react';
import styled from "styled-components";
import {StyledTitle, Picture, Icon} from "../common";
import {theme} from "../../styles";

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
export const Work2: FC<WorkProps> = ({ srcSet, src, alt, title,  text, codeHref, previewHref, tools }) => {
    return (
        <StyledWork>
            <StyledWrapperPicture srcSet={srcSet} src={src} alt={alt} width={610} height={380} loading={'lazy'}/>
            <StyledContent>
                <StyledTitle as={'h3'} marginBottom={'12px'} fontSize={'24px'}>{title}</StyledTitle>
                <StyledText>{text}</StyledText>
                <StyledTools> Technologies used: <p> {tools}</p> </StyledTools>
                <StyledLinks>
                    <StyledLink href={codeHref}>
                        <Icon width={'18'} height={'18'} id={'stapleIcon'} fill={'transparent'} stroke={theme.colors.orange500}/>
                        Watch work
                    </StyledLink>
                    <StyledLink href={previewHref}>
                        <Icon width={'20'} height={'20'} id={'gitHubIcon'} fill={theme.colors.orange500}/>
                        Watch code
                    </StyledLink>
                </StyledLinks>
            </StyledContent>
        </StyledWork>
    );
};

const StyledWork = styled.article`
  width: 100%;
  height: 100%;
  border-radius: 8px 40px;
  background-color: ${theme.colors.white};
  position: relative;
  font-size: 16px;

  picture {
    border-radius: 8px 40px;
    width: 100%;
    height: 360px;
    display: block;
  }
`

const StyledWrapperPicture = styled(Picture)`
    border-radius: inherit;
    width: 100%;
    height: 100%;
`

const StyledContent = styled.div`
  padding: 24px;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  border-radius: 8px 40px;
`

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  padding-top: 16px;
  border-top: 1px solid #e7e7e7;
  margin-top: auto;
`

const StyledText = styled.p`
  margin-bottom: 12px;
`

const StyledTools = styled.div`
  margin-bottom: 20px;
  color: ${theme.colors.blue500};
  display: flex;
  
  p {
    font-weight: 500;
    margin-left: 4px;
  }
`

const StyledLink = styled.a`
  color: ${theme.colors.blue500};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${theme.colors.blue500};
`

