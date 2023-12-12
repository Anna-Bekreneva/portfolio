import React from 'react';
import styled from "styled-components";
import {FlexWrapper, StyledTitle} from "../../components";
import {Work} from "../../components/work";
import social from '../../assets/images/works/social.jpg'
import socialWebp from '../../assets/images/works/social.webp'
import counter from '../../assets/images/works/counter.jpg'
import counterWebp from '../../assets/images/works/counter.webp'

export const Works = () => {
    return (
        <StyledWorks>
            <StyledTitle>Мои работы</StyledTitle>
            <FlexWrapper as={'ul'}>
                <li> <Work alt={'Социальная сеть'} srcSet={socialWebp} src={social} title={'Соцсеть на React'} text={'Краткое описание'} codeHref={'#'} previewHref={'#'} /> </li>
                <li> <Work alt={'Счетчик'} srcSet={counterWebp} src={counter} title={'Счетчик на React'} text={'Краткое описание и очень краткое описание. Краткое и очень краткое описание'} codeHref={'#'} previewHref={'#'} /> </li>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section``