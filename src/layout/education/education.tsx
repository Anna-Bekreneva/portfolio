import React from 'react';
import styled from "styled-components";
import {FlexWrapper, Picture, Step} from "../../components";
import myPhotoWebp from "../../assets/images/hero/hero.webp";
import myPhoto from "../../assets/images/hero/hero.jpg";


export const Education = () => {
    return (
        <StyledEducation>
            <FlexWrapper>
                <Picture src={myPhotoWebp} srcSet={myPhoto} loading={'lazy'} width={390} height={440} alt={'Бекренева Анна'}  />
                <FlexWrapper as={'ul'}>
                    <StyledStep><Step year={'2020'} place={"Курс по верстке «from 0 to 1»"}/></StyledStep>
                    <StyledStep><Step year={'2021'} place={"Курс по web дизайну Алексея Бычкова "}/></StyledStep>
                    <StyledStep><Step year={'2022'} place={"Академия продаж Александр Коровкин"}/></StyledStep>
                    <StyledStep><Step year={'2023'} place={"frontend разработчик It-incubator"}/></StyledStep>
                </FlexWrapper>
            </FlexWrapper>
        </StyledEducation>
    );
};

const StyledEducation = styled.section``
const StyledStep = styled.li``