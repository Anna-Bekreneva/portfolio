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
export const Work: FC<WorkProps> = ({ srcSet, src, alt, title,  text, codeHref, previewHref, tools }) => {
    return (
        <StyledWork>
            <StyledContent>
                <StyledTitle as={'h3'} marginBottom={'0'} fontSize={'20px'}>{title}</StyledTitle>
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
            <StyledWrapperPicture srcSet={srcSet} src={src} alt={alt} width={610} height={380} loading={'lazy'}/>
        </StyledWork>
    );
};

const StyledWork = styled.article`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-color: ${theme.colors.white};
  position: relative;
  font-size: 16px;

  picture {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    z-index: 2;

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.dark900};
      opacity: 0;
      transition: opacity 0.3s;
      border-radius: inherit;
    }
  }
  
  &:hover {
    div:first-child {
      padding: 30px;
      width: 84%;
      min-height: 20%;
      top: 50%;
      border-radius: 4px 60px;
      
      div {
        display: flex;
      }
      
      h3 {
        font-size: 24px;
        margin-bottom: 12px;
      }
      
      p {
        display: block;
      }
    }
    
    picture {
      &::before {
        opacity: 0.7;
      }
    }
  }
`

const StyledWrapperPicture = styled(Picture)`
    border-radius: inherit;
    width: 100%;
    height: 100%;
`

const StyledContent = styled.div`
  padding: 12px 24px;
  background-color: ${theme.colors.white};
  border-radius: 2px 24px;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  transition: top 0.3s, width 0.3s, height 0.4s, border-radius 0.4s;
`

const StyledLinks = styled.div`
  align-items: center;
  gap: 28px;
  display: none;
  position: relative;
  padding-top: 12px;
  
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    left: 0;
    top: 0;
    height: 1px;
    background-color: ${theme.colors.blue200};
    opacity: 0.2;
  }
`
const StyledText = styled.p`
  display: none;
  margin-bottom: 12px;
`

const StyledTools = styled.div`
  display: none;
  margin-bottom: 20px;
  color: ${theme.colors.blue500};
  
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
  color: ${theme.colors.orange500};
  color: ${theme.colors.blue500};
`

