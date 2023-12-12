import React from 'react';
import styled from "styled-components";
import {StyledTitle} from "../../components";

export const Promo = () => {
    return (
        <StyledPromo>
				<StyledTitle as={'span'}>
					Рассматриваю варианты удаленной работы
				</StyledTitle>
                <a href="#">Нанять меня</a>
        </StyledPromo>
    );
};

const StyledPromo = styled.section``