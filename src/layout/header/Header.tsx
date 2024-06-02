import {Container, FlexWrapper, MenuItem, SocialItem} from "components";
import {S} from './Header_Style'
import {FC} from "react";
import Headroom from "react-headroom";
import {useHeader} from "hooks";
import {menuItems, socialItems} from "./header-data";
export const Header: FC = () => {

    const {menuWrapperRef, burgerButtonRef, mobileMenuIsOpen, setMobileMenuIsOpen} = useHeader()

    const header = <S.Header >
        <Container>
            <S.HeaderWrapper as={'nav'} isOpen={mobileMenuIsOpen} ref={menuWrapperRef}>
                <S.MenuWrapper as={'ul'} gap={'40px'}>
                    {menuItems.map((item) => {
                        return <MenuItem key={item.title} to={item.to} callback={() => setMobileMenuIsOpen(false)}>{item.title}</MenuItem>
                    })}
                </S.MenuWrapper>
                <FlexWrapper as={'ul'} align={'center'}>
                    {socialItems.map((item) => {
                        return <SocialItem key={item.iconId} id={item.iconId} ariaLabel={item.ariaLabel} href={item.href}/>
                    })}
                </FlexWrapper>
            </S.HeaderWrapper>
            <S.Burger onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)} isOpen={mobileMenuIsOpen} ref={burgerButtonRef} aria-label={'Mobile menu'}>
                <S.BurgerLine isOpen={mobileMenuIsOpen}/>
            </S.Burger>
        </Container>
    </S.Header>

    return (
        <>
            <Headroom> {header} </Headroom>
        </>
    )
}
