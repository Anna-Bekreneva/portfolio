import React, {FC} from "react";
import {S} from './MenuItem_Style'

export const MenuItem: FC<MenuItemProps> = ({ to, children}) => {
    return (
        <S.MenuItem>
            <S.MenuLink href={'#'} to={to} smooth>{children}</S.MenuLink>
        </S.MenuItem>
    )
}

type MenuItemProps = {
    to: string
    children: React.ReactNode
}