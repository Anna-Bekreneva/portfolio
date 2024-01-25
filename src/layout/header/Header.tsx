import {Container, FlexWrapper, MenuItem, SocialItem} from "../../components";
import {S} from './Header_Style'
import {useState} from "react";

export const Header = () => {

    const menuItems: MenuItemsType[] = [
        {
            title: 'Main',
            href: '#',
        },
        {
            title: 'Skills',
            href: '#',
        },
        {
            title: 'Portfolio',
            href: '#',
        },
        {
            title: 'Education',
            href: '#',
        },
        {
            title: 'Contacts',
            href: '#',
        }
    ]
    const socialItems: SocialItemsType[] = [
        {
            iconId: 'gitHubIcon',
            ariaLabel: 'gitHub',
            href: '#',
        },
        {
            iconId: 'telegramIcon',
            ariaLabel: 'Telegram',
            href: '#',
        },
        {
            iconId: 'linkedinIcon',
            ariaLabel: 'Linkedin',
            href: '#',
        }
    ]

    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

    return (
        <S.Header>
            <Container>
                <S.HeaderWrapper as={'nav'} isOpen={mobileMenuIsOpen}>
                    <S.MenuWrapper as={'ul'} gap={'40px'}>
                        {menuItems.map((item) => <MenuItem key={item.title} href={item.href}>{item.title}</MenuItem>)}
                    </S.MenuWrapper>
                    <FlexWrapper as={'ul'} align={'center'}>
                        {socialItems.map((item) => <SocialItem key={item.iconId} id={item.iconId}
                                                               ariaLabel={item.ariaLabel} href={item.href}/>)}
                    </FlexWrapper>
                </S.HeaderWrapper>
                <S.Burger onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)} isOpen={mobileMenuIsOpen}>
                    <S.BurgerLine isOpen={mobileMenuIsOpen}/>
                </S.Burger>
            </Container>
        </S.Header>
    )
}

type MenuItemsType = {
    title: string,
    href: string,
}

type SocialItemsType = {
    iconId: string
    ariaLabel: string
    href: string
}
