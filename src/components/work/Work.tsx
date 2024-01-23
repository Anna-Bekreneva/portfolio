import React, {FC} from 'react';
import styled from "styled-components";
import {StyledTitle, Picture, Icon, StyledPicture, PictureProps} from "../common";
import {adaptive, adaptiveValue, theme} from "../../styles";

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
                <StyledBox>
                    <StyledTitle as={'h3'} marginBottom={'0'} fontSize={'20px'} color={theme.colors.blue500}>{title}</StyledTitle>
                    <StyledText>{text}</StyledText>
                    <StyledTools> Technologies used: <p> {tools}</p> </StyledTools>
                </StyledBox>
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
            <StyledWrapperPicture>
                <Picture srcSet={srcSet} src={src} alt={alt} width={610} height={380} loading={'lazy'}></Picture>
            </StyledWrapperPicture>
        </StyledWork>
    );
};

const StyledWrapperPicture = styled.div`
  border-radius: 12px;
  width: 100%;
  position: relative;
  display: block;
  z-index: 2;
  padding-bottom: 60%;

  ${StyledPicture} {
    border-radius: inherit;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      border-radius: inherit;
      height: 100%;
      width: 100%;
    }
  }

  &::before {
    border-radius: inherit;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.dark900};
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 2;
  }
`

const StyledContent = styled.div`
  padding: 24px;
  background-color: ${theme.colors.white};
  border-radius: 0 0 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media screen and (any-hover: hover) and (min-width: ${theme.breakpoints.xl}) {
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 3;
    transform: translate(-50%, -50%);
    transition: top 0.3s, width 0.3s, height 0.4s, border-radius 0.4s;
    width: max-content;
    padding: 12px 24px;
    border-radius: 2px 24px;
    height: auto;
  }

  @media screen and (any-hover: none) {
    ${StyledTitle} {
      margin-bottom: 12px;
    }
  }
  
  ${StyledTitle} {
    ${adaptive(theme.breakpoints.xl, "max", "width", theme.breakpoints.xl)} {
      font-size: ${adaptiveValue(24, 18)};
      margin-bottom: 12px;
    }
  }
`

const StyledBox = styled.div`
  @media screen and (any-hover: none) {
    margin-bottom: 20px;
  }
`

const StyledText = styled.p`
  margin-bottom: 12px;
  
  @media screen and (any-hover: hover) and (min-width: ${theme.breakpoints.xl}){
    display: none;
  }
`

const StyledTools = styled.div`
  @media screen and (any-hover: hover) and (min-width: ${theme.breakpoints.xl}) {
    display: none;
  }
  
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  color: ${theme.colors.blue500};
  
  p {
    font-weight: 500;
  }
`

const StyledLinks = styled.div`
  align-items: center;
  gap: 28px;
  padding-top: 12px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    content: "";
    background-color: ${theme.colors.brown400};
    opacity: 0.2;
  }

  @media screen and (any-hover: hover) and (min-width: ${theme.breakpoints.xl}) {
    display: none;
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

const StyledWork = styled.article`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-color: ${theme.colors.white};
  position: relative;
  font-size: 16px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  @media screen and (any-hover: hover) and (min-width: ${theme.breakpoints.xl}) {
    &:hover {
      ${StyledContent} {
        padding: 30px;
        width: 84%;
        min-height: 20%;
        top: 50%;
        border-radius: 4px 60px;
      }
      
      ${StyledTools} {
        display: flex;
      }

      ${StyledTitle} {
        font-size: ${adaptiveValue(24, 18)};
        margin-bottom: 12px;
      }

      ${StyledText} {
        display: block;
      }

      ${StyledWrapperPicture} {
        &::before {
          opacity: 0.7;
        }
      }
      
      ${StyledBox} {
        margin-bottom: 20px;
      }
      
      ${StyledLinks} {
        display: flex;
      }
    }
  }
`

