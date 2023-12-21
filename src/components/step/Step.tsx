import React, {FC} from 'react';
import styled from "styled-components";
import {FlexWrapper, StyledTitle} from "../common";
import {theme} from "../../styles";

type StepProps = {
    year: string
    place: string
    text: string
}
export const Step: FC<StepProps> = ({year, place, text}) => {
    return (
        <FlexWrapper as={'article'}>
            <StyledYear as={'span'}>{year}</StyledYear>
            <StyledContent>
                <StyledTitle fontSize={'22px'} marginBottom={'10px'} color={theme.colors.blue500} as={'h3'}>{place}</StyledTitle>
                <StyledText>{text}</StyledText>
            </StyledContent>
        </FlexWrapper>
    );
};

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
  
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`

const StyledContent = styled.div`
  
`


const StyledText = styled.p`
  font-size: 16px;
`