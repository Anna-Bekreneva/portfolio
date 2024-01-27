import React, {FC} from "react";
import {S} from './MenuItem_Style'

export const MenuItem: FC<MenuItemProps> = ({ href, children}) => {
    return (
        <S.MenuItem>
            <S.MenuLink href={href}>{children}</S.MenuLink>
        </S.MenuItem>
    )
}

type MenuItemProps = {
    href: string
    children: React.ReactNode
}