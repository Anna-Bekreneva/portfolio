import {FlexWrapper, MenuItem, SocialItem} from "../../components";
import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper as={'nav'} justify={'space-between'} align={'center'}>
                <FlexWrapper as={'ul'}>
                    <MenuItem href={'#'}>Главная</MenuItem>
                    <MenuItem href={'#'}>Скиллы</MenuItem>
                    <MenuItem href={'#'}>Портфолио</MenuItem>
                    <MenuItem href={'#'}>Контакты</MenuItem>
                </FlexWrapper>
                <FlexWrapper as={'ul'}>
                    <SocialItem id={'gitIcon'} ariaLabel={'gitHub'} href={'#'}/>
                    <SocialItem id={'telegramIcon'} ariaLabel={'Telegram'} href={'#'}/>
                    <SocialItem id={'linkedinIcon'} ariaLabel={'Linkedin'} href={'#'}/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledHeader>
    )
}

const StyledHeader = styled.header``
