import React, {FC} from 'react';
import styled from "styled-components";
import {StyledTitle} from "../common";

type StepProps = {
    year: string
    place: string
}
export const Step: FC<StepProps> = ({year, place}) => {
    return (
        <StyledStep>
            <StyledTitle as={'span'}>{year}</StyledTitle>
            <span>{place}</span>
        </StyledStep>
    );
};

const StyledStep = styled.article``