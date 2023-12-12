import React from 'react';
import styled from "styled-components";
import {FlexWrapper, StyledTitle} from "../../components";
import {Skill} from "../../components/skill";


export const Skills = () => {
    return (
        <StyledSkills>
            <StyledTitle>Мои скиллы</StyledTitle>
            <FlexWrapper as={'ul'}>
                <li>
                    <Skill title={'CSS / SCSS / SASS'} id={'scssIcon'} width={'60'} height={'60'} viewBox={'0 0 60 60'}/>
                </li>
                <li>
                    <Skill title={'Javascript'} id={'jsIcon'} width={'60'} height={'60'} viewBox={'0 0 60 60'}/>
                </li>
                <li>
                    <Skill title={'React'} id={'reactIcon'} width={'60'} height={'60'} viewBox={'0 0 60 60'}/>
                </li>
                <li>
                    <Skill title={'Redux'} id={'reduxIcon'} width={'60'} height={'60'} viewBox={'0 0 60 60'} />
                </li>
                <li>
                    <Skill title={'Thunk'} id={'tsIcon'} width={'60'} height={'60'} viewBox={'0 0 60 60'} />
                </li>
            </FlexWrapper>
        </StyledSkills>
    );
}

const StyledSkills = styled.section``
