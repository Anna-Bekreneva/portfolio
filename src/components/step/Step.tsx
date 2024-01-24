import React, {FC} from 'react';
import styled from "styled-components";
import {FlexWrapper, StyledTitle} from "../common";
import {adaptive, adaptiveValue, theme} from "../../styles";

type StepProps = {
    year: string
    place: string
    text: string
}
export const Step: FC<StepProps> = ({year, place, text}) => {
    return (
        <StyledStep>
            <FlexWrapper>
                <StyledYear as={'span'} marginBottom={'0'}>{year}</StyledYear>
                <StyledContent>
                    <StyledTitle fontSize={`${adaptiveValue(22, 18)}`} marginBottom={'10px'} color={theme.colors.blue500} as={'h3'}>{place}</StyledTitle>
                    <p>{text}</p>
                </StyledContent>
            </FlexWrapper>
        </StyledStep>
    );
};

const StyledStep = styled.article`
  ${FlexWrapper} {
    ${adaptive(theme.breakpoints.lg, "max", "width", theme.breakpoints.lg)} {
      flex-direction: column;
      gap: 12px;
    }

    ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
      flex-direction: column-reverse;
    }
  }
`

const StyledYear = styled(StyledTitle)`
  font-size: 16px;
  margin-bottom: 0;
  line-height: 1;
  padding: 12px;
  width: 100px;
  text-align: center;
  margin-top: -8px;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.orange300};
  border-radius: 2px 24px;
  align-self: self-start;
  flex-shrink: 0;
  transition: background-color 0.3s;
  z-index: 1;

  ${adaptive(theme.breakpoints.lg, "max", "width", theme.breakpoints.lg)} {
    font-size: 15px;
    padding: 8px;
    width: 80px;
    margin-top: 0;
  }
`

const StyledContent = styled.div`
  
`
