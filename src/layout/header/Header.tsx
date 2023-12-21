import {Container, FlexWrapper, MenuItem, SocialItem} from "../../components";
import styled from "styled-components";
import {theme} from "../../styles";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper as={'nav'} justify={'space-between'} align={'center'}>
                    <FlexWrapper as={'ul'} gap={'40px'}>
                        <MenuItem href={'#'}>Main</MenuItem>
                        <MenuItem href={'#'}>Skills</MenuItem>
                        <MenuItem href={'#'}>Portfolio</MenuItem>
                        <MenuItem href={'#'}>Contacts</MenuItem>
                    </FlexWrapper>
                    <FlexWrapper as={'ul'} align={'center'}>
                        <SocialItem id={'gitHubIcon'} ariaLabel={'gitHub'} href={'#'}/>
                        <SocialItem id={'telegramIcon'} ariaLabel={'Telegram'} href={'#'}/>
                        <SocialItem id={'linkedinIcon'} ariaLabel={'Linkedin'} href={'#'}/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  background-color: ${theme.colors.orange50};
  padding-top: 16px;
  padding-bottom: 16px;
`
